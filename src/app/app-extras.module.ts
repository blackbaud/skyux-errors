import {
  NgModule
} from '@angular/core';

import {
  SkyAppLinkModule
} from '@skyux/router';

import {
  SkyErrorModule
} from './public/public_api';

@NgModule({
  exports: [
    SkyAppLinkModule,
    SkyErrorModule
  ]
})
export class AppExtrasModule { }
