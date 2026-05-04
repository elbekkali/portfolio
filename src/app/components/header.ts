import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <nav class="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <span class="text-xl font-bold bg-gradient-to-r from-blue-700 to-emerald-600 bg-clip-text text-transparent">
          EL BEKKALI
        </span>
        <div class="hidden md:flex space-x-8 items-center font-medium text-slate-600">
          <a href="#expertise" class="hover:text-blue-700">Expertise</a>
          <a href="#parcours" class="hover:text-blue-700">Parcours</a>
          <button class="px-5 py-2 bg-blue-700 text-white rounded-full text-sm shadow-lg shadow-blue-700/20">
            Contact
          </button>
        </div>
      </div>
    </nav>
  `
})
export class HeaderComponent {}