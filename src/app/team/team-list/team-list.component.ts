import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

 public team:Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.team = this.teamService.getTeam();
    console.log(this.team);
  }
}