// server.js — entrypoint universal para Render y local
import('./index.js')
  .then(() => {
    console.log('✅ Backend iniciado desde server.js');
  })
  .catch((err) => {
    console.error('❌ Error iniciando el servidor:', err);
  });

