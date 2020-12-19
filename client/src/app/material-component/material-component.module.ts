import { NgModule } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';

const materialComponents = [
  MatSliderModule,
  MatToolbarModule
];

@NgModule({
  declarations: [],
  imports: [
    materialComponents
  ],
  exports: [materialComponents],
})
export class MaterialComponentModule { }
