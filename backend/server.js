import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectRedis } from './src/redisClient.js';
import horarioRoutes from './src/routes/horario.js';
import asignaturaRoutes from './src/routes/asignatura.js'
import profesorRoutes from './src/routes/profesores.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api', horarioRoutes);
app.use('/api', asignaturaRoutes);
app.use('/api', profesorRoutes);

app.get('/', (req, res) => {
  res.send('🧠 Servidor Express funcionando, Tony');
});

app.listen(PORT, async () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
  await connectRedis();
});
