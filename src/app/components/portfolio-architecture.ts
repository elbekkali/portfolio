import { Component, AfterViewInit, ElementRef, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Enregistrement du plugin GSAP pour la gestion des trajectoires
gsap.registerPlugin(MotionPathPlugin);

@Component({
  selector: 'app-portfolio-architecture',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="architecture" class="py-20 border-b border-slate-200 bg-slate-50 overflow-hidden">
      <div class="max-w-6xl mx-auto px-4">
        
        <div class="text-center mb-12 md:mb-16">
          <h2 class="text-2xl md:text-3xl font-black text-slate-950 tracking-tight uppercase">
            Architecture de Réalisation
          </h2>
          <div class="h-1 w-12 bg-blue-700 mx-auto mt-4 rounded-full"></div>
          <p class="text-slate-600 mt-4 text-sm md:text-base font-medium italic">Un pipeline DevOps rectiligne, modulaire et automatisé.</p>
        </div>

        <div class="relative bg-white border border-slate-100 rounded-3xl p-6 md:p-12 shadow-sm backdrop-blur-sm min-h-[400px]">
          
          <div class="block md:hidden space-y-8 relative before:absolute before:top-4 before:bottom-4 before:left-[27px] before:w-0.5 before:bg-slate-200">
            
            <div class="relative flex items-start gap-4">
              <div class="z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 font-bold shrink-0 shadow-sm">
                💻
              </div>
              <div class="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-black text-slate-950 text-xs tracking-wide uppercase">Poste de Travail</h4>
                  <span class="text-[9px] bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-bold uppercase">Dev Zone</span>
                </div>
                <p class="text-[11px] text-slate-600 font-medium mb-3">Conception & Build Local (Serve)</p>
                <div class="flex flex-wrap gap-1.5">
                  <span class="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold">VSCode</span>
                  <span class="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold">Node v22</span>
                  <span class="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold text-red-600">Angular 21</span>
                  <span class="text-[10px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold text-cyan-600">Tailwind 4</span>
                </div>
              </div>
            </div>

            <div class="pl-16 -my-4">
              <span class="inline-block text-[9px] font-black tracking-widest text-slate-400 uppercase">⬇️ Commit & Push</span>
            </div>

            <div class="relative flex items-start gap-4">
              <div class="z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-slate-950 text-white font-bold shrink-0 shadow-md">
                <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.26.82-.577v-2.234c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.82 1.102.82 2.222v3.293c0 .319.22.694.825.576C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12z"/></svg>
              </div>
              <div class="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-black text-slate-950 text-xs tracking-wide uppercase">GitHub</h4>
                  <span class="text-[9px] bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full font-bold uppercase">Repository</span>
                </div>
                <p class="text-[11px] text-slate-600 font-medium">Gestion du code source (Private Repo) et orchestration des workflows automatisés de vérification via <strong>GitHub Actions</strong>.</p>
              </div>
            </div>

            <div class="pl-16 -my-4">
              <span class="inline-block text-[9px] font-black tracking-widest text-slate-400 uppercase">⬇️ CI / CD Deploy</span>
            </div>

            <div class="relative flex items-start gap-4">
              <div class="z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-50 border border-orange-200 text-orange-500 font-bold shrink-0 shadow-sm">
                🔥
              </div>
              <div class="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-black text-slate-950 text-xs tracking-wide uppercase">Firebase</h4>
                  <span class="text-[9px] bg-orange-100 text-orange-800 px-2 py-0.5 rounded-full font-bold uppercase">Cloud Hosting</span>
                </div>
                <p class="text-[11px] text-slate-600 font-medium mb-2">Hébergement sécurisé global, base de données Firestore NoSQL et exécution d'extensions cloud.</p>
                <div class="inline-flex items-center gap-1 text-[10px] bg-orange-100/60 text-orange-800 font-bold px-2 py-0.5 rounded-md">
                  📧 Extension Trigger Email Activée
                </div>
              </div>
            </div>

            <div class="pl-16 -my-4">
              <span class="inline-block text-[9px] font-black tracking-widest text-slate-400 uppercase">⬇️ Consultation</span>
            </div>

            <div class="relative flex items-start gap-4">
              <div class="z-10 flex items-center justify-center w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-600 font-bold shrink-0 shadow-sm">
                🌐
              </div>
              <div class="flex-1 bg-slate-50 border border-slate-100 rounded-2xl p-4 shadow-sm">
                <div class="flex justify-between items-center mb-2">
                  <h4 class="font-black text-slate-950 text-xs tracking-wide uppercase">Public Live</h4>
                  <span class="text-[9px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold uppercase">Production</span>
                </div>
                <p class="text-[11px] text-slate-600 font-medium">Application Web Progressive (PWA) disponible instantanément pour l'utilisateur final de manière sécurisée (HTTPS/SSL).</p>
              </div>
            </div>

          </div>

          <div class="hidden md:block">
            <svg #svgContainer viewBox="0 0 960 360" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
              
              <defs>
                <filter id="glow-light" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              <path id="line-dev-github" d="M 210 150 L 340 150" class="stroke-slate-200" stroke-width="2" fill="none" />
              <path id="line-github-firebase" d="M 460 150 L 560 150" class="stroke-slate-200" stroke-width="2" fill="none" />
              <path id="line-firebase-users" d="M 680 150 L 780 150" class="stroke-slate-200" stroke-width="2" fill="none" />

              <text class="fill-slate-400 font-bold text-[10px] tracking-wider uppercase" text-anchor="middle" x="275" y="135">Commit & Push</text>
              <text class="fill-slate-400 font-bold text-[10px] tracking-wider uppercase" text-anchor="middle" x="510" y="135">CI / CD Deploy</text>
              <text class="fill-slate-400 font-bold text-[10px] tracking-wider uppercase" text-anchor="middle" x="730" y="135">Consultation</text>

              <g class="node" id="node-pc">
                <rect x="20" y="50" width="190" height="230" rx="16" class="fill-white stroke-slate-100" stroke-width="1" />
                <rect x="20" y="50" width="190" height="4" rx="2" class="fill-blue-600" />
                <text x="115" y="75" text-anchor="middle" class="fill-slate-950 font-black text-[11px] tracking-wide uppercase">Poste de Travail</text>
                
                <g transform="translate(45, 95) scale(0.18)">
                  <path fill="#23A9F2" d="M112.1 10.3L15.4 79.9l-11-8.2c-3-2.3-4.3-6.2-3.1-9.8L18.4 12l17-3.9c2.3-.5 4.8.2 6.5 1.9l70.2 60.3z"/>
                  <path fill="#007ACC" d="M112.1 117.7L15.4 48.1l-11 8.2c-3 2.3-4.3 6.2-3.1 9.8l17.1 50 17 3.9c2.3.5 4.8-.2 6.5 1.9l70.2-60.4z"/>
                  <path fill="#1F75B3" d="M112.1 10.3l14.2 11c3.1 2.4 3.1 7.1 0 9.5l-29.4 22.9-17-14.6 32.2-28.8z"/>
                  <path fill="#0066B3" d="M112.1 117.7l14.2-11c3.1-2.4 3.1-7.1 0-9.5L96.9 74.3l-17 14.6 32.2 28.8z"/>
                </g>
                <text x="70" y="130" text-anchor="middle" class="fill-slate-400 font-bold text-[8px]">VSCode</text>

                <g transform="translate(130, 95) scale(0.18)">
                  <path fill="#339933" d="M64 12.4L18.7 38.5v51L64 115.6l45.3-26.1v-51L64 12.4zm28.3 70.3c0 15.6-11.3 23-28.3 23-15.3 0-25.5-6.1-27.1-18.7h11.9c1.3 6.2 7 9.3 15.2 9.3 10.2 0 16.2-4.4 16.2-13.4 0-20.7-33.8-13.9-33.8-37.4 0-11.9 9.3-19.4 24.8-19.4 14 0 23.4 6 25 17.5H72.4c-1.3-5.3-6.1-8.1-13.3-8.1-8.7 0-12.8 3.9-12.8 9.9 0 18.2 33.8 11.9 33.8 37.3z"/>
                </g>
                <text x="155" y="130" text-anchor="middle" class="fill-slate-400 font-bold text-[8px]">Node v22</text>

                <g transform="translate(45, 160) scale(0.18)">
                  <path fill="#B3B3B3" d="M63.81 1.026L4.553 21.88l9.363 77.637 49.957 27.457 50.214-27.828 9.36-77.635z"></path>
                  <path fill="#A6120D" d="M117.536 25.998L63.672 7.629v112.785l45.141-24.983z"></path>
                  <path fill="#DD1B16" d="M11.201 26.329l8.026 69.434 44.444 24.651V7.627z"></path>
                  <path fill="#F2F2F2" d="M78.499 67.67l-14.827 6.934H48.044l-7.347 18.374-13.663.254 36.638-81.508L78.499 67.67zm-1.434-3.491L63.77 37.858 52.864 63.726h10.807l13.394.453z"></path>
                  <path fill="#B3B3B3" d="M63.671 11.724l.098 26.134 12.375 25.888H63.698l-.027 10.841 17.209.017 8.042 18.63 13.074.242z"></path>
                </g>
                <text x="70" y="195" text-anchor="middle" class="fill-slate-400 font-bold text-[8px]">Angular 21</text>

                <g transform="translate(130, 160) scale(0.18)">
                  <path fill="#06B6D4" d="M64 32C42.7 32 29.3 42.7 24 64c8-5.3 17.3-6.7 28 0 6.1 3.8 10.5 8.3 15.3 13.3C75.2 85.3 85.5 96 104 96c21.3 0 34.7-10.7 40-32-8 5.3-17.3 6.7-28 0-6.1-3.8-10.5-8.3-15.3-13.3C92.8 42.7 82.5 32 64 32zm-40 64C2.7 96-10.7 106.7-16 128c8-5.3 17.3-6.7 28 0 6.1 3.8 10.5 8.3 15.3 13.3 7.9 8 18.2 18.7 36.7 18.7 21.3 0 34.7-10.7 40-32-8 5.3-17.3 6.7-28 0-6.1-3.8-10.5-8.3-15.3-13.3C52.8 106.7 42.5 96 24 96z"/>
                </g>
                <text x="155" y="195" text-anchor="middle" class="fill-slate-400 font-bold text-[8px]">Tailwind 4</text>

                <text x="115" y="245" text-anchor="middle" class="fill-slate-600 font-bold text-[10px]">Environnement de Dev</text>
                <text x="115" y="260" text-anchor="middle" class="fill-slate-400 text-[9px] italic">Build Local & Serve</text>
              </g>

              <g class="node" id="node-github">
                <rect x="340" y="90" width="120" height="120" rx="16" class="fill-white stroke-slate-100" stroke-width="1" />
                <rect x="340" y="90" width="120" height="4" rx="2" class="fill-slate-900" />
                <text x="400" y="115" text-anchor="middle" class="fill-slate-950 font-black text-[12px] tracking-wide">GITHUB</text>
                
                <g transform="translate(388, 127) scale(0.18)">
                  <path fill="#181717" d="M64 0C28.7 0 0 28.7 0 64c0 28.2 18.3 52.2 43.7 60.7 3.2.6 4.4-1.4 4.4-3.1 0-1.5-.1-5.6-.1-11-17.8 3.9-21.6-8.6-21.6-8.6-2.9-7.4-7.1-9.4-7.1-9.4-5.8-4 .4-3.9.4-3.9 6.4.5 9.8 6.6 9.8 6.6 5.7 9.8 15.1 7 18.8 5.3.6-4.1 2.2-7 4-8.6-14.2-1.6-29.2-7.1-29.2-31.7 0-7 2.5-12.7 6.6-17.2-.6-1.6-2.9-8.2.6-17 0 0 5.4-1.7 17.6 6.6 5.1-1.4 10.6-2.2 16-2.2s10.9.8 16 2.2c12.2-8.3 17.6-6.6 17.6-6.6 3.5 8.8 1.2 15.4.6 17 4.1 4.5 6.6 10.2 6.6 17.2 0 24.7-15 30-29.3 31.6 2.3 2 4.4 6 4.4 12.1 0 8.7-.1 15.8-.1 18 0 1.7 1.1 3.7 4.4 3.1C109.7 116.2 128 92.2 128 64c0-35.3-28.7-64-64-64z"/>
                </g>

                <text x="400" y="180" text-anchor="middle" class="fill-slate-600 font-bold text-[10px]">Dépôt distant</text>
                <text x="400" y="195" text-anchor="middle" class="fill-slate-400 font-medium text-[9px]">Actions Pipeline</text>
              </g>

              <g class="node" id="node-firebase">
                <rect x="560" y="90" width="120" height="120" rx="16" class="fill-white stroke-slate-100" stroke-width="1" />
                <rect x="560" y="90" width="120" height="4" rx="2" class="fill-orange-500" />
                <text x="620" y="110" text-anchor="middle" class="fill-slate-950 font-black text-[12px] tracking-wide">FIREBASE</text>
                
                <g transform="translate(605, 120) scale(0.19)">
                  <path fill="#FFCA28" d="M16.2 46.8l13.5-26.2c.6-1.1 2.2-1.1 2.7 0L45.9 46.8 16.2 46.8z"/>
                  <path fill="#FFA000" d="M46.4 45.4L33.2 19.6c-.6-1.1-2.2-1.1-2.7 0L24.8 30.6l21.6 14.8z"/>
                  <path fill="#F57C00" d="M16.2 46.8L1.6 77.2c-.7 1.4.3 3 1.9 2.8l42.9-34.6-40-38.6z"/>
                  <path fill="#FF7400" d="M46.4 45.4L3.5 1.4C2.4.3.7.8.6 2.3L16.2 46.8l30.2-1.4z"/>
                  
                  <g transform="translate(-10, 60) scale(1.3)">
                    <rect x="2" y="2" width="20" height="14" rx="2" class="stroke-orange-400 fill-white" stroke-width="2"/>
                    <path d="M2 2 L12 10 L22 2" class="stroke-orange-400 fill-none" stroke-width="2"/>
                    <circle cx="20" cy="14" r="4" class="fill-orange-500 stroke-white" stroke-width="1"/>
                    <path d="M20 12 L20 16 M18 14 L22 14" class="stroke-white" stroke-width="1"/>
                  </g>
                </g>

                <text x="620" y="177" text-anchor="middle" class="fill-slate-600 font-bold text-[9px]">Cloud Hosting</text>
                <text x="620" y="192" text-anchor="middle" class="fill-orange-600 font-black text-[8px] tracking-wide uppercase">Trigger Email Ext.</text>
              </g>

              <g class="node" id="node-users">
                <rect x="780" y="90" width="120" height="120" rx="16" class="fill-white stroke-slate-100" stroke-width="1" />
                <rect x="780" y="90" width="120" height="4" rx="2" class="fill-emerald-600" />
                <text x="840" y="115" text-anchor="middle" class="fill-slate-950 font-black text-[11px] tracking-wide uppercase">Public Live</text>
                
                <g transform="translate(825, 130)">
                  <rect x="2" y="2" width="26" height="18" rx="3" class="stroke-emerald-600 fill-none" stroke-width="2"/>
                  <line x1="10" y1="20" x2="20" y2="20" class="stroke-emerald-600" stroke-width="2"/>
                  <line x1="15" y1="20" x2="15" y2="23" class="stroke-emerald-600" stroke-width="2"/>
                  <circle cx="23" cy="6" r="1.5" class="fill-emerald-600"/>
                </g>

                <text x="840" y="180" text-anchor="middle" class="fill-emerald-700 font-bold text-[10px]">PWA App Live</text>
                <text x="840" y="195" text-anchor="middle" class="fill-slate-400 font-medium text-[9px]">HTTPS / Secure</text>
              </g>

              <circle id="single-packet" r="4" fill="#2563eb" filter="url(#glow-light)" style="opacity: 0;" />
            </svg>
          </div>

          <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div class="text-left md:text-center p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
              <span class="block text-slate-800 font-black text-xs">Étape 1 : Build Local</span>
              <p class="text-[10px] md:text-[9px] text-slate-500 font-medium mt-1">Conception modulaire et responsive avec Angular 21 et Tailwind CSS v4.</p>
            </div>
            <div class="text-left md:text-center p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
              <span class="block text-slate-800 font-black text-xs">Étape 2 : CI/CD Automation</span>
              <p class="text-[10px] md:text-[9px] text-slate-500 font-medium mt-1">Intégration continue, tests et déploiements sécurisés via GitHub Actions.</p>
            </div>
            <div class="text-left md:text-center p-4 rounded-xl bg-slate-50 border border-slate-100 shadow-sm">
              <span class="block text-slate-800 font-black text-xs">Étape 3 : Global Delivery</span>
              <p class="text-[10px] md:text-[9px] text-slate-500 font-medium mt-1">Hébergement mondial à faible latence (Firebase) et mails asynchrones automatisés.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }
    .node { transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    .node:hover { transform: translateY(-3px); }
  `]
})
export class PortfolioArchitectureComponent implements AfterViewInit {
  private svg = viewChild<ElementRef<SVGElement>>('svgContainer');

  ngAfterViewInit(): void {
    // On n'active l'animation que si l'élément SVG est présent (donc uniquement sur écran Desktop)
    setTimeout(() => {
      if (document.getElementById('single-packet')) {
        this.initSinglePacketAnimation();
      }
    }, 120);
  }

  private initSinglePacketAnimation(): void {
    const packet = document.getElementById('single-packet');
    if (!packet) return;

    const mainTimeline = gsap.timeline({ repeat: -1 });

    mainTimeline
      // --- SEGMENT 1 : Dev -> GitHub ---
      .set(packet, { opacity: 1 })
      .to(packet, {
        duration: 1.5,
        motionPath: {
          path: "#line-dev-github",
          align: "#line-dev-github",
          alignOrigin: [0.5, 0.5]
        },
        ease: "power1.inOut"
      })
      .set(packet, { opacity: 0 })

      // --- SEGMENT 2 : GitHub -> Firebase ---
      .to({}, { duration: 0.3 })
      .set(packet, { opacity: 1 })
      .to(packet, {
        duration: 1.2,
        motionPath: {
          path: "#line-github-firebase",
          align: "#line-github-firebase",
          alignOrigin: [0.5, 0.5]
        },
        ease: "none"
      })
      .set(packet, { opacity: 0 })

      // --- SEGMENT 3 : Firebase -> Public Live ---
      .to({}, { duration: 0.4 })
      .set(packet, { opacity: 1 })
      .to(packet, {
        duration: 1.4,
        motionPath: {
          path: "#line-firebase-users",
          align: "#line-firebase-users",
          alignOrigin: [0.5, 0.5]
        },
        ease: "power1.out"
      })
      .to(packet, { duration: 0.2, opacity: 0 })
      .to({}, { duration: 0.8 });
  }
}