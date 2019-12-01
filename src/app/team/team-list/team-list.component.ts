import { Component, OnInit } from '@angular/core';
import { Team } from '../model/team';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  public team: Array<Team>;

  constructor() { }

  ngOnInit() {

     this.team = [
      new Team('https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR', 
      'Kai Petersen',
       'Professor',
        206,
        8051470,
        'kai.petersen@hs-flensburg.de'),
      new Team('https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR', 
      'Sönke Cordts',
       'Professor',
        206,
        8051470,
        'kai.petersen@hs-flensburg.de'),
      new Team('https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-11/petersen_kai.jpg.jpeg?itok=JVf1P7aR', 
      'Jan Gerken',
       'Professor',
        206,
        8051470,
        'kai.petersen@hs-flensburg.de')
    ];
  }

}