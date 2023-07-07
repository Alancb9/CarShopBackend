# Aplicacion de formularios para mantenimiento de vehiculos 'CarShop' desarrollada en REACT y AWS

## Descripción General
<justify>Esta aplicación fue creada bajo la necesidad del ingreso de datos para el mantenimiento de vehículos,
consta de 3 formularios: datos del cliente, datos del vehículo y otro de servicio, una vez llenados,
se muestra por pantalla la orden de compra con el resumen de los datos ingresados previamente en los forms.
Se puede navegar entre formularios con un boton de atras y siguiente, en la pantalla de orden de compra se muestra
un boton de aprobar orden, cuando se da clic en este boton se genera un mensaje de ORDEN GENERADA EXITOSAMENTE,
con un boton de generar una nueva cita que redirige al primer formulario.
Cada formulario esta validado y no se puede avanzar al siguiente formulario si no se llenan los datos requeridos.
La aplicación cuenta con un modo oscuro y un color claro para gusto del usuario, una barra de navegación que contiene
el nombre de la app, y un botón interruptor para alternar entre el modo oscuro y claro tambien cuenta con un footer
con el nombre del desarrollador y un icono de github que al cliquearlo llevara al usuario hacia el repositorio del código fuente.</justify>

## Descripción del código
El codigo consta de varios modulos y componentes separados para facilitar el futuro mantenimiento del mismo que seran. mencionados a continuación:

### App.jsx
Es el componente principal que utiliza el enrutador de React Router para definir las rutas y renderizar diferentes componentes.

### App.css
Contiene los estilos de la aplicación, como los estilos de la barra de navegacion, los formularios, el footer y el modo oscuro.

### AppContext.jsx
Este archivo define el contexto de la aplicación utilizando el hook 'useReducer' para manejar el estado global de la aplicación, este incluye el estado inicial de los datos del cliente, vehiculo, servicios y fecha.

### reducers.jsx
Contiene el reducer que maneja las acciones para actualizar el estado global de la aplicacion, como agregar o eliminar datos.

### Formularios FormCliente.jsx, FormVehiculo.jsx
Son componentes que muestran su respectivos formularios para ingresar datos del cliente y del vehiculo respectivamente, utilizan el contexto de la aplicacion 'AppContext' para actualizar los datos del cliente y del vehiculo.

### Servicios.jsx
Componente que muestra un listado de opciones con los servicios de CarShop, el usuario podra escoger como minimo uno de los servicios,
este componente tambien utiliza el contexto de la aplicacion para actualizar los datos de los servicios elegidos.

### OrdenTrabajo.jsx
Componente que utiliza el contexto de la aplicacion para acceder a los estados ingresados previamente y mostrarle al usuario los datos para su posterior aprovación, una vez que se da clic en aprovar orden se muestra la pantalla de exito.

### Exito.jsx
Este componente muestra un mensaje de exito cuando el usuario aprueba la orden, al dar clic en reservar nueva cita accede al contexto de la app resetea los datos y redirecciona al formulario del cliente para generar una nueva cita.

### index.jsx
Este módulo crea un punto de entrada para la aplicacion, establece el contexto y renderiza el componente principal de la aplicación en el elemento 'root' del documento HTML.

## Desarrollo de la aplicacion desde cero CarShop
Para el desarrollo de esta aplicacion desde cero se necesito de node.js y de su administrador de paquetes npm.

Abrir el cmd y ejecutar los siguientes comandos `node --version` y `npm --version` para verificar si tienes instalado
y la version de node.js y npm respectivamente.

Si no tienes instalado node.js puedes entrar a [instalar nodejs](https://nodejs.org/es/download)

Una vez instalado node.js creamos una carpeta para alojar nuestra aplicacion, accedemos a ella en el cmd y ejecutamos localmente `npm install react`.

El comando `npm install -g <paquete>` permite instalar paquetes de manera global en caso de que requieras realizar algo de este tipo.

Dentro de la carpeta donde se instalo react ejecutamos el siguiente comando `npx create-react-app <Nombre de la aplicacion>`, luego de esto se creara una subcarpeta con toda la estructura por defecto para una aplicacion de reactA partir de aqui se desarrollo toda la logica de programacion
mencionada en lineas anteriores.

Si deseas informacion mas especifica puedes visitar [Create React App](https://github.com/facebook/create-react-app).

## Ejecutar aplicacion en modo de desarrollo
Para visualizar los cambios que le estas haciendo a tu aplicacion de react ejecuta el comando `npm start` con esto se ejecutara un servidor local y en tu navegador podras ver la aplicacion en [http://localhost:3000/](http://localhost:3000/) en esta pagina podras ver los cambios y los errores que contengas en tiempo real en la pagina del navegador.

## Descargar codigo fuente y ejecutar en tu pc personal
Copiamos absolutamente todos los archivos del proyecto y los pegamos en la pc de destino , puedes copiar manuelmante o utilizar alguna herramienta de de versionado o transferencia de archivos como git.

Abrimos la linea de comandos cmd y navegamos hasta la carpeta raiz del proyecto de react, ejecutamos el comando `npm install` para instalar las dependencias necesarias de la aplicación. Esto leera el archivo `package.json` y descargara las dependencias del directorio `node_modules`.

Una vez instaladas las dependencias ejecutamos `npm start` para que se ejecute un servidor y poder abrir la aplicación en [http://localhost:3000/](http://localhost:3000/)

# Integracion con AWS
En el modulo OrdenTrabajo.jsx agregamos la funcionalidad para la integracion de la app de react con DynamoDB en AWS el codigo esta envuelto en comentarios `// AWS` para que se pueda identificar.

1. Instalar AWS SDK.
    En la carpeta raiz del proyecto abrimos el cmd y ejecutamos el siguiente comando:
    ```
    npm i aws-sdk --save
    ```
2. Añadir import en componente a usar AWS
    ```
    import AWS from 'aws-sdk';
    ```
3. Instanciar una conexión con AWS, llenar las credenciales.
    Descargar credenciales para conexión con AWS Account. Ir a sección AWS Details > AWS CLI.
    NOTA: las credenciales del AWS CLI estan en constante cambio con cada inicio de sesión en la plataforma, tener en cuenta esto al momento de implementar esta solución, aun no se toma en cuenta alguna variable de entorno que nos facilite este proceso.
    ```
    AWS.config.update({
    accessKeyId: '',
    secretAccessKey: '',
    region: 'us-east-1',
    sessionToken: ''
    });
    ```
4. Crear objeto para interactuar con AWS
    ```
    const s3 = new AWS.S3();
    ```

## Integracion con DynamoDB
En la pagina principal de AWS buscar el servicio DynamoDB > create table, luego darle un nombre a la tabla en este caso `formulario` y darle nombre a la clave de particion en este caso `cliente`, dejar la `configuracion por defecto` y dar clic en `create table`, entrar a la tabla y dar clic en `Explore table items` > `Create item` ingresar todos los atributos con su respectivo valor y tipo de dato > `Create item`.

Los atributos puedes verlos en el codigo fuente en `//AWS Atributos`.
Al usar la aplicación y dar clic en `Aprobar orden`, los datos ingresados previamente se guardaran en la nube en AWS DynamoDB.

# Despliegue en AWS

1. Ejecutar comando en la raiz del proyecto 
    ```
    npm run build
    ```
2. Crear un `bucket en S3` para realizar el desplique, en la barra de busqueda escribir `S3` > entrar al servicio > dar clic en `Create bucket`, `dar un nombre` dejamos para este caso las `ACLs habilitadas`, habilitar `Object wrider`, `desbloquear el acceso al publico` y `marcar casilla de advertencia`, dar clic en `Create bucket`.

3. Entrar al bucket, ir a permisos y dar clic en `Edit` politicas del bucket y configurar ACL del bucket:
   ```
   {
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject",
                "s3:PutObject"
            ],
            "Resource": [
                "arn:aws:s3:::<Your-Bucket-name>",
                "arn:aws:s3:::<Your-Bucket-name>/*"
            ]
        }
        ]
    }
   ```
   y dar clic en `Save changes`.

4. En la sección de `Cross-origin resource sharing (CORS)` damos clic en `Edit` y pegamos el siguiente códigoÑ
    ```
    [
        {
            "AllowedHeaders": [
                "*"
            ],
            "AllowedMethods": [
                "PUT",
                "POST",
                "GET"
            ],
            "AllowedOrigins": [
                "*"
            ],
            "ExposeHeaders": [
                "ETag"
            ]
        }
    ]

    ```

5. Ir a seccion de `Properties`, en la parte final dar clic en `Edit` en la seccion `Static website hosting`.

6. Dar clic en `Enable`, escribimos `index.html` en `index document`, dar clic en `Save changes` y en la seccion `Static website hosting` se generará la URL.

7. Cargar en el bucket todo lo que se encuentre dentro de la carpeta `build`, una vez cargado los archivos se puede visualizar la pagina en la URL que se genero en  la seccion `Static website hosting`