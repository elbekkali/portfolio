import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero';
import { HeaderComponent } from './components/header';
import { ExpertiseComponent }  from './components/expertise';
import { TrustBarComponent } from './components/trust-bar'; 
import { ParcoursComponent } from './components/parcours';
import { FormationsComponent } from './components/formations';
import { MethodologieComponent } from './components/methodologie';
import { EcosystemeComponent } from './components/ecosysteme';
import { ContactComponent } from './components/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, HeroComponent, ExpertiseComponent, TrustBarComponent, FormationsComponent, ParcoursComponent, MethodologieComponent, EcosystemeComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
