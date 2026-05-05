import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-architecture',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="architecture" class="py-20 border-b border-slate-200 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        
        <div class="text-center mb-12">
          <h2 class="text-3xl font-black text-slate-900 tracking-tight uppercase">
            Architecture de Réalisation
          </h2>
          <div class="h-1 w-12 bg-blue-700 mx-auto mt-4 rounded-full"></div>
          <p class="text-slate-500 mt-4 font-medium">
            Un flux DevOps complet et automatisé utilisant les dernières technologies de pointe.
          </p>
        </div>

        <div class="bg-slate-50 p-4 md:p-8 rounded-3xl border border-slate-100 shadow-sm flex justify-center items-center overflow-hidden mb-12">
          <img 
            src="architecture-graphe.png" 
            alt="Diagramme Architecture DevOps Portfolio" 
            class="w-full max-w-4xl h-auto object-contain rounded-xl"
          />
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div class="bg-slate-50/60 p-5 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full bg-blue-600"></span>
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">1. Zone Dev (Local)</h4>
            </div>
            <p class="text-slate-600 text-xs leading-relaxed">
              Développement sous <span class="font-semibold text-slate-800">VSCode</span>. Stack moderne propulsée par <span class="font-semibold text-slate-800">Node.js v22 (LTS)</span>, le framework <span class="font-semibold text-red-600">Angular v21</span> et le moteur graphique <span class="font-semibold text-blue-500">Tailwind CSS v4</span>.
            </p>
          </div>

          <div class="bg-slate-50/60 p-5 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full bg-slate-800"></span>
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">2. CI/CD Pipeline</h4>
            </div>
            <p class="text-slate-600 text-xs leading-relaxed">
              Chaque <span class="font-semibold text-slate-800">Commit & Push</span> vers le dépôt privé <span class="font-semibold text-slate-800">GitHub</span> déclenche automatiquement une <span class="font-semibold text-slate-800">GitHub Action</span> pour compiler, tester et packager l'application.
            </p>
          </div>

          <div class="bg-slate-50/60 p-5 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">3. Cloud & Services</h4>
            </div>
            <p class="text-slate-600 text-xs leading-relaxed">
              Déploiement sécurisé sur <span class="font-semibold text-slate-800">Firebase Hosting</span>. Stockage de données NoSQL via <span class="font-semibold text-slate-800">Firestore</span> et gestion automatisée des formulaires de contact via l'extension <span class="font-semibold text-slate-800">Trigger Email</span>.
            </p>
          </div>

          <div class="bg-slate-50/60 p-5 rounded-2xl border border-slate-100">
            <div class="flex items-center gap-2 mb-3">
              <span class="w-2 h-2 rounded-full bg-amber-600"></span>
              <h4 class="text-xs font-bold text-slate-900 uppercase tracking-wider">4. Consultation</h4>
            </div>
            <p class="text-slate-600 text-xs leading-relaxed">
              Accès utilisateur final ultra-rapide sécurisé par certificat <span class="font-semibold text-slate-800">HTTPS / SSL</span>. Rendu parfaitement fluide et responsive, optimisé pour les ordinateurs et les terminaux mobiles.
            </p>
          </div>

        </div>

      </div>
    </section>
  `
})
export class PortfolioArchitectureComponent {}