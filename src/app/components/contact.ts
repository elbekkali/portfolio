import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <section id="contact" class="py-24 bg-blue-900 rounded-[3rem] my-20 mx-4 overflow-hidden relative">
      <!-- Décoration de fond (cercles subtils) -->
      <div class="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-800 rounded-full blur-3xl opacity-50"></div>
      <div class="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-emerald-800 rounded-full blur-3xl opacity-30"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center px-6">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
          Prêt à piloter votre prochaine <br/> 
          <span class="text-emerald-400">transformation SI ?</span>
        </h2>
        
        <p class="text-blue-100 text-lg mb-12 max-w-2xl mx-auto">
          Que ce soit pour un projet de modernisation Mainframe, une transition vers Java ou un besoin en architecture TOGAF, discutons de vos enjeux stratégiques.
        </p>

        <div class="flex flex-col md:flex-row items-center justify-center gap-6">
          <!-- Email -->
          <a href="mailto:ton-email@exemple.com" 
             class="w-full md:w-auto px-10 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Me contacter par Email
          </a>

          <!-- LinkedIn -->
          <a href="https://www.linkedin.com/in/mohamed-el-bekkali" target="_blank"
             class="w-full md:w-auto px-10 py-5 bg-blue-800 text-white font-bold rounded-2xl border border-blue-700 hover:bg-blue-700 transition-all flex items-center justify-center gap-3">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            Profil LinkedIn
          </a>
        </div>

        <div class="mt-12 flex items-center justify-center gap-4 text-blue-200 text-sm">
          <span class="flex h-3 w-3 relative">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Actuellement à l'écoute de nouvelles opportunités
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {}