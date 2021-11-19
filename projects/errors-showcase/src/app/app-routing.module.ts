import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorVisualComponent } from './visual/error/error-visual.component';

const routes: Routes = [
  {
    path: 'visual/error',
    component: ErrorVisualComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
