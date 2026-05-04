import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <!-- Identité -->
        <span class="text-xl font-black bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent tracking-tight">
          EL BEKKALI Mohamed
        </span>

        <!-- Navigation intelligente -->
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
      </div>
    </nav>
  `
})
export class HeaderComponent {}