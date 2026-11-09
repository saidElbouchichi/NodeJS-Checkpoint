// Tâche 5 : envoyer un e-mail avec nodemailer
// Les identifiants ne sont PAS dans le code : ils sont lus depuis des variables d'environnement.
// Exemple (Gmail avec un "mot de passe d'application") :
//   EMAIL_USER=moi@gmail.com EMAIL_PASS=xxxx EMAIL_TO=destinataire@example.com node email-sender.js
const nodemailer = require('nodemailer');

const { EMAIL_USER, EMAIL_PASS, EMAIL_TO } = process.env;

if (!EMAIL_USER || !EMAIL_PASS || !EMAIL_TO) {
  console.error('Définissez EMAIL_USER, EMAIL_PASS et EMAIL_TO avant de lancer le script.');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: EMAIL_USER, pass: EMAIL_PASS },
});

const mailOptions = {
  from: EMAIL_USER,
  to: EMAIL_TO,
  subject: 'Envoi d\'un e-mail avec Node.js',
  text: 'Bonjour ! Cet e-mail a été envoyé avec Node.js et nodemailer.',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Erreur :', error.message);
  } else {
    console.log('E-mail envoyé :', info.response);
  }
});
