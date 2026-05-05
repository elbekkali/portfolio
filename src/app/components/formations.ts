import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="formations" class="py-20 border-b border-slate-200 bg-white/30">
      <div class="max-w-4xl mx-auto px-4">
        
        <div class="text-center mb-16">
          <h2 class="text-3xl font-black text-slate-900 tracking-tight uppercase">
            Formation & Certifications
          </h2>
          <div class="h-1 w-12 bg-blue-700 mx-auto mt-4 rounded-full"></div>
        </div>

        <div class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-8 h-px bg-blue-200"></span>
            <h3 class="text-xs font-bold text-blue-600 uppercase tracking-[0.2em]">Certifications Professionnelles</h3>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div class="absolute -top-1 -right-1 w-24 h-16 opacity-100 transition-opacity">
                <img src="oriions-logo.png" alt="Logo ORIIONS" class="w-full h-full object-contain" />
              </div>
              
              <div class="relative z-10 mb-4">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold py-1 px-2 bg-emerald-50 text-emerald-700 rounded-md uppercase tracking-wider">
                    Mars 2025
                  </span>
                  <div class="text-emerald-200 group-hover:text-emerald-600 transition-colors">
                    <i class="fa-solid fa-award text-lg"></i>
                  </div>
                </div>
              </div>

              <h4 class="font-black text-slate-900 leading-tight mb-2 relative z-10">
                Conduire et piloter un projet innovant avec des méthodes agiles
              </h4>
              <p class="text-slate-500 text-xs font-medium uppercase tracking-tighter relative z-10 mb-1">
                ORIIONS - Organisme agréé France Compétences
              </p>
              <div class="mt-4 flex items-center gap-2 text-[10px] font-bold text-blue-600 uppercase italic relative z-10 font-mono">
                 ID : 2503MOHEL-065
              </div>
            </div>

            <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group relative overflow-hidden">
              <div class="absolute -top-1 right-2 w-20 h-20 opacity-100 transition-opacity">
                <img src="the-open-group-logo.png" alt="Logo The Open Group" class="w-full h-full object-contain" />
              </div>
              
              <div class="relative z-10 mb-4">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-bold py-1 px-2 bg-blue-50 text-blue-700 rounded-md uppercase tracking-wider">
                    Janv. 2025
                  </span>
                  <div class="text-blue-200 group-hover:text-blue-600 transition-colors">
                    <i class="fa-solid fa-certificate text-lg"></i>
                  </div>
                </div>
              </div>

              <h4 class="font-black text-slate-900 leading-tight mb-2 relative z-10">
                TOGAF® Enterprise Architecture Practitioner Part 2
              </h4>
              <p class="text-slate-500 text-xs font-medium uppercase tracking-tighter relative z-10 mb-1">
                The Open Group
              </p>
              <div class="mt-4 flex items-center gap-2 text-[10px] font-bold text-emerald-600 uppercase italic relative z-10">
                <i class="fa-solid fa-check-double text-emerald-300"></i> Architecture d'entreprise
              </div>
            </div>

          </div>
        </div>

        <div class="flex items-center gap-3 mb-10">
          <span class="w-8 h-px bg-slate-200"></span>
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">Cursus Universitaire</h3>
        </div>

        <div class="relative space-y-12 before:absolute before:inset-0 before:left-4 md:before:left-1/2 before:w-0.5 before:bg-slate-200">
          
          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="w-full md:w-[45%] pl-12 md:pl-0 md:text-right">
              <span class="inline-block text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">2011</span>
              <h3 class="text-lg font-black text-slate-800">Master 2 Informatique</h3>
              <p class="text-slate-600 font-medium text-sm mt-1 leading-relaxed">Université Pierre Mendès France – Grenoble</p>
            </div>
            <div class="hidden md:block w-[45%]"></div>
          </div>

          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="hidden md:block w-[45%]"></div>
            <div class="w-full md:w-[45%] pl-12">
              <span class="inline-block text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-2">2008</span>
              <h3 class="text-lg font-black text-slate-800">Formation technologies J2EE</h3>
              <p class="text-slate-600 font-medium text-sm mt-1 leading-relaxed">AFPA de Pont de Claix – Grenoble</p>
            </div>
          </div>

          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-700 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="w-full md:w-[45%] pl-12 md:pl-0 md:text-right">
              <span class="inline-block text-sm font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-2">2006</span>
              <h3 class="text-lg font-black text-slate-800">Master 1 Informatique</h3>
              <p class="text-slate-600 font-medium text-sm mt-1 leading-relaxed">Université Joseph Fourier – Grenoble</p>
            </div>
            <div class="hidden md:block w-[45%]"></div>
          </div>

          <div class="relative flex flex-col md:flex-row items-start md:justify-between group">
            <div class="absolute left-4 md:left-1/2 w-4 h-4 bg-slate-700 rounded-full border-4 border-white -translate-x-2 z-10 shadow-sm"></div>
            <div class="hidden md:block w-[45%]"></div>
            <div class="w-full md:w-[45%] pl-12">
              <span class="inline-block text-sm font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full mb-2">2000</span>
              <h3 class="text-lg font-black text-slate-800 leading-tight">BAC Sciences Mathématiques</h3>
              <p class="text-slate-600 font-medium text-sm mt-1 leading-relaxed">Casablanca</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class FormationsComponent {}