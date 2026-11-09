// Tâche 3 : créer welcome.txt avec "Hello Node", puis lire son contenu
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'welcome.txt');

// Étape 1 : création du fichier
fs.writeFile(file, 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier welcome.txt créé.');

  // Étape 2 : lecture du fichier (encodage utf8 pour obtenir une chaîne)
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu :', data);
  });
});
