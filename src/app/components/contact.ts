import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <!-- Section principale (inchangée visuellement, seul le bouton change) -->
    <section id="contact" class="py-24 bg-blue-900 rounded-[3rem] my-20 mx-4 overflow-hidden relative">
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
          <!-- Nouveau bouton qui ouvre la modale -->
          <button (click)="openModal()" 
             class="w-full md:w-auto px-10 py-5 bg-white text-blue-900 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl flex items-center justify-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Me contacter par Email
          </button>

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

      <!-- MODALE (S'affiche uniquement si isModalOpen est vrai) -->
      <div *ngIf="isModalOpen()" 
           class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="p-8">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-black text-slate-900">Contact Direct</h3>
              <button (click)="closeModal()" class="text-slate-400 hover:text-slate-900 text-3xl font-light">&times;</button>
            </div>

            <form (ngSubmit)="sendToFirestore()" #contactForm="ngForm" class="space-y-4">
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Votre Nom</label>
                <input type="text" name="name" [(ngModel)]="formData.from_name" required
                       class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all">
              </div>
              
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Votre Email</label>
                <input type="email" name="email" [(ngModel)]="formData.reply_to" required
                       class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all">
              </div>

              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Votre Message</label>
                <textarea name="message" [(ngModel)]="formData.message" rows="4" required
                          class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all"></textarea>
              </div>

              <button type="submit" 
                      [disabled]="isSending() || !contactForm.valid"
                      class="w-full py-4 bg-blue-700 text-white font-black rounded-xl hover:bg-blue-800 disabled:bg-slate-300 transition-all">
                {{ isSending() ? 'Envoi en cours...' : 'Envoyer le message' }}
              </button>

              <p *ngIf="statusMessage()" 
                 [ngClass]="statusColor()" 
                 class="text-center text-sm font-bold mt-4 transition-all">
                {{ statusMessage() }}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  // Injection de Firestore
  private firestore = inject(Firestore);

  // Utilisation des Signals pour une réactivité optimale (Angular 17+)
  isModalOpen = signal(false);
  isSending = signal(false);
  statusMessage = signal('');
  statusColor = signal('');

  formData = {
    from_name: '',
    reply_to: '',
    message: ''
  };

  openModal() {
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden'; // Bloque le scroll derrière
  }

  closeModal() {
    this.isModalOpen.set(false);
    document.body.style.overflow = 'auto'; // Réactive le scroll
    this.statusMessage.set('');
  }

  async sendToFirestore() {
    this.isSending.set(true);
    this.statusMessage.set('');

    try {
      // Enregistrement dans la collection 'mail' pour l'extension Trigger Email
      await addDoc(collection(this.firestore, 'mail'), {
        to: 'elbekkali23mohamed@gmail.com', // L'adresse qui recevra le mail
        message: {
          subject: `Contact Portfolio : ${this.formData.from_name}`,
          text: this.formData.message,
          html: `
            <h3>Nouveau message de votre portfolio</h3>
            <p><strong>De:</strong> ${this.formData.from_name} (${this.formData.reply_to})</p>
            <p><strong>Message:</strong><br>${this.formData.message}</p>
          `
        },
        timestamp: new Date()
      });

      this.statusMessage.set('✅ Message envoyé avec succès !');
      this.statusColor.set('text-emerald-600');
      
      // Réinitialisation après 2 secondes
      setTimeout(() => {
        this.closeModal();
        this.formData = { from_name: '', reply_to: '', message: '' };
      }, 2000);

    } catch (error) {
      console.error(error);
      this.statusMessage.set('❌ Erreur lors de l\'envoi.');
      this.statusColor.set('text-red-600');
    } finally {
      this.isSending.set(false);
    }
  }
}