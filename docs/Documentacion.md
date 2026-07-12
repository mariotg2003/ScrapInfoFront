# Documentacion de ScrapInfo

## Resumen
ScrapInfo es una aplicacion web desarrollada con React, TypeScript y Vite que muestra productos de PcComponentes agrupados por categoria. La interfaz consume datos de un backend externo y renderiza tarjetas con imagen, nombre, precio y, cuando existe, precio anterior.

## Objetivo
El proyecto centraliza la consulta visual de distintos componentes de PC para facilitar la comparacion rapida de productos como memorias RAM, tarjetas graficas, monitores, teclados, sillas y otros articulos del catalogo.

## Tecnologias
- React 19
- TypeScript
- Vite
- CSS modular por componente
- Fetch API para consumo de datos

## Estructura General
- `src/main.tsx`: punto de entrada de la aplicacion.
- `src/App.tsx`: define el layout principal y recorre las secciones cargadas desde el JSON.
- `src/components/Header.tsx`: muestra el encabezado de la pagina.
- `src/components/ContentCard.tsx`: obtiene los productos por categoria desde el backend.
- `src/components/Card.tsx`: renderiza cada tarjeta individual.
- `src/data/PcComponentes.json`: define las categorias visibles en la pantalla.
- `src/utils/NormalizeNames.ts`: normaliza textos de nombre y precio.

## Flujo De Datos
1. `App.tsx` lee las secciones desde `PcComponentes.json`.
2. Por cada clave de seccion, se renderiza un `ContentCard`.
3. `ContentCard` hace una peticion a `https://scrapinfo.onrender.com/select/{type}`.
4. La respuesta se transforma en una lista de productos.
5. Cada producto se pinta con el componente `Card`.
6. Al hacer clic en una tarjeta, se abre la ficha del producto en PcComponentes en una nueva pestaña.

## Comportamiento De La UI
- El encabezado muestra el nombre de la aplicacion y la fecha actual.
- Cada categoria se presenta con su titulo y un contenedor de tarjetas.
- Las imagenes, nombres y precios se normalizan antes de mostrarse.
- Si el producto incluye precio anterior, se muestra como referencia visual.

## Fuente De Datos
La aplicacion depende de un backend remoto que expone el endpoint:

`https://scrapinfo.onrender.com/select/{categoria}`

Las categorias disponibles actualmente son:
- `disco_duro`
- `ram`
- `tarjetas`
- `ratones`
- `teclados`
- `monitores`
- `sillas`
- `auriculares`

## Scripts Disponibles
- `pnpm dev`: inicia el servidor de desarrollo.
- `pnpm build`: compila TypeScript y genera la version de produccion.
- `pnpm lint`: ejecuta ESLint sobre el proyecto.
- `pnpm preview`: previsualiza el build de produccion.

## Requisitos
- Node.js 18 o superior.
- pnpm.
- Acceso al backend de ScrapInfo para poder cargar productos.

## Instalacion
1. Clonar el repositorio.
2. Instalar dependencias con `pnpm install`.
3. Ejecutar `pnpm dev` para desarrollo.

## Desarrollo Local
Durante el desarrollo, la interfaz se refresca con Vite y consulta directamente el backend remoto. Si el servicio no responde, las categorias quedan vacias y se registra el error en consola.

## Build Y Despliegue
La compilacion se realiza con `pnpm build`. El resultado final queda preparado para publicarse como aplicacion estatica.

## Notas Tecnicas
- `ContentCard` acepta respuestas del backend tanto como arreglo directo como objeto con arreglo anidado.
- `Card` abre el enlace del producto en una nueva pestaña.
- `NormalizeNames.ts` ayuda a mantener consistencia visual en nombres y precios.

## Consideraciones
- Si el backend cambia la estructura de respuesta, puede ser necesario ajustar el mapeo en `ContentCard`.
- Si la URL base del backend cambia, debe actualizarse el fetch central.
- Los productos dependen de enlaces externos de PcComponentes, por lo que la navegacion depende de ese dominio.