import express from 'express';
import morgan from 'morgan';


//instanciamos el servidor
const app = express();

//le decimos a la aplicacion que utilice morgan con la configuracion dev
app.use(morgan('dev'));

export default app;
