// Tâche 4 : générer un mot de passe aléatoire avec generate-password
const generator = require('generate-password');

function generatePassword(length = 12) {
  return generator.generate({
    length,
    numbers: true,
    symbols: true,
    uppercase: true,
    lowercase: true,
    strict: true,
  });
}

console.log('Mot de passe généré :', generatePassword());
