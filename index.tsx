<!DOCTYPE html>

<html class="dark" lang="en" style="">
  <head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>PANINIX STUDIO | High-Performance Digital Architectures</title>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <link
      href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&amp;family=JetBrains+Mono:wght@400;500;700&amp;display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap"
      rel="stylesheet"
    />
    <script id="tailwind-config">
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              'on-secondary': '#313030',
              outline: '#8f9379',
              'surface-variant': '#333535',
              'error-container': '#93000a',
              'surface-bright': '#37393a',
              'on-surface': '#e2e2e2',
              'inverse-surface': '#e2e2e2',
              'inverse-primary': '#536500',
              'primary-container': '#caf300',
              'secondary-container': '#484646',
              'on-secondary-fixed': '#1c1b1b',
              error: '#ffb4ab',
              'tertiary-fixed-dim': '#8fd0e2',
              'surface-dim': '#121414',
              'on-primary': '#2a3400',
              'inverse-on-surface': '#2f3131',
              'secondary-fixed': '#e6e1e1',
              tertiary: '#ffffff',
              'secondary-fixed-dim': '#c9c6c5',
              'on-tertiary-fixed-variant': '#004e5c',
              'on-primary-fixed-variant': '#3e4c00',
              'on-error-container': '#ffdad6',
              'on-primary-container': '#596c00',
              'surface-tint': '#b1d500',
              'on-secondary-container': '#b8b4b4',
              'surface-container': '#1e2020',
              surface: '#121414',
              'surface-container-low': '#1a1c1c',
              'surface-container-high': '#282a2b',
              background: '#121414',
              'on-tertiary': '#003640',
              'surface-container-lowest': '#0c0f0f',
              'primary-fixed': '#caf300',
              primary: '#ffffff',
              'on-error': '#690005',
              'on-tertiary-fixed': '#001f26',
              'on-primary-fixed': '#171e00',
              'on-background': '#e2e2e2',
              'primary-fixed-dim': '#b1d500',
              'on-tertiary-container': '#266d7d',
              'surface-container-highest': '#333535',
              'tertiary-fixed': '#abedff',
              'tertiary-container': '#abedff',
              'on-surface-variant': '#c5c9ac',
              'on-secondary-fixed-variant': '#484646',
              'outline-variant': '#454933',
              secondary: '#c9c6c5',
            },
            borderRadius: {
              DEFAULT: '0px',
              lg: '0px',
              xl: '0px',
              full: '0px',
            },
            spacing: {
              'margin-mobile': '16px',
              'margin-desktop': '40px',
              unit: '4px',
              gutter: '16px',
              'grid-cols': '12',
            },
            fontFamily: {
              'label-caps': ['JetBrains Mono'],
              'headline-lg': ['Sora'],
              'metric-lg': ['JetBrains Mono'],
              'display-lg': ['Sora'],
              'body-md': ['Sora'],
            },
            fontSize: {
              'label-caps': [
                '12px',
                {
                  lineHeight: '1.0',
                  letterSpacing: '0.15em',
                  fontWeight: '500',
                },
              ],
              'headline-lg': [
                '32px',
                {
                  lineHeight: '1.2',
                  letterSpacing: '-0.01em',
                  fontWeight: '600',
                },
              ],
              'metric-lg': [
                '40px',
                {
                  lineHeight: '1.0',
                  letterSpacing: '-0.02em',
                  fontWeight: '700',
                },
              ],
              'display-lg': [
                '64px',
                {
                  lineHeight: '1.1',
                  letterSpacing: '-0.02em',
                  fontWeight: '700',
                },
              ],
              'body-md': [
                '16px',
                { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' },
              ],
            },
          },
        },
      };
    </script>
    <style>
      html {
        scroll-behavior: smooth;
      }
      @media (prefers-reduced-motion: no-preference) {
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
      }

      .clipped-corner {
        clip-path: polygon(
          0 0,
          calc(100% - 12px) 0,
          100% 12px,
          100% 100%,
          0 100%
        );
      }

      .dot-grid {
        background-image: radial-gradient(circle, #2a2a2a 1px, transparent 1px);
        background-size: 24px 24px;
      }

      .hatch-pattern {
        background: repeating-linear-gradient(
          45deg,
          rgba(202, 243, 0, 0.05),
          rgba(202, 243, 0, 0.05) 1px,
          transparent 1px,
          transparent 10px
        );
      }

      /* Technical Line Styling */
      .fine-border {
        border-width: 0.5px;
        border-color: #2a2a2a;
      }
      .fine-border-b {
        border-bottom-width: 0.5px;
        border-color: #2a2a2a;
      }
      .fine-border-r {
        border-right-width: 0.5px;
        border-color: #2a2a2a;
      }

      /* HUD Spotlight */
      #hud-spotlight {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        background: radial-gradient(
          circle 400px at var(--mouse-x, 50%) var(--mouse-y, 50%),
          rgba(202, 243, 0, 0.03),
          transparent 80%
        );
      }

      /* Glitch Effect */
      .btn-glitch {
        position: relative;
        overflow: hidden;
      }
      .btn-glitch::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          0deg,
          transparent 40%,
          rgba(202, 243, 0, 0.2) 50%,
          transparent 60%
        );
        transform: rotate(30deg) translateY(-100%);
        transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        pointer-events: none;
      }
      .btn-glitch:hover::after {
        transform: rotate(30deg) translateY(100%);
      }

      /* Service Card Glow */
      .service-card {
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .service-card:hover {
        transform: scale(1.02);
        box-shadow: 0 0 30px -10px rgba(202, 243, 0, 0.3);
        border-color: #caf300 !important;
        z-index: 10;
      }

      /* Shimmer Scan */
      .shimmer-scan {
        position: relative;
        overflow: hidden;
      }
      .shimmer-scan::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(202, 243, 0, 0.05),
          transparent
        );
        animation: scan-sweep 4s infinite linear;
      }
      @keyframes scan-sweep {
        0% {
          left: -100%;
        }
        20% {
          left: 100%;
        }
        100% {
          left: 100%;
        }
      }

      /* Typing cursor */
      .data-cursor::after {
        content: '_';
        animation: blink 1s infinite;
      }
      @keyframes blink {
        50% {
          opacity: 0;
        }
      }
    </style>
  </head>
  <body
    class="bg-background text-on-background font-body-md selection:bg-primary-container selection:text-on-primary-container"
  >
    <div id="hud-spotlight"></div>
    <!-- NAVIGATION SHELL -->
    <nav
      class="fixed top-0 w-full z-50 flex justify-between items-center px-5 md:px-10 h-16 bg-background/90 backdrop-blur-md border-b border-surface-variant"
    >
      <div class="flex items-center gap-4">
        <img
          alt="Paninix Studio"
          class="h-12 w-12 object-contain"
          src="data:image/png;base64,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"
        />
        <span
          class="text-lg md:text-2xl font-label-caps font-bold tracking-tighter"
          style="color: #d4ff00"
          >PANINIX STUDIO</span
        >
      </div>
      <div class="hidden md:flex gap-8">
        <a
          class="nav-link text-label-caps font-label-caps text-secondary hover:text-primary-fixed transition-colors duration-200"
          href="#home"
        >
          HOME
        </a>

        <a
          class="nav-link text-label-caps font-label-caps text-secondary hover:text-primary-fixed transition-colors duration-200"
          href="#services"
        >
          SERVICES
        </a>

        <a
          class="nav-link text-label-caps font-label-caps text-secondary hover:text-primary-fixed transition-colors duration-200"
          href="#domains"
        >
          DOMAINS
        </a>

        <a
          class="nav-link text-label-caps font-label-caps text-secondary hover:text-primary-fixed transition-colors duration-200"
          href="#blog"
        >
          BLOG
        </a>

        <a
          class="nav-link text-label-caps font-label-caps text-secondary hover:text-primary-fixed transition-colors duration-200"
          href="#contact"
        >
          CONTACT
        </a>
      </div>
      <a
        class="btn-glitch clipped-corner bg-primary-container text-on-primary-fixed font-label-caps px-3 py-2 md:px-6 text-xs font-bold active:scale-95 transition-transform duration-100 display: inline-block"
        href="#contact"
      >
        <span class="hidden sm:inline"> GET A ESTIMATE </span>

        <span class="sm:hidden"> ESTIMATE </span>
      </a>
    </nav>
    <main class="pt-16">
      <!-- HERO SECTION -->
      <section
        class="relative min-h-[90vh] flex flex-col justify-center pt-5 md:pt-0 px-5 md:px-10 overflow-hidden dot-grid"
        id="home"
      >
        <div class="grid grid-cols-12 gap-gutter items-center">
          <div
            class="reveal col-span-12 lg:col-span-7 space-y-5 md:space-y-8 z-10"
          >
            <div class="flex items-center gap-2">
              <span
                class="w-2 h-2 rounded-full bg-primary-container animate-pulse shadow-[0_0_8px_#caf300]"
              ></span>
              <span
                class="text-label-caps font-label-caps text-primary-container"
                >SYSTEM STATUS: OPERATIONAL</span
              >
            </div>
            <h1
              class="font-display-lg text-[42px] sm:text-[52px] lg:text-display-lg leading-[0.95] tracking-tight max-w-xl"
            >
              WE BUILD
              <span class="text-primary-container">HIGH-PERFORMANCE</span> APPS
              &amp; WEB SOLUTIONS THAT SCALE.
            </h1>
            <p
              class="text-sm md:text-base text-on-secondary-container max-w-md border-l border-primary-container pl-4 leading-7"
            >
              Engineering digital infrastructure with mathematical precision.
              Our methodologies prioritize technical integrity, structural
              clarity, and aggressive performance benchmarks.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                class="btn-glitch clipped-corner bg-primary-container text-on-primary-fixed font-label-caps px-6 py-3 md:px-8 md:py-4 text-sm font-bold flex items-center justify-center text-center w-full sm:w-auto"
              >
                SCHEDULE CONSULTATION
              </a>
              <button
                class="btn-glitch border border-surface-variant font-label-caps px-6 py-3 md:px-8 md:py-4 text-sm font-bold hover:border-primary-container transition-colors"
              >
                VIEW WORK
              </button>
            </div>
          </div>
          <div
            class="reveal delay-200 col-span-12 lg:col-span-5 relative mt-12 lg:mt-0"
          >
            <div
              class="relative border border-surface-variant p-2 bg-surface/50 backdrop-blur-sm"
            >
              <div
                class="h-6 w-full flex items-center justify-between px-3 fine-border-b bg-surface-container-high mb-2"
              >
                <span
                  class="text-[10px] font-label-caps text-secondary data-cursor"
                  >PROJECT_WIRE_V04.XLS</span
                >
                <div class="flex gap-1.5">
                  <div class="w-2 h-2 bg-surface-variant"></div>
                  <div class="w-2 h-2 bg-surface-variant"></div>
                  <div class="w-2 h-2 bg-primary-container animate-pulse"></div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-2 aspect-[4/3]">
                <div
                  class="col-span-1 bg-surface-container-low border border-surface-variant p-4 flex flex-col justify-between"
                >
                  <div class="space-y-2">
                    <div class="h-1 w-1/2 bg-primary-container"></div>
                    <div class="h-8 w-full bg-surface-variant"></div>
                  </div>
                  <div class="grid grid-cols-2 gap-1">
                    <div
                      class="h-12 bg-primary-container/20 border border-primary-container/30 relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent animate-pulse"
                      ></div>
                    </div>
                    <div
                      class="h-12 bg-primary-container/20 border border-primary-container/30 relative overflow-hidden"
                    >
                      <div
                        class="absolute inset-0 bg-gradient-to-t from-primary-container/20 to-transparent animate-pulse"
                        style="animation-delay: 1s"
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-span-1 border border-surface-variant relative overflow-hidden"
                >
                  <div class="absolute inset-0 hatch-pattern opacity-20"></div>
                  <div class="p-4 space-y-4 relative">
                    <div
                      class="h-4 w-4 border border-primary-container animate-ping"
                      style="animation-duration: 3s"
                    ></div>
                    <div class="h-1 w-full bg-surface-variant"></div>
                    <div class="h-1 w-full bg-surface-variant"></div>
                    <div class="h-1 w-3/4 bg-surface-variant"></div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Decorative technical lines -->
            <div
              class="absolute -top-4 -right-4 w-12 h-12 border-t-2 border-r-2 border-primary-container opacity-50"
            ></div>
            <div
              class="absolute -bottom-4 -left-4 w-12 h-12 border-b-2 border-l-2 border-primary-container opacity-50"
            ></div>
          </div>
        </div>
      </section>
      <!-- CORE ARCHITECTURES -->
      <section
        class="bg-surface border-y border-surface-variant overflow-visible relative"
        id="services"
      >
        <div
          class="reveal px-5 md:px-10 pt-24 pb-12 flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0 border-b border-surface-variant"
        >
          <h2 class="font-headline-lg text-headline-lg">SERVICES</h2>

          <span class="text-label-caps font-label-caps text-secondary">
            [CAPABILITIES: 001-004]
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <!-- Card 1 -->
          <div
            class="reveal delay-100 service-card p-8 fine-border-r fine-border-b group hover:bg-surface-container-high cursor-crosshair"
          >
            <div class="flex justify-between items-start mb-12">
              <span
                class="material-symbols-outlined text-primary-container text-4xl group-hover:scale-110 transition-transform"
                >smartphone</span
              ><span class="text-label-caps font-label-caps text-secondary"
                >01</span
              >
            </div>
            <h3 class="font-headline-lg text-headline-lg mb-2">
              Mobile App Development
            </h3>
            <p class="text-on-secondary-container text-sm mb-6">
              We build stunning, cross-platform mobile apps for iOS and Android
              using React Native, focusing on smooth animations and great user
              experiences.
            </p>
            <div
              class="pt-4 border-t border-surface-variant group-hover:border-primary-container transition-colors"
            >
              <span class="text-xs font-label-caps text-primary-container"
                >[LABEL: MOBILE_APP]</span
              >
            </div>
          </div>
          <!-- Card 2 -->
          <div
            class="reveal delay-200 service-card p-8 fine-border-r fine-border-b group hover:bg-surface-container-high cursor-crosshair"
          >
            <div class="flex justify-between items-start mb-12">
              <span
                class="material-symbols-outlined text-primary-container text-4xl group-hover:scale-110 transition-transform"
                >open_in_browser</span
              ><span class="text-label-caps font-label-caps text-secondary"
                >02</span
              >
            </div>
            <h3 class="font-headline-lg text-headline-lg mb-2">
              Web Development
            </h3>
            <p class="text-on-secondary-container text-sm mb-6">
              Modern, responsive websites built with React. We create clean
              interfaces that load fast, look professional, and make it easy for
              your users to take action.
            </p>
            <div
              class="pt-4 border-t border-surface-variant group-hover:border-primary-container transition-colors"
            >
              <span class="text-xs font-label-caps text-primary-container"
                >[LABEL: WEB_CORE]</span
              >
            </div>
          </div>
          <!-- Card 3 -->
          <div
            class="reveal delay-300 service-card p-8 fine-border-r fine-border-b group hover:bg-surface-container-high cursor-crosshair"
          >
            <div class="flex justify-between items-start mb-12">
              <span
                class="material-symbols-outlined text-primary-container text-4xl group-hover:scale-110 transition-transform"
                >rocket_launch</span
              ><span class="text-label-caps font-label-caps text-secondary"
                >03</span
              >
            </div>
            <h3 class="font-headline-lg text-headline-lg mb-2">
              MVP Development
            </h3>
            <p class="text-on-secondary-container text-sm mb-6">
              With our strong product mindset, we help startups design, scope,
              and build their Minimum Viable Product (MVP) quickly, helping you
              launch and test your ideas in weeks, not months.
            </p>
            <div
              class="pt-4 border-t border-surface-variant group-hover:border-primary-container transition-colors"
            >
              <span class="text-xs font-label-caps text-primary-container"
                >[LABEL: PRODUCT_LAUNCH]</span
              >
            </div>
          </div>
          <!-- Card 4 -->
          <div
            class="reveal delay-400 service-card p-8 fine-border-b group hover:bg-surface-container-high cursor-crosshair"
          >
            <div class="flex justify-between items-start mb-12">
              <span
                class="material-symbols-outlined text-primary-container text-4xl group-hover:scale-110 transition-transform"
                >terminal</span
              ><span class="text-label-caps font-label-caps text-secondary"
                >04</span
              >
            </div>
            <h3 class="font-headline-lg text-headline-lg mb-2">
              App Testing &amp; Polish
            </h3>
            <p class="text-on-secondary-container text-sm mb-6">
              Thorough manual and device testing to make sure your application
              runs without bugs, feels highly polished, and is ready for launch
              on the App Store and Web.
            </p>
            <div
              class="pt-4 border-t border-surface-variant group-hover:border-primary-container transition-colors"
            >
              <span class="text-xs font-label-caps text-primary-container"
                >[LABEL: QA_TEST]</span
              >
            </div>
          </div>
        </div>
      </section>
      <!-- ARCHITECTURAL STANDARDS (TELEMETRY) -->
      <section
        class="py-24 px-5 md:px-10 grid grid-cols-12 gap-gutter overflow-hidden"
      >
        <div class="reveal col-span-12 lg:col-span-5 space-y-8 active">
          <div class="flex flex-wrap gap-2">
            <span
              class="px-3 py-1 border border-surface-variant text-[10px] font-label-caps text-on-secondary-container hover:border-primary-container hover:text-primary-container transition-colors cursor-default"
              >REACT NATIVE</span
            >
            <span
              class="px-3 py-1 border border-surface-variant text-[10px] font-label-caps text-on-secondary-container hover:border-primary-container hover:text-primary-container transition-colors cursor-default"
              >NEXT.JS</span
            >
            <span
              class="px-3 py-1 border border-surface-variant text-[10px] font-label-caps text-on-secondary-container hover:border-primary-container hover:text-primary-container transition-colors cursor-default"
              >TYPESCRIPT</span
            >
            <span
              class="px-3 py-1 border border-surface-variant text-[10px] font-label-caps text-on-secondary-container hover:border-primary-container hover:text-primary-container transition-colors cursor-default"
              >KUBERNETES</span
            >
          </div>
          <h2 class="font-headline-lg text-headline-lg uppercase">
            OUR PROCESS
          </h2>
          <p class="text-on-secondary-container leading-relaxed">
            We keep our process simple and fast. By focusing exclusively on
            React Native and React JS, we bypass unnecessary development steps
            to move your project from a design canvas to a live app quickly. We
            build with clear layouts and clean file structures so your platform
            stays easy to update as your business grows.
          </p>
          <div class="grid grid-cols-2 gap-3">
            <div
              class="p-4 bg-surface border border-surface-variant hover:border-primary-container transition-colors"
            >
              <div class="text-[10px] uppercase text-primary-container">
                Launch Speed
              </div>

              <div class="text-4xl sm:text-4xl font-bold leading-none">2X</div>

              <div class="text-xl sm:text-2xl font-bold">FASTER</div>
            </div>
            <div
              class="p-4 bg-surface border border-surface-variant hover:border-primary-container transition-colors"
            >
              <p
                class="text-[10px] font-label-caps text-primary-container mb-1"
              >
                CODE CLARITY
              </p>
              <p class="font-metric-lg text-metric-lg">100%</p>
            </div>
          </div>
        </div>
        <div
          class="reveal delay-200 col-span-12 lg:col-span-7 bg-surface-container border border-surface-variant p-6 relative active"
        >
          <div class="flex justify-between items-center mb-6">
            <span
              class="text-label-caps font-label-caps text-primary-container flex items-center gap-2"
            >
              <span
                class="w-1.5 h-1.5 bg-primary-container rounded-full animate-pulse"
              ></span>
              TELEMETRY_LOGS
            </span>
            <span class="text-[10px] font-label-caps text-secondary"
              >AUTO-REFRESH: 2000MS</span
            >
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left">
              <thead class="border-b border-surface-variant">
                <tr>
                  <th class="py-3 text-[10px] font-label-caps text-secondary">
                    MODULE_ID
                  </th>
                  <th class="py-3 text-[10px] font-label-caps text-secondary">
                    LATENCY
                  </th>
                  <th class="py-3 text-[10px] font-label-caps text-secondary">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody class="font-label-caps text-xs">
                <tr
                  class="border-b border-surface-variant/50 hover:bg-surface-variant/20 transition-colors"
                >
                  <td class="py-4">UI MOCKUP WIREFRAMES</td>
                  <td class="py-4 text-primary-container">[VERIFIED]</td>
                  <td class="py-4">STABLE</td>
                </tr>
                <tr
                  class="border-b border-surface-variant/50 hover:bg-surface-variant/20 transition-colors"
                >
                  <td class="py-4">CROSS-PLATFORM BUILD</td>
                  <td class="py-4 text-primary-container">[READY]</td>
                  <td class="py-4">STABLE</td>
                </tr>
                <tr class="hover:bg-surface-variant/20 transition-colors">
                  <td class="py-4">APP STORE SUBMISSION</td>
                  <td class="py-4 text-primary-container">[OPTIMIZED]</td>
                  <td class="py-4 text-primary-container animate-pulse">
                    ACTIVE
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div
            class="absolute bottom-0 right-0 w-24 h-24 hatch-pattern opacity-10"
          ></div>
        </div>
      </section>
      <section
        class="py-24 border-y border-surface-variant overflow-hidden"
        style="background-color: #131313"
        id="domains"
      >
        <div
          class="reveal px-5 md:px-10 mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
        >
          <div>
            <span
              class="text-label-caps font-label-caps text-primary-container mb-2 block"
              >[EXPERIENCE: REAL-WORLD_BUILDS]</span
            >
            <h2 class="font-headline-lg text-4xl font-bold uppercase">
              SECTOR EXPERTISE
            </h2>
          </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
          <!-- Item 1: HEALTHCARE -->
          <div
            class="reveal delay-100 p-8 fine-border-r fine-border-b flex flex-col justify-between min-h-[280px] hover:bg-surface-container-low transition-colors group"
          >
            <div class="space-y-4">
              <span
                class="inline-block px-2 py-1 text-[10px] font-label-caps font-bold border border-primary-container text-primary-container mb-4"
              >
                [TAG: HEALTHCARE]
              </span>
              <h3
                class="font-headline-lg text-lg uppercase leading-tight group-hover:text-primary-container transition-colors"
              >
                Healthcare Apps
              </h3>
              <p class="text-on-secondary-container text-xs leading-relaxed">
                Simple layouts for patient data tracking, staff scheduling, and
                hospital room updates.
              </p>
            </div>
            <div class="pt-6">
              <span
                class="text-[10px] font-label-caps text-secondary opacity-30"
                >SECTOR_01</span
              >
            </div>
          </div>
          <!-- Item 2: FINTECH -->
          <div
            class="reveal delay-150 p-8 fine-border-r fine-border-b flex flex-col justify-between min-h-[280px] hover:bg-surface-container-low transition-colors group"
          >
            <div class="space-y-4">
              <span
                class="inline-block px-2 py-1 text-[10px] font-label-caps font-bold border border-primary-container text-primary-container mb-4"
              >
                [TAG: FINTECH]
              </span>
              <h3
                class="font-headline-lg text-lg uppercase leading-tight group-hover:text-primary-container transition-colors"
              >
                Finance Dashboards
              </h3>
              <p class="text-on-secondary-container text-xs leading-relaxed">
                Clean web screens tracking financial metrics, wallet balances,
                and asset distributions.
              </p>
            </div>
            <div class="pt-6">
              <span
                class="text-[10px] font-label-caps text-secondary opacity-30"
                >SECTOR_02</span
              >
            </div>
          </div>
          <!-- Item 3: AUTOMATION -->
          <div
            class="reveal delay-200 p-8 fine-border-r fine-border-b flex flex-col justify-between min-h-[280px] hover:bg-surface-container-low transition-colors group"
          >
            <div class="space-y-4">
              <span
                class="inline-block px-2 py-1 text-[10px] font-label-caps font-bold border border-primary-container text-primary-container mb-4"
              >
                [TAG: AUTOMATION]
              </span>
              <h3
                class="font-headline-lg text-lg uppercase leading-tight group-hover:text-primary-container transition-colors"
              >
                IoT Smart Home
              </h3>
              <p class="text-on-secondary-container text-xs leading-relaxed">
                Responsive mobile layouts to connect and control smart home
                appliances instantly.
              </p>
            </div>
            <div class="pt-6">
              <span
                class="text-[10px] font-label-caps text-secondary opacity-30"
                >SECTOR_03</span
              >
            </div>
          </div>
          <!-- Item 4: EDTECH -->
          <div
            class="reveal delay-250 p-8 fine-border-r fine-border-b flex flex-col justify-between min-h-[280px] hover:bg-surface-container-low transition-colors group"
          >
            <div class="space-y-4">
              <span
                class="inline-block px-2 py-1 text-[10px] font-label-caps font-bold border border-primary-container text-primary-container mb-4"
              >
                [TAG: EDTECH]
              </span>
              <h3
                class="font-headline-lg text-lg uppercase leading-tight group-hover:text-primary-container transition-colors"
              >
                Education Tools
              </h3>
              <p class="text-on-secondary-container text-xs leading-relaxed">
                Easy-to-use platforms for class scheduling, learning progress
                tracking, and student materials.
              </p>
            </div>
            <div class="pt-6">
              <span
                class="text-[10px] font-label-caps text-secondary opacity-30"
                >SECTOR_04</span
              >
            </div>
          </div>
          <!-- Item 5: LOGISTICS -->
          <div
            class="reveal delay-300 p-8 fine-border-r fine-border-b flex flex-col justify-between min-h-[280px] hover:bg-surface-container-low transition-colors group"
          >
            <div class="space-y-4">
              <span
                class="inline-block px-2 py-1 text-[10px] font-label-caps font-bold border border-primary-container text-primary-container mb-4"
              >
                [TAG: LOGISTICS]
              </span>
              <h3
                class="font-headline-lg text-lg uppercase leading-tight group-hover:text-primary-container transition-colors"
              >
                Delivery Systems
              </h3>
              <p class="text-on-secondary-container text-xs leading-relaxed">
                Straightforward order tracking, delivery routing grids, and
                real-time transit metrics.
              </p>
            </div>
            <div class="pt-6">
              <span
                class="text-[10px] font-label-caps text-secondary opacity-30"
                >SECTOR_05</span
              >
            </div>
          </div>
          <!-- Item 6: RETAIL -->
          <div
            class="reveal delay-350 p-8 fine-border-b flex flex-col justify-between min-h-[280px] hover:bg-surface-container-low transition-colors group"
          >
            <div class="space-y-4">
              <span
                class="inline-block px-2 py-1 text-[10px] font-label-caps font-bold border border-primary-container text-primary-container mb-4"
              >
                [TAG: RETAIL]
              </span>
              <h3
                class="font-headline-lg text-lg uppercase leading-tight group-hover:text-primary-container transition-colors"
              >
                E-Commerce Layouts
              </h3>
              <p class="text-on-secondary-container text-xs leading-relaxed">
                Quick loading product grids, minimal shopping checkout routes,
                and secure payment steps.
              </p>
            </div>
            <div class="pt-6">
              <span
                class="text-[10px] font-label-caps text-secondary opacity-30"
                >SECTOR_06</span
              >
            </div>
          </div>
        </div>
      </section>
      <!-- SYSTEM LOGS -->
      <section class="py-24 px-5 md:px-10 overflow-hidden" id="blog">
        <div
          class="reveal flex justify-between items-center mb-12 border-b border-surface-variant pb-4"
        >
          <h2 class="font-headline-lg text-headline-lg">SYSTEM LOGS</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <!-- Log Entry 1 -->
          <article class="reveal delay-100 space-y-4 group">
            <p class="text-[10px] font-label-caps text-secondary">
              LOG_003 // 21.07.25 // 07 MIN READ
            </p>
            <h4
              class="text-xl font-bold group-hover:text-primary-container transition-colors"
            >
              Securing Android React Native Apps: Detect USB Debugging &
              Developer Options using TurboModules + JSI + Codegen
            </h4>
            <p class="text-on-secondary-container text-sm leading-relaxed">
              Detailed analysis of v8 engine warm-up patterns and memory
              snapshotting techniques for sub-100ms response times.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-label-caps font-label-caps text-primary-container group-hover:translate-x-2 transition-transform"
              href="https://medium.com/@jatinbhuva/securing-android-react-native-apps-detect-usb-debugging-developer-options-using-turbomodules-1d0a2cb3cd45"
            >
              [READ_LOG_ENTRY -&gt;]
            </a>
          </article>
          <!-- Log Entry 2 -->
          <article class="reveal delay-200 space-y-4 group">
            <p class="text-[10px] font-label-caps text-secondary">
              LOG_002 // 26.04.23 // 03 MIN READ
            </p>
            <h4
              class="text-xl font-bold group-hover:text-primary-container transition-colors"
            >
              Exploring the power of React: Calling the child component’s
              function from the Parent component
            </h4>
            <p class="text-on-secondary-container text-sm leading-relaxed">
              Leveraging Skia and WebGPU to deliver consistent 120FPS
              performance across mobile and desktop environments.
            </p>
            <a
              class="inline-block text-label-caps font-label-caps text-primary-container group-hover:translate-x-2 transition-transform"
              href="https://medium.com/@jatinbhuva/exploring-the-power-of-react-calling-the-child-components-function-from-the-parent-component-5fc2fb4afd33"
              target="_blank"
              rel="noopener noreferrer"
            >
              [READ_LOG_ENTRY -&gt;]
            </a>
          </article>
          <!-- Log Entry 3 -->
          <article class="reveal delay-300 space-y-4 group">
            <p class="text-[10px] font-label-caps text-secondary">
              LOG_001 // 27.12.22 // 04 MIN READ
            </p>
            <h4
              class="text-xl font-bold group-hover:text-primary-container transition-colors"
            >
              Creating custom snippets of react-native for VS-Code
            </h4>
            <p class="text-on-secondary-container text-sm leading-relaxed">
              Why we replaced legacy state patterns with a custom event-sourced
              atomic bridge for mission-critical apps.
            </p>
            <a
              class="inline-block text-label-caps font-label-caps text-primary-container group-hover:translate-x-2 transition-transform"
              href="https://medium.com/@jatinbhuva/creating-custom-snippets-of-react-native-for-vs-code-35bd01de1504"
              target="_blank"
              rel="noopener noreferrer"
            >
              [READ_LOG_ENTRY -&gt;]
            </a>
          </article>
        </div>
      </section>
      <!-- INTAKE FORM -->
      <section
        class="bg-surface py-24 border-t border-surface-variant relative overflow-hidden pb-32"
        id="contact"
      >
        <div
          class="reveal px-5 md:px-10 grid grid-cols-12 gap-gutter items-center relative z-10"
        >
          <div class="col-span-12 lg:col-span-4">
            <h2 class="font-display-lg text-headline-lg mb-4">
              LET'S BUILD SOMETHING GREAT TOGETHER
            </h2>
            <p
              class="text-on-secondary-container font-label-caps text-xs data-cursor"
            >
              INITIATE PROJECT SCOPING PROTOCOL.
            </p>
          </div>
          <div class="col-span-12 lg:col-span-8">
            <form class="grid grid-cols-2 gap-8" onsubmit="sendEmail(event)">
              <div
                class="reveal delay-100 col-span-2 md:col-span-1 flex flex-col"
              >
                <label class="font-label-caps text-[10px] text-secondary mb-2"
                  >IDENTIFIER_NAME</label
                >
                <input
                  class="bg-surface-container-low border-0 border-b border-surface-variant focus:ring-0 focus:border-primary-container p-4 text-primary font-label-caps placeholder:text-surface-variant transition-colors"
                  placeholder="ENTER NAME"
                  type="text"
                  id="name"
                />
              </div>
              <div
                class="reveal delay-200 col-span-2 md:col-span-1 flex flex-col"
              >
                <label class="font-label-caps text-[10px] text-secondary mb-2"
                  >EMAIL_ADDRESS</label
                >
                <input
                  class="bg-surface-container-low border-0 border-b border-surface-variant focus:ring-0 focus:border-primary-container p-4 text-primary font-label-caps placeholder:text-surface-variant transition-colors"
                  placeholder="USER@DOMAIN.COM"
                  type="email"
                  id="email"
                />
              </div>
              <div class="reveal delay-300 col-span-2 flex flex-col">
                <label class="font-label-caps text-[10px] text-secondary mb-2"
                  >PROJECT_DESCRIPTION</label
                >
                <textarea
                  class="bg-surface-container-low border-0 border-b border-surface-variant focus:ring-0 focus:border-primary-container p-4 text-primary font-label-caps placeholder:text-surface-variant transition-colors resize-none"
                  placeholder="DESCRIBE THE CORE ARCHITECTURE REQUIREMENTS..."
                  rows="4"
                  id="message"
                ></textarea>
              </div>
              <div class="reveal delay-400 col-span-2">
                <button
                  class="btn-glitch w-full bg-primary-container text-on-primary-fixed py-4 md:py-6 px-4 font-label-caps font-bold text-base md:text-lg tracking-wide clipped-corner active:scale-[0.99] transition-transform flex items-center justify-center gap-2"
                  type="submit"
                >
                  <span>SEND MESSAGE</span>

                  <span
                    class="material-symbols-outlined text-[20px] md:text-[24px] transition-transform"
                  >
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- Large decorative background text -->
        <div
          class="absolute -bottom-8 -right-5 text-[180px] font-black text-white/[0.02] pointer-events-none select-none uppercase leading-none"
        >
          PANINIX
        </div>
      </section>
    </main>
    <!-- FOOTER SHELL -->
    <footer
      class="w-full px-5 md:px-10 py-12 flex flex-col md:flex-row justify-between items-start border-t border-surface-variant bg-surface"
    >
      <div class="col-span-12 md:col-span-4 mb-8 md:mb-0">
        <div class="flex items-center gap-3 mb-6">
          <img
            alt="Paninix Studio"
            class="h-8 w-8 md:h-12 md:w-12 object-contain"
            src="data:image/png;base64,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"
          />
          <span
            class="text-lg md:text-2xl font-label-caps font-bold"
            style="color: #d4ff00"
            >PANINIX STUDIO</span
          >
        </div>
        <p class="text-on-secondary-container text-xs font-label-caps mb-4">
          ©2026 PANINIX STUDIO / SYSTEM STATUS: OPERATIONAL
        </p>
        <div class="flex gap-4">
          <span class="w-4 h-4 bg-surface-variant animate-pulse"></span>
          <span
            class="w-4 h-4 bg-surface-variant animate-pulse"
            style="animation-delay: 0.5s"
          ></span>
          <span
            class="w-4 h-4 bg-primary-container animate-pulse"
            style="animation-delay: 1s"
          ></span>
        </div>
      </div>

      <div
        class="col-span-12 md:col-span-4 mt-8 md:mt-0 flex flex-col justify-between items-end text-right"
      >
        <div class="space-y-2">
          <p class="text-xs font-label-caps text-secondary">
            <a
              href="https://www.google.com/maps?q=Ahmedabad,Gujarat,India"
              target="_blank"
              rel="noopener noreferrer"
              title="Ahmedabad, Gujarat, India"
              style="cursor: pointer"
            >
              HEADQUARTERS // 23.0225° N, 72.5714° E
            </a>
          </p>
          <p class="text-xs font-label-caps text-secondary">
            AVAILABILITY // MON-FRI: 0900 - 1800 IST (0330 - 1230 UTC)
          </p>
        </div>
      </div>
    </footer>
    <script>
      // Micro-interaction: Update latency numbers randomly
      const latencies = document.querySelectorAll('.latency-cell');
      setInterval(() => {
        latencies.forEach(cell => {
          const current = parseInt(cell.innerText);
          const variance = Math.floor(Math.random() * 5) - 2;
          const newVal = Math.max(5, current + variance);
          cell.innerText = newVal + 'MS';

          // Add a brief glow effect when numbers update
          cell.style.textShadow = '0 0 10px rgba(202, 243, 0, 0.5)';
          setTimeout(() => (cell.style.textShadow = 'none'), 500);
        });
      }, 2000);

      // Mouse Tracking Spotlight
      const spotlight = document.getElementById('hud-spotlight');
      document.addEventListener('mousemove', e => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        spotlight.style.setProperty('--mouse-x', `${x}%`);
        spotlight.style.setProperty('--mouse-y', `${y}%`);
      });

      // Reveal on Scroll Logic
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      };

      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
          }
        });
      }, observerOptions);

      document
        .querySelectorAll('.reveal')
        .forEach(el => revealObserver.observe(el));

      // Simple typing simulator for elements with .data-cursor class
      document.querySelectorAll('.data-cursor').forEach(el => {
        const text = el.innerText;
        el.innerText = '';
        let i = 0;
        const type = () => {
          if (i < text.length) {
            el.innerText += text.charAt(i);
            i++;
            setTimeout(type, 30 + Math.random() * 50);
          }
        };
        // Delay typing until visible
        const typeObserver = new IntersectionObserver(entries => {
          if (entries[0].isIntersecting) {
            type();
            typeObserver.unobserve(el);
          }
        });
        typeObserver.observe(el);
      });
    </script>
    <script>
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              navLinks.forEach(link => {
                link.classList.remove(
                  'text-primary-fixed',
                  'font-bold',
                  'border-b-2',
                  'border-primary-fixed',
                );
                link.classList.add('text-secondary');

                if (link.getAttribute('href') === '#' + entry.target.id) {
                  link.classList.remove('text-secondary');
                  link.classList.add(
                    'text-primary-fixed',
                    'font-bold',
                    'border-b-2',
                    'border-primary-fixed',
                  );
                }
              });
            }
          });
        },
        {
          threshold: 0.4,
        },
      );

      sections.forEach(section => observer.observe(section));
    </script>
    <script>
      function sendEmail(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const subject = encodeURIComponent(`Project Inquiry from ${name}`);

        const body = encodeURIComponent(
          `Name: ${name}
Email: ${email}

Project Details:
${message}`,
        );

        window.location.href = `mailto:paninixstudio@gmail.com?subject=${subject}&body=${body}`;
      }
    </script>
  </body>
</html>
