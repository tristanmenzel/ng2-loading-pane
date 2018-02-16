import { NgModule, ModuleWithProviders } from "@angular/core";
import { LoadingPaneComponent } from "./components/loading-pane";
import { WorkTracker } from "./services/work-tracker.service";
import { BrowserModule } from "@angular/platform-browser";


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
  providers: []
})
export class LoadingPaneModule {
}

export { WorkTracker, LoadingPaneComponent };
