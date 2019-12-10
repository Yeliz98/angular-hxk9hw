import { Component, OnInit } from '@angular/core';
import { Publications } from '../../model/publications';
import { Observable } from 'rxjs/Observable';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {

  public publications:Publications[];

  constructor(private publicationsService: PublicationService) { }

  ngOnInit() {
    this.publications = this.publicationsService.getPublications();
    console.log(this.publications);
  }

}