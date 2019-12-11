import { Component, OnInit } from '@angular/core';
import { Projects } from '../../model/projects';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent{

  public message = '';
  constructor(private projectService: ProjectService) { }

  createProjects(projectsForm) {
    if (projectsForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const projects: Projects = projectsForm.value.projects;
      this.projectService.createProjects(projects);
    }
  }
}