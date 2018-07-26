import { NgModule } from "@angular/core";
import { LoadingPaneComponent } from "./components/loading-pane/loading-pane.component";
export { LoadingPaneComponent } from "./components/loading-pane/loading-pane.component";
export { WorkTracker } from "./services/work-tracker.service";
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

