import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import {
  SkyLibResourcesService
} from '@skyux/i18n';

@Component({
  selector: 'sky-error',
  styleUrls: ['./error.component.scss'],
  templateUrl: './error.component.html'
})
export class SkyErrorComponent implements OnInit {
  @Input()
  public get errorType() {
    return this._errorType;
  }
  public set errorType(value: string) {
    this._errorType = value;
    this.setErrorTypeFields();
  }

  public title: string = undefined;
  public description: string = undefined;

  private _errorType: string;

  constructor(
    private resourcesService: SkyLibResourcesService
  ) { }

  public ngOnInit() {
    if (this.errorType && this.errorType !== '') {
      this.setErrorTypeFields();
    }
  }

  public setErrorTypeFields() {
    if (this.errorType.toLowerCase() === 'broken') {
      this.title = this.getString('skyux_errors_broken_title');
      this.description = this.getString('skyux_errors_broken_description');

    } else if (this.errorType.toLowerCase() === 'notfound') {
      this.title = this.getString('skyux_errors_not_found_title');
      this.description = undefined;

    } else if (this.errorType.toLowerCase() === 'construction') {
      this.title = this.getString('skyux_errors_construction_title');
      this.description = this.getString('skyux_errors_construction_description');

    } else if (this.errorType.toLowerCase() === 'security') {
      this.title = this.getString('skyux_errors_security_title');
      this.description = undefined;
    }
  }

  private getString(key: string): string {
    // TODO: Need to implement the async `getString` method in a breaking change.
    return this.resourcesService.getStringForLocale(
      { locale: 'en-US' },
      key
    );
  }
}
