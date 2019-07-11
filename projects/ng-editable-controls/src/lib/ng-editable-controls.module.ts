import { NgModule } from '@angular/core';
import { NgEditableControlsComponent } from './ng-editable-controls.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    MatInputModule,
    MatFormFieldModule,
    CommonModule,
    FormsModule
  ],
  declarations: [NgEditableControlsComponent],
  exports: [NgEditableControlsComponent]
})
export class NgEditableControlsModule { }
