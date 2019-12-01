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
      new Team('https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-10/cords_soenke.jpg.jpeg?itok=REq2aLNc', 
       'Sönke Cordts',
       'Professor',
        224,
        8051406,
        'soenke.cordts@hs-flensburg.de'),
      new Team('https://hs-flensburg.de/sites/default/files/styles/portraitfoto/public/2017-12/gerken_jan.jpg.jpeg?itok=gkw2kJBB', 
      'Jan Gerken',
       'Professor',
        221,
        8051471,
        'jan.gerken@hs-flensburg.de')
    ];
  }
   trackStockByCode(index, team) {
    return team.name;
  }

}