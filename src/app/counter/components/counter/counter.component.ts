
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
template:`
<h1>Counter :{{ container }}</h1>

<button (click)="incrementar(1)" >+1</button>
<button (click)="reset()" >resert</button>
<button (click)="incrementar(-1)" >-1</button>

`
})

export class counterComponent {

  public container: number = 10 ;

public incrementar( value: number) :void{
this.container +=value;

}
public reset() :void{
  this.container = 10;

  }

}
