# Pombo — lectura simple y verificable

Esta versión de Pombo mantiene la lectura simple, pero ya cubre la serie escultórica completa: cinco personajes y una escultura de Rafael Pombo. Cada pieza tiene una obra textual identificada; la escultura del autor tiene una ficha biográfica y remite al anexo bibliográfico.

La página conserva el castellano como fuente. La interfaz está disponible en español colombiano, inglés, portugués brasileño, francés, alemán, italiano, chino simplificado, coreano y japonés. Las interfaces adicionales son traducciones asistidas por IA y quedan marcadas para revisión humana. También ofrece una capa de inglés asistido por IA para lectura exploratoria; cada traducción está identificada como tal, indica que la revisión humana está pendiente y no se presenta como una edición oficial. Las otras interfaces informan cuando el cuento todavía no tiene traducción revisada. La voz del dispositivo es sólo una ayuda opcional del navegador y está identificada como tal.

La cobertura de lenguas nativas colombianas se muestra como una ruta de co-producción: Colombia reconoce 65 lenguas indígenas, dos lenguas criollas y el Romaní, y la Lengua de Señas Colombiana se trata como modalidad de acceso. No se generan traducciones automáticas de estas lenguas sin participación y revisión de sus comunidades.

## Ejecutar localmente

Desde esta carpeta:

```bash
python3 -m http.server 4173
```

Luego abre <http://localhost:4173> en un navegador. El servidor local es necesario para cargar los JSON editoriales, el anexo y registrar el service worker.

## Verificación editorial

La serie oficial de esculturas identifica **La Pobre Viejecita, Simón el Bobito, Rin Rin Renacuajo, Mirringa Mirronga, Rafael Pombo y El Gato Bandido**. El texto de los poemas se transcribe desde la antología de contraste enlazada en la página; cada entrada declara cuándo se normalizan saltos de línea o signos extraídos por OCR. La ficha bibliográfica de El renacuajo paseador mantiene además el registro de Cervantes Virtual y la digitalización del Banco de la República.

- [Registro bibliográfico de El renacuajo paseador en Cervantes Virtual](https://www.cervantesvirtual.com/obra/el-renacuajo-paseador-1168925/)
- [Descarga de la digitalización consultada del Banco de la República](https://babel.banrepcultural.org/digital/api/collection/p17054coll10/id/2720/download)
- [Serie escultórica anunciada por FUGA](https://www.fuga.gov.co/noticias/rin-rin-renacuajo-y-otros-personajes-de-pombo-llegan-al-centro-historico-de-bogota)
- [Antología textual de contraste de la Universidad Externado](https://www.uexternado.edu.co/wp-content/uploads/2017/01/80_Poemasinfantilesyotrospoemas_RafaelPombo-final.pdf)
- [Lenguas nativas y criollas de Colombia · Ministerio de las Culturas](https://mng.mincultura.gov.co/areas/poblaciones/APP-de-lenguas-nativas/Paginas/default.aspx)
- [Llegadas de visitantes no residentes por país emisor · MinCIT, 2025](https://www.mincit.gov.co/prensa/noticias/turismo/crecimiento-turismo-refleja-confianza-de-viajeros)

## Estructura

- `index.html`: estructura semántica y contenido de interfaz.
- `anexo.html` y `anexo.js`: anexo bibliográfico separado, con fuentes y alcance declarados.
- `styles.css`: sistema visual responsive, estados de foco y preferencias de acceso.
- `app.js`: idiomas de la interfaz, carga de las seis fichas, selección de cada escultura en el lector principal, poemas, ficha del autor, voz opcional del dispositivo y preferencias locales. La interfaz cubre nueve idiomas; los cuentos conservan el castellano fuente y sólo el inglés tiene una versión de cuento asistida por IA.
- `content/rin-rin.json`: ficha editorial y transcripción del relato, separadas para facilitar una revisión posterior.
- `content/sculptures.json`: seis esculturas y sus textos/ficha de autor; es la fuente de la página principal.
- `content/sculptures-en.json`: traducciones inglesas asistidas por IA, separadas de la fuente castellana y marcadas para revisión humana.
- `content/bibliografia-rafael-pombo.json`: inventario bibliográfico de referencia, no una lista inventada de ediciones.
- `manifest.webmanifest` y `sw.js`: shell instalable y cache básico.
- `.claude/plans/pombo-web-agentica.plan.md`: plan maestro de producto que guía esta implementación.

## Accesibilidad

- La navegación y los controles son operables con teclado y tienen foco visible.
- Los cambios de idioma y estados de carga se anuncian sin reemplazar el texto fuente.
- Cada escultura tiene una acción accesible para abrir su poema o ficha en el lector principal; el foco pasa al título de la lectura seleccionada.
- El contenido dinámico declara su idioma para lectores de pantalla; las fichas usan HTML semántico nativo (`details`/`summary`).
- Se respetan `prefers-reduced-motion`, alto contraste forzado, texto ampliado y el modo de alto contraste de Pombo.
- El menú móvil gestiona el foco al abrirse y al cerrarse; el anexo comunica carga y errores.
- El selector de idioma es un `<select>` nativo etiquetado; conserva la preferencia local y anuncia el idioma activo a lectores de pantalla.

## Antes de añadir formatos

1. Fijar una edición maestra para cada poema y revisar cada línea con esa edición.
2. Confirmar con FUGA y la dirección artística el vínculo final entre pieza, personaje y texto.
3. Obtener autorización y producir narraciones humanas con transcripciones revisadas.
4. Encargar traducciones y adaptaciones accesibles con revisión de hablantes y comunidades usuarias.
