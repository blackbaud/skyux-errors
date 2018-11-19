import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'sky-error-image',
  templateUrl: './error-image.component.html',
  styleUrls: ['./error-image.component.scss']
})
export class SkyErrorImageComponent {
  @Input()
  public get imageType(): string {
    return this._imageType;
  }
  public set imageType(value: string) {
    this._imageType = value ? value.toLowerCase() : value;
  }

  private _imageType: string;
}
