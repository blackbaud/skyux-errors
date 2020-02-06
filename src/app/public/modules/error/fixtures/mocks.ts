import {
  SkyModalInstance,
  SkyModalService,
  SkyModalConfiguration
} from '@skyux/modals';

export class SkyModalInstanceMock {
  public close() {}
}

export class MockHostService {
  public getModalZIndex(): number {
    return 1;
  }
}

export interface OpenParameters {
  component: any;
  providers?: any[];
}

export class MockModalService extends SkyModalService {
  public openCalls: OpenParameters[] = [];

  public open(component: any, config: any): SkyModalInstance {
    this.openCalls.push({component: component, providers: config});

    return undefined;
  }
}
