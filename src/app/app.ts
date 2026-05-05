import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header';
import {ExpertiseComponent }  from './components/expertise';
import {TrustBarComponent} from './components/trust-bar'; 
import {ParcoursComponent} from './components/parcours';
import {FormationsComponent} from './components/formations';
import { ToolsComponent } from './components/tools';
import { ContactComponent } from './components/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ExpertiseComponent, TrustBarComponent, FormationsComponent, ParcoursComponent, ToolsComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
