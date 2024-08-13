# Trivia Claro

**Trivia Claro** es una aplicación de trivia desarrollada con React, diseñada  en pantallas de 834x1042 píxeles. Este proyecto está configurado para ejecutarse localmente en tablets utilizando Termux, lo que permite que funcione sin conexión a internet. Además, la aplicación está desplegada en Vercel para acceso en línea.


## Tecnologías

<p align='center'>
<img alt="React" src="https://img.shields.io/badge/-React-45b8d8?style=flat-square&logo=react&logoColor=white" />
<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" />
<img alt="Firebase" src="https://img.shields.io/badge/-Firebase-DD2C00?style=flat-square&logo=firebase&logoColor=white" />
<img alt="Vite" src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white" />

</p>

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
      
    - Acceder a la aplicación desde el navegador de la tablet en `http://localhost:3000`.
      Aquí se obtienen las URLs para acceder desde el navegador, por ejemplo: 127.0.0.1:3000.
      Ejecutar la URL en el navegador para acceder a la trivia en modo offline

### Despliegue en Vercel

La aplicación está desplegada en Vercel y puede ser accedida [aquí](trivias-2.vercel.app).

