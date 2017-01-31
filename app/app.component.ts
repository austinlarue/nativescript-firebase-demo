import { Component, OnInit } from "@angular/core";
import firebase = require('nativescript-plugin-firebase');

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent implements OnInit {
    public counter: number = 16;

    ngOnInit(): void {
        firebase.init({})
            .then((instance) => console.log('firebase.init successfull!!!!'))
            .catch((err) => console.error('firebase.init failed: ' + err));
    }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
    }
}
