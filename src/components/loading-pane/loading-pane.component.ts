import { Component, Input, ViewEncapsulation, DoCheck, HostBinding } from '@angular/core';
import { WorkTracker } from "../../services/work-tracker.service";

@Component({
  selector: 'loading-pane',
  templateUrl: 'loading-pane.component.html',
  styleUrls: ['loading-pane.component.scss']
})
export class LoadingPaneComponent implements DoCheck {

  @HostBinding('class.loading') public loading: boolean;

  @Input()
  public tracker: WorkTracker;

  constructor() {
  }

  ngDoCheck(): void {
    this.loading = !!(this.tracker && !this.tracker.complete);
  }


}
