import { Component } from '@angular/core';

@Component({
  selector: 'app-trust-bar',
  standalone: true,
  template: `
    <div class="py-8 border-y border-slate-200 bg-white/50 mb-12">
      <div class="max-w-7xl mx-auto px-4">
        <p class="text-center text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-8">
          Expertise éprouvée au sein d'environnements critiques
        </p>
        <div class="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          
          <!-- Crédit Agricole -->
          <div class="flex flex-col items-center group cursor-help">
            <span class="text-xl font-bold text-slate-700 group-hover:text-[#00707B] transition-colors italic">Crédit Agricole</span>
            <span class="text-[10px] text-slate-400 font-medium tracking-widest mt-1">CATS</span>
          </div>

          <!-- Mainframe -->
          <div class="flex flex-col items-center group cursor-help">
            <span class="text-xl font-black text-slate-700 group-hover:text-blue-900 transition-colors">IBM z/OS</span>
            <span class="text-[10px] text-slate-400 font-medium tracking-widest mt-1">MAINFRAME</span>
          </div>

          <!-- Java -->
          <div class="flex flex-col items-center group cursor-help">
            <span class="text-xl font-extrabold text-slate-700 group-hover:text-[#f89820] transition-colors">JAVA</span>
            <span class="text-[10px] text-slate-400 font-medium tracking-widest mt-1">SPRING BOOT</span>
          </div>

          <!-- TOGAF -->
          <div class="flex flex-col items-center group cursor-help">
            <div class="border-2 border-slate-700 px-2 py-0.5 group-hover:border-red-700 transition-colors">
                <span class="text-lg font-black text-slate-700 group-hover:text-red-700 transition-colors italic">TOGAF® 10</span>
            </div>
            <span class="text-[10px] text-slate-400 font-medium tracking-widest mt-1">ARCHITECTE</span>
          </div>

        </div>
      </div>
    </div>
  `
})
export class TrustBarComponent {}