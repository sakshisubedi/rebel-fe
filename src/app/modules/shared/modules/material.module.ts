import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatFormFieldModule,
  MatCardModule,
  MatInputModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class MaterialModule { }
