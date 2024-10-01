import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import sgMail from '@sendgrid/mail';

// Configurar la API Key de SendGrid

sgMail.setApiKey(''); // API Key de SendGrid

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/send-email', async (req, res) => {
  const { email, message } = req.body;

  const msg = {
    to: email, // Correo del destinatario
    from: 'gerarbarriostm@gmail.com', // correo verificado en SendGrid
    subject: 'Parcial 2 - Grupo 1',
    text: message
  };

  try {
    await sgMail.send(msg);
    res.status(200).send({ message: 'Correo enviado con éxito' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send({ error: 'Error al enviar el correo' });
  }
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
