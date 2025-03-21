# HRnet - Gestion des Employés

![HRnet Logo](./public/logo.webp)

## 🚀 Description
HRnet est une application de gestion des employés permettant d'enregistrer et de consulter facilement les informations des employés d'une entreprise. L'application utilise **React**, **Redux**, et **Vite** pour une performance optimale.

---

## 📌 Fonctionnalités
- **Ajout d'employés** avec un formulaire interactif.
- **Affichage de la liste des employés** avec recherche et pagination.
- **Tri dynamique** sur les colonnes du tableau.
- **Sauvegarde des employés** avec Redux.
- **Utilisation de composants réutilisables** :
  - `smtable-react` : bibliothèque custom pour l'affichage des tableaux.
  - `samodal-react` : composant modal pour les notifications de succès.

---

## 🛠️ Technologies Utilisées
- **Frontend** : React 19, Redux, React Router, Vite
- **UI Components** : React Select, React DatePicker
- **Gestion du State** : Redux
- **Déploiement** : Vercel

---

## 📂 Installation et Exécution

### 🖾 1. Cloner le projet
```bash
git clone https://github.com/samiNedjai/HRnet-react.git
cd HRnet-react
```

### 🏰️ 2. Installer les dépendances
```bash
npm install
```

### 🚀 3. Lancer l'application en mode développement
```bash
npm run dev
```
L'application sera accessible à l'adresse :
```
http://localhost:5173
```

### ⚡ 4. Build pour la production
```bash
npm run build
```

---

## 🎨 Structure du Projet

```
HRnet-react/
│── src/
│   ├── components/        # Composants réutilisables
│   │   ├── DatePicker/
│   │   ├── Dropdown/
│   │   ├── EmployeeForm/
│   │   ├── Header/
│   ├── pages/             # Pages principales
│   │   ├── CreateEmployee/
│   │   ├── EmployeeList/
│   ├── store/             # Configuration Redux
│   ├── actions/           # Actions Redux
│   ├── reducers/          # Reducers Redux
│   ├── App.jsx            # Point d'entrée de l'application
│   ├── main.jsx           # Initialisation React
│── public/
│── package.json
│── vite.config.js
│── README.md
```

---

## 🖥️ Déploiement sur Vercel
L'application est déployée automatiquement sur **Vercel** à chaque `push` sur la branche principale.

### 🔗 URL de Production :
➡️ [HRnet Déployé sur Vercel](https://hrnet-react-green.vercel.app/)

---

## 🛠️ Améliorations Futures
- Ajouter une **authentification utilisateur**.
- Améliorer le **design** avec TailwindCSS ou Material-UI.
- Intégrer une **gestion des rôles** (admin/employé).
- Ajouter des **tests unitaires et d'intégration**.

---

## 🐝 Licence
Ce projet est sous licence **MIT**.

---

## 👨‍💻 Auteur
Développé  par **Sami Nedjai**.

💎 Contact : [sami.nedjai@outlook.fr](mailto:sami.nedjai@outlook.fr)  
💻 GitHub : [@samiNedjai](https://github.com/samiNedjai)


