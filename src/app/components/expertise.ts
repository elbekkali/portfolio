import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expertise',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="expertise" class="py-20">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-slate-900">Expertise Stratégique</h2>
        <div class="h-1 w-20 bg-blue-700 mx-auto mt-4 rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Carte 1: Pilotage & Gouvernance -->
        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div class="w-12 h-12 bg-blue-50 text-blue-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-700 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Gouvernance SI</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Pilotage de COMEX/COPIL, gestion budgétaire et conformité réglementaire bancaire.
          </p>
        </div>

        <!-- Carte 2: Architecture -->
        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div class="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-700 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="Step 19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Architecture TOGAF</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Cadrage d'architectures cibles, modernisation Mainframe vers Java et micro-services.
          </p>
        </div>

        <!-- Carte 3: AMOA & Métier -->
        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div class="w-12 h-12 bg-amber-50 text-amber-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-700 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Expertise Métier</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Spécialiste Crédit Habitat, Consommation et Assurance Emprunteur.
          </p>
        </div>

        <!-- Carte 4: Delivery & DevOps -->
        <div class="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
          <div class="w-12 h-12 bg-purple-50 text-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-700 group-hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor font-bold">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-4">Technologie & CI/CD</h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            Maîtrise du cycle DevOps : Jenkins, automatisation des tests et industrialisation.
          </p>
        </div>
      </div>
    </section>
  `
})
export class ExpertiseComponent {}