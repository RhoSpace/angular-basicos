import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['batman','superman', 'wonder woman'];
  heroDelete: string = '';

  borrarHeroe(){
    //this.heroes.pop();
    //this.heroes = []; 

    // this.heroDelete = this.heroes[0];
    // this.heroes.shift();
    
    //El metodo shift nos devuelve undefined por eso le ponemos un Or strig vacio.
    this.heroDelete = this.heroes.shift() || '';
  }

}
