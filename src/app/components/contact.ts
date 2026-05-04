import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <!-- Section principale -->
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
      </div>

      <!-- MODALE DE CONTACT -->
      <div *ngIf="isModalOpen()" 
           class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
        
        <div class="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200">
          <div class="p-8">
            <div class="flex justify-between items-center mb-6">
              <h3 class="text-2xl font-black text-slate-900">Contact Direct</h3>
              <button (click)="closeModal()" class="text-slate-400 hover:text-slate-900 text-3xl font-light">&times;</button>
            </div>

            <form [formGroup]="contactForm" (ngSubmit)="sendToFirestore()" class="space-y-4 text-left">
              <!-- Champ Nom -->
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Votre Nom & Prénom</label>
                <input type="text" formControlName="from_name"
                       [class.border-red-500]="f['from_name'].invalid && f['from_name'].touched"
                       class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all">
                <p *ngIf="f['from_name'].invalid && f['from_name'].touched" class="text-red-500 text-xs mt-1">
                  Nom requis (doit contenir des lettres).
                </p>
              </div>

              <!-- Champ Entreprise -->
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Entreprise (Optionnel)</label>
                <input type="text" formControlName="company"
                       class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all"
                       placeholder="Ex: Capgemini, Freelance...">
              </div>
              
              <!-- Champ Email -->
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Votre Email Professionnel</label>
                <input type="email" formControlName="reply_to"
                       [class.border-red-500]="f['reply_to'].invalid && f['reply_to'].touched"
                       class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all">
                <p *ngIf="f['reply_to'].invalid && f['reply_to'].touched" class="text-red-500 text-xs mt-1">Email valide requis.</p>
              </div>

              <!-- Champ Message -->
              <div>
                <label class="block text-sm font-bold text-slate-700 mb-1">Votre Message</label>
                <textarea formControlName="message" rows="4"
                          [class.border-red-500]="f['message'].invalid && f['message'].touched"
                          class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all"></textarea>
                <p *ngIf="f['message'].invalid && f['message'].touched" class="text-red-500 text-xs mt-1">Message de 10 caractères minimum.</p>
              </div>

              <button type="submit" 
                      [disabled]="isSending() || contactForm.invalid"
                      class="w-full py-4 bg-blue-700 text-white font-black rounded-xl hover:bg-blue-800 disabled:bg-slate-300 transition-all shadow-lg active:scale-95">
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
  private firestore = inject(Firestore);
  private fb = inject(FormBuilder);

  // Gestion d'état avec Signals (Angular 17+)
  isModalOpen = signal(false);
  isSending = signal(false);
  statusMessage = signal('');
  statusColor = signal('');

  // Formulaire réactif avec validations strictes
  contactForm: FormGroup = this.fb.group({
    from_name: ['', [
      Validators.required, 
      Validators.minLength(2),
      Validators.pattern(/.*[a-zA-ZÀ-ÿ].*/) // Au moins une lettre
    ]],
    company: ['', [Validators.minLength(2)]],
    reply_to: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  // Accès rapide aux contrôles dans le template
  get f() { return this.contactForm.controls; }

  openModal() {
    this.isModalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    document.body.style.overflow = 'auto';
    this.statusMessage.set('');
    this.contactForm.reset();
  }

  async sendToFirestore() {
    if (this.contactForm.invalid) return;

    this.isSending.set(true);
    this.statusMessage.set('');

    const v = this.contactForm.value;

    // FONCTION DE NETTOYAGE (Anti-XSS)
    const sanitize = (text: string) => {
      return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    const safeMessage = sanitize(v.message);
    const safeName = sanitize(v.from_name);
    const safeCompany = sanitize(v.company || '');

    try {
      await addDoc(collection(this.firestore, 'mail'), {
        to: 'elbekkali23mohamed@gmail.com',
        message: {
          subject: `💼 Contact Portfolio : ${safeName}`,
          text: v.message, // Le texte brut pour la version texte du mail
          html: `
            <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
              <h2>Nouveau message sécurisé</h2>
              <p><strong>De :</strong> ${safeName}</p>
              <p><strong>Entreprise :</strong> ${safeCompany || 'Non spécifiée'}</p>
              <hr>
              <p><strong>Message :</strong></p>
              <div style="background: #f9fafb; padding: 15px; border-radius: 8px;">
                ${safeMessage.replace(/\n/g, '<br>')}
              </div>
            </div>
          `
        },
        timestamp: new Date()
      });

      this.statusMessage.set('✅ Message transmis avec succès !');
      this.statusColor.set('text-emerald-600');
      
      setTimeout(() => this.closeModal(), 2000);

    } catch (error) {
      console.error('Erreur Firestore:', error);
      this.statusMessage.set('❌ Échec de l\'envoi. Réessayez plus tard.');
      this.statusColor.set('text-red-600');
    } finally {
      this.isSending.set(false);
    }
  }
}