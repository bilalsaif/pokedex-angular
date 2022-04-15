import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import{MatButtonModule} from '@angular/material/button';
import{MatIconModule} from '@angular/material/icon';
import{MatSidenavModule} from '@angular/material/sidenav';
import{MatListModule} from '@angular/material/list';
import{MatGridListModule} from '@angular/material/grid-list';
import{MatCardModule} from '@angular/material/card';
import{MatDialogModule} from '@angular/material/dialog';
import{MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule
  ]
})
export class MaterialModule {}