import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const page = await readFile(new URL('../src/app/page.tsx', import.meta.url), 'utf8');
const whatsapp = await readFile(new URL('../src/components/whatsapp-cta.tsx', import.meta.url), 'utf8');
const acceptance = await readFile(new URL('../docs/PMV_ACCEPTANCE.md', import.meta.url), 'utf8');
const layout = await readFile(new URL('../src/app/layout.tsx', import.meta.url), 'utf8');
const robots = await readFile(new URL('../src/app/robots.ts', import.meta.url), 'utf8');
const sitemap = await readFile(new URL('../src/app/sitemap.ts', import.meta.url), 'utf8');
const envExample = await readFile(new URL('../.env.example', import.meta.url), 'utf8');
const styles = await readFile(new URL('../src/app/globals.css', import.meta.url), 'utf8');

test('landing comunica servicio, ubicación y segmentos aprobados', () => {
  for (const phrase of ['Corte de pasto', 'Maipú', 'comercios y empresas', 'mantenimiento periódico']) {
    assert.ok(page.toLowerCase().includes(phrase.toLowerCase()), `Falta contenido: ${phrase}`);
  }
});

test('la conversión usa el WhatsApp confirmado y un mensaje contextual', () => {
  assert.match(whatsapp, /5492612456584/);
  assert.match(whatsapp, /wa\.me/);
  assert.match(whatsapp, /\[mi localidad\]/);
  assert.match(envExample, /NEXT_PUBLIC_WHATSAPP_NUMBER=5492612456584/);
});

test('la cobertura refleja las doce localidades aprobadas', () => {
  for (const place of ['Ciudad de Maipú', 'Luzuriaga', 'Coquimbito', 'General Gutiérrez', 'Cruz de Piedra', 'Russell', 'Lunlunta', 'General Ortega', 'Rodeo del Medio', 'Fray Luis Beltrán', 'San Roque', 'Barrancas']) {
    assert.ok(page.includes(place), `Falta cobertura: ${place}`);
  }
});

test('la URL canónica usa el dominio de Vercel confirmado', () => {
  assert.match(layout, /https:\/\/maipu-jardines\.vercel\.app/);
  assert.match(robots, /https:\/\/maipu-jardines\.vercel\.app/);
  assert.match(sitemap, /https:\/\/maipu-jardines\.vercel\.app/);
  assert.match(envExample, /NEXT_PUBLIC_SITE_URL=https:\/\/maipu-jardines\.vercel\.app/);
});

test('las imágenes de Pexels se identifican como ilustrativas', () => {
  assert.match(page, /Imagen ilustrativa/);
  assert.match(acceptance, /Pexels/);
});

test('GA4 permanece fuera del alcance', () => {
  assert.match(acceptance, /GA4 fuera de alcance|GA4 excluido/);
  assert.doesNotMatch(layout, /gtag|googletagmanager/i);
});


test('mobile UX incluye navegación accesible, CTA seguro y targets táctiles', () => {
  assert.match(page, /className="mobile-nav"/);
  assert.match(page, /aria-label="Navegación principal móvil"/);
  assert.match(page, /<ul>[\s\S]*href="#servicios"[\s\S]*href="#como-funciona"[\s\S]*href="#cobertura"/);
  assert.match(styles, /\.mobile-nav ul\{display:grid;grid-template-columns:repeat\(3,minmax\(0,1fr\)\)/);
  assert.match(styles, /\.mobile-nav a\{[^}]*min-height:48px/);
  assert.match(styles, /\.mobile-nav a:focus-visible/);
  assert.match(styles, /\.mobile-cta \.button\{min-height:50px\}/);
  assert.match(styles, /env\(safe-area-inset-bottom\)/);
  assert.match(styles, /@media\(max-width:380px\)[\s\S]*?\.service-grid\{grid-template-columns:1fr;gap:12px\}/);
});
