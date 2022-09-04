import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { TosterService } from '../shared/global-toastr/toster.service';
import { musicList, questionsList } from './content-list';
import { environment } from './../../environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-gameboard',
  templateUrl: './gameboard.component.html',
  styleUrls: ['./gameboard.component.scss'],
  animations: [
    trigger('enterAnimation', [
      transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms', style({ transform: 'translateX(100%)', opacity: 0 })),
      ]),
    ]),
  ],
})
export class GameboardComponent implements OnInit {
  selectedGame: string = 'luck';
  questions: any[] = questionsList;
  isAlreadyClicked: boolean = false;
  myName: string = '';

  musicList: any[] = musicList;
  musicStatus: any[] = [];
  hostUrl: string = environment.hostUrl;

  constructor(private fire: AngularFirestore, private toastr: TosterService, public sanitize: DomSanitizer) {}

  ngOnInit(): void {
    this.fire
      .collection('questions')
      .valueChanges({ idField: 'id' })
      .subscribe((qnsFire: any) => {
        this.questions = qnsFire || [];

        this.questions.forEach((qn: any) => {
          if (this.myName && this.myName === qn.openedBy) {
            this.isAlreadyClicked = true;
          }
        });
      });

    this.fire
      .collection('music')
      .valueChanges()
      .subscribe((musicStatus: any) => {
        if (musicStatus) {
          this.musicStatus = musicStatus[0].status || [];
        }
      });

    let name: any = localStorage.getItem('myName');
    this.myName = name;

    this.fire
      .collection('alerts')
      .valueChanges()
      .subscribe((alert: any) => {
        console.log('alert :>> ', alert);
        if (alert) {
          const msg = alert[0]?.message;
          if (msg) {
            this.showToastrMsg(msg, alert[0]?.duration);
          }
        }
      });

    /**
     * enable it when you push the question to firebase
     */
    // this.dumpQuestion();
    // this.sanitize.bypassSecurityTrustUrl
  }

  dumpQuestion(): void {
    // let musicStatus = Array(25).fill(false);
    // musicStatus = musicStatus.map((x) => {
    //   let y: any = {};
    //   y.question = false;
    //   y.answer = false;
    //   return y;
    // });

    // this.fire.collection('music').add({ status: musicStatus });

    const questionDump = questionsList.map((qn) => {
      let question: any = {};
      question.question = qn;
      question.isOpen = false;
      question.openedBy = '';
      return question;
    });

    questionDump.forEach((qn) => {
      this.fire.collection('questions').add(qn);
    });
  }

  chooseQuestion(qn: any) {
    if (qn.isOpen) {
      alert('Box was already open');
      return;
    }

    if (this.isAlreadyClicked) {
      alert("You've already opened the card");
      return;
    }

    let name: any = localStorage.getItem('myName');
    this.myName = name;

    this.fire
      .collection('questions')
      .doc(qn.id)
      .set({ question: qn.question, isOpen: true, openedBy: this.myName });
    this.isAlreadyClicked = true;
  }

  showToastrMsg(msg: string, duration: number = 15000) {
    this.toastr.show(msg, {
      classname: 'bg-danger text-light',
      delay: duration,
    });
  }
}
