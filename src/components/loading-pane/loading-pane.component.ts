import {Component, OnInit, Input} from '@angular/core';
import { WorkTracker} from "../../services/loading-pane/loading-pane.service";
import {Observable} from "rxjs";

@Component({
    selector: 'loading-pane',
    templateUrl: 'loading-pane.component.html',
    styleUrls: ['loading-pane.component.scss']
})
export class LoadingPaneComponent implements OnInit {

    @Input()
    public tracker:WorkTracker;

    public isLoading:Observable<boolean>;

    constructor() {
    }

    ngOnInit() {
        this.isLoading = this.tracker.complete.map(x=>{
            console.log(x);
            return !x;
        });
    }

}
