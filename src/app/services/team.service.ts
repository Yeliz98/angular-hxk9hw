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
        imageUrl:'https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-10/cords_soenke.jpg.jpeg?itok=REq2aLNc', 
        name: 'Sönke Cordts',
        position:'Professor',
        room: 224,
        phone:8051406,
        email: 'soenke.cordts@hs-flensburg.de'
      },
      {
        imageUrl:'https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-12/gerken_jan.jpg.jpeg?itok=gkw2kJBB', 
        name: 'Jan Gerken',
        position:'Professor',
        room: 221,
        phone: 8051471,
        email: 'jan.gerken@hs-flensburg.de'
      }];
  }

  getTeam() {
    return this.team;
  
   }

   createTeam(team: Team) {
   
    this.team.push(team);
    
  }

}