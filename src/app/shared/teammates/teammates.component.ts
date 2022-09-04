import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-teammates',
  templateUrl: './teammates.component.html',
  styleUrls: ['./teammates.component.scss']
})
export class TeammatesComponent implements OnInit {

  teamMates: any[] = [];

  myName: string = '';

  constructor(private fire: AngularFirestore) { }

  ngOnInit(): void {
    this.fire.collection('users').valueChanges().subscribe((users: any)=>{
      let isCurrentUserLogged = false;
      this.teamMates = users || [];
      this.teamMates = this.teamMates.map((team: any) =>{
        team.selected = false;
        if(team.name==this.myName){
          team.selected = true;
          isCurrentUserLogged = true;
        }
        return team;
      })

      if(!isCurrentUserLogged){
        this.pushPeopleName();
      }
    })

    this.checkMyName();
  }

  checkMyName(){
    let name = localStorage.getItem('myName');
    if(name){
      this.myName = name;
    }

    if(this.myName!=''){
      return;
    }

    this.myName = this.getNameFromUser();

  }

  getNameFromUser(): string{
    const name: any = prompt('Pleae enter your name');
    console.log('name :>> ', name);
    if(!name){
      this.getNameFromUser();
    }
    localStorage.setItem('myName', name);
    this.fire.collection('users').add({name: name});
    return name;
  }

  pushPeopleName(){
    if(this.myName){
     this.fire.collection('users').add({name: this.myName});
    }
  }
}
