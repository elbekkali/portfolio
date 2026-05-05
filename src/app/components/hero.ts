import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="flex flex-col lg:flex-row items-center gap-12 py-12">
      <div class="lg:w-2/3 order-2 lg:order-1">
        <div class="flex items-center gap-2 mb-6">
          <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-full">
            Certifié TOGAF 10
          </span>
          <span class="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full">
            Expert Java & Mainframe 
          </span>
        </div>

        <h1 class="text-4xl lg:text-6xl font-black text-slate-900 leading-tight">
          Chef de Projets Bancaires<br />
          <span class="text-blue-700">& Architecte SI</span>
        </h1>

        <div class="mt-8 space-y-6 text-lg text-slate-600 leading-relaxed text-justify">
          <p>
            Chef de projets bancaires avec
            <span class="font-semibold text-slate-900">+15 ans d'expérience</span> en SI
            complexes, dont
            <span class="font-semibold text-slate-900">+5 ans au sein du Groupe Crédit Agricole</span>
            sur des projets de transformation digitale à forte valeur ajoutée (Mainframe et Java).
          </p>
          <p>
            Expert en pilotage AMOA, je combine coordination multi-entités, enjeux réglementaires
            et modernisation des systèmes d'information. J'interviens sur l'ensemble du cycle de
            vie : du cadrage stratégique au déploiement CI/CD.
          </p>
          <p class="hidden md:block text-sm bg-white p-4 border-l-4 border-blue-700 shadow-sm">
            Interface reconnue entre directions métier et équipes IT, j'anime les instances de
            gouvernance (COMEX, COPIL) pour piloter des projets critiques.
          </p>
        </div>

        <div class="mt-10 flex flex-wrap gap-4">
          <a
            href="#parcours"
            class="px-8 py-4 bg-blue-700 text-white font-bold rounded-xl hover:bg-blue-800 transition-all shadow-xl shadow-blue-700/30 text-center inline-block"
          >
            Consulter mon parcours
          </a>

          <a
            href="cv-mohamed-el-bekkali.pdf"
            download="CV_Mohamed_EL_BEKKALI.pdf"
            class="px-8 py-4 bg-white text-slate-700 font-bold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all text-center inline-block"
          >
            Télécharger CV
          </a>
        </div>
      </div>

      <div class="lg:w-1/3 order-1 lg:order-2">
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-emerald-500 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>

          <div class="relative bg-white p-2 rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
            <img
              src="photo-profile.jpg"
              alt="Portrait El Bekkali"
              class="w-full h-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 object-cover min-h-[400px]"
              onerror="this.src='https://ui-avatars.com/api/?name=El+Bekkali&background=0D47A1&color=fff&size=512'"
            />
          </div>
        </div>
      </div>
    </section>
  `
})
export class HeroComponent {}