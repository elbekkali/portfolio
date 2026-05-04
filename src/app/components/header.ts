import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <!-- Identité (Conservée à 100%) -->
        <span class="text-xl font-black bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent tracking-tight">
          EL BEKKALI Mohamed
        </span>

        <!-- Navigation Desktop (Conservée à 100%) -->
        <div class="hidden md:flex space-x-8 items-center font-semibold text-slate-600">
          <a href="#expertise" class="hover:text-blue-700 transition-colors">Expertise</a>
          <a href="#parcours" class="hover:text-blue-700 transition-colors">Parcours</a>
          <a href="#tools" class="hover:text-blue-700 transition-colors">Méthodologies</a>
          
          <!-- CTA Contact -->
          <a href="#contact" 
             class="px-5 py-2 bg-blue-700 text-white rounded-full text-sm shadow-lg shadow-blue-700/20 hover:bg-blue-800 hover:scale-105 transition-all">
            Me contacter
          </a>
        </div>

        <!-- Bouton Burger (Ajout pour Mobile) -->
        <button (click)="toggleMenu()" class="md:hidden p-2 text-slate-600 focus:outline-none" aria-label="Toggle menu">
          <svg *ngIf="!isMenuOpen()" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
          <svg *ngIf="isMenuOpen()" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Menu Mobile (Design cohérent avec ton style) -->
      <div *ngIf="isMenuOpen()" 
           class="md:hidden bg-white border-b border-slate-200 px-4 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top duration-200">
        <a href="#expertise" (click)="closeMenu()" class="block font-semibold text-slate-600 hover:text-blue-700">Expertise</a>
        <a href="#parcours" (click)="closeMenu()" class="block font-semibold text-slate-600 hover:text-blue-700">Parcours</a>
        <a href="#tools" (click)="closeMenu()" class="block font-semibold text-slate-600 hover:text-blue-700">Méthodologies</a>
        <hr class="border-slate-100">
        <a href="#contact" (click)="closeMenu()" 
           class="inline-block w-full text-center px-5 py-3 bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-700/20">
          Me contacter
        </a>
      </div>
    </nav>
  `
})
export class HeaderComponent {
  // Utilisation des signaux avec types explicites pour éviter les erreurs de build
  isMenuOpen = signal<boolean>(false);

  toggleMenu(): void {
    this.isMenuOpen.update((prev: boolean) => !prev);
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}