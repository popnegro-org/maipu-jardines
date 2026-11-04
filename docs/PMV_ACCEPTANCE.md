# Maipú Jardines — criterios de aceptación del PMV

## Objetivo
Captar consultas calificadas para corte de pasto y mantenimiento de jardines en Maipú y localidades cercanas, convertir el primer trabajo en una contratación y ofrecer mantenimiento periódico.

## Definiciones aprobadas
- Marca: Maipú Jardines (nombre comercial propuesto; validar disponibilidad registral y dominio antes del lanzamiento).
- Operación: mixta, con capacidad propia y colaboradores.
- Clientes: residenciales y comerciales.
- Conversión primaria: WhatsApp Business.
- Cobertura inicial: Maipú como zona inicial; las localidades cercanas se confirman caso por caso antes de ofrecer el servicio.
- Infraestructura: priorizar planes gratuitos; el dominio puede tener costo de registro.

## Incluido
- Landing responsive mobile-first.
- Presentación de corte de pasto, terminaciones, limpieza/desmalezado sujeto a evaluación y mantenimiento periódico.
- Proceso de cotización en cuatro pasos.
- Cobertura inicial y atención residencial/comercial.
- CTA WhatsApp configurable por variable de entorno.
- Metadata, canonical, Open Graph, robots.txt, sitemap.xml y schema Service.
- Navegación accesible, estados de foco y soporte de movimiento reducido.

## Fuera de alcance hasta contar con datos reales
- Número de WhatsApp, dirección comercial, horarios, precios y SLA.
- Testimonios, reseñas, años de experiencia, certificaciones y fotografías de trabajos no suministradas.
- Publicación de LocalBusiness con dirección/geo/horarios no verificados.
- CRM, pagos, agenda online y automatizaciones.
- Promesas de cobertura o capacidad operativa no confirmadas.

## Bloqueantes para lanzamiento público
1. Confirmar titularidad/registro del dominio y configurar `NEXT_PUBLIC_SITE_URL`.
2. Confirmar número real de WhatsApp Business y configurar `NEXT_PUBLIC_WHATSAPP_NUMBER` (formato internacional, solo dígitos).
3. Confirmar servicios efectivamente disponibles, radio de atención y proceso de asignación de colaboradores.
4. Incorporar fotografías propias autorizadas y datos comerciales verificables.
5. Probar en móvil y escritorio el flujo real de WhatsApp.
6. Configurar GA4 únicamente con un ID autorizado y verificar eventos de conversión.
7. Validar SEO técnico, accesibilidad, rendimiento y contenido antes de producción.

## Criterios técnicos
- `npm run lint` sin errores.
- `npm run typecheck` sin errores.
- `npm test` aprobado.
- `npm run build` aprobado.
- Landing sin overflow horizontal en 360 px, 390 px, 768 px y escritorio.
- CTA visible y accesible; cuando falta el teléfono, no inventar un destinatario: el CTA dirige al bloque de contacto.
- Canonical y sitemap usan exclusivamente el dominio configurado; si falta, se omiten para evitar indexar un dominio candidato.
- No hay datos de negocio, reseñas, fotos o afirmaciones inventadas.

## Métrica principal
Porcentaje de primeros trabajos que se convierten en planes de mantenimiento recurrente. Métricas secundarias: leads, leads calificados, presupuestos, trabajos contratados, tiempo de respuesta y costo de adquisición.
