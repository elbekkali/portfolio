import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-parcours',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="parcours" class="py-20 border-b border-slate-200">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-slate-900">Parcours & Impact</h2>
          <p class="text-slate-500 mt-2 font-medium italic">15 ans au service de la transformation des SI bancaires</p>
        </div>

        <div class="relative border-l-2 border-blue-200 ml-4 md:ml-0 md:left-1/2">
          <div class="mb-12 relative">
            <div class="md:absolute md:-left-4 top-0 w-8 h-8 bg-blue-700 rounded-full border-4 border-white shadow-sm z-10"></div>
            <div class="md:ml-12 ml-8 md:w-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-blue-300 transition-colors">
              <span class="text-blue-700 font-bold text-sm tracking-widest uppercase">2019 — Présent</span>
              <h3 class="text-xl font-black mt-2 text-slate-900">Chef de Projets SI</h3>
              <p class="text-emerald-700 font-bold text-sm mb-4">Crédit Agricole Technologies et Services</p>
              <ul class="space-y-2 text-slate-600 text-sm">
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">▹</span>
                  <span>Modernisation du socle Mainframe vers des architectures Java/Spring Boot.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">▹</span>
                  <span>Pilotage transverse multi-entités (Habitat, Conso, Assurance).</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-blue-500 mt-1">▹</span>
                  <span>Mise en place de pipelines CI/CD et automatisation des tests.</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="mb-12 relative">
            <div class="md:absolute md:-left-4 top-0 w-8 h-8 bg-slate-300 rounded-full border-4 border-white shadow-sm z-10"></div>
            <div class="md:-ml-[440px] ml-8 md:w-[400px] bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <span class="text-slate-500 font-bold text-sm tracking-widest uppercase">Expertise SI Complexes</span>
              <h3 class="text-xl font-bold mt-2 text-slate-900">Architecte & Pilotage AMOA</h3>
              <p class="text-slate-500 text-sm mb-4">Secteur Banque & Assurance</p>
              <p class="text-slate-600 text-sm italic leading-relaxed">
                Coordination des instances de gouvernance et interface entre les directions métiers et les équipes IT.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ParcoursComponent {}