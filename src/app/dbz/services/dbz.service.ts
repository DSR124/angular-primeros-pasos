
import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'KRILLIN',
      power: 1000
    }  ,
    {
      id: uuid(),
      name: 'GOKU',
      power: 9500
    },
    {
      id: uuid(),
      name: 'VEGETA',
      power: 7000
    }
  ];
  onNewCharacter(character:Character): void{
    const newCharacter:Character = {id: uuid(), ...character };

    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index : number) {
  //   this.characters.splice(index , 1);
  // }

  deleteCharacterById(id:string){
    this.characters = this.characters.filter(Character => Character.id !== id);

  }


}
