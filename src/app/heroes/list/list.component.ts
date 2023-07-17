import { Component } from '@angular/core';
import { first } from 'rxjs';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName: string [] = ['spiderman', 'thor', 'hulk', 'she hulk'];
  public deleteHero?:string;

   borrarHeroe(): void{
    this.deleteHero = this.heroName.pop();

   }

}
