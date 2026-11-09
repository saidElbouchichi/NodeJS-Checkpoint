# Node.js Checkpoint — GOMYCODE

Un fichier par exercice :

| # | Fichier | Description | Lancer |
|---|---------|-------------|--------|
| 1 | `hello-world.js` | Affiche `HELLO WORLD` dans la console | `npm run hello` |
| 2 | `server.js` | Serveur HTTP sur le port 3000 qui répond `<h1>Hello Node !!!!</h1>` | `npm run server` puis http://localhost:3000 |
| 3 | `file-system.js` | Crée `welcome.txt` contenant `Hello Node`, puis lit et affiche son contenu (module `fs`) | `npm run fs` |
| 4 | `password-generator.js` | Génère un mot de passe aléatoire avec `generate-password` | `npm run password` |
| 5 | `email-sender.js` | Envoie un e-mail avec `nodemailer` | voir ci-dessous |

## Installation

```bash
npm install
```

## Envoi d'e-mail (tâche 5)

Aucune information personnelle n'est stockée dans le code : les identifiants sont passés par variables d'environnement.

```bash
EMAIL_USER=votre@gmail.com EMAIL_PASS=mot_de_passe_application EMAIL_TO=destinataire@example.com npm run email
```

Pour Gmail, il faut créer un « mot de passe d'application » (compte Google > Sécurité > Validation en deux étapes).
