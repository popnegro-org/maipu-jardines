# Maipú Jardines

PMV de captación para corte de pasto y mantenimiento de jardines en Maipú, Mendoza y alrededores.

## Desarrollo

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Variables de entorno

- `NEXT_PUBLIC_SITE_URL`: URL canónica del dominio registrado y conectado. Dejar vacía hasta confirmar el dominio; no se publica canonical ni sitemap con un dominio candidato.
- `NEXT_PUBLIC_WHATSAPP_NUMBER`: WhatsApp Business real en formato internacional, solo dígitos. No completar con un número de ejemplo.

## Validación

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Estado comercial

Consultar [docs/PMV_ACCEPTANCE.md](docs/PMV_ACCEPTANCE.md). El sitio no debe publicarse como canal de captación hasta configurar y probar el WhatsApp real y confirmar cobertura, servicios y datos comerciales.
