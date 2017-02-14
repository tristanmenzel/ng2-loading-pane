import {NgModule, ModuleWithProviders} from "@angular/core";
import {LoadingPaneComponent} from "./components/loading-pane";
import {
    WorkTrackerFactory,
    WorkTracker,
    defaultWorkTrackerFactoryFactory
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
        {provide: WorkTrackerFactory, useFactory: defaultWorkTrackerFactoryFactory, deps: []}
    ]
})
export class LoadingPaneModule {
}

export {WorkTrackerFactory, WorkTracker, LoadingPaneComponent};
