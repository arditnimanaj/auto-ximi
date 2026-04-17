import { useState, useEffect } from "react";
import logo from "./assets/ximi-logo.png";

const services = [
  {
    icon: "fa-cogs",
    title: "Guarnicioni i Kokës",
    desc: "Zëvendësim profesional dhe riparim i head gasket (kokës së motorit).",
  },
  {
    icon: "fa-grip-lines",
    title: "Boshti & Krahët",
    desc: "Riparim dhe ndërrim i boshteve dhe krahëve të makinës.",
  },
  {
    icon: "fa-compact-disc",
    title: "Frenat",
    desc: "Sistem frenimi i sigurt – disqe, rotor dhe më shumë.",
  },
  {
    icon: "fa-bolt",
    title: "Alternatori",
    desc: "Diagnostikim dhe riparim i sistemit elektrik.",
  },
  {
    icon: "fa-oil-can",
    title: "Ndërrim Vaji",
    desc: "Vaj cilësor dhe filtra origjinalë për motorin.",
  },
  {
    icon: "fa-laptop-medical",
    title: "Diagnostikim",
    desc: "Skanim kompjuterik i plotë i sistemit.",
  },
  {
    icon: "fa-sync-alt",
    title: "Friksioni (Clutch)",
    desc: "Zëvendësim dhe rregullim i friksionit.",
  },
  {
    icon: "fa-fan",
    title: "Turbo",
    desc: "Riparim dhe rikondicionim i turbos.",
  },
  {
    icon: "fa-exchange-alt",
    title: "Transmisioni",
    desc: "Servis manual dhe automatik i transmisionit.",
  },
  {
    icon: "fa-car",
    title: "Motori i Makinës",
    desc: "Rikonstruksion i plotë dhe riparime motori.",
  },
];

const whyUs = [
  {
    icon: "fa-medal",
    title: "Mbi 20 vite eksperiencë",
    desc: "Dy dekada në shërbim të klientëve tanë besnikë.",
  },
  {
    icon: "fa-tools",
    title: "Pajisje moderne",
    desc: "Teknologjia më e fundit për diagnostikim të saktë.",
  },
  {
    icon: "fa-bolt",
    title: "Shërbim i shpejtë",
    desc: "Efikas, i sigurt dhe gjithnjë në kohë.",
  },
  {
    icon: "fa-tag",
    title: "Çmime të arsyeshme",
    desc: "Cilësi premium me çmime transparente.",
  },
  {
    icon: "fa-smile",
    title: "Kënaqësi e garantuar",
    desc: "Qindra klientë të kënaqur na rekomandojnë.",
  },
];

function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="container nav">
        <a className="logo" onClick={() => go("home")}>
          <img src={logo} alt="Autoservice Ximi" className="logo-img" />
        </a>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li>
            <a onClick={() => go("home")}>Kryefaqja</a>
          </li>
          <li>
            <a onClick={() => go("about")}>Rreth nesh</a>
          </li>
          <li>
            <a onClick={() => go("services")}>Shërbimet</a>
          </li>
          <li>
            <a onClick={() => go("why")}>Pse ne</a>
          </li>
          <li>
            <a onClick={() => go("contact")}>Kontakt</a>
          </li>
        </ul>
        <button className="nav-cta" onClick={() => go("contact")}>
          Na kontaktoni
        </button>
        <button className="menu-toggle" onClick={() => setOpen((o) => !o)}>
          <i className={`fas ${open ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section className="hero" id="home">
      <div className="container hero-content">
        <div className="eyebrow">
          <i className="fas fa-star"></i> Shërbime profesionale me çmime të
          arsyeshme
        </div>
        <h1>
          Servis i besueshëm me mbi <span className="accent">20 vite</span>{" "}
          përvojë
        </h1>
        <p>
          Mekanikë të kualifikuar, pajisje moderne dhe përkushtim maksimal ndaj
          cilësisë – gjithçka që makina juaj meriton nën një çati.
        </p>
        <div className="hero-ctas">
          <button
            className="btn btn-primary"
            onClick={() => scrollTo("contact")}
          >
            <i className="fas fa-phone"></i> Na Kontakto
          </button>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="num">
              <span>20</span>+
            </div>
            <div className="label">Vite Eksperiencë</div>
          </div>
          <div className="stat">
            <div className="num">
              <span>Qindra</span>
            </div>
            <div className="label">Klient të kënaqur</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-content fade-in">
          <div className="eyebrow">Rreth Nesh</div>
          <h2>Pasion, Cilësi dhe Korrektësi në çdo detaj</h2>
          <p>
            Autoservice Ximi është një prej servisëve më të besueshëm të
            makinave me mbi dy dekada eksperiencë. Kombinojmë ekspertizën
            tradicionale me teknologjinë më të fundit për t'ju ofruar shërbim të
            plotë dhe të sigurt.
          </p>
          <p>
            Përkushtimi ndaj klientit dhe transparenca janë vlerat tona
            kryesore.
          </p>
          <ul className="about-list">
            <li>
              <i className="fas fa-check"></i> Mbi 20 vite përvojë në industri
            </li>
            <li>
              <i className="fas fa-check"></i> Mekanikë të certifikuar dhe të
              kualifikuar
            </li>
            <li>
              <i className="fas fa-check"></i> Përkushtim maksimal ndaj cilësisë
              dhe klientit
            </li>
            <li>
              <i className="fas fa-check"></i> Diagnostikim me teknologji
              moderne
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <div className="section-title fade-in">
          <div className="eyebrow">Shërbimet Tona</div>
          <h2>Zgjidhje komplete për makinën tuaj</h2>
          <p>
            Nga mirëmbajtja bazike deri tek ndërhyrjet më komplekse mekanike – i
            kemi të gjitha nën një kulm.
          </p>
        </div>
        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card fade-in">
              <div className="service-icon">
                <i className={`fas ${s.icon}`}></i>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section why" id="why">
      <div className="container">
        <div className="section-title fade-in">
          <div className="eyebrow" style={{ color: "var(--accent)" }}>
            Pse Ne
          </div>
          <h2>Pse të zgjidhni Autoservis Ximi</h2>
          <p style={{ color: "var(--gray-300)" }}>
            Arsye të shumta që na bëjnë zgjedhjen më të mirë për makinën tuaj.
          </p>
        </div>
        <div className="why-grid">
          {whyUs.map((w, i) => (
            <div key={i} className="why-card fade-in">
              <div className="icon">
                <i className={`fas ${w.icon}`}></i>
              </div>
              <h4>{w.title}</h4>
              <p>{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="section-title fade-in">
          <div className="eyebrow">Kontakti</div>
          <h2>Na kontaktoni sot</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-info fade-in">
            <div>
              <h3>Informacione Kontakti</h3>
              <p>Na kontaktoni përmes mjeteve të mëposhtme.</p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <div>
                <h5>Telefoni</h5>
                <a href="tel:+38344144489">+383 44 144 489</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <div>
                <h5>Adresa</h5>
                <a
                  href="https://maps.app.goo.gl/JnfyoBP7Ti1f7ec87"
                  target="_blank"
                  rel="noopener"
                >
                  Shiko në Google Maps
                </a>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-clock"></i>
              </div>
              <div>
                <h5>Orari</h5>
                <p>Hënë – Shtunë: 08:00 – 19:00</p>
              </div>
            </div>
            <div className="map">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=42.784222,20.508806&z=17&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form className="contact-form fade-in" onSubmit={onSubmit}>
            <h3>Dërgoni një email</h3>
            <p>
              {sent
                ? "✓ Faleminderit! Mesazhi juaj u dërgua me sukses."
                : "Plotësoni formularin dhe do t'ju kontaktojmë shpejt."}
            </p>
            <div className="form-group">
              <label>Emri i Plotë</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Emri juaj"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                placeholder="email@shembull.com"
              />
            </div>
            <div className="form-group">
              <label>Mesazhi</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                required
                placeholder="Si mund t'ju ndihmojmë?"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-paper-plane"></i> Dërgo email
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const go = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo">
              <img src={logo} alt="Autoservice Ximi" className="logo-img" />
            </div>
            <p>
              Servis i besueshëm makinash me mbi 20 vite përvojë. Cilësi,
              korrektësi dhe përkushtim ndaj çdo klienti.
            </p>
            <div className="social">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/auto_servise_ximi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                aria-label="TikTok"
                href="https://www.tiktok.com/@auto.servis.ximi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h5>Linke të Shpejta</h5>
            <ul>
              <li>
                <a onClick={() => go("home")}>Kryefaqja</a>
              </li>
              <li>
                <a onClick={() => go("about")}>Rreth Nesh</a>
              </li>
              <li>
                <a onClick={() => go("services")}>Shërbimet</a>
              </li>
              <li>
                <a onClick={() => go("contact")}>Kontakti</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Shërbimet</h5>
            <ul>
              <li>
                <a onClick={() => go("services")}>Diagnostikim</a>
              </li>
              <li>
                <a onClick={() => go("services")}>Ndërrim Vaji</a>
              </li>
              <li>
                <a onClick={() => go("services")}>Frenat</a>
              </li>
              <li>
                <a onClick={() => go("services")}>Transmisioni</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Kontakti</h5>
            <ul>
              <li>
                <i
                  className="fas fa-phone"
                  style={{ color: "var(--accent)", marginRight: 8 }}
                ></i>
                <a href="tel:+38344144489">+383 44 144 489</a>
              </li>
              <li>
                <i
                  className="fas fa-map-marker-alt"
                  style={{ color: "var(--accent)", marginRight: 8 }}
                ></i>
                <a
                  href="https://maps.app.goo.gl/JnfyoBP7Ti1f7ec87"
                  target="_blank"
                  rel="noopener"
                >
                  Shiko në hartë
                </a>
              </li>
              <li>
                <i
                  className="fas fa-clock"
                  style={{ color: "var(--accent)", marginRight: 8 }}
                ></i>
                Hënë – Shtunë 08:00–19:00
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Autoservice Ximi. Të gjitha të
            drejtat e rezervuara.
          </span>
        </div>
      </div>
    </footer>
  );
}

function Loader({ onDone }) {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setLeaving(true), 1800);
    const t2 = setTimeout(() => {
      setGone(true);
      onDone?.();
    }, 2400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onDone]);

  if (gone) return null;
  return (
    <div className={`splash ${leaving ? "splash-leave" : ""}`}>
      <img src={logo} alt="Autoservice Ximi" className="splash-logo" />
      <div className="splash-spinner" aria-hidden="true"></div>
    </div>
  );
}

function FloatingViber({ phone }) {
  const [open, setOpen] = useState(false);
  const viberUrl = `viber://add?number=${phone}`;
  return (
    <div className="viber-float">
      {open && (
        <div className="viber-popup" role="dialog">
          <div className="viber-popup-header">
            <div className="viber-avatar">
              <img src={logo} alt="Autoservice Ximi" />
            </div>
            <div>
              <div className="viber-popup-title">Autoservice Ximi</div>
            </div>
            <button
              className="viber-popup-close"
              aria-label="Mbyll"
              onClick={() => setOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="viber-popup-body">
            <div className="viber-bubble">
              Përshëndetje! Si mund t'ju ndihmojmë ?
            </div>
          </div>
          <a className="viber-popup-cta" href={viberUrl}>
            <i className="fab fa-viber"></i> Hap Viber
          </a>
        </div>
      )}
      <button
        className="viber-fab"
        aria-label="Chat on Viber"
        onClick={() => setOpen((o) => !o)}
      >
        <i className="fab fa-viber"></i>
      </button>
    </div>
  );
}

export default function App() {
  useFadeIn();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = loading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [loading]);

  return (
    <>
      {loading && <Loader onDone={() => setLoading(false)} />}
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
      {!loading && <FloatingViber phone="38344144489" />}
    </>
  );
}
