import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    selector: 'app',
    template: `<div>
        <h1>Hello {{name}}!</h1>
    </div>`
})
class App {
    name: string;

    constructor(){
        this.name = 'World';
        setTimeout(() => {
            this.name = 'Angular 2';
        }, 2000);
    }
}

bootstrap(App);