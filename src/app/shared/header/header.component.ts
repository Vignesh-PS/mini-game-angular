import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  teamName: string = Constants.teamname;
  constructor(private fire: AngularFirestore) { }

  ngOnInit(): void {
    this.fire.collection('teamname').valueChanges().subscribe((res: any)=>{
      if(res){
        let name = res[0]?.name;
        this.teamName = name || Constants.teamname;
      }
    })
  }

}
