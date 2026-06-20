# Capitulo V: Product Implementation, Validation and Deployment 

## 5.1. Software Configuration Management

### 5.1.1. Software Development Environment Configuration

| Producto | Propósito en el proyecto | Categoría | Ruta de descarga / acceso | Descripción |
|----------|------------------------|-----------|---------------------------|-------------|
| JetBrains WebStorm | Desarrollo web moderno utilizando tecnologías como Vue y TypeScript. | Software Development | https://www.jetbrains.com/webstorm/ | IDE especializado en desarrollo frontend y backend con soporte para JavaScript, TypeScript y frameworks modernos como Vue.js. |
| JetBrains Rider | Desarrollo del backend en .NET y lógica del sistema. | Software Development | https://www.jetbrains.com/rider/ | IDE multiplataforma enfocado en desarrollo con .NET, con herramientas avanzadas para depuración, pruebas y productividad. |
| UXPressia | Representación gráfica de la experiencia del usuario. | Product UX/UI Design | https://uxpressia.com/ | Plataforma para crear journey maps y perfiles de usuario, permitiendo analizar visualmente la experiencia dentro del sistema. |
| Structurizr | Diseño y documentación de arquitecturas basadas en el modelo C4. | Product UX/UI Design | https://structurizr.com/ | Herramienta para modelar arquitecturas de software mediante el enfoque C4, facilitando la comprensión de sistemas complejos. |
| Lucidchart | Planificación estructurada del software mediante diagramas. | Product UX/UI Design | https://www.lucidchart.com/ | Aplicación para crear diagramas de flujo, arquitectura y procesos, mejorando la organización visual del proyecto. |
| Figma | Diseño de interfaces y prototipos de usuario. | Product UX/UI Design | https://www.figma.com/ | Herramienta colaborativa en la nube para diseñar interfaces UI/UX, prototipos interactivos y sistemas de diseño. |
| Visual Paradigm | Modelado UML y diseño de sistemas. | Product UX/UI Design | https://www.visual-paradigm.com/ | Plataforma para crear diagramas UML, BPMN y otros modelos, útil para análisis y diseño de software. |
| GitHub | Gestión de código fuente y trabajo colaborativo. | Collaboration & Version Control Tools | https://github.com/ | Plataforma para alojar repositorios, gestionar versiones y colaborar en el desarrollo de software. |
| Git CLI (Git) | Manejo local del control de versiones. | Version Control | https://git-scm.com/ | Sistema distribuido que permite gestionar cambios en el código, trabajar con ramas y sincronizar con repositorios remotos como GitHub. |

### 5.1.2. Source Code Management

En el proyecto HydroSmart, la gestión del código fuente se plantea como un componente clave para asegurar el orden, la trazabilidad y el crecimiento controlado de la solución. A través del uso de herramientas como sistemas de control de versiones, se busca mantener un registro claro de los cambios realizados en el desarrollo, facilitando la organización del proyecto y la posibilidad de retroceder a versiones anteriores en caso sea necesario.

En esta etapa inicial, el control del código se enfoca principalmente en el desarrollo del landing page, permitiendo gestionar de manera estructurada las modificaciones en el diseño y contenido. Este enfoque resulta fundamental para mantener consistencia en la propuesta visual y asegurar una base sólida para futuras implementaciones.

A medida que el proyecto evolucione hacia el desarrollo completo de la aplicación (frontend y backend), la gestión del código permitirá trabajar de forma más eficiente, facilitar la colaboración y asegurar la calidad del producto final. De esta manera, HydroSmart establece desde el inicio buenas prácticas que acompañarán el crecimiento progresivo de la solución.

Finalmente, el equipo dispone de un repositorio alterno, denominado upc-pre-1ASI0730-2610-HydroSmart (https://github.com/upc-pre-1ASI0729-2610-12010-HydroSmart), en el cual se administran versiones en etapa de prueba y entornos experimentales con un enfoque principalmente académico. Este espacio permite trabajar de manera segura en prototipos, realizar validaciones funcionales y explorar nuevas ideas antes de incorporarlas al sistema principal. Gracias a esta separación, se pueden evaluar mejoras en un entorno controlado, reduciendo posibles impactos negativos y asegurando la estabilidad de la plataforma base.


<div>
<img src="images/ourrepository.png" alt="Impact Mapping" width="800">
</div>



### 5.1.3. Source Code Style Guide & Conventions

El uso de un estilo de código unificado es clave para asegurar la mantenibilidad y la colaboración efectiva en el desarrollo de HydroSmart. Para ello, el equipo ha adoptado convenciones de codificación que promueven la claridad y consistencia en cada módulo de la plataforma, tomando como referencia estándares reconocidos de la industria. Toda la nomenclatura se aplica en inglés.

#### HTML y CSS

Se siguen la Google HTML/CSS Style Guide y las convenciones de W3Schools. Se utiliza minúsculas para etiquetas y atributos, indentación de 2 espacios, comillas dobles para valores de atributos y el atributo alt en todas las imágenes. Para CSS se emplea kebab-case en nombres de clases, variables CSS para colores y tipografías del Design System, y comentarios para separar secciones del archivo.

#### JavaScript y Vue

En JavaScript se siguen la Google JavaScript Style Guide y MDN JavaScript Guidelines, utilizando camelCase para variables y funciones, y const/let en lugar de var. Para Vue se sigue la Vue Style Guide oficial, nombrando los componentes en PascalCase y los archivos en kebab-case. Se aplica internacionalización mediante i18n, gestionando archivos de traducción para español e inglés.

#### Gherkin

Para los criterios de aceptación se siguen las Gherkin Conventions for Readable Specifications, utilizando la estructura Given-When-Then con escenarios redactados en inglés y en tercera persona presente.

### 5.1.4. Software Deployment Configuration

Para el despliegue de los productos digitales de HydroSmart, el equipo ha configurado GitHub Pages como plataforma de publicación para la Landing Page. Este servicio permite alojar sitios web estáticos directamente desde un repositorio de GitHub.
El proceso de despliegue sigue los siguientes pasos:

1. Los cambios se desarrollan en ramas feature siguiendo el flujo GitFlow establecido.
2. Una vez aprobados mediante Pull Request, los cambios se fusionan a la rama `develop`.
3. Cuando el equipo determina que el conjunto de cambios está listo para publicarse, se realiza el merge de `develop` a `main`.
4. GitHub Pages detecta automáticamente los cambios en la rama `main` y publica la nueva versión de la Landing Page.

La URL de despliegue de la Landing Page es la proporcionada por GitHub Pages asociada al repositorio de la organización. Para los Web Services y la Frontend Web Application, la configuración de despliegue se definirá en sprints posteriores conforme avance la implementación.


## 5.2. Landing Page, Services & Applications Implementation.

### 5.2.1. Sprint 1
Durante el Sprint 1 se planifico y se definió la implementación de la primera versión del landing page de HydroSmart. En este se establecio la propuesta de valor además de información necesaria para convencer al cliente. El trabajo planificado incluyó tanto la orgnización de la estructura y diseño visual, cómo funcionalidades esenciales como la internacionalización y sistema responsivo. 

#### 5.2.1.1. Sprint Planning n.

| Sprint #                          | Sprint 1                                                                                                                                                                                                                                                                                                               |
|-----------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Sprint Planning Background**    |                                                                                                                                                                                                                                                                                                                        |
| **Date**                          | 2026-04-19                                                                                                                                                                                                                                                                                                             |
| **Time**                          | 8:00 PM                                                                                                                                                                                                                                                                                                                |
| **Location**                      | Reunion virutal (Google Meet)                                                                                                                                                                                                                                                                                          |
| **Prepared By**                   | Keyner Ivan Hancco Poma                                                                                                                                                                                                                                                                                              |
| **Attendees to Planning Meeting** | - Braden Raid Garcia Cerpa <br/> - Keyner Ivan Hancco Poma<br/> - Hernan Gabriel Huayta Fuentes<br/> - Victor Manuel Espino Rossi<br/> - Oscar Fernando Vara Velasquez                                                                                                                                                         |
| **Sprint 1 Goal**                 | La meta para este sprint es que la landing page MVP DE HydroSmart sea atractiva, informativa, responsiva e internacionalizada.<br/>Creemos que esto aportará confianza y afianzará a nuestros usuarios. Esto se confirmará cuando los usuraios puedan navegar y registrarse satisfactoriamente mediante la landing page. |
| **Sprint 1 Velocity**             | 8 story points                                                                                                                                                                                                                                                                                                         |
| **Sum of Story Points**           | 8                                                                                                                                                                                                                                                                                                                      |

### 5.2.1.2. Aspect Leaders and Collaborators
| Team Member                      | GitHub Username | Header | Hero + Beneficios | Características | Planes | Nosotros | FAQ+ Footer |
|----------------------------------|-----------------|--------|-------------------|-----------------|--------|----------|-------------|
| Braden Raid Garcia Cerpa       | BradeGarcia        | L      | L                 | C               | C      | C        | C           |
| Hernan Gabriel Huayta Fuentes   | Homesman         | C      | C                 | L               | C      | C        | C           |
| Victor Manuel Espino Rossi | Vmer140        | C      | C                 | C               | L      | C        | C           |
| Hancco Poma, Keyner Ivan         | 1Kanan2         | C      | C                 | C               | C      | C        | L           |
| Oscar Fernando Vara Velasquez     | varometro159         | C      | C                 | C               | C      | L        | C           |

### 5.2.1.3. Sprint Backlog 1
El Sprint 1 se enfocó en el desarrollo e implementación del Landing Page MVP de HydroSmart, desplegado en un entorno web, utilizando HTML, CSS y JavaScript.

El objetivo principal fue entregar una solución mínima viable que permita a los usuarios comprender claramente la propuesta de valor de la plataforma, junto con una interfaz adaptable a distintos dispositivos y capaz de soportar otro idioma mediante un enfoque de internacionalización.

[![Sprint-Backlog-1.png](https://i.postimg.cc/6q2cbdTS/Sprint-Backlog-1.png)](https://postimg.cc/0Kv7bKYd)

<table border="1" cellspacing="0" cellpadding="8" style="border-collapse: collapse; width: 100%; text-align: center; font-family: Arial, sans-serif;">
  <thead>
    <tr>
      <th colspan="2">Sprint #</th>
      <th colspan="6">Sprint 1</th>
    </tr>
    <tr>
      <th colspan="2">User Story</th>
      <th colspan="5">Work-Item / Task</th>
      <th rowspan="2">Status<br>(To-do / In-Process / To-Review / Done)</th>
    </tr>
    <tr>
      <th>Id</th>
      <th>Title</th>
      <th>Id</th>
      <th>Title</th>
      <th>Description</th>
      <th>Estimation (Hours)</th>
      <th>Assigned To</th>
    </tr>
  </thead>
  <tbody>
    <tr>a
      <td >US18</td>
      <td>Visualización de propuesta de valor</td>
      <td>T01</td>
      <td>Diseño de Hero</td>
      <td>Implementar la sección principal con título, mensaje de valor y llamada inicial de HydroSmart.</td>
      <td>3</td>
      <td>Garcia Cerpa, Braden Raid</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US18</td>
      <td>Visualización de propuesta de valor</td>
      <td>T02</td>
      <td>Implementación de beneficios clave</td>
      <td>Agregar los beneficios principales del producto dentro de la sección Hero para reforzar la propuesta de valor.</td>
      <td>2</td>
      <td>Espino Rossi, Victor Manuel</td>
      <td>Done</td>
    </tr>
<tr>
      <td>US19</td>
      <td>Visualización de funcionalidades</td>
      <td>T03</td>
      <td>Diseño de sección de características</td>
      <td>Construir la sección visual donde se presentan las funcionalidades principales de HydroSmart.</td>
      <td>3</td>
      <td>Huayta Fuentes, Hernan Manuel</td>
      <td>Done</td>
    </tr>
<tr>
      <td>US20</td>
      <td>Visualización de segmentos objetivo</td>
      <td>T05</td>
      <td>Diseño de sección de segmentos</td>
      <td>Implementar la sección que muestra los perfiles objetivo de la plataforma y sus beneficios asociados.</td>
      <td>3</td>
      <td>Vara Velasquez, Oscar Fernando</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US20</td>
      <td>Visualización de segmentos objetivo</td>
      <td>T06</td>
      <td>Integración de FAQ relacionado</td>
      <td>Agregar preguntas frecuentes vinculadas a los segmentos objetivo para reforzar la comprensión del usuario.</td>
      <td>2</td>
      <td>Hancco Poma, Keyner Ivan</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US21</td>
      <td>Navegación por secciones</td>
      <td>T07</td>
      <td>Implementación de header</td>
      <td>Desarrollar el encabezado principal con enlaces a las secciones de la landing page.</td>
      <td>2</td>
      <td>Garcia Cerpa, Braden Raid</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US21</td>
      <td>Navegación por secciones</td>
      <td>T09</td>
      <td>Integración de footer navegable</td>
      <td>Agregar enlaces de navegación en el footer para reforzar el acceso a las secciones principales.</td>
      <td>2</td>
      <td>Hancco Poma, Keyner Ivan</td>
      <td>Done</td>
    </tr><tr>
      <td>US22</td>
      <td>Acceso al registro desde la landing page</td>
      <td>T10</td>
      <td>Implementación de CTA principal</td>
      <td>Agregar botón principal de registro en la sección Hero para redirigir al usuario al proceso de registro.</td>
      <td>2</td>
      <td>Espino Rossi, Victor Manuel</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US22</td>
      <td>Acceso al registro desde la landing page</td>
      <td>T11</td>
      <td>Implementación de sección de planes</td>
      <td>Agregar acciones en la sección de planes para facilitar el acceso al registro.</td>
      <td>2</td>
      <td>Huayta Fuentes, Hernan Manuel</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US23</td>
      <td>Visualización en dispositivos móviles</td>
      <td>T12</td>
      <td>Adaptación responsive de Hero y Header</td>
      <td>Ajustar la visualización del encabezado y la sección principal para pantallas móviles.</td>
      <td>3</td>
      <td>Garcia Cerpa, Braden Raid</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US23</td>
      <td>Visualización en dispositivos móviles</td>
      <td>T13</td>
      <td>Adaptación responsive de características</td>
      <td>Optimizar la disposición de la sección de funcionalidades para dispositivos móviles.</td>
      <td>2</td>
      <td>Vara Velasquez, Oscar Fernando</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US23</td>
      <td>Visualización en dispositivos móviles</td>
      <td>T14</td>
      <td>Adaptación responsive de planes</td>
      <td>Modificar la sección de planes para asegurar correcta legibilidad e interacción en móviles.</td>
      <td>2</td>
      <td>Espino Rossi, Victor Manuel</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US23</td>
      <td>Visualización en dispositivos móviles</td>
      <td>T15</td>
      <td>Adaptación responsive de FAQ y Footer</td>
      <td>Ajustar la sección de preguntas frecuentes y el pie de página para visualización móvil.</td>
      <td>2</td>
      <td>Hancco Poma, Keyner Ivan</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US23</td>
      <td>Visualización en dispositivos móviles</td>
      <td>T16</td>
      <td>Adaptación responsive de Nosotros</td>
      <td>Optimizar la sección Nosotros y segmentos objetivo para correcta visualización en dispositivos móviles.</td>
      <td>2</td>
      <td>Huayta Fuentes, Hernan Manuel</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US18-US23</td>
      <td>Internacionalización de la landing page</td>
      <td>T18</td>
      <td>Integración de textos traducibles</td>
      <td>Adaptar las secciones principales para consumir contenido en más de un idioma.</td>
      <td>2</td>
      <td>Todos los colaboradores</td>
      <td>Done</td>
    </tr>
    <tr>
      <td>US18-US23</td>
      <td>Pruebas y ajustes finales</td>
      <td>T19</td>
      <td>Validación funcional del sprint</td>
      <td>Verificar navegación, responsive, textos, enlaces y consistencia visual antes del despliegue.</td>
      <td>3</td>
      <td>Todos los colaboradores</td>
      <td>Done</td>
    </tr>
  </tbody>
</table>


### 5.2.1.4. Development Evidence for Sprint Review

Durante el Sprint 1 se desarrolló la Landing Page basada en los diseños definidos previamente.

**Incluye:**
- Estructura HTML de la página
- Estilos CSS para el diseño visual
- Componentes básicos de la interfaz
- Capturas de código

<img src="images/HTML.png" alt="HTML" width="800">
<img src="images/CSS.png" alt="CSS" width="800">
---

### 5.2.1.5. Execution Evidence for Sprint Review.

Durante este primer Sprint, el equipo avanzó la implementación del Business Website, logrando una interfaz visualmente coherente y adaptable a diferentes dispositivos. A continuación se muestra la evidencia visual de las secciones desplegadas, mostrando la navegación completa del sitio.

1. Home – Presentación de la plataforma:

<img src="images/Home.jpeg" alt="Home.jpeg" width="800">

2. Sección Beneficios:

<img src="images/Beneficios.jpeg" alt="Beneficios.jpeg" width="800">

3. Sección Características:

<img src="images/Características.jpeg" alt="Características.jpeg" width="800">

4. Sección Planes:

<img src="images/Planes.jpeg" alt="Planes" width="800">




#### 5.2.1.6. Services Documentation Evidence for Sprint Review.


El repositorio HydroSmart-LandingPage inició su estructura base en la rama main. El desarrollo continuó con la implementación del header, la sección hero y la sección de beneficios a través de las ramas feat/inicio y feat/benefits. Posteriormente, se integraron los planes de suscripción en la rama suscription y la sección de equipo en feat/nosotros. Finalmente, se utilizaron commits en la rama develop para detallar la información técnica de las características, así como para añadir la funcionalidad de FAQ y el pie de página

---

### 5.2.1.7. Software Deployment Evidence for Sprint Review.

El despliegue del Business Website se realizó utilizando GitHub Pages, aprovechando la integración directa con el repositorio del proyecto. Esta configuración permite que el sitio sea accesible públicamente y se actualice automáticamente con cada cambio en la rama principal.

<img src="images/Landingpagedeployment.png" alt="Deployment_Landing" width="800">

**URL:** https://upc-pre-1asi0729-2610-12010-hydrosmart.github.io/HydroSmart-Landing-Page/

### 5.2.1.8. Team Collaboration Insights during Sprint.

Durante el Sprint 1, nuestra colaboración se centró principalmente en la realización del documento y funcionalidad básica de la landing page. El equipo utilizó GitHub Projects para la gestión de tareas, asegurando que cada sección (Hero, About, Pricing) fuera desarrollada correctamente y a tiempo. 

**Aspectos positivos:**
- Trabajo conjunto en el desarrollo frontend
- Organización para completar la documentación requerida
- Uso de GitHub para control de versiones

**Aspectos a mejorar:**
- Mejor distribución de tareas
- Mayor planificación del tiempo
- Incrementar la frecuencia de commits


<img src="images/report-commits1-open.PNG" alt="commits1" width="800">

<img src="images/report-commits2-open.PNG" alt="commits2" width="800">

<img src="images/report-commits3-open.PNG" alt="commits3" width="800">

<img src="images/report-commits4-open.PNG" alt="commits4" width="800">

<img src="images/report-commits5-open.PNG" alt="commits5" width="800">

### 5.2.2. Sprint 2

#### 5.2.2.1. Sprint Planning 2

Durante el segundo Sprint se continuó con el desarrollo de la plataforma web AquaPulse, priorizando las funcionalidades y pantallas principales para propietarios y estudiantes que buscan alojamiento. En esta etapa se trabajó con información predefinida mediante datos hardcodeados y una base de datos simulada en db.json, permitiendo gestionar y visualizar la información de manera dinámica dentro del sistema. Asimismo, se mejoró la experiencia visual y la navegación de la aplicación, además de incorporar la internacionalización (i18n) para adaptar el contenido a distintos idiomas, logrando una versión más estable, uniforme y funcional de la plataforma.

<table>
<tr>
    <th colspan="5">Sprint 2</th>
    <th colspan="9">Sprint 2</th>
  </tr>
      <tr>
    <td colspan="13">Sprint Planning Background</td>
  </tr>
  <tr>
    <td colspan="5">Date</td>
    <td colspan="8">2026-05-03</td>
</tr>
  <tr>
    <td colspan="5">Time</td>
    <td colspan="8">5:30 PM</td>
  </tr>
  <tr>
    <td colspan="5">Location</td>
    <td colspan="8">Via Zoom</td>
<tr>
    <td colspan="5">Prepared By</td>
    <td colspan="8">Hancco Poma, Keyner Iván</td>
</tr>
<tr>
    <td colspan="5">Attendees (to a planning meeting)</td>
    <td colspan="8">Braden Raid Garcia Cerpa, Keyner Ivan Hancco Poma, Hernan Gabriel Huayta Fuentes, Victor Manuel Espino Rossi y Oscar Fernando Vara Velasquez</td>
</tr>

<tr>
    <td colspan="13">Sprint Goal & User Stories</td>
</tr>
<tr>
    <td colspan="5">Sprint 2 Goal</td>
    <td colspan="8">Desarrollar y consolidar la estructura principal de la aplicación web AquaPulse, proporcionando una interfaz completamente conectada con la base de datos simulada para las pantallas principales y la administración de información correspondiente a los perfiles de propietarios y estudiantes arrendatarios, incorporando además una configuración inicial de soporte multilenguaje mediante i18n.</td>
</tr>
<tr>
    <td colspan="5">Sprint 2 Velocity</td>
    <td colspan="8">31</td>
</tr>
<tr>
    <td colspan="5">Sum of Story Points</td>
    <td colspan="8">39</td>
</tr>
</table>

#### 5.2.2.2. Aspect Leaders and Collaborators

Con la finalidad de mejorar la colaboración en equipo a cada integrante se asignó un rol de líder por cada aspecto. Los aspectos están relacionados con los entregables.

| Team member (LastName, First Name) | GitHub UserName | Aspect 1: Consumption-Monitoring | Aspect 2: Rental Management | Aspect 3: Reports View | Aspect 4: Savings-Optimization | Aspect 5: INCIDENT-DETECTION |
|------------------------------------|-----------------|------------------------------------|------------------------------------------|------------------------|------------------------|-------------------------|
| Vara, Oscar                 | BradeGarcia    | C                                  | C                                        | C                      | C                      | L                       |
| Huayta, Hernán                     | Homesman       | C                                  | C                                        | C                      | C                      | L                       |
| Espino, Victor                | Vmer140       | C                                  | C                                        | C                      | L                      | C                       |
| Hancco, Keyner                     | 1Kanan2         | L                                  | C                                        | C                      | C                      | C                       |
| Garcia, Braden                     | varometro159       | C                                  | C                                        | L                      | C                      | C                       |

#### 5.2.2.3. Sprint Backlog 2

El presente Sprint Backlog se enfoca en consolidar las funcionalidades clave de la aplicación web AquaPulse, orientadas a la optimización del consumo de agua en el hogar. En este sprint, el objetivo principal es implementar características relacionadas con la visualización y análisis del consumo, así como la gestión de alertas y notificaciones, permitiendo a los usuarios interpretar su gasto de manera clara y tomar decisiones informadas.

Asimismo, se priorizó el desarrollo de componentes como el dashboard analítico, el historial de consumo, la proyección de gasto mensual y los sistemas de alertas ante consumos inusuales o posibles fugas. Estas funcionalidades fueron implementadas utilizando una fuente de datos simulada mediante db.json, lo que permitió trabajar con información dinámica sin requerir un backend desplegado, manteniendo una arquitectura preparada para futuras integraciones.

A continuación, se presenta la tabla de control del Sprint 2, donde se detallan las historias de usuario trabajadas, junto con sus respectivas tareas (Work Items), descripciones funcionales, estimaciones de tiempo, responsables asignados y el estado actual de cada actividad.

<table>
  <tr>
    <th colspan="7">Sprint 2 – Work Items / Tasks (AquaPulse)</th>
  </tr>
  <tr>
    <th>User Story ID</th>
    <th>Task ID</th>
    <th>Title</th>
    <th>Description</th>
    <th>Estimation</th>
    <th>Assigned To</th>
    <th>Status</th>
  </tr>

  <!-- EP02 -->
  <tr><td colspan="7"><b>EP02 – Visualización y Análisis de Consumo</b></td></tr>

  <tr><td>US05</td><td>UT01</td><td>Diseñar dashboard de consumo</td><td>Crear interfaz clara con indicadores visuales para interpretar el consumo de agua.</td><td>4h</td><td>Keyner Hancco</td><td>Done</td></tr>
  <tr><td></td><td>UT02</td><td>Implementar etiquetas y colores</td><td>Agregar ayudas visuales como colores, iconos y etiquetas explicativas.</td><td>3h</td><td>Victor Espino</td><td>Done</td></tr>

  <tr><td>US06</td><td>UT03</td><td>Visualizar historial de consumo</td><td>Desarrollar gráficos de consumo filtrados por períodos de tiempo.</td><td>4h</td><td>Hernan Huayta</td><td>Done</td></tr>
  <tr><td></td><td>UT04</td><td>Manejo de historial vacío</td><td>Mostrar mensaje cuando no existan datos históricos disponibles.</td><td>2h</td><td>Hernan Huayta</td><td>Done</td></tr>

  <tr><td>US07</td><td>UT05</td><td>Proyección de gasto mensual</td><td>Calcular y mostrar estimación del consumo mensual en soles.</td><td>4h</td><td>Keyner Hancco</td><td>Done</td></tr>
  <tr><td></td><td>UT06</td><td>Validar datos insuficientes</td><td>Indicar al usuario cuando no hay suficiente información para generar proyección.</td><td>2h</td><td>Braden Garcia</td><td>Done</td></tr>

  <!-- EP03 -->
  <tr><td colspan="7"><b>EP03 – Alertas y Configuración</b></td></tr>

  <tr><td>US08</td><td>UT07</td><td>Implementar alertas de consumo</td><td>Detectar consumo elevado y generar notificaciones automáticas.</td><td>3h</td><td>Oscar Vara</td><td>Done</td></tr>
  <tr><td></td><td>UT08</td><td>Notificación de consumo normal</td><td>Validar que no se envíen alertas si el consumo está dentro del rango.</td><td>2h</td><td>Oscar Vara</td><td>Done</td></tr>

  <tr><td>US09</td><td>UT09</td><td>Detección de fugas</td><td>Identificar patrones anómalos de consumo continuo.</td><td>4h</td><td>Victor Espino</td><td>Done</td></tr>

  <tr><td>US10</td><td>UT10</td><td>Configuración de notificaciones</td><td>Permitir al usuario personalizar qué alertas desea recibir.</td><td>3h</td><td>Braden Garcia</td><td>Done</td></tr>

  <!-- EP06 -->
  <tr><td colspan="7"><b>EP06 – Análisis Comparativo</b></td></tr>

  <tr><td>US16</td><td>UT11</td><td>Comparativo semanal</td><td>Mostrar gráfico comparativo entre consumo de semanas.</td><td>4h</td><td>Hernan Huayta</td><td>Done</td></tr>

</table>

#### 5.2.2.4. Development Evidence for Sprint Review

En esta sección se demuestran los commits relacionados con los principales avances en la implementación.
Estos commits provienen del repositorio de la aplicación web de la organización de GitHub.

Enlace al repositorio de la aplicación web: https://github.com/upc-pre-1ASI0730-2610-HydroSmart/HydroSmart-Frontend

| Repository                                              | Branch             | Commit Id | Commint Message                                                                 | Commited on (Date) |
|---------------------------------------------------------|--------------------|-----------|---------------------------------------------------------------------------------|--------------------|
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/main       | 1bfad23   | feat: initial angular project structure for HydroSmart                    | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/main       | beec8dc   | feat: initial project structure on new repo      | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/main | 048944e   | docs:consumption monitoring files.            | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/rental-management | 8b1blfb   | feat: implement Rental-management bounded context | 13/05/2026 |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/savings-optimization      | 14e6f92   | feat: create domain folder and content                                      | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/savings-optimization       | 00b03e0   | feat: add assembler and api for device                                          | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/savings-optimization       | 7d88a71   | feat: create infrastructure folder and content                                 | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/savings-optimization      | ae82c7c   | feat: create presentation folder and content                                   | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/incident-detection      | e18003d   | docs:incident-dection bounded context                                             | 13/05/2026         |
| upc-pre-1ASI0729-2610-12010-HydroSmart     | feat/consumption-monitoring    | 2cd0683   | feat: implement comsuption monitoring bounded context                                             | 13/05/2026         |


#### 5.2.2.5. Execution Evidence for Sprint Review

Durante la ejecución del sprint se consiguieron completar satisfactoriamente todos los objetivos planteados, logrando implementar las funcionalidades clave del sistema de gestión AquaPulse y consolidando una base firme para la administración eficiente del consumo de agua en entornos domésticos. Entre las principales características desarrolladas se destacan las siguientes:

1. Configuración y edición del perfil de usuario, brindando la posibilidad de ajustar y adaptar la experiencia dentro de la aplicación según las preferencias individuales.

2. Consulta y exportación de reportes, incorporando opciones de filtrado por rangos de fechas y categorías, así como la capacidad de descargar la información recopilada en distintos formatos disponibles.

3. Administración de dispositivos, permitiendo gestionar de manera más ordenada e intuitiva los distintos equipos vinculados dentro del sistema.

4. Implementación de internacionalización (i18n), facilitando el uso de la plataforma en dos idiomas distintos para mejorar la accesibilidad de los usuarios.

5. Integración del soporte multilenguaje (i18n), reforzando la disponibilidad de la aplicación en más de un idioma y asegurando una interacción más inclusiva para diferentes tipos de usuarios.

**Login**
<div>
  <img src="images/execution-login.png" alt="Login" width="800">
</div>

**Dashboard**
<div>
  <img src="images/execution-dashboard.png" alt="Dashboard" width="800">
</div>

**Dashboard and Notifications**
<div>
  <img src="images/execution-dashboard-notifications.png" alt="Dashboard and Notifications" width="800">
</div>

**Profile**
<div>
  <img src="images/execution-profile.png" alt="Profile" width="800">
</div>

**Devices**
<div>
  <img src="images/execution-devices.png" alt="Devices" width="800">
</div>

**Reports**
<div>
  <img src="images/execution-reports.png" alt="Reports" width="800">
</div>

**Settings**
<div>
  <img src="images/execution-settings.png" alt="Settings" width="800">
</div>

**Internacionalización** (El boton del header se encarga de cambiar idioma)
<div>
  <img src="images/execution-internacionalizacion.png" alt="Internacionalización de la plataforma" width="800">
</div>

#### 5.2.2.6. Services Documentation Evidence for Sprint Review

Durante el Sprint 2 del proyecto AquaPulse, el desarrollo se enfocó en la implementación funcional de la aplicación web, integrando la interfaz de usuario con una fuente de datos local basada en un archivo db.json. Este enfoque permitió simular el comportamiento de una API, facilitando el manejo de información dinámica sin necesidad de contar con un backend desplegado.

**Estado actual:**

- Se desarrollaron e integraron las principales vistas de la plataforma (Dashboard, Profile, Settings, Devices, Reports y Settings), asegurando una experiencia visual uniforme, una navegación fluida y una correcta interacción con los datos simulados.

- La gestión de datos se realiza mediante un archivo db.json, el cual define las colecciones utilizadas en la aplicación y permite replicar operaciones tipo CRUD (crear, leer, actualizar y eliminar) a través de herramientas locales como json-server.

- Aún no se ha implementado una capa backend con controladores, servicios ni lógica de negocio avanzada; no obstante, la arquitectura actual se encuentra preparada para incorporar estos elementos en futuras fases del proyecto.

- Se habilitaron funcionalidades interactivas relevantes, como la edición de información del usuario, la actualización de datos simulados y la visualización de contenido dinámico dentro de la aplicación.

- Además, se reforzó la internacionalización (i18n), logrando una interfaz moderna, comprensible y adaptable a distintos idiomas, mejorando así la experiencia del usuario.

En este sprint 2, el enfoque principal estuvo en las épicas relacionadas con la construcción del frontend y la simulación de una API mediante db.json, lo que permitió emular la interacción con un sistema backend real. Este avance permitió consolidar una versión funcional de AquaPulse, orientada a la optimización del consumo de agua, facilitando la gestión dinámica de datos y dejando una base preparada para la futura implementación de un backend con mayor complejidad y persistencia real.

#### 5.2.2.7. Software Deployment Evidence for Sprint Review

El despliegue del Frontend de AquaPulse se realizó utilizando Netlify, aprovechando su integración directa con el repositorio del proyecto alojado en GitHub. Esta configuración permite que el sitio sea accesible públicamente y se actualice automáticamente con cada cambio realizado en la rama principal, facilitando un flujo de despliegue continuo y eficiente.

<div>
  <img src="images/evidence-frontend-deployment.jpeg" alt="Deployment Evidence" width="800">
</div>

**URL:https://hydrosmartweb.netlify.app/#/dashboard**

#### 5.2.2.8. Team Collaboration Insights during Sprint
Durante el Sprint 2, nuestra colaboración se centró principalmente en la actualización del documento y frontend de AquaPulse. El equipo utilizó GitHub Projects para la gestión de tareas, asegurando que cada sección fuera desarrollado correctamente y a tiempo.

### Gráfico de Contribuciones del equipo

### Contribuciones al desarrollo del Frontend


### Contribuciones al desarrollo del Documento:

### 5.2.3. Sprint 3

Durante el Sprint 3 se llevó a cabo la construcción del **backend real** de la plataforma HydroSmart, dejando atrás la simulación de datos basada en `db.json` que se utilizó en el Sprint 2. El equipo desarrolló una **API REST en Spring Boot (Java 21) conectada a una base de datos MySQL**, organizada bajo una arquitectura **Domain-Driven Design (DDD)** dividida en bounded contexts (IAM, Consumption, Incident, Property y Savings). Se implementó autenticación y autorización mediante **JWT** con control de roles (`BUILDING_ADMIN` y `TENANT`), y se documentaron todos los endpoints con **OpenAPI/Swagger**.

En paralelo, se actualizó la **aplicación web en Angular** para **consumir el backend real** en reemplazo de la fuente de datos simulada, incorporando un interceptor HTTP que adjunta el token JWT, guards de ruta por autenticación y por rol, y servicios HTTP por bounded context. Como resultado, se obtuvo una versión integrada de extremo a extremo (frontend ↔ backend ↔ base de datos) que permite iniciar sesión, visualizar el consumo de agua, gestionar dispositivos/sensores, administrar unidades e inquilinos, revisar alertas y consultar metas de ahorro y reportes mensuales.

#### 5.2.3.1. Sprint Planning 3.

En esta sección se especifican los aspectos principales del Sprint Planning Meeting del Sprint 3. La reunión tuvo como objetivo definir el alcance de la migración hacia un backend real con persistencia en MySQL, repartir los bounded contexts entre los integrantes y planificar la integración del frontend Angular con la nueva API.

| **Sprint #** | Sprint 3 |
|---|---|
| **Sprint Planning Background** | |
| **Fecha** | 10/06/2026 |
| **Hora** | 6:00 PM |
| **Ubicación** | Reunión virtual vía Zoom |
| **Preparado por** | Hancco Poma, Keyner Iván |
| **Participantes (reunión de planificación)** | - Oscar Fernando Vara Velasquez <br> - Victor Manuel Espino Rossi <br> - Hernán Gabriel Huayta Fuentes <br> - Braden Raid García Cerpa <br> - Keyner Iván Hancco Poma |
| **Sprint 2 Review Summary** | En el Sprint 2 se consolidó la estructura principal del frontend de AquaPulse/HydroSmart en Angular, con las pantallas de Dashboard, Profile, Settings, Devices y Reports funcionando sobre una base de datos simulada (`db.json`) y soporte multilenguaje (i18n EN/ES). Se logró una versión visual estable y navegable, pero el Product Owner y el equipo identificaron como principal limitación la ausencia de un backend real: los datos no se persistían y no existía autenticación ni control de acceso. El feedback fue avanzar hacia una API real con seguridad y persistencia. |
| **Sprint 2 Retrospective Summary** | El equipo valoró positivamente la organización por bounded contexts y el uso de ramas por funcionalidad, que facilitó el trabajo en paralelo durante el Sprint 2. Como oportunidades de mejora se señalaron: estandarizar los mensajes de commit (algunos quedaron como `docs:`/`chore:` poco descriptivos), reducir la duplicación de datos hardcodeados y preparar la arquitectura para sustituir el mock por servicios HTTP reales. Estas mejoras se incorporaron en la planificación del Sprint 3. |
| **Sprint 3 Goal** | *Our focus is on* entregar un backend REST real y seguro para HydroSmart, conectado a MySQL, que reemplace la simulación de datos del sprint anterior. <br> *We believe it delivers* persistencia real de la información, autenticación con roles y una API documentada a los administradores de edificio y a los inquilinos de la plataforma, además de una base sólida sobre la cual el equipo de desarrollo pueda seguir construyendo. <br> *This will be confirmed when* un usuario puede iniciar sesión con credenciales reales, la aplicación Angular muestra y actualiza datos provenientes del backend (sensores, lecturas de consumo, unidades, inquilinos, alertas, metas de ahorro y reportes) sin usar datos simulados, y todos los endpoints son verificables desde Swagger UI. |
| **Sprint 3 Velocity** | 31 Story Points |
| **Sum of Story Points** | 40 |

#### 5.2.3.2. Aspect Leaders and Collaborators.

Para cada aspecto se designó un **Líder (L)**, responsable de la dirección técnica e implementación principal, y **Colaboradores (C)**, encargados de apoyar en el desarrollo, la integración y la validación. La distribución se corresponde directamente con la rama de trabajo y los commits realizados por cada integrante en el repositorio de backend.

La Matriz LACX (Leadership and Collaboration Matrix) permite visualizar la distribución de responsabilidades, garantizando la trazabilidad y la efectividad del trabajo colaborativo del Sprint 3.

| Team Member (LastName, FirstName) | GitHub Username | IAM / Auth | Consumption | Incident | Property | Savings | Frontend Integration |
|---|---|---|---|---|---|---|---|
| Vara, Oscar | varometro159 | **L** | C | C | C | C | **L** |
| Espino, Victor | Vmer140 | C | **L** | C | C | C | C |
| Huayta, Hernán | Homesman | C | C | **L** | C | C | C |
| Hancco, Keyner | 1Kanan2 | C | C | C | **L** | C | C |
| García, Braden | BradenGarcia | C | C | C | C | **L** | C |

#### 5.2.3.3. Sprint Backlog 3.

El Sprint Backlog 3 se orienta a la construcción del backend REST de HydroSmart y a su integración con la aplicación web. El objetivo principal fue implementar, por cada bounded context, el modelo de dominio, la lógica de negocio (command services), la persistencia en MySQL mediante JPA y los endpoints REST con seguridad por roles, para luego conectar la interfaz Angular y eliminar la dependencia de los datos simulados.

A continuación se presenta el **tablero del Sprint 3** en la herramienta de control del equipo, junto con su URL pública:

#### 5.2.3.3. Sprint Backlog 3
 
El presente Sprint Backlog se enfoca en construir el backend real de la plataforma HydroSmart y conectarlo con la aplicación web, reemplazando la fuente de datos simulada (`db.json`) utilizada en el Sprint 2. En este sprint, el objetivo principal es implementar una API REST en Spring Boot conectada a una base de datos MySQL, organizada bajo una arquitectura Domain-Driven Design (DDD) en bounded contexts, con autenticación y autorización mediante JWT y control de acceso por roles.
 
Asimismo, se priorizó el desarrollo, por cada bounded context, del modelo de dominio (aggregates y value objects), la lógica de negocio (command services), la persistencia en MySQL mediante JPA y la exposición de endpoints REST documentados con OpenAPI/Swagger. Finalmente, se integró la interfaz Angular para consumir la API real mediante servicios HTTP, un interceptor que adjunta el token JWT y guards de ruta por autenticación y rol, logrando una versión funcional de extremo a extremo.
 
A continuación, se presenta la tabla de control del Sprint 3, donde se detallan las historias de usuario trabajadas, junto con sus respectivas tareas (Work Items), descripciones funcionales, estimaciones de tiempo, responsables asignados y el estado actual de cada actividad.
 
<table>
 <tr>
 <th colspan="7">Sprint 3 – Work Items / Tasks (HydroSmart)</th>
 </tr>
 <tr>
 <th>User Story ID</th>
 <th>Task ID</th>
 <th>Title</th>
 <th>Description</th>
 <th>Estimation</th>
 <th>Assigned To</th>
 <th>Status</th>
 </tr>
 <!-- EP01 -->
 <tr><td colspan="7"><b>EP01 – Autenticación y Seguridad (IAM)</b></td></tr>
 <tr><td>US01</td><td>UT01</td><td>Configurar esqueleto del backend</td><td>Crear la estructura base en Spring Boot con arquitectura DDD, además de la configuración de seguridad y CORS.</td><td>4h</td><td>Oscar Vara</td><td>Done</td></tr>
 <tr><td></td><td>UT02</td><td>Implementar login con JWT</td><td>Desarrollar el endpoint POST /api/auth/login con la generación del token JWT.</td><td>3h</td><td>Oscar Vara</td><td>Done</td></tr>
 <tr><td></td><td>UT03</td><td>Gestionar usuarios y roles</td><td>Modelar el aggregate User con roles BUILDING_ADMIN/TENANT y exponer el endpoint GET /api/auth/me.</td><td>3h</td><td>Oscar Vara</td><td>Done</td></tr>
 <tr><td></td><td>UT04</td><td>Configurar filtro y utilidades JWT</td><td>Implementar JwtAuthFilter, JwtUtil y UserDetailsServiceImpl para validar el token en cada petición.</td><td>3h</td><td>Oscar Vara</td><td>Done</td></tr>
 <!-- EP02 -->
 <tr><td colspan="7"><b>EP02 – Monitoreo y Análisis de Consumo (Consumption)</b></td></tr>
 <tr><td>US05</td><td>UT05</td><td>Modelar dominio de consumo</td><td>Crear los aggregates Sensor y ConsumptionReading con sus value objects y persistencia JPA.</td><td>4h</td><td>Victor Espino</td><td>Done</td></tr>
 <tr><td></td><td>UT06</td><td>Implementar endpoints de sensores</td><td>Desarrollar el CRUD de sensores, la actualización de estado y de preferencias.</td><td>4h</td><td>Victor Espino</td><td>Done</td></tr>
 <tr><td>US06</td><td>UT07</td><td>Implementar endpoints de lecturas</td><td>Exponer lecturas por sensor y por edificio con filtro por rango de fechas.</td><td>3h</td><td>Victor Espino</td><td>Done</td></tr>
 <tr><td></td><td>UT08</td><td>Generar resumen de consumo</td><td>Implementar la lógica de buildSummary para alimentar el dashboard.</td><td>3h</td><td>Victor Espino</td><td>Done</td></tr>
 <!-- EP03 -->
 <tr><td colspan="7"><b>EP03 – Detección de Incidentes y Alertas (Incident)</b></td></tr>
 <tr><td>US08</td><td>UT09</td><td>Modelar dominio de incidentes</td><td>Crear el aggregate Alert y los value objects del bounded context Incident.</td><td>3h</td><td>Hernán Huayta</td><td>Done</td></tr>
 <tr><td></td><td>UT10</td><td>Implementar endpoints de alertas</td><td>Listar alertas por edificio/unidad, con filtro opcional por estado.</td><td>3h</td><td>Hernán Huayta</td><td>Done</td></tr>
 <tr><td>US09</td><td>UT11</td><td>Resolver alertas</td><td>Endpoint para marcar una alerta como resuelta (acceso BUILDING_ADMIN).</td><td>2h</td><td>Hernán Huayta</td><td>Done</td></tr>
 <!-- EP04 -->
 <tr><td colspan="7"><b>EP04 – Gestión de Propiedades e Inquilinos (Property)</b></td></tr>
 <tr><td>US17</td><td>UT12</td><td>Modelar dominio de propiedad</td><td>Crear los aggregates Building y Unit con su persistencia JPA.</td><td>4h</td><td>Keyner Hancco</td><td>Done</td></tr>
 <tr><td></td><td>UT13</td><td>Implementar endpoints de edificios y unidades</td><td>Exponer la consulta de edificios/unidades y sus resúmenes de consumo.</td><td>3h</td><td>Keyner Hancco</td><td>Done</td></tr>
 <tr><td>US18</td><td>UT14</td><td>Gestionar inquilinos</td><td>Endpoints para asignar inquilino a una unidad, consultarlo y removerlo.</td><td>3h</td><td>Keyner Hancco</td><td>Done</td></tr>
 <!-- EP05 -->
 <tr><td colspan="7"><b>EP05 – Optimización y Reportes de Ahorro (Savings)</b></td></tr>
 <tr><td>US07</td><td>UT15</td><td>Modelar dominio de ahorro</td><td>Crear el aggregate SavingGoal y su persistencia.</td><td>3h</td><td>Braden García</td><td>Done</td></tr>
 <tr><td></td><td>UT16</td><td>Implementar meta de ahorro activa</td><td>Endpoint GET /api/saving-goals/active por edificio.</td><td>2h</td><td>Braden García</td><td>Done</td></tr>
 <tr><td>US19</td><td>UT17</td><td>Generar reporte mensual</td><td>Endpoint GET /api/reports/monthly por edificio y periodo.</td><td>3h</td><td>Braden García</td><td>Done</td></tr>
 <!-- EP06 -->
 <tr><td colspan="7"><b>EP06 – Integración Frontend–Backend</b></td></tr>
 <tr><td>US20</td><td>UT18</td><td>Conectar servicios HTTP</td><td>Reemplazar db.json por HttpClient consumiendo la API real en cada bounded context.</td><td>4h</td><td>Oscar Vara</td><td>Done</td></tr>
 <tr><td></td><td>UT19</td><td>Implementar interceptor y guards</td><td>Configurar authInterceptor (Bearer token), authGuard y roleGuard para el control de acceso.</td><td>3h</td><td>Oscar Vara</td><td>Done</td></tr>
 <tr><td></td><td>UT20</td><td>Corregir filtrado por unidad</td><td>Fixes de filtrado de datos por unidad y alineación de IDs entre frontend y backend.</td><td>3h</td><td>Oscar Vara</td><td>Done</td></tr>
</table>

A continuación, la tabla de control de estado del Sprint 3, con las User Stories, sus tareas (Work Items), descripciones, estimaciones, responsables y estado.

> Nota: Los identificadores de User Story (US) deben alinearse con el Product Backlog oficial del equipo; las estimaciones en horas son referenciales y reflejan el esfuerzo de implementación realizado. El responsable de cada tarea coincide con el autor de los commits del bounded context correspondiente.

| User Story ID | User Story Title | Task Id | Task Title | Description | Estimation (Hours) | Assigned To | Status |
|---|---|---|---|---|---|---|---|
| US-IAM01 | Autenticación de usuarios | T01 | Configurar esqueleto del proyecto | Crear estructura base Spring Boot + DDD, configuración de seguridad y CORS. | 4 | Oscar Vara | Done |
| US-IAM01 | | T02 | Implementar login con JWT | Endpoint `POST /api/auth/login` con generación de token JWT. | 3 | Oscar Vara | Done |
| US-IAM01 | | T03 | Gestión de usuarios y roles | Aggregate `User`, roles `BUILDING_ADMIN`/`TENANT` y endpoint `GET /api/auth/me`. | 3 | Oscar Vara | Done |
| US-IAM01 | | T04 | Filtro y utilidades JWT | `JwtAuthFilter`, `JwtUtil` y `UserDetailsServiceImpl` para validar tokens. | 3 | Oscar Vara | Done |
| US-CON01 | Monitoreo del consumo de agua | T05 | Modelar dominio de consumo | Aggregates `Sensor` y `ConsumptionReading` con sus value objects. | 4 | Victor Espino | Done |
| US-CON01 | | T06 | Endpoints de sensores | CRUD de sensores, actualización de estado y preferencias. | 4 | Victor Espino | Done |
| US-CON02 | Historial y lecturas de consumo | T07 | Endpoints de lecturas | Lecturas por sensor y por edificio con filtro por rango de fechas. | 3 | Victor Espino | Done |
| US-CON02 | | T08 | Resumen de consumo | Lógica de `buildSummary` para el dashboard. | 3 | Victor Espino | Done |
| US-INC01 | Detección de incidentes y alertas | T09 | Modelar dominio de incidentes | Aggregate `Alert` y value objects del bounded context Incident. | 3 | Hernán Huayta | Done |
| US-INC01 | | T10 | Endpoints de alertas | Listado de alertas por edificio/unidad y resolución de alertas. | 3 | Hernán Huayta | Done |
| US-PRO01 | Gestión de edificios y unidades | T11 | Modelar dominio de propiedad | Aggregates `Building` y `Unit` con persistencia JPA. | 4 | Keyner Hancco | Done |
| US-PRO01 | | T12 | Endpoints de unidades y resúmenes | Consulta de edificios/unidades y resúmenes de consumo. | 3 | Keyner Hancco | Done |
| US-PRO02 | Gestión de inquilinos | T13 | Asignar/quitar inquilino | Endpoints para asignar inquilino a una unidad y removerlo. | 3 | Keyner Hancco | Done |
| US-SAV01 | Metas de ahorro | T14 | Modelar dominio de ahorro | Aggregate `SavingGoal` y su persistencia. | 3 | Braden García | Done |
| US-SAV01 | | T15 | Endpoint de meta activa | `GET /api/saving-goals/active` por edificio. | 2 | Braden García | Done |
| US-SAV02 | Reportes mensuales | T16 | Endpoint de reporte mensual | `GET /api/reports/monthly` por edificio y periodo. | 3 | Braden García | Done |
| US-INT01 | Integración Frontend–Backend | T17 | Servicios HTTP por contexto | Reemplazar `db.json` por `HttpClient` consumiendo la API real. | 4 | Oscar Vara | Done |
| US-INT01 | | T18 | Interceptor y guards | `authInterceptor` (Bearer token), `authGuard` y `roleGuard`. | 3 | Oscar Vara | Done |
| US-INT01 | | T19 | Fixes de filtrado por unidad | Correcciones de filtrado de datos por unidad y alineación de IDs. | 3 | Oscar Vara | Done |

#### 5.2.3.4. Development Evidence for Sprint Review.

En esta sección se presentan los commits relacionados con los principales avances de implementación del Sprint 3. El backend se organizó con una rama por bounded context (`Consumption`, `feature/incident-context`, `feature/property`, `savings`), mientras que el esqueleto del proyecto y el contexto de IAM se consolidaron en `main`. En el frontend, el trabajo del Sprint 3 corresponde a la conexión de la aplicación Angular con el backend real.

**Repositorio Backend:** https://github.com/upc-pre-1ASI0729-2610-12010-HydroSmart/HydroSmart-backend

| Repository | Branch | Commit Id | Commit Message | Author | Committed on (Date) |
|---|---|---|---|---|---|
| HydroSmart-backend | main | 345914d | feat: skeleton + IAM bounded context (auth, JWT, users) | Oscar Vara | 20/06/2026 |
| HydroSmart-backend | Consumption | 9c36e74 | chore: scaffold consumption bounded context structure | Victor Espino | 20/06/2026 |
| HydroSmart-backend | Consumption | b520525 | feat: consumption bounded context | Victor Espino | 20/06/2026 |
| HydroSmart-backend | feature/incident-context | fdc9c33 | feat: incident bounded context (alerts) | Hernán Huayta | 20/06/2026 |
| HydroSmart-backend | feature/property | ca9ff73 | feat: property bounded context (buildings, units) | Keyner Hancco | 20/06/2026 |
| HydroSmart-backend | savings | cb5709a | feat: savings bounded context | Braden García | 20/06/2026 |

**Repositorio Frontend:** https://github.com/upc-pre-1ASI0729-2610-12010-HydroSmart/HydroSmart-front

| Repository | Branch | Commit Id | Commit Message | Author | Committed on (Date) |
|---|---|---|---|---|---|
| HydroSmart-front | main | 0f72a4c | feat: frontend completo conectado al backend con fixes de filtrado por unidad | Oscar Vara | 20/06/2026 |
| HydroSmart-front | main | 86b2cda | merge: reemplazar frontend con versión actualizada conectada al backend | Oscar Vara | 20/06/2026 |
| HydroSmart-front | main | 0d5a8f4 | chore: actualizar configuración de gitignore | Oscar Vara | 20/06/2026 |
| HydroSmart-front | main | ee1e189 | chore: actualizar configuración de gitignore | Oscar Vara | 20/06/2026 |

#### 5.2.3.5. Execution Evidence for Sprint Review.

Durante el Sprint 3, el equipo logró integrar la aplicación HydroSmart de extremo a extremo, con la interfaz Angular consumiendo datos reales desde la API REST en Spring Boot conectada a MySQL. La aplicación arranca en `http://localhost:4200` (frontend) y consume el backend en `http://localhost:8080/api`. Se implementaron y validaron las siguientes vistas y flujos:

- **Login (`/login`):** Inicio de sesión con credenciales reales; el backend valida y devuelve un JWT que se almacena en `sessionStorage` y se adjunta automáticamente en cada petición.
- **Dashboard (`/dashboard`):** Visualización del consumo de agua mediante gráficos (Chart.js), con datos provenientes del bounded context de Consumption.
- **Devices (`/devices`):** Gestión de sensores/dispositivos (listado, creación y actualización de estado y preferencias).
- **Units (`/units`, solo `BUILDING_ADMIN`):** Administración de unidades del edificio y asignación/remoción de inquilinos.
- **Reports (`/reports`):** Consulta de reportes y lecturas de consumo por rango de fechas.
- **Settings (`/settings`, solo `BUILDING_ADMIN`):** Configuración asociada a metas de ahorro.
- **Profile (`/profile`):** Información del usuario autenticado (obtenida desde `GET /api/auth/me`).
- **Notifications:** Visualización de alertas/incidentes generados por el bounded context de Incident.

El control de acceso se aplica con `authGuard` (rutas que requieren sesión) y `roleGuard` (rutas exclusivas de `BUILDING_ADMIN`, como Units y Settings), de modo que un inquilino (`TENANT`) y un administrador ven experiencias diferenciadas.

**Credenciales de prueba (sembradas por `DataSeeder`):**
- Administrador de edificio: `admin@begonias.com.pe` / `admin123` (rol `BUILDING_ADMIN`)
- Inquilino: cuentas con contraseña `tenant123` (rol `TENANT`)

**Capturas de las vistas implementadas:**

`⚠️ FALTANTE: insertar los screenshots de cada vista en ejecución (consumiendo el backend real). Sugeridas:`
- `![execution-login](./images/execution-login.png)`
- `![execution-dashboard](./images/execution-dashboard.png)`
- `![execution-devices](./images/execution-devices.png)`
- `![execution-units](./images/execution-units.png)`
- `![execution-reports](./images/execution-reports.png)`
- `![execution-settings](./images/execution-settings.png)`
- `![execution-profile](./images/execution-profile.png)`

**Video de demostración:**

`⚠️ FALTANTE: insertar el enlace al video que ilustre y explique la navegación y el funcionamiento del Sprint 3 (login → dashboard → gestión de unidades/sensores → alertas → reportes), mostrando los datos provenientes del backend.`

#### 5.2.3.6. Services Documentation Evidence for Sprint Review.

Durante el Sprint 3 se construyó e implementó el backend de HydroSmart con **Spring Boot 3.5.x (Java 21)**, persistencia en **MySQL** mediante **Spring Data JPA**, seguridad con **Spring Security + JWT** (jjwt) y documentación de la API con **springdoc-openapi (Swagger UI)**.

**Estado actual:**
- Se desarrolló el backend bajo arquitectura DDD con cinco bounded contexts (IAM, Consumption, Incident, Property, Savings) y un módulo `shared` para configuración, seguridad y utilidades transversales.
- Se implementó autenticación y autorización con JWT y control de acceso por roles (`BUILDING_ADMIN`, `TENANT`) usando `@PreAuthorize`.
- Se expusieron los endpoints REST principales para usuarios, sensores, lecturas de consumo, edificios, unidades, inquilinos, alertas, metas de ahorro y reportes.
- La API quedó documentada y probada con **Swagger UI** (`/swagger-ui.html`; especificación en `/api-docs`), validando las operaciones contra datos sembrados por `DataSeeder`.

**URL local de la documentación (Swagger UI):** `http://localhost:8080/swagger-ui.html`

A continuación, la relación de endpoints documentados por bounded context.

**Endpoints de Authentication (IAM)**

| Endpoint | Acción | Verbo HTTP | Parámetros |
|---|---|---|---|
| /api/auth/login | Iniciar sesión | POST | body: email, password |
| /api/auth/me | Obtener usuario autenticado | GET | header: Authorization (Bearer JWT) |

**Endpoints de Consumption**

| Endpoint | Acción | Verbo HTTP | Parámetros |
|---|---|---|---|
| /api/sensors | Listar sensores | GET | query: buildingId o unitId |
| /api/sensors | Crear sensor (BUILDING_ADMIN) | POST | body: name, type, location, unitId |
| /api/sensors/{id}/preferences | Actualizar preferencias (BUILDING_ADMIN) | PUT | path: id; body: preferences |
| /api/sensors/{id}/status | Actualizar estado (BUILDING_ADMIN) | PUT | path: id; body: status |
| /api/sensors/{id}/readings | Lecturas por sensor | GET | path: id; query: from, to (opcional) |
| /api/buildings/{id}/readings | Lecturas por edificio (BUILDING_ADMIN) | GET | path: id; query: from, to (opcional) |

**Endpoints de Incident**

| Endpoint | Acción | Verbo HTTP | Parámetros |
|---|---|---|---|
| /api/alerts | Listar alertas | GET | query: buildingId o unitId, status (opcional) |
| /api/alerts/{id}/resolve | Resolver alerta (BUILDING_ADMIN) | PUT | path: id |

**Endpoints de Property**

| Endpoint | Acción | Verbo HTTP | Parámetros |
|---|---|---|---|
| /api/buildings/{id} | Obtener edificio (BUILDING_ADMIN) | GET | path: id |
| /api/buildings/{id}/summary | Resumen de consumo del edificio (BUILDING_ADMIN) | GET | path: id |
| /api/units | Listar unidades (BUILDING_ADMIN) | GET | query: buildingId |
| /api/units/{id} | Obtener unidad | GET | path: id |
| /api/units/{id}/summary | Resumen de consumo de la unidad | GET | path: id |
| /api/units/{id}/tenant | Obtener inquilino de la unidad (BUILDING_ADMIN) | GET | path: id |
| /api/units/{id}/assign-tenant | Asignar inquilino (BUILDING_ADMIN) | POST | path: id; body: name, lastName, email, phone, password |
| /api/units/{id}/tenant | Remover inquilino (BUILDING_ADMIN) | DELETE | path: id |

**Endpoints de Savings**

| Endpoint | Acción | Verbo HTTP | Parámetros |
|---|---|---|---|
| /api/saving-goals/active | Obtener meta de ahorro activa | GET | query: buildingId |
| /api/reports/monthly | Obtener reporte mensual (BUILDING_ADMIN) | GET | query: buildingId, period |

**Capturas de la documentación (Swagger UI):**

`⚠️ FALTANTE: insertar capturas de la interacción con Swagger UI usando datos de muestra (p. ej. login obteniendo el token, ejecución de GET /api/sensors, GET /api/units, etc.). Ej.: ![swagger-auth](./images/swagger-auth.png), ![swagger-sensors](./images/swagger-sensors.png)`

**Commits relacionados con la documentación de Web Services:** la documentación se generó automáticamente con springdoc-openapi a partir de la implementación de cada bounded context; los commits asociados son los listados en la sección 5.2.3.4 (repositorio HydroSmart-backend).

#### 5.2.3.7. Software Deployment Evidence for Sprint Review.

Durante el Sprint 3 el equipo configuró el entorno de ejecución **local e integrado** del sistema completo: backend Spring Boot + base de datos MySQL + frontend Angular.

- **Base de datos:** MySQL local (`hydrosmart_db`), creada automáticamente con `createDatabaseIfNotExist=true` y poblada en cada arranque por `DataSeeder` con usuarios, edificios, unidades, sensores, lecturas, alertas y metas de ahorro de muestra.
- **Backend:** Aplicación Spring Boot ejecutándose en `http://localhost:8080`, con CORS configurado para el frontend, seguridad JWT y Swagger UI disponible en `/swagger-ui.html`.
- **Frontend:** Aplicación Angular ejecutándose en `http://localhost:4200` (`ng serve`), apuntando al backend mediante `environment.apiUrl = 'http://localhost:8080/api'`.

> Estado del despliegue en la nube: en este Sprint la integración se validó en entorno **local**. **Aún no se configuró un despliegue en proveedor cloud** para el backend ni una base de datos administrada. Como trabajo siguiente se recomienda desplegar el backend (p. ej. Render/Railway) con una instancia MySQL administrada, actualizar `environment.production` con la URL pública de la API y redeplegar el frontend (Netlify) apuntando a dicha API.

`⚠️ FALTANTE: si se realizó algún despliegue en la nube, insertar capturas y URLs (proveedor, configuración del servicio, base de datos administrada, variables de entorno). Si solo se ejecutó en local, incluir capturas del backend corriendo (consola/Swagger) y del frontend conectado. Ej.: ![deploy-backend-local](./images/deploy-backend-local.png)`

#### 5.2.3.8. Team Collaboration Insights during Sprint.

Durante el Sprint 3, la colaboración del equipo se centró en la construcción del backend REST y su integración con la aplicación web. El trabajo se gestionó mediante **GitHub**, utilizando **una rama por bounded context** en el repositorio de backend y commits estandarizados con convención `feat:`/`chore:`, lo que permitió desarrollar en paralelo y mantener la trazabilidad por responsable.

Resumen de contribuciones por integrante (según commits del Sprint 3):

- **Oscar Vara (varometro159):** Esqueleto del proyecto, configuración de seguridad/CORS y bounded context de **IAM** (autenticación, JWT, usuarios y roles). Adicionalmente, lideró la **integración del frontend Angular con el backend**, reemplazando `db.json` por servicios HTTP reales, e implementando el interceptor de autenticación y los fixes de filtrado por unidad.
- **Victor Espino (Vmer140):** Bounded context de **Consumption** (aggregates `Sensor` y `ConsumptionReading`, endpoints de sensores, lecturas y resúmenes de consumo).
- **Hernán Huayta (Homesman):** Bounded context de **Incident** (aggregate `Alert`, listado y resolución de alertas).
- **Keyner Hancco (1Kanan2):** Bounded context de **Property** (aggregates `Building` y `Unit`, endpoints de edificios, unidades, resúmenes y gestión de inquilinos).
- **Braden García (BradenGarcia):** Bounded context de **Savings** (aggregate `SavingGoal`, meta de ahorro activa y reporte mensual).

**Analíticos de colaboración de GitHub:**

<div>
<img src="images/insights-contributors-sprint3.png" alt="Impact Mapping" width="800">
</div>

<div>
<img src="images/insights-commits-sprint3-1.png" alt="Impact Mapping" width="800">
</div>

<div>
<img src="images/insights-commits-sprint3-2.png" alt="Impact Mapping" width="800">
</div>

<div>
<img src="images/insights-commits-sprint3-3.png" alt="Impact Mapping" width="800">
</div>

<div>
<img src="images/insights-commits-sprint3-4.png" alt="Impact Mapping" width="800">
</div>

- `![network-graph](./images/network-graph.png)` — Network graph mostrando las ramas por bounded context.

> Recomendación para completar las evidencias: dado que las ramas de bounded context aún no están integradas a `main`, la vista de *Contributors* del backend puede mostrar pocos autores hasta que se realicen los merges. Conviene consolidar las ramas vía Pull Requests antes de generar las capturas de analíticos, de modo que la contribución de todos los integrantes quede reflejada en la rama principal.


## 5.3. Validation Interviews

### 5.3.3. Evaluaciones según heurísticas

UX Heuristics & Principles Evaluation
Usability – Inclusive Design – Information Architecture

**CARRERA:** Ingeniería de Software

**CURSO:** Desarrollo de Aplicaciones Open Source

**NRC:** 12010

**PROFESOR:** Ivan Robles Fernández

**SITE o APP A EVALUAR:** AquaPulse (HydroSmart)

**TAREAS A EVALUAR:**
El alcance de esta evaluación incluye la revisión de la usabilidad de las siguientes tareas:

Segmento Objetivo #1: Propietarios de viviendas con áreas verdes
- Visualizar el consumo de agua en tiempo real desde el dashboard.
- Gestionar los dispositivos de medición instalados en el hogar.
- Consultar el historial de consumo y los reportes generados.
- Configurar las preferencias de notificaciones y privacidad.

Segmento Objetivo #2: Estudiantes y jóvenes arrendatarios
- Visualizar el consumo compartido del hogar desde el dashboard.
- Editar la información del perfil de usuario.
- Consultar las alertas y notificaciones de consumo inusual.
- Acceder a las metas de ahorro y recomendaciones.

No están incluidas en esta versión de la evaluación las siguientes tareas:

- Registro e inicio de sesión (gestión de autenticación).
- Administración de propiedades e inquilinos por parte del arrendador.
- Generación y exportación de reportes personalizados.

**ESCALA DE SEVERIDAD:**
Los errores serán puntuados tomando en cuenta la siguiente escala de severidad

| Nivel | Descripción |
|---|---|
| 1 | Problema superficial: puede ser fácilmente superado por el usuario o ocurre con muy poca frecuencia. No necesita ser arreglado a no ser que exista disponibilidad de tiempo. |
| 2 | Problema menor: puede ocurrir un poco más frecuentemente o es un poco más difícil de superar para el usuario. Se le debería asignar una prioridad baja resolverlo de cara al siguiente reléase. |
| 3 | Problema mayor: ocurre frecuentemente o los usuarios no son capaces de resolverlos. Es importante que sean corregidos y se les debe asignar una prioridad alta. |
| 4 | Problema muy grave: un error de gran impacto que impide al usuario continuar con el uso de la herramienta. Es imperativo que sea corregido antes del lanzamiento. |

**TABLA RESUMEN:**

| # | Problema | Escala de severidad | Heurística/Principio violada(o) |
|---|---|---|---|
| 1 | Las tarjetas de resumen del dashboard no permiten acceder al detalle del consumo. | 3 | Information Architecture: Is it usable? |
| 2 | No existe un acceso directo a los dispositivos desde el dashboard. | 3 | Information Architecture: Is it usable? |
| 3 | Las notificaciones de consumo inusual no enlazan con la sección afectada. | 3 | Information Architecture: Is it findable? |
| 4 | Los campos del perfil no validan el tipo de dato ingresado. | 4 | Prevención de errores. |
| 5 | El sistema de medición de unidades de consumo no es consistente entre vistas. | 2 | Consistencia y estándares. |
| 6 | No existe ayuda contextual para interpretar las métricas y gráficos. | 2 | Ayuda y documentación. |

**DESCRIPCIÓN DE PROBLEMAS:**

**PROBLEMA #1:** Las tarjetas de resumen del dashboard no permiten acceder al detalle del consumo.

**SEVERIDAD:** 3
**HEURÍSTICA VIOLADA:** Information Architecture: Is it usable?

**Problema:**
En la pantalla del dashboard, se presentan tarjetas con métricas clave como el consumo total, el consumo promedio y el comparativo respecto al periodo anterior. El diseño visual de estas tarjetas invita al usuario a hacer clic esperando ver un desglose detallado, sin embargo, al hacerlo no se redirige al usuario a la vista de reportes ni se muestra información adicional, obligándolo a navegar manualmente por el menú lateral.

<div align="center">
    <img src="./images/execution-dashboard.png" alt="Problema 1 - Dashboard" width="600">
</div>

**Recomendación:**
Convertir las tarjetas de métricas en elementos interactivos que, al hacer clic, redirijan al usuario directamente a la sección de reportes con el filtro correspondiente aplicado.

---

**PROBLEMA #2:** No existe un acceso directo a los dispositivos desde el dashboard.

**SEVERIDAD:** 3
**HEURÍSTICA VIOLADA:** Information Architecture: Is it usable?

**Problema:**
En la pantalla del dashboard se muestra un resumen del estado de los dispositivos conectados (por ejemplo, medidores activos e inactivos), pero no existe un enlace o botón que permita acceder de forma directa a la pantalla de gestión de dispositivos. El usuario debe regresar al menú lateral y buscar manualmente la opción “Devices”, lo que incrementa el número de pasos para completar la tarea.

<div align="center">
    <img src="./images/execution-devices.png" alt="Problema 2 - Devices" width="600">
</div>

**Recomendación:**
Añadir un botón de acceso rápido o un enlace dentro de la tarjeta de dispositivos del dashboard que lleve directamente a la vista de gestión de dispositivos.

---

**PROBLEMA #3:** Las notificaciones de consumo inusual no enlazan con la sección afectada.

**SEVERIDAD:** 3
**HEURÍSTICA VIOLADA:** Information Architecture: Is it findable?

**Problema:**
Cuando el sistema detecta un consumo inusual o una posible fuga, se genera una notificación en el panel de alertas. Sin embargo, al seleccionar la notificación, esta no redirige al usuario a la pantalla de reportes o al dispositivo relacionado, por lo que el usuario debe buscar manualmente el origen del problema, lo que retrasa la atención de la alerta.

<div align="center">
    <img src="./images/execution-dashboard-notifications.png" alt="Problema 3 - Notifications" width="600">
</div>

**Recomendación:**
Incluir un enlace dentro de cada notificación que lleve directamente al detalle del dispositivo o reporte relacionado con la alerta detectada.

---

**PROBLEMA #4:** Los campos del perfil no validan el tipo de dato ingresado.

**SEVERIDAD:** 4
**HEURÍSTICA VIOLADA:** Prevención de errores.

**Problema:**
En la pantalla de edición de perfil, campos como el número de teléfono o el correo electrónico aceptan cualquier tipo de dato sin realizar una validación previa. No se muestran advertencias ni se impide el guardado de información con formato incorrecto, lo que puede generar inconsistencias en los datos del usuario y dificultar futuras comunicaciones o procesos de recuperación de cuenta.

<div align="center">
    <img src="./images/execution-profile.png" alt="Problema 4 - Profile" width="600">
</div>

**Recomendación:**
Implementar validación en tiempo real de los campos (formato de correo, longitud y tipo numérico del teléfono) e impedir el guardado mientras los datos no cumplan con el formato esperado, mostrando mensajes de error claros.

---

**PROBLEMA #5:** El sistema de medición de unidades de consumo no es consistente entre vistas.

**SEVERIDAD:** 2
**HEURÍSTICA VIOLADA:** Consistencia y estándares.

**Problema:**
En el dashboard el consumo se presenta en litros, mientras que en la pantalla de reportes algunas métricas se muestran en metros cúbicos (m³) sin una conversión explícita. Esta inconsistencia puede confundir al usuario al comparar valores entre distintas vistas y dificulta la interpretación del ahorro real.

<div align="center">
    <img src="./images/execution-reports.png" alt="Problema 5 - Reports" width="600">
</div>

**Recomendación:**
Estandarizar la unidad de medida en todas las vistas o incluir un conversor visible que permita al usuario alternar entre litros y metros cúbicos de forma consistente.

---

**PROBLEMA #6:** No existe ayuda contextual para interpretar las métricas y gráficos.

**SEVERIDAD:** 2
**HEURÍSTICA VIOLADA:** Ayuda y documentación.

**Problema:**
En las pantallas de dashboard y reportes se presentan métricas y gráficos (como el comparativo de consumo o el porcentaje de ahorro) sin una explicación de qué significan ni cómo se calculan. Para usuarios menos familiarizados con la tecnología, esto dificulta la comprensión del valor entregado por la aplicación y reduce la utilidad percibida de la información.

<div align="center">
    <img src="./images/execution-settings.png" alt="Problema 6 - Settings" width="600">
</div>

**Recomendación:**
Añadir tooltips o iconos de ayuda junto a cada métrica y gráfico, y contemplar una sección de ayuda o FAQ accesible desde el menú de configuración.

---

# Conclusiones y Recomendaciones

## Conclusiones

- **La gestión del agua en el hogar necesita urgentemente digitalizarse:**  
  A través del proceso de needfinding y el análisis de la problemática, se confirmó que la mayoría de usuarios residenciales en Perú todavía depende de medidores analógicos y facturas mensuales para enterarse de cuánta agua consumen. Esto hace que detectar una fuga o un consumo excesivo tome semanas, cuando el daño económico ya está hecho. HydroSmart responde directamente a esa brecha, transformando datos de consumo en información útil y en tiempo real.

- **Dos segmentos distintos, una misma necesidad de control:**  
 Las entrevistas y el análisis de usuarios confirmaron la existencia de dos perfiles claramente diferenciados: los propietarios de viviendas con áreas verdes, que buscan controlar el riego y evitar pérdidas por fugas; y los estudiantes o jóvenes arrendatarios, que necesitan herramientas accesibles para no llevarse sorpresas en sus recibos. Ambos segmentos mostraron disposición para adoptar soluciones digitales, siempre que sean simples y visualmente claras.

- **HydroSmart se diferencia por ser accesible y pensada para el contexto latinoamericano:**  
 A diferencia de competidores como Hydrao, que requiere inversión en hardware físico, o Dropcountr, que opera en un contexto anglosajón, HydroSmart apuesta por un modelo completamente digital y freemium, eliminando barreras de entrada para los segmentos B y C del mercado peruano. Esto la posiciona como una solución más realista para la realidad económica local.

- **El impacto económico y ambiental es cuantificable:**  
 Los datos recopilados durante el needfinding muestran que una fuga no detectada puede desperdiciar hasta 150,000 litros de agua al mes, y que el riego ineficiente en jardines genera un gasto hasta 50% mayor al necesario. Con HydroSmart, los usuarios pueden reducir al menos un 20% su factura de agua en los primeros tres meses de uso, lo cual representa un beneficio concreto y medible que justifica la adopción de la plataforma.

- **La arquitectura del producto está bien definida para escalar:**  
  El diseño basado en eventos (Big Picture EventStorming) y el uso del Impact Mapping permitieron identificar claramente los comportamientos esperados de cada segmento y las funcionalidades necesarias para generarlos. Esto le da al equipo una hoja de ruta estructurada que facilita el desarrollo iterativo sin perder de vista los objetivos de negocio.

- **El modelo de negocio freemium es viable para el mercado objetivo:**  
  La estrategia de ofrecer una versión gratuita con funcionalidades básicas y una suscripción de pago con características avanzadas se alinea con las características del mercado peruano, donde el precio es una barrera real pero los usuarios están dispuestos a pagar cuando perciben valor tangible, como el ahorro en la factura mensual o la prevención de pérdidas económicas.

- **Los objetivos de negocio son alcanzables y están bien planteados:**  
  Las metas definidas, alcanzar 800 usuarios activos en 6 meses y aumentar la retención en un 25% en 9 meses, son ambiciosas pero realistas si se acompañan de una buena estrategia de onboarding, contenido educativo y alianzas institucionales. El Impact Mapping desarrollado conecta correctamente esos objetivos con acciones concretas dentro del producto.

- **La implementación del frontend permitió materializar la propuesta de valor de HydroSmart en una solución funcional:**
Durante este sprint se logró transformar los requerimientos funcionales y los diseños previamente definidos en una aplicación web interactiva, permitiendo que la propuesta planteada deje de ser únicamente conceptual y se convierta en una plataforma navegable, accesible y orientada a resolver una necesidad real relacionada con el consumo responsable del agua.

- **El uso de tecnologías modernas facilitó un desarrollo escalable y mantenible:**
La utilización de Vue.js como framework principal y Vite como herramienta de construcción permitió implementar una arquitectura basada en componentes reutilizables, favoreciendo la organización del código, la escalabilidad del sistema y la facilidad para incorporar nuevas funcionalidades en futuras etapas del proyecto.

- **La simulación de datos permitió validar el comportamiento funcional del sistema:**
El uso de una base de datos simulada mediante archivos locales permitió probar de forma efectiva la interacción entre la interfaz y los datos dinámicos, validando procesos clave como visualización, edición y actualización de información, además de preparar técnicamente la plataforma para una futura integración con un backend real.

- **Esta entrega establece una base sólida para la evolución futura del sistema:**
Con el frontend implementado y funcional, HydroSmart cuenta ahora con una base tecnológica estable sobre la cual podrán integrarse nuevas capas de desarrollo, como servicios backend, conexión con dispositivos IoT y funcionalidades avanzadas de análisis predictivo, fortaleciendo así la visión de largo plazo del proyecto.

## Recomendaciones

- **Priorizar las alertas inteligentes en los primeros sprints:**  
  Dado que tanto propietarios como estudiantes mencionaron la detección tardía de problemas como su principal frustración, se recomienda que las alertas automáticas de consumo excesivo y posibles fugas sean de las primeras funcionalidades en implementarse. Son el diferencial más valioso de HydroSmart frente a las soluciones actuales.

- **Diseñar un onboarding simple y motivador:**  
  Para que los usuarios de ambos segmentos adopten la app con facilidad, se sugiere implementar un proceso de bienvenida paso a paso que explique cómo interpretar los datos de consumo, cómo configurar metas de ahorro y cómo activar las notificaciones. Un usuario que entiende la app desde el primer día tiene muchas más probabilidades de quedarse.

- **Buscar alianza con SEDAPAL lo antes posible:**  
  Una integración con los datos reales de consumo de SEDAPAL le daría a HydroSmart una ventaja competitiva enorme y difícil de replicar por competidores extranjeros. Se recomienda iniciar conversaciones con esta entidad desde etapas tempranas del proyecto, incluso si la integración técnica se realiza más adelante.

- **Invertir en contenido educativo sobre ahorro de agua:**  
Muchos usuarios aún no tienen una cultura de monitoreo del consumo hídrico, por lo que no buscan activamente una solución como HydroSmart. Publicar contenido en redes sociales, blogs o videos cortos sobre el impacto económico de las fugas y el riego ineficiente puede generar conciencia y atraer usuarios orgánicamente, posicionando a la startup como referente en el tema.

- **Realizar pruebas de usabilidad con usuarios reales cada dos sprints:**  
Ambos segmentos priorizaron la simplicidad como factor clave para adoptar la solución. Para asegurarse de que la interfaz sigue siendo intuitiva conforme se agregan nuevas funcionalidades, se recomienda hacer sesiones cortas de prueba con usuarios reales con regularidad, identificando puntos de confusión antes de que se conviertan en razones para dejar de usar la app.

- **Explorar versiones diferenciadas por segmento:**  
Dado que los propietarios y los estudiantes tienen necesidades distintas, podría evaluarse la posibilidad de ofrecer flujos de experiencia personalizados según el perfil del usuario al momento del registro. Esto haría que cada persona sienta que la app fue diseñada específicamente para su situación, lo cual aumenta el valor percibido.

- **Planificar la expansión regional desde ahora:**  
Aunque el enfoque inicial debe estar en Lima, donde se concentra la mayor parte del mercado potencial, se recomienda documentar desde ya las decisiones de diseño y desarrollo considerando una futura expansión a otras ciudades del Perú y eventualmente a países como Ecuador, Colombia o Bolivia, que comparten condiciones de mercado similares.

- **Medir el impacto real en los usuarios desde el inicio:**  
Aunque el enfoque inicial debe estar en Lima, donde se concentra la mayor parte del mercado potencial, se recomienda documentar desde ya las decisiones de diseño y desarrollo considerando una futura expansión a otras ciudades del Perú y eventualmente a países como Ecuador, Colombia o Bolivia, que comparten condiciones de mercado similares.

# Bibliografía

- Superintendencia Nacional de Servicios de Saneamiento (SUNASS). (2022). *Fugas de agua en instalaciones domiciliarias: impacto económico y ambiental en el usuario residencial*. SUNASS. Recuperado de https://www.sunass.gob.pe/
- Servicio de Agua Potable y Alcantarillado de Lima (SEDAPAL). (2025). *Sitio web oficial de SEDAPAL*. Recuperado el 5 de abril de 2025, de https://www.sedapal.com.pe/
- Instituto Nacional de Estadística e Informática (INEI). (2023). *Perú: Formas de acceso al agua y saneamiento básico*. INEI. Recuperado de https://m.inei.gob.pe/media/MenuRecursivo/boletines/boletin_agua_2023.pdf
- Banco Mundial. (2023). *Agua: Panorama general*. Recuperado de https://www.bancomundial.org/es/topic/water/overview
- Dropcountr. (2025). *Sitio web oficial de Dropcountr*. Recuperado el 5 de abril de 2025, de https://dropcountr.com/
- Hydrao. (2025). *Smart shower head – water consumption monitoring*. Recuperado el 5 de abril de 2025, de https://www.hydrao.com/
- Superintendencia Nacional de Servicios de Saneamiento (SUNASS). (2023). *Yakúmetro: simulador de consumo de agua potable y alcantarillado*. Recuperado de https://yakumetro.sunass.gob.pe/
- Evans, E. (2003). *Domain-Driven Design: Tackling Complexity in the Heart of Software*. Addison-Wesley.
- Microsoft. (2024). *ASP.NET Core Documentation*. Microsoft Learn. Recuperado de https://learn.microsoft.com/aspnet/core
- Nielsen, J. (1994). *10 Usability Heuristics for User Interface Design*. Nielsen Norman Group. Recuperado de https://www.nngroup.com/articles/ten-usability-heuristics/
- Patton, J. (2014). *User Story Mapping: Discover the Whole Story, Build the Right Product*. O'Reilly Media.
- Schwaber, K., & Sutherland, J. (2020). *The Scrum Guide: The Definitive Guide to Scrum: The Rules of the Game*. Scrum.org. Recuperado de https://scrumguides.org/scrum-guide.html
- You, E. (2024). *Vue.js - The Progressive JavaScript Framework*. Recuperado de https://vuejs.org/guide/introduction.html
  
