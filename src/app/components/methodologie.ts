import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-methodologie',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="gouvernance" class="py-20 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-slate-900">Méthodologies & Gouvernance</h2>
          <div class="h-1 w-20 bg-blue-700 mx-auto mt-4 rounded-full"></div>
          <p class="text-slate-500 mt-4 font-medium italic">Garant de l'alignement stratégique IT, de l'agilité et de la qualité des livrables</p>
        </div>

        <div class="space-y-6 max-w-3xl mx-auto">
          <div class="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-all">
            <h4 class="font-bold text-blue-700 mb-2 text-sm uppercase tracking-wider">Architecture</h4>
            <p class="text-slate-900 font-semibold text-lg">TOGAF® 10 Practitioner</p>
            <p class="text-slate-600 text-sm mt-1 leading-relaxed">Cadrage d'architectures cibles, urbanisation des SI complexes et alignement permanent entre la stratégie IT et les besoins Métier.</p>
          </div>
          
          <div class="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-all">
            <h4 class="font-bold text-emerald-700 mb-2 text-sm uppercase tracking-wider">Agilité & Pilotage</h4>
            <p class="text-slate-900 font-semibold text-lg">Scrum / Kanban / Cycle en V</p>
            <p class="text-slate-600 text-sm mt-1 leading-relaxed">Animation complète des rituels agiles, gestion des risques et pilotage transverse de projets multi-entités complexes.</p>
          </div>

          <div class="p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-all">
            <h4 class="font-bold text-amber-700 mb-2 text-sm uppercase tracking-wider">Qualité & Réglementaire</h4>
            <p class="text-slate-900 font-semibold text-lg">Homologation & Conformité Bancaire</p>
            <p class="text-slate-600 text-sm mt-1 leading-relaxed">Garant du respect strict des normes de sécurité bancaires, de la robustesse des processus de validation et de la haute qualité des livrables.</p>
          </div>
        </div>

      </div>
    </section>
  `
})
export class MethodologieComponent {}