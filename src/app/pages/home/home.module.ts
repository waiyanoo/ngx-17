import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {NbButtonModule, NbCardModule, NbInputModule,} from '@nebular/theme';


@NgModule({
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule,
    NbInputModule,
  ],
  declarations: [
    HomeComponent
  ]

})
export class HomeModule { }
