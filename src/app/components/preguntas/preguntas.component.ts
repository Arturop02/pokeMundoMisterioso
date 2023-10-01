import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent {

  pokeform = new FormGroup({
    pregunta1: new FormControl(''),
    pregunta2: new FormControl(''),
    pregunta3: new FormControl(''),
    pregunta4: new FormControl(''),
    pregunta5: new FormControl(''),
    pregunta6: new FormControl(''),
    pregunta7: new FormControl(''),
    pregunta8: new FormControl(''),
    pregunta9: new FormControl(''),
    pregunta10: new FormControl(''),
    pregunta11: new FormControl(''),
    pregunta12: new FormControl(''),
    pregunta13: new FormControl(''),
    pregunta14: new FormControl(''),
    pregunta15: new FormControl(''),
    pregunta16: new FormControl(''),
    pregunta17: new FormControl(''),
    pregunta18: new FormControl(''),
    pregunta19: new FormControl(''),
    pregunta20: new FormControl(''),
    pregunta21: new FormControl(''),
    pregunta22: new FormControl(''),
    pregunta23: new FormControl(''),
    pregunta24: new FormControl(''),
    pregunta25: new FormControl('')
  });
  constructor(private router: Router, private fb: FormBuilder){

  }

  finalizar(){
    let nombreString = 'pregunta';
    let contador = 1;
    let acumulado = 0;
    while(contador <= 25){
      let data = nombreString+contador;
      acumulado = acumulado + parseInt(this.pokeform.get(data)?.value);
      contador++;
    }
    this.router.navigateByUrl(`poke/${acumulado}`);
  }
}
