import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public nombre: string = 'Iroman';
  public age: number = 45;

  get capitalizeName() : string{
    return this.nombre.toUpperCase();
  }
   getherodescription() : string
   {
    return `${this.nombre} - ${this.age}`;
   }

   changeHero() :void{
    this.nombre = 'CApi_Kdumo';
   }
   changeAge() :void{
    this.age = 21;
   }

   ResetFrom(): void{
    this.nombre = 'Iroman';
    this.age = 45;

   }

}
