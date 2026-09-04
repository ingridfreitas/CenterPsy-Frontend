import { Component } from '@angular/core';
import { Capa } from '../capa/capa';
import { Abordagem } from '../abordagem/abordagem';
import { Passo } from '../passo/passo';
import { About } from '../about/about';
import { Contact } from '../contact/contact';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-main',
  imports: [Capa, Abordagem, Passo, About, Contact, Footer],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class Main {

}
