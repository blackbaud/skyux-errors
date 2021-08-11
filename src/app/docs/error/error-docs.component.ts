import {
  Component
} from '@angular/core';

import {
  SkyDocsDemoControlPanelChange,
  SkyDocsDemoControlPanelRadioChoice
} from '@skyux/docs-tools';

@Component({
  selector: 'app-error-docs',
  templateUrl: './error-docs.component.html'
})
export class ErrorDocsComponent {

  public demoSettings: any = {
    errorType: 'broken'
  };

  public errorTypeChoices: SkyDocsDemoControlPanelRadioChoice[] = [
    { value: 'broken', label: 'broken' },
    { value: 'construction', label: 'construction' },
    { value: 'notfound', label: 'notfound' },
    { value: 'security', label: 'security' }
  ];

  public onDemoSelectionChange(change: SkyDocsDemoControlPanelChange): void {
    if (change.errorType !== undefined) {
      this.demoSettings.errorType = change.errorType;
    }
  }

}
