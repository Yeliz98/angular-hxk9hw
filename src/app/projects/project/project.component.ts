import { Component, OnInit, Input } from '@angular/core';
import { Projects } from '../../model/projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  @Input() public projects: Projects;

  constructor() { }

  ngOnInit() {
  }

}