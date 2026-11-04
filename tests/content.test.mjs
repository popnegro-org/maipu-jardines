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

test('landing comunica servicio, ubicación y segmentos aprobados', () => {
  for (const phrase of ['Corte de pasto', 'Maipú', 'comercios y empresas', 'mantenimiento periódico']) {
    assert.ok(page.toLowerCase().includes(phrase.toLowerCase()), `Falta contenido: ${phrase}`);
  }
});

test('la conversión WhatsApp no inventa un teléfono', () => {
  assert.match(whatsapp, /NEXT_PUBLIC_WHATSAPP_NUMBER/);
  assert.match(acceptance, /No completar con un número de ejemplo|No inventar/i);
});

test('la documentación identifica bloqueantes previos al lanzamiento', () => {
  assert.match(acceptance, /Bloqueantes para lanzamiento público/);
  assert.match(acceptance, /WhatsApp Business/);
});

test('no publica canonical ni sitemap con un dominio candidato no confirmado', () => {
  assert.match(layout, /siteUrl \? \{ alternates: \{ canonical: '\/' \} \} : \{\}/);
  assert.match(robots, /siteUrl \? \{ sitemap:/);
  assert.match(sitemap, /if \(!siteUrl\) return \[\]/);
  assert.match(envExample, /^NEXT_PUBLIC_SITE_URL=$/m);
});
