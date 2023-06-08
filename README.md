# TPfinalUTN
Trabajo final curso front end UTN

LA WEB DE LOS PROCERES ARGENTINOS

La tematica es sencilla. Es una web ficticia/humoristica en donde se homenajea a grandes heroes contemporaneos de nuestro país (grandes heroes segun sus creadores, tambien ficticios, destacados en la sección "Quienes Somos"). Fue la idea con la que me sentí mas comodo para poder integrar todo lo que fuimos aprendiendo en la clase sin que me quede nada afuera.

Se cuenta con un estilo compartido. En cada pagina cambiará el contenido del elemento "main", el resto es igual para todas.

El HEADER cuenta con dos imagenes decorativas, El titulo principal y una imagen de fondo generada con la pagina "https://svgwave.in/" que crea olas en gradiente y permite exportar la imagen en formato SVG o PNG. Esta imagen de fondo se utilizo tambien para el FOOTER.

La barra de navegacion NAV tiene tres botones que cambian de color depende del lugar del sitio en el que estemos situados.

El FOOTER cuenta con iconos provistos por links anclas que se abren en pestañas nuevas (via target: _blank). Al no contar con perfiles en las redes sociales, los links nos envian a las paginas principales de cada red social.
Luego tiene una pequeña leyenda y termina con una mencion al desarrollador.

El color de fondo del BODY es un gradiente.



El sitio consta de 3 paginas:


PROCERES

Este es el archivo "index.html". Es la pagina principal o Home.

Tiene cuatro elementos. Cada uno es una especie de carta. Cada carta pertenece a un personaje distinto.
La carta consta de una imagen del personaje con su nombre y 3 cajas que describen su perfil: PODER, DEBILIDAD y ESTILO DE BAILE.

Para embellecer el diseño se aplicaron sombreados en el texto del nombre de personaje, en las imagenes, en las cajas de poder-debilidad-estilo, y en el contenedor principal que seria la carta en si misma.
Este contenedor principal tiene una imagen de fondo ".jpg".

Se realizo una animacion que se activa cuando se pasa el mouse sobre cada carta (en caso de pantallas tactiles será cuando se toque la carta que queramos animar - en este caso para volver atras la animacion se debe clickear otra carta o el fondo de la pagina).


POSTULA TU PROCER

En esta pagina se incorpora un formulario en donde se pueden ingresar datos para postular una posible nueva carta para la pagina home.

Para poder cumplir la consiga e incorporar una funcionalidad JAVASCRIPT lo que hice fue en primer lugar detener la accion por default del boton de "submit" para poder utilizar los valores cargados como string para devolver un alert usandolos. Luego hay un prompt que se utiliza para agregar condicionales.

En sintesis se debe cargar el formulario y se usaran los datos que el usuario ingrese en el input "tu nombre" y en el input "e-mail".
Ambos valores se setearon como "required" para obligar al usuario a completar el campo para que el boton "enviar" (submit) realice la accion deseada por el desarrollador: usar los datos en un alert.
Luego de este alert, aparece un prompt que consulta la nacionalidad del usuario (aqui es donde entran los condicionales). Esta parte esta pensada para que nos retorne dos posibles caminos: uno, si el usuario ingresa la palabra "Argentina" o alguna de sus variantes (ARGENTINA, argentina) y otro, si el usuario ingresa cualquier pais que no sea Argentina.

El boton ENVIAR cambia de color si pasamos el mouse sobre el.


QUIENES SOMOS

Una breve reseña de los personajes que manejan el sitio y su puesto de trabajo.
Se sombrearon cajas, se agrego una foto para cada perfil.
Se utilizo la pseudoclase ":nth-child" para seleccionar los hijos pares del contenedor y posicionar los elementos de manera inversa a la que aparecen en el flujo HTML.


MEDIA QUERIES

Se realizaron modificaciones para pantallas pequeñas y medianas



Para pantallas pequeñas de hasta 767px:

En el estilo compartido; la botonera pasa de estar en una fila y tres columnas, a estar en una columna y en tres filas.
	
	  En la seccion "proceres" la direccion de las cartas en el "main" cambia a columna por lo que ingresa una sola carta en todo el ancho. Las restantes se ubicaran abajo a continuacion.
Desaparecen las fotos del HEADER y la leyenda del FOOTER.

	  En la seccion "postula a tu procer" se agranda el ancho del formulario.

	  En la seccion "quienes somos" cambia la orientacion del contenido de cada perfil. Ahora la foto se ubicara en la parte superior de la caja contenedora y junto con el nombre, quedaran centrados horizontalmente.



Para pantallas medianas de hasta 1024px (y moviles rotando pantalla):

	Utilicé flex-wrap en la caja contenedora y un ancho de 45% para los hijos (las cartas de los personajes). De esta manera me aseguré que entren dos cartas en cada fila y quede un pequeño espacio (el 10% restante) para posibles margenes o gap.
  
 
  
  
NOTAS SOBRE FRAMEWORK BOOTSTRAP

Entre los archivos que teniamos habilitados como material de clase encontre muchas referencias al bootstrap.
No quise utilizarlo porque entiendo que mas alla de que
se puedan lograr sitios de calidad en cuanto a diseño, responsividad y funcionalidad, personalmente lo veo como un "copy/paste" y
prefiero perder originalidad en cuanto al diseño pero ganar la experiencia que me permite tratar de crearlo todo por mi cuenta. Siento que
aprendo mas y que es importante que asi sea. No se si sera excluyente para la evaluacion del trabajo la utilizacion de Bootstrap. Si es necesario, incorporare algun elemento.



DISEÑO: GUIDO GATICA
