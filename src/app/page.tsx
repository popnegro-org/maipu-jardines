import {
  ArrowDownRight,
  ArrowRight,
  Check,
  Clock3,
  Fence,
  Flower2,
  Leaf,
  MapPin,
  Scissors,
  ShieldCheck,
  Sprout,
  Trees,
} from 'lucide-react';
import { WhatsAppCta } from '@/components/whatsapp-cta';

const services = [
  {
    icon: Scissors,
    title: 'Corte de pasto',
    description: 'Corte de césped para patios, jardines y espacios verdes de distintos tamaños.',
  },
  {
    icon: Flower2,
    title: 'Terminaciones',
    description: 'Bordes y detalles para dejar el espacio ordenado y prolijo.',
  },
  {
    icon: Sprout,
    title: 'Limpieza y desmalezado',
    description: 'Evaluamos el estado del terreno y el trabajo necesario antes de cotizar.',
  },
  {
    icon: Trees,
    title: 'Mantenimiento periódico',
    description: 'Visitas programadas para conservar tu jardín durante todo el año.',
  },
];

const steps = [
  ['Contanos qué necesitás', 'Escribinos por WhatsApp y compartí la localidad y el tipo de espacio.'],
  ['Enviá algunas fotos', 'Con imágenes y una superficie aproximada podemos evaluar mejor el trabajo.'],
  ['Recibí tu presupuesto', 'Revisamos el alcance, la disponibilidad y la modalidad de atención.'],
  ['Coordinamos la visita', 'Acordamos día, horario y responsable antes de realizar el servicio.'],
];

const coverage = ['Maipú', 'Localidades cercanas', 'Consultar disponibilidad'];

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Corte de pasto y mantenimiento de jardines',
  serviceType: ['Corte de césped', 'Mantenimiento de jardines', 'Limpieza de espacios verdes'],
  areaServed: { '@type': 'AdministrativeArea', name: 'Maipú, Mendoza, Argentina y alrededores sujetos a confirmación' },
  description:
    'Servicio de corte de pasto y mantenimiento de jardines para clientes residenciales y comerciales en Maipú y localidades cercanas.',
  provider: { '@type': 'Organization', name: 'Maipú Jardines' },
};

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#inicio" aria-label="Maipú Jardines, inicio">
            <span className="brand-mark"><Leaf size={23} /></span>
            <span>maipú<span className="brand-light"> jardines</span></span>
          </a>
          <nav className="desktop-nav" aria-label="Navegación principal">
            <a href="#servicios">Servicios</a>
            <a href="#como-funciona">Cómo trabajamos</a>
            <a href="#cobertura">Cobertura</a>
          </nav>
          <WhatsAppCta className="header-cta" />
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow"><span className="eyebrow-dot" /> MAIPÚ · MENDOZA</span>
              <h1>Tu jardín en orden. <em>Tu tiempo, para vos.</em></h1>
              <p className="hero-description">
                Corte de pasto y mantenimiento de espacios verdes para casas, comercios y empresas de Maipú y alrededores.
              </p>
              <div className="hero-actions">
                <WhatsAppCta />
                <a className="text-link" href="#servicios">Conocé los servicios <ArrowDownRight size={17} /></a>
              </div>
              <div className="hero-points">
                <span><Check size={16} /> Presupuesto personalizado</span>
                <span><Check size={16} /> Trabajos puntuales y periódicos</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Ilustración de jardín cuidado y césped recién cortado" role="img">
              <div className="sun-disc" />
              <div className="garden-card garden-card-back"><span>ESPACIOS VERDES</span><Trees size={34} /></div>
              <div className="garden-ground">
                <div className="hill hill-back" />
                <div className="hill hill-front" />
                <div className="grass-lines"><i /><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
              <div className="garden-card garden-card-front"><span className="mini-icon"><Leaf size={17} /></span><span><b>Jardín cuidado</b><small>Todo en su lugar</small></span><Check className="card-check" size={19} /></div>
              <div className="hero-stamp"><Sprout size={23} /><span>CRECE<br />LO BUENO</span></div>
            </div>
          </div>
          <div className="hero-bottom container"><span>UN SERVICIO CERCANO, PARA DISFRUTAR MÁS TU ESPACIO</span><span className="scroll-cue">DESCUBRÍ MÁS <ArrowRight size={14} /></span></div>
        </section>

        <section className="intro section-pad">
          <div className="container intro-grid">
            <div><span className="eyebrow eyebrow-dark">CUIDAMOS TU ESPACIO</span><h2>Un jardín prolijo<br />cambia <em>todo.</em></h2></div>
            <div className="intro-text"><p>Nos ocupamos del corte de pasto y del mantenimiento de tu espacio verde para que esté siempre listo para disfrutar.</p><p>Atendemos necesidades residenciales y comerciales, con presupuestos según las características de cada lugar.</p></div>
          </div>
        </section>

        <section className="services section-pad" id="servicios">
          <div className="container">
            <div className="section-heading"><div><span className="eyebrow eyebrow-dark">QUÉ PODEMOS HACER</span><h2>Soluciones para<br /><em>tu espacio verde.</em></h2></div><p>Desde un corte puntual hasta un plan de mantenimiento con visitas programadas.</p></div>
            <div className="service-grid">
              {services.map(({ icon: Icon, title, description }, index) => (
                <article className="service-card" key={title}>
                  <div className="service-card-top"><span className="service-icon"><Icon size={24} /></span><span className="service-number">0{index + 1}</span></div>
                  <h3>{title}</h3><p>{description}</p><a href="#contacto" aria-label={`Consultar por ${title}`}><ArrowRight size={19} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="process section-pad" id="como-funciona">
          <div className="container process-grid">
            <div className="process-intro"><span className="eyebrow">SIMPLE Y DIRECTO</span><h2>De la consulta<br />al jardín <em>listo.</em></h2><p>Queremos que pedir un presupuesto sea fácil. Estos son los pasos.</p><WhatsAppCta /></div>
            <div className="steps-list">
              {steps.map(([title, description], index) => <article className="step" key={title}><span className="step-index">0{index + 1}</span><div><h3>{title}</h3><p>{description}</p></div><Check size={18} className="step-check" /></article>)}
            </div>
          </div>
        </section>

        <section className="recurring section-pad">
          <div className="container recurring-grid">
            <div className="recurring-art"><div className="ring ring-one" /><div className="ring ring-two" /><div className="calendar-card"><div className="calendar-head"><span>PLANIFICACIÓN</span><Clock3 size={18} /></div><div className="calendar-days"><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /><i /></div><div className="calendar-footer"><span className="calendar-dot" /> VISITAS PROGRAMADAS</div></div><Sprout className="recurring-sprout" size={112} strokeWidth={1.1} /></div>
            <div className="recurring-copy"><span className="eyebrow eyebrow-dark">MÁS QUE UN CORTE</span><h2>Que tu jardín esté bien, <em>todo el año.</em></h2><p>Después del primer trabajo, podemos coordinar visitas periódicas según el crecimiento del césped y las necesidades de tu espacio.</p><ul><li><Check size={17} /> Frecuencia quincenal o mensual</li><li><Check size={17} /> Agenda coordinada</li><li><Check size={17} /> Presupuesto según cada jardín</li></ul><WhatsAppCta /></div>
          </div>
        </section>

        <section className="coverage section-pad" id="cobertura">
          <div className="container coverage-grid"><div><span className="eyebrow">CERCA TUYO</span><h2>Empezamos en <em>Maipú.</em></h2><p>Atendemos Maipú y localidades cercanas. Consultanos por tu zona y confirmamos disponibilidad.</p><WhatsAppCta /></div><div className="coverage-panel"><div className="coverage-map"><div className="map-grid" /><MapPin className="map-pin" size={38} fill="currentColor" /><span className="map-label">MAIPÚ</span><span className="map-ring ring-a" /><span className="map-ring ring-b" /></div><div className="coverage-tags">{coverage.map((place) => <span key={place}><MapPin size={13} /> {place}</span>)}</div><small>Otras localidades: consultar disponibilidad.</small></div></div>
        </section>

        <section className="audience section-pad"><div className="container audience-inner"><div><span className="eyebrow eyebrow-dark">PARA CADA NECESIDAD</span><h2>Tu casa o tu negocio.<br /><em>Estamos para ayudarte.</em></h2></div><div className="audience-cards"><article><Fence size={25} /><h3>Hogares</h3><p>Patios, jardines y espacios verdes particulares.</p></article><article><ShieldCheck size={25} /><h3>Comercios y empresas</h3><p>Mantenimiento coordinado para espacios de trabajo.</p></article></div></div></section>

        <section className="contact section-pad" id="contacto"><div className="container contact-inner"><span className="eyebrow">HABLEMOS DE TU JARDÍN</span><h2>El primer paso es <em>simple.</em></h2><p>Contanos qué necesitás y dónde estás. Te ayudamos a encontrar la mejor opción para tu espacio.</p><WhatsAppCta className="button-light" /><small>La disponibilidad y el presupuesto se confirman según zona y características del trabajo.</small></div></section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#inicio"><span className="brand-mark"><Leaf size={21} /></span><span>maipú<span className="brand-light"> jardines</span></span></a><span>Corte de pasto y mantenimiento de jardines · Maipú, Mendoza</span><a href="#inicio">Volver arriba ↑</a></div><div className="container footer-legal">© {new Date().getFullYear()} Maipú Jardines. Todos los derechos reservados.</div></footer>
      <div className="mobile-cta"><WhatsAppCta /></div>
    </>
  );
}
