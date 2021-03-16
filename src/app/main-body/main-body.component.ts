import { Component, OnInit, EventEmitter } from '@angular/core';
import { IListItem } from '../list-item';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.scss']
})
export class MainBodyComponent implements OnInit {

  selectedItem: IListItem | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: IListItem): void {
    this.selectedItem = item;
  }

  displayList: Boolean = false;

  toDoList: Array<IListItem> = [
    {task: "Go to work", isChecked: false},
    {task: "Watch Modern Family", isChecked: false},
    {task: "Pet the cat", isChecked: false},
    {task: "Cry myself to sleep", isChecked: false}
  ];

  onDone($event: any) {
    console.log(`Done with: ${$event}`)
    this.selectedItem = undefined;
  }

  // checkBoxChange(isChecked) {
  //   if (isChecked == true) {
  //     isChecked == false;
  //     console.log('should be false')
  //     console.log(isChecked)
  //   }
  //   if (isChecked == false) {
  //     isChecked == true;
  //     console.log('should be true')
  //     console.log(isChecked)
  //   }
  // }

}
