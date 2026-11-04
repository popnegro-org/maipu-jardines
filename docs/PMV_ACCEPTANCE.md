# Maipú Jardines — criterios de aceptación del PMV

## Objetivo
Captar consultas calificadas para corte de pasto y mantenimiento de jardines en Maipú y localidades cercanas, convertir el primer trabajo en una contratación y ofrecer mantenimiento periódico.

## Definiciones aprobadas
- Marca: Maipú Jardines (nombre comercial propuesto; validar disponibilidad registral y dominio antes del lanzamiento).
- Operación: mixta, con capacidad propia y colaboradores.
- Clientes: residenciales y comerciales.
- Conversión primaria: WhatsApp Business.
- Cobertura confirmada para el PMV: Ciudad de Maipú, Luzuriaga, Coquimbito, General Gutiérrez, Cruz de Piedra, Russell, Lunlunta, General Ortega, Rodeo del Medio, Fray Luis Beltrán, San Roque y Barrancas. La disponibilidad puntual se confirma según agenda y alcance.
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
- Dirección comercial, horarios, precios y SLA.
- Testimonios, reseñas, años de experiencia, certificaciones y fotografías de trabajos no suministradas.
- Publicación de LocalBusiness con dirección/geo/horarios no verificados.
- CRM, pagos, agenda online y automatizaciones.
- Promesas de cobertura o capacidad operativa no confirmadas.

## Bloqueantes para lanzamiento público
1. Verificar que el alias de Vercel permanezca conectado al proyecto y que el deployment aprobado esté publicado.
2. Probar el número de WhatsApp informado desde un dispositivo móvil y confirmar que pertenece al canal comercial.
3. Confirmar servicios efectivamente disponibles, radio de atención y proceso de asignación de colaboradores.
4. Las imágenes de Pexels son ilustrativas y están identificadas como tales; reemplazarlas por fotografías propias cuando estén disponibles.
5. Probar en móvil y escritorio el flujo real de WhatsApp.
6. GA4 excluido por decisión del titular; no instalar etiquetas ni enviar eventos.
7. Validar SEO técnico, accesibilidad, rendimiento y contenido antes de producción.

## Criterios técnicos
- `npm run lint` sin errores.
- `npm run typecheck` sin errores.
- `npm test` aprobado.
- `npm run build` aprobado.
- Landing sin overflow horizontal en 360 px, 390 px, 430 px, 680 px, 681 px, 768 px y escritorio.
- En móvil hay un menú hamburguesa con estado expandido anunciado (`aria-expanded`), relación `aria-controls`, etiqueta accesible dinámica y área táctil mínima de 48×48 px. Al abrir muestra Servicios, Cómo trabajamos y Cobertura en una lista vertical; cada enlace cierra el menú, Escape lo cierra y el foco visible permanece perceptible. CTA fijo con safe-area.
- En anchos de hasta 380 px, las tarjetas de servicios pasan a una columna para preservar legibilidad.
- La fotografía principal en móvil elimina elementos decorativos superpuestos y conserva la identificación de imagen ilustrativa.
- CTA visible y accesible; usa el número confirmado `5492612456584` y un mensaje inicial editable con localidad.
- Canonical y sitemap usan exclusivamente el dominio configurado; si falta, se omiten para evitar indexar un dominio candidato.
- No hay datos de negocio, reseñas, fotos o afirmaciones inventadas.

## Métrica principal
Porcentaje de primeros trabajos que se convierten en planes de mantenimiento recurrente. Métricas secundarias: leads, leads calificados, presupuestos, trabajos contratados, tiempo de respuesta y costo de adquisición.

- En mobile (hasta 680 px), el acceso secundario de pie "Volver arriba" permanece oculto para evitar duplicar la navegación y competir con el CTA fijo de WhatsApp; se conserva en desktop.
