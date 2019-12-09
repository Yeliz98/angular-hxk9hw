import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { News } from '../../model/news';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewComponent implements OnInit {

  @Input() public news: News;

  constructor() { }

  ngOnInit() {}

}