import dotenv from 'dotenv';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.js';
import reservasRoutes from './src/routes/reservas.js';
import autoRoutes from './src/routes/auto.js'
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

await connectDB();  // Si usas top-level await (Node 14+ con ES modules) o bien envuelve en una función async.

app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use('/api/auth', authRoutes);
app.use('/api/reservas', reservasRoutes);
app.use('/api/auto',autoRoutes)

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
