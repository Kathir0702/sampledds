import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DdsComponent } from '../dds.component';
@NgModule({
  declarations: [DdsComponent],
  imports: [
    CommonModule
  ],
  exports:[DdsComponent]
})
export class DdsModule { }
