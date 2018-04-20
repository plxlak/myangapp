import { Component } from '@angular/core'
import { Joke } from './joke.component';

// class Joke {
//     public setup: string;
//     public punchline: string;
//     public hide: boolean;

//     constructor( setup: string, punchline: string ) {
//         this.setup = setup;
//         this.punchline = punchline;
//         this.hide = true;
//     }
//     toggle() {
//         this.hide = !this.hide;
//     }
// }

@Component ({
    selector: 'joke-list',
    template: `
        <joke *ngFor="let j of jokes" [joke]="j"></joke>
    `
    // template:`
    // <div class="card mb-3"
    //  *ngFor="let j of jokes" style="width: 320px;">
    // <h4 class="card-title">{{ joke.setup}} </h4>
    //   <p class="card-text" [hidden]="joke.hide"> {{ joke.punchline }} </p>
    //   <button class="btn btn-primary" (click)="joke.toggle()" role="button">Tell me </button>
    //   <div>
    // `
})

export class JokeListComponent {
    jokes: Joke[];
    constructor() {
        this.jokes = [
            new Joke ('What did the cheese say when it looked in teh mirror?','Hello-Me (Halloumi)'),
            new Joke ('What kind of cheese do you use to disguise s small horse?', 'Mask-a-pony (Mascarpone)'),
            new Joke ('A kid threw a lump of cheddar at me','I thought \'That\'s not very mature.\''),
        ];
    }
}

/*
export class JokeListComponent {
    jokes: Object[];
    constructor() {
        this.jokes = [
            {           
            setup: 'What did the cheese say when it looked in teh mirror?',
            punchline: 'Hello-Me (Halloumi)',
            hide: true,
            }, {
            setup: 'What kind of cheese do you use to disguise s small horse?',
            punchline: 'Mask-a-pony (Mascarpone)',
            hide: true,
            }, {
            setup: 'A kid threw a lump of cheddar at me',
            punchline: 'I thought \'That\'s not very mature.\'',
            hide: true,
            },
        ];    
    }
    toggle(joke) {
        joke.hide = !joke.hide;
    }
}
*/
