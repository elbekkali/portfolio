import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecosysteme',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="technologies" class="py-20 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-slate-900">Écosystème Technique</h2>
          <div class="h-1 w-20 bg-blue-700 mx-auto mt-4 rounded-full"></div>
          <p class="text-slate-500 mt-4 font-medium italic">Une double culture technique au cœur de la modernisation des SI</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div class="md:col-span-2 p-5 bg-blue-900 text-white rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-md">
            <div>
              <span class="text-xs font-bold text-blue-300 uppercase tracking-wider block mb-1">Socle Historique</span>
              <p class="font-black text-lg">Mainframe Ecosystem</p>
            </div>
            <span class="text-xs bg-blue-700 px-3 py-1.5 rounded-lg font-mono font-bold tracking-wide">COBOL, DB2, JCL, Z/OS</span>
          </div>
          
          <div class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Backend</p>
            <p class="text-slate-900 font-black text-lg">Java / Spring Boot</p>
          </div>

          <div class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">DevOps</p>
            <p class="text-slate-900 font-black text-lg">Jenkins / CI-CD / Docker</p>
          </div>

          <div class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Frontend</p>
            <p class="text-slate-900 font-black text-lg">Angular / Tailwind</p>
          </div>

          <div class="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm hover:border-slate-200 transition-colors">
            <p class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Data</p>
            <p class="text-slate-900 font-black text-lg">DB2 / SQL / Oracle</p>
          </div>
        </div>

      </div>
    </section>
  `
})
export class EcosystemeComponent {}