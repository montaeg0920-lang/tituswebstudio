const nodes = {
  nav: document.querySelector('.site-header nav'), headerCta: document.querySelector('.header-cta'),
  heroCopy: document.querySelector('.hero-copy'), heroFooter: document.querySelector('.hero-footer'),
  intro: document.querySelector('.intro'), work: document.querySelector('.work'), services: document.querySelector('.services'),
  process: document.querySelector('.process'), domain: document.querySelector('.domain-note'), terms: document.querySelector('.terms'),
  contact: document.querySelector('.contact'), footer: document.querySelector('footer')
};

const englishHtml = Object.fromEntries(Object.entries(nodes).map(([key, node]) => [key, node.innerHTML]));
const english = { title: 'Titus Web Studio | Websites that move business forward', description: 'Titus Web Studio creates strategic, memorable websites for businesses in the United States and around the world.' };
const spanish = { title: 'Titus Web Studio | Sitios web que hacen avanzar a tu negocio', description: 'Titus Web Studio crea sitios web estratégicos y memorables para empresas en Estados Unidos y en todo el mundo.' };

const spanishHtml = {
  nav: '<a href="#work">Proyectos</a><a href="#services">Servicios</a><a href="#process">Proceso</a><a href="#contact">Contacto</a>',
  headerCta: 'Inicia un proyecto <span>↗</span>',
  heroCopy: `<p class="eyebrow">Diseño web independiente · EE. UU. y todo el mundo</p><h1>Sitios web con un <i>punto de vista claro.</i></h1><p class="lede">Creo sitios web distintivos y de alto rendimiento para empresas que quieren verse en internet tan profesionales como lo son en la vida real.</p><div class="hero-actions"><a class="button button-light" href="#contact">Cuéntame sobre tu proyecto <span>→</span></a><a class="text-link light" href="#work">Ver proyectos <span>↓</span></a></div>`,
  heroFooter: '<span>Desplázate para explorar</span><span class="hero-index">01 — 05</span>',
  intro: `<p class="eyebrow dark">Un estudio pequeño con alcance global</p><div class="intro-grid"><h2>Creado para que tu negocio sea <i>fácil de elegir.</i></h2><div><p>Cada proyecto comienza con lo que hace que tu negocio merezca ser elegido y se transforma en una experiencia digital clara, confiable y fácil de usar.</p><a class="text-link" href="#services">Lo que puedo crear <span>→</span></a></div></div>`,
  work: `<div class="section-heading"><div><p class="eyebrow">Dirección seleccionada</p><h2>Diseño que se siente como una <i>ventaja para tu negocio.</i></h2></div><p>Ejemplos del trabajo estratégico y orientado a resultados que creo para marcas de servicios, estudios y empresas en crecimiento.</p></div><div class="project-grid"><article class="project project-large"><div class="project-visual visual-sage"><span>01</span><strong>Northline<br />Architecture</strong><small>Claridad espacial / editorial refinada</small></div><div class="project-meta"><p>Arquitectura e interiores</p><h3>Northline Studio</h3><a href="#contact">Explorar un proyecto así <span>↗</span></a></div></article><article class="project"><div class="project-visual visual-blue"><span>02</span><strong>Better<br />Brand Days</strong><small>Optimista / comercio lleno de energía</small></div><div class="project-meta"><p>Marca de consumo</p><h3>Good Day Goods</h3><a href="#contact">Explorar un proyecto así <span>↗</span></a></div></article><article class="project"><div class="project-visual visual-terracotta"><span>03</span><strong>Ridge<br />&amp; Root</strong><small>Cálido / cercano / local</small></div><div class="project-meta"><p>Servicios profesionales</p><h3>Ridge &amp; Root</h3><a href="#contact">Explorar un proyecto así <span>↗</span></a></div></article></div>`,
  services: `<div class="services-photo"><img src="/assets/studio-workspace.png" alt="Un espacio creativo pulido" /><p>Diseño que le da<br />a tu próximo capítulo<br /><i>un hogar.</i></p></div><div class="services-copy"><p class="eyebrow dark">Servicios</p><h2>Hecho para la forma en que tu negocio <i>realmente funciona.</i></h2><div class="service-list"><details open><summary><span>01</span> Diseño web a medida <b>+</b></summary><p>Un sitio estratégico y adaptable, diseñado en torno a tu marca, servicios y las acciones que quieres que tomen tus clientes.</p></details><details><summary><span>02</span> Rediseño de sitio web <b>+</b></summary><p>Una presencia digital más enfocada y moderna para una empresa establecida que ha superado su sitio actual.</p></details><details><summary><span>03</span> Landing pages listas para lanzar <b>+</b></summary><p>Páginas claras y enfocadas en la conversión para un servicio, una oferta, una campaña o una nueva idea de negocio.</p></details><details><summary><span>04</span> Dominio y guía de lanzamiento <b>+</b></summary><p>Ayuda práctica para elegir un dominio que encaje con tu marca y conectar todo lo necesario para lanzar con confianza.</p></details></div></div>`,
  process: `<div class="process-top"><p class="eyebrow">El proceso</p><h2>Pasos claros. Sin <i>adivinanzas.</i></h2></div><ol><li><span>01</span><h3>Descubrir</h3><p>Alineamos negocio, audiencia, objetivos y el alcance correcto.</p></li><li><span>02</span><h3>Diseñar</h3><p>Defino la dirección visual y la estructura alrededor de tu historia.</p></li><li><span>03</span><h3>Construir</h3><p>Tu sitio adaptable toma forma con revisiones durante el proceso.</p></li><li><span>04</span><h3>Lanzar</h3><p>Conectamos tu dominio y compartimos el sitio terminado con el mundo.</p></li></ol>`,
  domain: `<p class="eyebrow dark">Tu dirección en internet</p><div><h2>Elige un dominio que <i>sea verdaderamente tuyo.</i></h2><p>Una ventaja de trabajar juntos es que puedes elegir la dirección web que mejor se adapte a tu empresa y marca, en lugar de una dirección genérica.</p></div>`,
  terms: '<p>El registro del dominio, las renovaciones anuales del dominio, el hosting y los servicios de terceros son pagados por el cliente y no están incluidos en la tarifa de diseño web.</p>',
  contact: `<div class="contact-intro"><p class="eyebrow">Inicia una conversación</p><h2>Construyamos el sitio que tu negocio ha estado <i>esperando.</i></h2><p>Comparte algunos detalles a continuación. Tu consulta llega directamente a mi correo y te responderé por email.</p><div class="contact-links"><a href="mailto:tituswebdesign1@gmail.com"><span>✉</span> tituswebdesign1@gmail.com</a><a href="https://wa.me/821085520920" target="_blank" rel="noreferrer"><span>◉</span> WhatsApp: +82 10 8552 0920 <b>↗</b></a></div></div><form id="inquiry-form" novalidate><label class="honeypot" aria-hidden="true">Sitio web<input type="text" name="website" tabindex="-1" autocomplete="off" /></label><div class="field-row"><label>Tu nombre<input type="text" name="name" autocomplete="name" required /></label><label>Correo electrónico<input type="email" name="email" autocomplete="email" required /></label></div><div class="field-row"><label>Negocio / empresa<input type="text" name="company" autocomplete="organization" /></label><label>Sitio web actual <span>(opcional)</span><input type="url" name="websiteUrl" placeholder="https://" /></label></div><label>Inversión estimada<select name="budget"><option value="">Selecciona un rango</option><option>Menos de $1,000</option><option>$1,000–$2,500</option><option>$2,500–$5,000</option><option>$5,000+</option><option>Hablemos</option></select></label><label>Cuéntame sobre tu proyecto<textarea name="message" rows="5" required placeholder="¿Qué te gustaría que lograra tu nuevo sitio web para tu negocio?"></textarea></label><button class="button button-dark" type="submit">Enviar consulta <span>→</span></button><p id="form-status" class="form-status" aria-live="polite"></p></form>`,
  footer: '<a class="brand" href="#top"><span class="brand-dot"></span>TITUS <em>WEB STUDIO</em></a><p>Diseño web independiente para empresas ambiciosas, en cualquier lugar.</p><p>© <span id="year"></span> Titus Web Studio</p>'
};

function bindLocalizedForm(language) {
  const form = document.querySelector('#inquiry-form');
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const submit = form.querySelector('button[type="submit"]');
    const data = Object.fromEntries(new FormData(form).entries());
    submit.disabled = true;
    submit.innerHTML = language === 'es' ? 'Enviando…' : 'Sending…';
    const status = document.querySelector('#form-status');
    try {
      const result = await fetch('/api/send-inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      const payload = await result.json();
      if (!result.ok) throw new Error(payload.error || 'Something went wrong.');
      form.reset();
      status.textContent = language === 'es' ? 'Gracias. Tu consulta está en camino y pronto me pondré en contacto.' : 'Thank you—your inquiry is on its way. I’ll be in touch soon.';
      status.className = 'form-status success';
    } catch (error) {
      status.textContent = language === 'es' ? 'No se pudo enviar ahora. Escríbeme directamente a tituswebdesign1@gmail.com.' : (error.message || 'Unable to send right now. Please email tituswebdesign1@gmail.com.');
      status.className = 'form-status error';
    } finally {
      submit.disabled = false;
      submit.innerHTML = language === 'es' ? 'Enviar consulta <span>→</span>' : 'Send project inquiry <span>→</span>';
    }
  });
}

function setLanguage(language) {
  const isSpanish = language === 'es';
  const html = isSpanish ? spanishHtml : englishHtml;
  Object.entries(html).forEach(([key, content]) => { nodes[key].innerHTML = content; });
  const copy = isSpanish ? spanish : english;
  document.documentElement.lang = language;
  document.title = copy.title;
  document.querySelector('meta[name="description"]').setAttribute('content', copy.description);
  document.querySelector('.site-header nav').setAttribute('aria-label', isSpanish ? 'Navegación principal' : 'Primary navigation');
  document.querySelector('.language-switch').setAttribute('aria-label', isSpanish ? 'Selector de idioma' : 'Language selector');
  document.querySelectorAll('[data-language]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  document.querySelector('#year').textContent = new Date().getFullYear();
  localStorage.setItem('titus-language', language);
  bindLocalizedForm(language);
}

document.querySelectorAll('[data-language]').forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));
const saved = localStorage.getItem('titus-language');
const browserPrefersSpanish = navigator.languages.some((locale) => locale.toLowerCase().startsWith('es'));
setLanguage(saved || (browserPrefersSpanish ? 'es' : 'en'));
