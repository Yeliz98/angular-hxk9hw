import { Component, OnInit } from '@angular/core';
import { Projects } from '../../model/projects';
import { Observable } from 'rxjs/Observable';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projects:Projects[];

  constructor(private projectsService: ProjectService) { }

  ngOnInit() {
    this.projects = this.projectsService.getProjects();
    console.log(this.projects);
  }

}