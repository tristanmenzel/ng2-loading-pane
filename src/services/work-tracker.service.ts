import {Injectable, OpaqueToken, Inject} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export const DEfAULT_MIN_DELAY_TOKEN = new OpaqueToken('Default min dalay');

@Injectable()
export class WorkTrackerFactory {

    constructor(@Inject(DEfAULT_MIN_DELAY_TOKEN) private  defaultMinDelayInMs: number) {
    }

    createTracker(complete: boolean, minDelayInMs?: number): WorkTracker {
        return new WorkTrackerInternal(complete, minDelayInMs || this.defaultMinDelayInMs);
    }
}

function noop() {
}


function deferred(delayInMs: number, action?: () => any): Promise<any> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve((action || noop)());
        }, delayInMs);
    });
}


export abstract class WorkTracker {
    track(promise: Promise<any>) {
        throw "Should be overridden";
    }

    get complete(): BehaviorSubject<boolean> {
        throw "Should be overridden";
    }
}

export class WorkTrackerInternal extends WorkTracker {
    private _activePromises: number = 0;
    private _completeSubject: BehaviorSubject<boolean>;

    constructor(complete: boolean,
                public minDelayInMs: number) {
        super();
        this._completeSubject = new BehaviorSubject(complete);
    }

    get complete(): BehaviorSubject<boolean> {
        return this._completeSubject;
    }

    track(promise: Promise<any>) {
        console.log(promise);
        return this.trackInternal(promise, this.minDelayInMs);
    }

    trackInternal(promise: Promise<any>, minDelay?: number) {
        const complete = (x: any) => {
            this.completePromise();
            return promise;
        };
        const completeAndBubbleReject = (e: any) => {
            this.completePromise();
            return Promise.reject(e);
        };

        this._completeSubject.next(false);
        this._activePromises++;
        if (minDelay === 0) {
            return promise.then(complete, completeAndBubbleReject);
        } else {
            return Promise.all([promise, deferred(minDelay)])
                .then(complete, completeAndBubbleReject);
        }
    }

    completePromise() {
        this._activePromises = Math.max(0, this._activePromises - 1);
        this._completeSubject.next(this._activePromises === 0);
    }
}