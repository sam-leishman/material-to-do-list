import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IListItem } from '../list-item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  @Input() item?: IListItem;
  @Output() done = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  whenDone() {
    this.done.emit(this.item?.task);
  }

}
