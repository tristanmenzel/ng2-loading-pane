import {NgModule, ModuleWithProviders} from "@angular/core";
import {LoadingPaneComponent} from "./components/loading-pane";
import {
    WorkTrackerFactory,
    WorkTracker,
    DEfAULT_MIN_DELAY_TOKEN
} from "./services/work-tracker.service";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
    declarations: [
        LoadingPaneComponent
    ],
    exports: [
        LoadingPaneComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        {provide: DEfAULT_MIN_DELAY_TOKEN, useValue:300},
        WorkTrackerFactory
    ]
})
export class LoadingPaneModule {
}

export {WorkTrackerFactory, WorkTracker, LoadingPaneComponent, DEfAULT_MIN_DELAY_TOKEN};
