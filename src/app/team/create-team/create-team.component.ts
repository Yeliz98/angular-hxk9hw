import { Component, OnInit } from '@angular/core';
import { Team } from '../../model/team';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  public message = '';
  constructor(private teamService: TeamService) { }

  createTeam(teamForm) {
    if (teamForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const team: Team = teamForm.value.team;
      this.teamService.createTeam(team);
    }
  }
}