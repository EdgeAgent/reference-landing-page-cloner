/*
 * FOMO Family clone — orbit editorial system.
 * This page uses a dark orbital canvas, lowercase Space Grotesk display type,
 * indigo signal accents, generous vertical pacing, and product-led proof.
 */
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import { toast } from "sonner";

const ASSETS = {
  hero: "/manus-storage/fomo-orbit-hero_93111667.png",
  mark: "/manus-storage/fomo-orbit-mark_ab0bbdac.png",
  astronaut: "/manus-storage/fomo-astronaut_1d4f4536.png",
  desktop: "/manus-storage/fomo-desktop-phone_af1f7c3c.webp",
  phone: "/manus-storage/fomo-phone-product_0fc502cc.png",
  leaderboard: "/manus-storage/leaderboard_829cfd1e.webp",
  feed: "/manus-storage/social-static_a901838a.webp",
  alerts: "/manus-storage/alerts-static_85e0e47d.webp",
  signIn: "/manus-storage/sign-in-static_570c993b.webp",
  assets: "/manus-storage/assets-static_cc6ab4af.webp",
  applePay: "/manus-storage/apple-pay-static_2d4e3b40.webp",
  innerOrbit: "/manus-storage/inner-circle_de7cb509.webp",
  outerOrbit: "/manus-storage/outer-circle_81e9ff55.webp",
};

const APP_STORE = "https://apps.apple.com/us/app/fomo-never-miss-out/id6741115427";
const GOOGLE_PLAY = "https://play.google.com/store/apps/details?id=family.fomo.app";

const features = [
  {
    eyebrow: "LEADERBOARD",
    title: "become a legend, top the leaderboard",
    image: ASSETS.leaderboard,
    className: "feature-card--violet",
  },
  {
    eyebrow: "FEED",
    title: "discover and follow top traders",
    image: ASSETS.feed,
    className: "feature-card--blue",
  },
  {
    eyebrow: "ALERTS",
    title: "real time notifications for what the best are buying",
    image: ASSETS.alerts,
    className: "feature-card--slate",
  },
  {
    eyebrow: "EASY ONBOARDING",
    title: "create an account in an instant",
    image: ASSETS.signIn,
    className: "feature-card--green",
  },
  {
    eyebrow: "ZERO COMPLEXITY",
    title: "multichain & gasless",
    image: ASSETS.assets,
    className: "feature-card--indigo",
  },
  {
    eyebrow: "ONE CLICK TO BUY",
    title: "fund with apple pay",
    image: ASSETS.applePay,
    className: "feature-card--warm",
  },
];

function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <a className={`brand ${compact ? "brand--compact" : ""}`} href="#top" aria-label="FOMO home">
      <img src={ASSETS.mark} alt="" className="brand__mark" />
      <span className="brand__wordmark">fomo</span>
    </a>
  );
}

function StoreButtons({ dark = true }: { dark?: boolean }) {
  return (
    <div className={`store-buttons ${dark ? "store-buttons--dark" : ""}`} aria-label="Download the FOMO app">
      <a href={APP_STORE} target="_blank" rel="noreferrer" className="store-button">
        <span className="store-button__icon" aria-hidden="true">●</span>
        <span>
          <small>Download on the</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a href={GOOGLE_PLAY} target="_blank" rel="noreferrer" className="store-button">
        <span className="store-button__icon store-button__icon--play" aria-hidden="true">▶</span>
        <span>
          <small>GET IT ON</small>
          <strong>Google Play</strong>
        </span>
      </a>
    </div>
  );
}

function SignalButton({ children, variant = "primary", onClick }: { children: ReactNode; variant?: "primary" | "outline"; onClick?: () => void }) {
  return (
    <button className={`signal-button signal-button--${variant}`} onClick={onClick} type="button">
      <span>{children}</span>
      <ArrowUpRight size={16} strokeWidth={2.2} aria-hidden="true" />
    </button>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openTrading = () => {
    toast.success("Trading access is ready for the next step.", {
      description: "Connect your wallet or download the app to continue.",
      action: { label: "Download", onClick: () => window.open(APP_STORE, "_blank", "noopener,noreferrer") },
    });
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="fomo-page" id="top">
      <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
        <div className="site-header__inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#product">product</a>
            <a href="#features">features</a>
            <a href="#download">download</a>
          </nav>
          <div className="header-actions">
            <div className="header-stores"><StoreButtons /></div>
            <button className="login-button" type="button" onClick={() => toast("Login flow", { description: "The live login portal opens here." })}>Login</button>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#product" onClick={closeMenu}>product</a>
            <a href="#features" onClick={closeMenu}>features</a>
            <a href="#download" onClick={closeMenu}>download</a>
            <button type="button" onClick={() => { closeMenu(); toast("Login flow", { description: "The live login portal opens here." }); }}>login <ArrowUpRight size={15} /></button>
          </div>
        )}
      </header>

      <main>
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-section__backdrop" style={{ backgroundImage: `url(${ASSETS.hero})` }} />
          <div className="hero-section__stars" aria-hidden="true" />
          <div className="hero-section__content reveal reveal--hero">
            <p className="eyebrow eyebrow--hero">social crypto trading, reimagined</p>
            <h1 className="hero-wordmark">fomo</h1>
            <h2 id="hero-title">where traders become legends.</h2>
            <p className="hero-copy">From memecoins to viral tokens, trade any crypto in seconds.</p>
            <div className="hero-actions">
              <SignalButton onClick={openTrading}>Start trading</SignalButton>
              <SignalButton variant="outline" onClick={() => document.querySelector("#download")?.scrollIntoView({ behavior: "smooth" })}>Download app</SignalButton>
            </div>
          </div>
          <div className="hero-section__scroll-hint" aria-hidden="true"><ChevronDown size={18} /><span>scroll to orbit</span></div>
        </section>

        <section className="web-section section-stage" id="product" aria-labelledby="web-title">
          <div className="orbit-lines orbit-lines--web" aria-hidden="true" />
          <div className="section-stage__copy reveal">
            <p className="eyebrow">now available on web</p>
            <h2 id="web-title">trade from anywhere.<br /><em>never lose a beat.</em></h2>
            <p>Open a trade on your phone, close it on your desktop — all in one app.</p>
            <div className="mini-stat-row" aria-label="Product highlights">
              <span><strong>01</strong> phone to web</span>
              <span><strong>02</strong> one connected account</span>
            </div>
          </div>
          <div className="product-stage reveal reveal--delay-1">
            <div className="product-stage__glow" aria-hidden="true" />
            <img src={ASSETS.desktop} alt="FOMO trading app shown on desktop and mobile devices" className="product-stage__desktop" />
            <img src={ASSETS.phone} alt="FOMO trading app on a phone" className="product-stage__phone" />
            <span className="product-stage__label">live / everywhere</span>
          </div>
        </section>

        <section className="features-section" id="features" aria-labelledby="features-title">
          <div className="features-section__header reveal">
            <div>
              <p className="eyebrow">the social advantage</p>
              <h2 id="features-title">never miss out again</h2>
            </div>
            <p className="features-section__lede">the only social-first trading app</p>
          </div>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <article className={`feature-card ${feature.className} reveal reveal--delay-${(index % 3) + 1}`} key={feature.eyebrow}>
                <div className="feature-card__topline">
                  <span>{feature.eyebrow}</span>
                  <span className="feature-card__index">0{index + 1}</span>
                </div>
                <h3>{feature.title}</h3>
                <div className="feature-card__media">
                  <img src={feature.image} alt="" loading="lazy" />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="download-section section-stage" id="download" aria-labelledby="download-title">
          <div className="download-section__backdrop" style={{ backgroundImage: `url(${ASSETS.astronaut})` }} />
          <img className="download-section__orbit download-section__orbit--outer" src={ASSETS.outerOrbit} alt="" aria-hidden="true" />
          <img className="download-section__orbit download-section__orbit--inner" src={ASSETS.innerOrbit} alt="" aria-hidden="true" />
          <div className="download-section__content reveal">
            <p className="eyebrow">one app. every move.</p>
            <h2 id="download-title">a trading app<br />for the rest of us</h2>
            <p>Join the people making their name on FOMO.</p>
            <div className="download-section__actions">
              <SignalButton onClick={openTrading}>Start trading</SignalButton>
              <SignalButton variant="outline" onClick={() => window.open(GOOGLE_PLAY, "_blank", "noopener,noreferrer")}>Download app</SignalButton>
            </div>
            <StoreButtons />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Brand compact />
            <p>where traders become legends.</p>
          </div>
          <div className="site-footer__links">
            <div><span className="footer-label">about</span><a href="#product">product</a><a href="#features">features</a><a href="#download">download</a></div>
            <div><span className="footer-label">social</span><a href="https://discord.gg/fomofamily" target="_blank" rel="noreferrer">discord</a><a href="https://x.com/fomo" target="_blank" rel="noreferrer">x / twitter</a><a href="https://www.instagram.com/tryfomo" target="_blank" rel="noreferrer">instagram</a></div>
            <div><span className="footer-label">legal</span><a href="#top">privacy policy</a><a href="#top">terms of service</a></div>
          </div>
        </div>
        <div className="site-footer__bottom"><span>© 2026 FOMO Labs Inc.</span><span>made for the next move</span></div>
      </footer>
    </div>
  );
}

export default App;
