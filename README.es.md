# Frontend Mentor - Solución del Calculador de Pagos Hipotecarios

Esta es mi solución al desafío **Mortgage Repayment Calculator** de Frontend Mentor. Este proyecto se enfoca en construir una aplicación completamente responsive para calcular pagos hipotecarios utilizando HTML semántico, CSS moderno y JavaScript vanilla.

El desafío fue una gran oportunidad para practicar layouts responsive, validación de formularios, manipulación del DOM, cálculos financieros, mejoras de accesibilidad, controles de formularios personalizados y arquitectura frontend escalable sin utilizar frameworks o librerías externas.

---

## Tabla de contenidos

* [Descripción general](#descripción-general)
* [El desafío](#el-desafío)
* [Diseño](#diseño)
* [Enlaces](#enlaces)
* [Mi proceso](#mi-proceso)
* [Construido con](#construido-con)
* [Lo que aprendí](#lo-que-aprendí)

---

## Descripción general

Este proyecto es un calculador responsive de pagos hipotecarios que permite a los usuarios calcular pagos mensuales y el total a pagar basándose en el monto de la hipoteca, duración del préstamo, tasa de interés y tipo de hipoteca.

La aplicación soporta dos tipos de hipoteca:

* Hipoteca con amortización
* Hipoteca solo de interés

La interfaz valida dinámicamente las entradas del usuario, muestra estados de error y actualiza los resultados de los cálculos instantáneamente utilizando JavaScript y manipulación del DOM.

El diseño es completamente responsive y se adapta fluidamente entre dispositivos desktop, tablet y móviles.

Todo el estilo fue construido utilizando técnicas modernas de CSS como Flexbox, propiedades personalizadas de CSS, pseudo-elementos, media queries y selectores avanzados como `:has()`. La interactividad fue implementada usando JavaScript vanilla con programación orientada a eventos y fórmulas de cálculos financieros.

---

## El desafío

Los usuarios deben poder:

* Ver el layout óptimo dependiendo del tamaño de pantalla de su dispositivo.
* Calcular pagos hipotecarios dinámicamente.
* Seleccionar entre hipoteca con amortización o solo interés.
* Ver mensajes de validación para campos vacíos o inválidos.
* Ver estados hover y focus en elementos interactivos.
* Navegar por la interfaz utilizando interacciones de teclado.
* Experimentar scroll suave en dispositivos móviles.
* Interactuar con radio buttons personalizados.
* Ver layouts responsive en desktop y móviles.

---

## Diseño

* Diseño Desktop

<img src="./design/desktop-design-empty.jpg" alt="Vista previa del diseño desktop" width="600">

* Diseño Desktop completado

<img src="./design/desktop-design-completed.jpg" alt="Vista previa del diseño desktop" width="600">

* Estados activos

<img src="./design/active-states.jpg" alt="Vista previa de estados activos" width="600">

* Estados de error

<img src="./design/error-states.jpg" alt="Vista previa de estados de error" width="600">

* Diseño Mobile

<img src="./design/mobile-design-empty.jpg" alt="Vista previa mobile" width="200">

* Diseño Mobile completado

<img src="./design/mobile-design-completed.jpg" alt="Vista previa mobile" width="200">

---

## Enlaces

* URL de la solución: [Repositorio de GitHub](https://github.com/mlopezl/mortgage-repayment-calculator-main)
* URL del sitio en vivo: [Demo en vivo](https://mlopezl.github.io/mortgage-repayment-calculator-main/)

---

## Mi proceso

* Estructuré el layout utilizando elementos semánticos de **HTML5** como `main`, `section`, `form` y `article`.

* Seguí un enfoque **mobile-first**, mejorando progresivamente el layout con media queries.

* Construí layouts responsive utilizando **Flexbox** para alineación y espaciado.

* Utilicé **propiedades personalizadas de CSS (variables)** para crear un sistema de diseño escalable y mantenible.

* Creé radio buttons personalizados utilizando pseudo-elementos de CSS y `appearance: none`.

* Utilicé selectores avanzados de CSS como `:has()` para comportamientos dinámicos de estilos.

* Seguí la metodología **BEM** para nombres de clases consistentes y escalables.

* Añadí comportamiento interactivo utilizando event listeners de JavaScript:

  * `submit`

* Implementé validación personalizada de formularios con manejo dinámico de errores.

* Calculé pagos hipotecarios utilizando fórmulas financieras y funciones matemáticas de JavaScript.

* Gestioné el estado de la interfaz mediante manipulación del DOM y `classList`.

* Añadí comportamiento de scroll suave para mejorar la UX en móviles.

* Utilicé HTML semántico para mejorar estructura, legibilidad y accesibilidad.

* Mantuve separación de responsabilidades entre estructura (HTML), estilos (CSS) y comportamiento (JavaScript).

---

## Construido con

* HTML5
* CSS3
* JavaScript (ES6)
* Flexbox
* Propiedades personalizadas de CSS (variables)
* Flujo de trabajo mobile-first
* Principios de diseño responsive
* Convención de nombres BEM
* Manipulación del DOM
* Event listeners
* Fórmulas de cálculos financieros
* Validación de formularios
* Pseudo-elementos de CSS
* Selectores avanzados de CSS (`:has()`)
* Media queries
* Controles de formularios personalizados

---

## Lo que aprendí

* Construir aplicaciones responsive basadas en formularios utilizando HTML5 semántico.
* Crear CSS escalable y mantenible utilizando la metodología **BEM**.
* Utilizar **variables CSS** para centralizar colores y tokens de diseño.
* Construir componentes personalizados de radio buttons utilizando pseudo-elementos y `appearance: none`.
* Utilizar selectores avanzados de CSS como `:has()` para estilos dinámicos en elementos padre.
* Manejar validación de formularios dinámicamente con JavaScript.
* Manipular el DOM utilizando `querySelector`, `classList` y event listeners.
* Implementar cálculos hipotecarios utilizando fórmulas financieras.
* Formatear valores monetarios utilizando `toLocaleString()`.
* Mejorar la UX móvil con comportamiento de scroll suave.
* Gestionar layouts responsive utilizando un enfoque **mobile-first**.
* Mejorar UI/UX con estados hover, transiciones y feedback visual.
* Escribir código frontend modular sin frameworks manteniendo una arquitectura limpia.
