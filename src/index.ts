import {NgModule} from "@angular/core";
import {LoadingPaneComponent} from "./components/loading-pane/loading-pane.component";
import {
    LoadingPaneService,
    defaultLoadingPaneServiceFactory
} from "./services/loading-pane/loading-pane.service";
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
        {provide:  LoadingPaneService, useFactory: defaultLoadingPaneServiceFactory, deps: []}
    ]
})
export class LoadingPaneModule {
}
