import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-ng-editable-controls',
  templateUrl: './ng-editable-controls.component.html',
  styles: []
})
export class NgEditableControlsComponent implements OnInit {

  @Input() inputText : string = "";

  public isEditable : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  disableIt(){
    this.isEditable = false;
  }

  enableIt(){
    this.isEditable = true;
  }
}
