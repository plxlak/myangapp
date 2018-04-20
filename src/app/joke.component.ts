//import { Component } from '@angular/core'
import { Component, Input } from '@angular/core'

export class Joke {
  public setup: string;
  public punchline: string;
  public hide: boolean;

  constructor( setup: string, punchline: string ) {
      this.setup = setup;
      this.punchline = punchline;
      this.hide = true;
  }
  toggle() {
      this.hide = !this.hide;
  }
}

@Component ({
    selector: 'joke',
    template:`
    <div class="card mb-3" style="width: 320px;">
    <h4 class="card-title">{{ joke.setup}} </h4>
      <p class="card-text" [hidden]="joke.hide"> {{ joke.punchline }} </p>
      <button class="btn btn-primary" (click)="joke.toggle()" role="button">Tell World </button>
      <div>
    `    
    // template:`
    // <h1>{{ setup }}</h1>
    // <p>{{ punchline }}</p>
    // `
})

 export class JokeComponent {
  @Input() joke: Object;
}
// export class JokeComponent {
//   setup: string;
//   punchline: string;
  
  // constructor() {
  //   this.setup = 'What did the cheese say when it looked in the mirror?';
  //   this.punchline = 'Halloumi (Hello me)';
  // }
//}