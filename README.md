# Trivia Interactiva

Trivia Interactiva es una webapp personalizable que utiliza un archivo JSON para cargar una serie de preguntas temáticas, diseñadas específicamente para una empresa o evento. La aplicación presenta estas preguntas en pantalla, una a la vez, en un formato de respuesta múltiple. Según las respuestas seleccionadas, se contabilizan los aciertos del usuario.

Al finalizar la trivia, se realiza un recuento de las respuestas correctas y, dependiendo de un umbral predefinido, se muestra una pantalla de "ganaste" o "perdiste", ofreciendo así una experiencia interactiva y adaptada a las necesidades del cliente.



## Tecnologías

<p align='center'>
<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
<img alt="Termux" src="https://img.shields.io/badge/-Termux-000000?style=flat-square&logo=android&logoColor=white" />
<img alt="Vercel" src="https://img.shields.io/badge/-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" />
</p>

## Flujo de la Experiencia

![Flujo de la experiencia](/public/flujoexp.png)
1. Pantalla de bienvenida.
2. Registro del usuario. (Es necesario contar con conexión a internet).
3. Desarrollo de la trivia.
4. Pantalla de despedida.

## Brandeo

### Preguntas
* Pregunta correspondiente.
* Posibles respuestas (es posible utilizar imágenes).
* Respuesta correcta.

### Artes
Artes puntuales de cada una de las pantallas del flujo.

* Para background, imágenes en 1080x1920. formato PNG.
* Assets como imágenes para respuesta. formato PNG 
* Assets como logos, personajes, botones, etc. formato SVG.

## Instalación y Ejecución

### Requisitos

- Node.js y npm instalados.
- Android tablet con Termux instalado (opcional para ejecución local sin internet).

### Pasos de Instalación

1. Clonar el repositorio:

    ```bash
    git clone https://github.com/tu-usuario/trivia-claro.git
    cd trivia-claro
    ```

2. Instalar las dependencias:

    ```bash
    npm install
    ```

3. Ejecución en desarrollo:

    ```bash
    npm start
    ```

4.  Configuración en una tablet Android con Termux:

    - Instalar Termux desde la Google Play Store.
    - Abrir Termux y correr los siguientes comandos:

        ```bash
       pkg update
      pkg install nodejs
      npm install -g http-server
      termux-setup-storage
        ```
      Navegar a la carpeta donde está el build
   
      ```bash
      cd /storage/emulated/0/build
      ```
    - Ejecutar el desarrollo.
      ```bash
      http-server -p 3000
      ```
      
    - Acceder a la aplicación desde el navegador de la tablet en `http://localhost:3000`.
      Aquí se obtienen las URLs para acceder desde el navegador, por ejemplo: 127.0.0.1:3000.

      Ejecutar la URL en el navegador para acceder a la trivia en modo offline

### Resolución

La trivia fue desarrollada de manera responsive para poder adaptarse a cualquier tamaño de pantalla.

