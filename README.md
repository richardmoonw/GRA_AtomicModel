# Descripción del Proyecto
Este proyecto consiste en modelo de un átomo de Aluminio en 3D. La representación consiste en el nucleo formado por 13 protones y 14 neutrones, y los 3 niveles de energía con sus 2, 8 y 3 electrones respectivamente.

# Requerimientos del Proyecto
En esta sección se pueden identificar los requerimientos solicitados del proyecto, así como también la forma en que se alcanzaron.

1. Escena en WebGL. Para el desarrollo de este proyecto se optó por la utilización de una librería llamada [ThreeJs](https://threejs.org/) que corre sobre WebGL.
2. Dos texturas. Para este modelo se utilizaron texturas para el fondo, protones, neutrones y electrones. Los niveles de energía carecen de texturas ya que el material y color elegidos lucen bastante bien.
3. Una luz. La escena cuenta con dos fuentes de luces ubicadas en la parte superior de la escena.
4. Una sombra. Todos los elementos presentes en la escena cuentan con una región sombreada debido a que la luz no alcanza a incidir en ella.
5. Animación. Los electrones de Valencia giran sobre el último nivel de energía del átomo.
6. Control interactivo. La cámara se puede mover con la ayuda del mouse. Además se puede hacer zoom in o zoom out con la rueda del ratón.

# Referencias
Las fuentes que se consultaron para la elaboración de este proyecto están documentadas en el archivo index.html.

# Texturas
Las texturas se encuentran en la carpeta **textures**.

# Guia de Instalacion
Para poder correr el proyecto se necesita contar con un servidor HTTP. Si no cuentas con uno, al momento de abrir el archivo index.html te marcara un error de Cross-Origin. Sin embargo, si no tienes tiempo para descargar y configurar un servidor, te tenemos la mejor solucion. A continuacion se presenta una serie de pasos que te ayudara a correr este proyecto.

1. Instala el editor [Visual Studio Code](https://code.visualstudio.com/).
2. Abre el programa recien instalado y dirigete a la seccion de extensiones (usualmente esto se encuentra en una barra al lado izquierdo de la pantalla).
3. Busca la extension llamada Live Server (Ritwick Dey es el autor) e instalala.
4. Abre este proyecto en Visual Studio Code, dale click derecho al archivo index.html y selecciona la opcion "Open with Live Server". (Si esta opcion no aparece, puedes intentar reiniciando Visual Studio Code y probar este paso nuevamente).

# Uso de la Aplicacion
La aplicacion te permite hacer lo siguiente:
1. Rotar el modelo dejando presionado el boton izquierdo del mouse y arrastrandolo en la direccion deseada.
2. Hacer Zoom In o Zoom Out con la rueda de desplazamiento.