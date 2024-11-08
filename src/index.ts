import app from './app';
import connectToDatabase from './config/database';

const PORT = process.env.PORT || 4000;

connectToDatabase();

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});