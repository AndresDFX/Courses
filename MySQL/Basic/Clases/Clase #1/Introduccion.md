**MySQL**
=========

**Guía \#1: Introducción**
==========================

Esta guía hace parte del curso mencionado en el título y les permitirá
estudiar con más detenimiento los conceptos de clase, además de servir
como instrumento de la misma. La guía contará con código base, el
desarrollo conceptual de los temas y enlaces externos para el estudio
independiente.

**1. Lenguaje SQL**
===================

SQL, Structure Query Language (Lenguaje de Consulta Estructurado) es un
lenguaje de programacion para trabajar con base de datos relacionales
como MySQL, Oracle, etc.

MySQL es un interpretador de SQL, es un servidor de base de datos.

MySQL permite crear base de datos y tablas, insertar datos,
modificarlos, eliminarlos, ordenarlos, hacer consultas y realizar muchas
operaciones, etc., resumiendo: administrar bases de datos.

Ingresando instrucciones en la linea de comandos o embebidas en un
lenguaje como PHP nos comunicamos con el servidor. Cada sentencia debe
acabar con punto y coma (;).

La sensibilidad a mayúsculas y minúsculas, es decir, si hace diferencia
entre ellas, depende del sistema operativo, Windows no es sensible, pero
Linux sí. Por ejemplo Windows interpreta igualmente las siguientes
sentencias:

create database administracion;

Create DataBase administracion;

Pero Linux interpretará como un error la segunda.

Se recomienda usar siempre minúsculas. Es más el sitio
tutorialesprogramacionya.com está instalado sobre un servidor Linux por
lo que todos los ejercicios deberán respetarse mayúsculas y minúsculas.

Durante este curso utilizaremos la versión \"MySQL Community\" que es
Open Source.

Si no podemos instalar el servidor de base de datos en nuestro equipo
podemos hacer cada ejercicio en este mismo sitio y probarlo, pero
también podemos instalar el Servidor en nuestro equipo para probar y
ejercitar en forma más cómoda.

**2. Instalación MySQL Community**
==================================

Dijimos que si queremos seguir el curso de MySQL en nuestro equipo el
primer paso será instalar el software que lo debemos descargar para el
sistema operativo Windows
de [ aquí](https://dev.mysql.com/downloads/windows/installer/8.0.html "Link").

![MySQL Instalación](./media/image1.jpeg){width="6.686510279965004in"
height="2.679740813648294in"}

En la siguiente pantalla seleccionamos \"No thanks, just start my
download.\" y procedemos a descargar el instalador de MySQL (este
programa luego nos descargará la última versión)

Una vez descargado el archivo
\"mysql-installer-web-community-8.0.12.0.msi\" (o una versión posterior)
procedemos a ejecutarlo y luego de aceptar \"los términos y
condiciones\" dejaremos la mayoría de las opciones por defecto:

![MySQL Instalación](./media/image2.jpeg){width="6.135416666666667in"
height="4.625in"}

En la segunda pantalla dejamos seleccionado \"Developer Default\" que
nos instalará la mayoría de las herramientas que necesitaremos como
programador:

![MySQL Instalación](./media/image3.jpeg){width="6.125in"
height="4.635416666666667in"}

La pantalla siguiente nos informa algunos otros programas que se
instalarán para el correcto funcionamiento de MySQL:

![MySQL Instalación](./media/image4.jpeg){width="6.125in"
height="4.635416666666667in"}

El siguiente paso es el que más tiempo demorará debido a que se
descargarán de internet el servidor de MySQL propiamente dicho,
manuales, drivers de conexión para distintos lenguajes etc, una vez
descargados se ejecuta el proceso de instalación:

![MySQL Instalación](./media/image5.jpeg){width="6.145833333333333in"
height="4.625in"}

La siguiente ventana nos informa que se procederá a configurar el
\"MySQL Server\", \"MySQL Router\" y \"Samples\":

![MySQL Instalación](./media/image6.jpeg){width="6.135416666666667in"
height="4.645833333333333in"}

Dejemos seleccionada la opción por defecto \"Standalone MySQL Server\":

![MySQL Instalación](./media/image7.jpeg){width="6.125in"
height="4.625in"}

Para configurar el servidor debemos indicar en \"Connectivity\" el
puerto de comunicaciones que por defecto está configurado con el valor
\"3306\" (si ya tiene instalada otra versión de MySQL en su computadora
cambie este puerto por \"3307\" y no tendrá conflictos con la versión
anterior):

![MySQL Instalación](./media/image8.jpeg){width="6.145833333333333in"
height="4.625in"}

Dejemos el método de autenticación recomendado:

![MySQL Instalación](./media/image9.jpeg){width="6.125in"
height="4.625in"}

En el siguiente paso debemos definir la clave para el usuario \"root\" o
raiz del servidor de base de datos. No debemos olvidar dicha clave ya
que cada vez que necesitemos acceder al servidor MySQL se nos pedirá
dicha clave para el usuario \"root\":

![MySQL Instalación](./media/image10.jpeg){width="6.145833333333333in"
height="4.625in"}

No crearemos en este momento otras cuentas de usuarios para el servidor
MySQL (lo veremos más adelante en este curso)

Dejamos los valores por defecto para la pantalla de \"Window Service\":

![MySQL Instalación](./media/image11.jpeg){width="6.145833333333333in"
height="4.635416666666667in"}

Finalmente confirmamos la configuración definida en los diálogos
anteriores:

![MySQL Instalación](./media/image12.jpeg){width="6.135416666666667in"
height="4.645833333333333in"}

Los mismos pasos ahora damos para configurar el \"MySQL Router\",
dejamos datos por defecto:

![MySQL Instalación](./media/image13.jpeg){width="6.135416666666667in"
height="4.645833333333333in"}

La siguiente pantalla nos permite verificar el correcto funcionamiento
del servidor, debemos ingresar la clave que creamos anteriormente:

![MySQL Instalación](./media/image14.jpeg){width="6.135416666666667in"
height="4.625in"}

La última pantalla inicia las aplicaciones \"Workbench\" y \"MySQL
Shell\" que luego veremos en este curso:

![MySQL Instalación](./media/image15.jpeg){width="6.125in"
height="4.65625in"}

Tenemos ya todo el software necesario para desarrollar en forma local el
curso de MySQL instalado en nuestro sistema operativo Windows:

![MySQL software](./media/image16.jpeg){width="3.3645833333333335in"
height="5.625in"}
