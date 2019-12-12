import { Injectable } from '@angular/core';
import {Team} from '../model/team'

@Injectable()
export class TeamService {

  private team: Team[];


  constructor() {
    this.team = [
      {
        imageUrl:'https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR', 
        name:'Kai Petersen',
        position:'Professor',
        room:206,
        phone:8051470,
        email:'kai.petersen@hs-flensburg.de'
      },
      {
        imageUrl:'https://leo-akademie.com/files/2017/05/Anonyme_Bewerbung_Unbekannt_Silhouette.jpg', 
        name: 'Yeliz Özay',
        position:'Student/in',
        room: 0,
        phone:874747474,
        email: 'yeliz.oezay@stud.hs-flensburg.de'
      },
      ];
  }

  getTeam() {
    return this.team;
  
   }

   createTeam(team: Team) {
   
    this.team.push(team);
    
  }

}