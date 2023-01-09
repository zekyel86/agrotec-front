# Proyecto Agrotec

Este es el proyecto de fin de la Tecnicatura en el cual se realiza un sistema de control de producción para una empresa llamada Agrotec. El backend se ha probado con Postman.

## Instrucciones para levantar el sistema en tu PC

1. Descargar Node [https://nodejs.org/es/]
2. Instalar npm [https://www.npmjs.com/]
3. Crear un archivo .env en la raíz del proyecto del backend, el cual debe contener la siguiente info:

PORT=3001
HOST='localhost'
USERROOT='TU-USER'
PASSWORD='TU-PSSWORD'
DB='agrotec'
SECRETKEY='mGkPX4GP4CzG62+2WpZaIWbPh6Z0VEIHXS8pshLqiuc='

4. Crear en tu equipo una nueva base de datos llamada agrotec.
5. Correr el comando npm install tanto en la raiz del front como en el back.
6. Ingresar a un visualizador de base de datos, como por ejemplo dbeaver, y allí crear un usuario en la tabla usuario. El password debe ser encriptado en [https://bcrypt-generator.com/]. Luego, en la tabla rol, crear uno y finalmente en la tabla usuario_rol, asignar el rol al usuario.
7. Levantar el front con el comando npm install y el backend con el comando npm run dev.
