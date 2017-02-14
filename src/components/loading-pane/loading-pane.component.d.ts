import { OnInit } from '@angular/core';
import { WorkTracker } from "../../services/loading-pane/loading-pane.service";
import { Observable } from "rxjs";
export declare class LoadingPaneComponent implements OnInit {
    tracker: WorkTracker;
    isLoading: Observable<boolean>;
    constructor();
    ngOnInit(): void;
}
