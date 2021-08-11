import {
  Component,
  Input
} from '@angular/core';

/**
 * Specifies a title to display in the error message.
 */
@Component({
  selector: 'sky-error-title',
  template: `
    <h1>
      <ng-content></ng-content>
    </h1>
  `
})
export class SkyErrorTitleComponent {
/**
 * Indicates whether to replace the default title. If `false`, the title
 * from this component is added after the default title.
 * @default false
 */
  @Input()
  public replaceDefaultTitle: boolean = false;
}
