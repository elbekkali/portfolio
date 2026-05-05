import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="formations" class="py-20 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-black text-slate-900 tracking-tight uppercase">
            Formation
          </h2>
          <div class="h-1 w-12 bg-blue-700 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="relative space-y-12 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
          
          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="w-full md:w-[45%] pl-12 md:pl-0 md:text-right">
              <span class="inline-block text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">2011</span>
              <h3 class="text-lg font-black text-slate-800">Master 2 Informatique</h3>
              <p class="text-slate-600 font-medium text-sm mt-1">Université Pierre Mendès France – Grenoble</p>
            </div>
            <div class="hidden md:block w-[45%]"></div>
          </div>

          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="hidden md:block w-[45%]"></div>
            <div class="w-full md:w-[45%] pl-12">
              <span class="inline-block text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-2">2008</span>
              <h3 class="text-lg font-black text-slate-800">Formation sur les technologies J2EE</h3>
              <p class="text-slate-600 font-medium text-sm mt-1">AFPA de Pont de Claix – Grenoble</p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="w-full md:w-[45%] pl-12 md:pl-0 md:text-right">
              <span class="inline-block text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">2006</span>
              <h3 class="text-lg font-black text-slate-800">Master 1 Informatique</h3>
              <p class="text-slate-600 font-medium text-sm mt-1">Université Joseph Fourier – Grenoble</p>
            </div>
            <div class="hidden md:block w-[45%]"></div>
          </div>

          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-slate-700 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="hidden md:block w-[45%]"></div>
            <div class="w-full md:w-[45%] pl-12">
              <span class="inline-block text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full mb-2">2000</span>
              <h3 class="text-lg font-black text-slate-800">BAC Sciences Mathématiques</h3>
              <p class="text-slate-600 font-medium text-sm mt-1">Casablanca</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class FormationsComponent {}