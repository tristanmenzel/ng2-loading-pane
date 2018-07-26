# ng2-loading-pane

A simple loading pane implementation for angular 2 based on promises based on
https://github.com/tristanmenzel/angular-loading-pane

## Install

```powershell
npm install ng2-loading-pane --save
```

## Usage

**Include module in your AppModule**

```typescript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {LoadingPaneModule} from 'ng2-loading-pane'; // 1. Import module from node_modules

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        LoadingPaneModule // 2. Add module to imports
    ],
        bootstrap: [AppComponent]
    })
export class AppModule {
}
```

**Create a `WorkTracker` instance using the factory and expose it on your component's controller**

```typescript
import {Component, OnInit} from '@angular/core';
import {WorkTracker} from 'ng2-loading-pane'; // 1. Import required classes from node_modules
import {Http} from "@angular/http";

@Component({
    selector: 'app-loading-pane-test',
    templateUrl: './loading-pane-test.component.html'
})
export class LoadingPaneTestComponent {
    private tracker: WorkTracker;

    constructor(
        private http:Http) {
        this.tracker = new WorkTracker(true, 300); // 2. new up a WorkTracker
    }

    simulateAsyncOperation() {
        // 3. When performing an async operation, pass the promise to the tracker
        this.tracker.track(new Promise((resolve) => {
            setTimeout(() => {
                resolve(true);
            }, 3000);
        }));
    }

    makeHttpRequest(){
        // 3. When performing an async operation, pass the promise to the tracker
        let promise = this.http.get('/api/users').toPromise();
        this.tracker.track(promise);
    }
}
```

**Bind the `WorkTracker` instance to the `<loading-pane />` component**

```html
<loading-pane [tracker]="tracker">
    <button type="button" (click)="simulateAsyncOperation()">Simulate async</button>
    <button type="button" (click)="makeHttpRequest()">Http request</button>
</loading-pane>
```
