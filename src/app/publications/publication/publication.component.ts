import { Component, OnInit, Input } from '@angular/core';
import { Publications } from '../../model/publications';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  @Input() public publications: Publications;

  constructor() { }

  ngOnInit() {
  }

}