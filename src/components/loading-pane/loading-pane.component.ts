import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { WorkTracker} from "../../services/work-tracker.service";
import {Observable} from "rxjs";

@Component({
    selector: 'loading-pane',
    templateUrl: 'loading-pane.component.html',
    styleUrls: ['loading-pane.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class LoadingPaneComponent implements OnInit {

    @Input()
    public tracker:WorkTracker;

    public isLoading:Observable<boolean>;

    constructor() {
    }

    ngOnInit() {
        this.isLoading = this.tracker.complete.map((isComplete:boolean)=>{
            return !isComplete;
        });
    }

}
