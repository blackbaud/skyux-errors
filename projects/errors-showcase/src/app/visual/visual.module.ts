import { NgModule } from '@angular/core';

import { SkyPageModule } from '@skyux/layout';

import { SkyErrorModule } from 'projects/errors/src/public-api';

import { ErrorVisualComponent } from './error/error-visual.component';

@NgModule({
  declarations: [
    ErrorVisualComponent
  ],
  imports: [
    SkyErrorModule,
    SkyPageModule
  ]
})
export class VisualModule { }
