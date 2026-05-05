import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tools',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="tools" class="py-20 border-b border-slate-200">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row gap-16">
          
          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              Méthodologies & Gouvernance
            </h2>
            <div class="space-y-6">
              <div class="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <h4 class="font-bold text-blue-700 mb-2 text-sm uppercase tracking-wider">Architecture</h4>
                <p class="text-slate-900 font-semibold">TOGAF 10 Practitioner</p>
                <p class="text-slate-600 text-sm mt-1">Cadrage d'architectures cibles et alignement stratégique IT/Métier.</p>
              </div>
              
              <div class="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <h4 class="font-bold text-emerald-700 mb-2 text-sm uppercase tracking-wider">Agilité & Pilotage</h4>
                <p class="text-slate-900 font-semibold">Scrum / Kanban / Cycle en V</p>
                <p class="text-slate-600 text-sm mt-1">Animation de rituels agiles et gestion de projets transverses complexes.</p>
              </div>

              <div class="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <h4 class="font-bold text-amber-700 mb-2 text-sm uppercase tracking-wider">Qualité & Réglementaire</h4>
                <p class="text-slate-900 font-semibold">Homologation & Conformité</p>
                <p class="text-slate-600 text-sm mt-1">Garant du respect des normes bancaires et de la qualité des livrables.</p>
              </div>
            </div>
          </div>

          <div class="md:w-1/2">
            <h2 class="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span class="w-8 h-1 bg-blue-700 rounded-full"></span>
              Écosystème Technique
            </h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="col-span-2 p-4 bg-blue-900 text-white rounded-xl flex justify-between items-center shadow-sm">
                <span class="font-bold">Mainframe Ecosystem</span>
                <span class="text-xs bg-blue-700 px-2 py-1 rounded">COBOL, DB2, JCL, Z/OS</span>
              </div>
              
              <div class="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p class="text-xs font-bold text-slate-400 uppercase mb-2">Backend</p>
                <p class="text-slate-900 font-bold">Java / Spring Boot</p>
              </div>

              <div class="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p class="text-xs font-bold text-slate-400 uppercase mb-2">DevOps</p>
                <p class="text-slate-900 font-bold">Jenkins / CI/CD</p>
              </div>

              <div class="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p class="text-xs font-bold text-slate-400 uppercase mb-2">Frontend</p>
                <p class="text-slate-900 font-bold">Angular / Tailwind</p>
              </div>

              <div class="p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                <p class="text-xs font-bold text-slate-400 uppercase mb-2">Data</p>
                <p class="text-slate-900 font-bold">DB2 / SQL / Oracle</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ToolsComponent {}