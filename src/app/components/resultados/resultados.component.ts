import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultadoService } from './resultado.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit{
  result = 0;
  rutaImg: string ="";
  rutaNombre: string ="";
  descripcion: string ="";
  pokesId1 = [
    {poke: 'Bulbasaur', key: 1, idRandom: 1},
    {poke: 'Charmander', key: 4, idRandom: 2},
    {poke: 'Squirtle', key: 7, idRandom: 3},
    {poke: 'Pikachu', key: 25, idRandom: 4},
    {poke: 'Meowth', key: 52, idRandom: 5},
    {poke: 'Eevee', key: 133, idRandom: 6},
  ];
  pokesId2 = [
    {poke: 'Chikorita', key: 152, idRandom: 1},
    {poke: 'Cyndaquil', key: 155, idRandom: 2},
    {poke: 'Totodile', key: 158, idRandom: 3},
    {poke: 'Cleffa', key: 173, idRandom: 4},
    {poke: 'Igglybuff', key: 174, idRandom: 5},
    {poke: 'Togepi', key: 175, idRandom: 6},
  ];
  pokesId3 = [
    {poke: 'Tyroge', key: 236, idRandom: 1},
    {poke: 'Smoochum', key: 238, idRandom: 2},
    {poke: 'Elekid', key: 239, idRandom: 3},
    {poke: 'Magby', key: 240, idRandom: 4},
    {poke: 'Treecko', key: 252, idRandom: 5},
    {poke: 'Torchic', key: 255, idRandom: 6}
  ];
  pokesId4 = [
    {poke: 'Mudkip', key: 258, idRandom: 1},
    {poke: 'Azurril', key: 298, idRandom: 2},
    {poke: 'Wynaut', key: 360, idRandom: 3},
    {poke: 'Turtwig', key: 387, idRandom: 4},
    {poke: 'Chimchar', key: 390, idRandom: 5},
    {poke: 'Piplup', key: 393, idRandom: 6},
  ];
  pokesId5 = [
    {poke: 'Budew', key: 406, idRandom: 1},
    {poke: 'Chingling', key: 433, idRandom: 2},
    {poke: 'Bonsly', key: 438, idRandom: 3},
    {poke: 'Mime Jr', key: 439, idRandom: 4},
    {poke: 'Happiny', key: 440, idRandom: 5},
    {poke: 'Munchlax', key: 446, idRandom: 6},
  ];
  pokesId6 = [
    {poke: 'Riolu', key: 447, idRandom: 1},
    {poke: 'Mantyke', key: 458, idRandom: 2},
    {poke: 'Snivy', key: 495, idRandom: 3},
    {poke: 'Tepig', key: 498, idRandom: 4},
    {poke: 'Oshawott', key: 501, idRandom: 5},
    {poke: 'Chespin', key: 650, idRandom: 6},
  ];
  pokesId7 = [
    {poke: 'Fennekin', key: 653, idRandom: 1},
    {poke: 'Froakie', key: 656, idRandom: 2},
    {poke: 'Rowlet', key: 722, idRandom: 3},
    {poke: 'Litten', key: 725, idRandom: 4},
    {poke: 'Popplio', key: 728, idRandom: 5},
    {poke: 'Grookey', key: 810, idRandom: 6},
  ];
  pokesId8 = [
    {poke: 'Scorbunny', key: 813, idRandom: 1},
    {poke: 'Sobble', key: 816, idRandom: 2},
    {poke: 'Toxel', key: 848, idRandom: 3},
    {poke: 'Sprigatito', key: 906, idRandom: 4},
    {poke: 'Fuecoco', key: 909, idRandom: 5},
    {poke: 'Quaxly', key: 912, idRandom: 6}
  ];
  constructor(private activateRouter: ActivatedRoute, private resultService: ResultadoService, private router: Router){}
  ngOnInit(): void {
    this.activateRouter.params.subscribe(data => {
      this.result = data['result'];

    })
    this.obtenerGrupo();
  }

  obtenerGrupo(){
    if(this.result >= 25 && this.result < 37){
      this.obtenerRandom(this.pokesId1);
    }else if(this.result >=37 && this.result <49){
      this.obtenerRandom(this.pokesId2);
    }else if(this.result >=49 && this.result < 61){
      this.obtenerRandom(this.pokesId3);
    }else if(this.result >=61 && this.result <73){
      this.obtenerRandom(this.pokesId4);
    }else if(this.result >=73 && this.result <85){
      this.obtenerRandom(this.pokesId5);
    }else if(this.result>=85 && this.result <97){
      this.obtenerRandom(this.pokesId6);
    }else if(this.result>=97 && this.result <109){
      this.obtenerRandom(this.pokesId7);
    }else if(this.result>=109 && this.result <=125){
      this.obtenerRandom(this.pokesId8);
    }
  }

  obtenerRandom(grupo: any[]){
    const numeroAleatorio = Math.random();
    const numeroEntre1y6 = Math.floor(numeroAleatorio * 6) + 1;
    const idGanador = grupo.find(data => data.idRandom==numeroEntre1y6).key;
    console.log(idGanador)
    this.resultado(idGanador);
  }

  resultado(Id: number){
    console.log(Id);
    this.resultService.getPokemonById(Id).subscribe(data => {
      this.rutaNombre = data['name'].toUpperCase();
      this.rutaImg = data['sprites']['other']['official-artwork']['front_default'];
      console.log(this.rutaImg);
    })
  }

  regresar(){

    this.router.navigateByUrl('');
  }
}
