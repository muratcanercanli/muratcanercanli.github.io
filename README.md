# Portfolio de Murat Can ERCANLI | Data Analyst & Business Intelligence

Site portfolio bilingue (Français / Anglais) moderne, responsive et interactif conçu pour **Murat Can ERCANLI**, inspiré de l'architecture et de l'esthétique du portfolio de Charan Teja (*Obsidian Amethyst*, mesh de particules interactif, télémétrie de profil, switch dynamique de langue et de thème).

---

## 🚀 Caractéristiques Principales

- **Bilingue Temps Réel (FR / EN)** : Bouton de bascule fluide dans la barre de navigation avec mémorisation du choix (`localStorage`).
- **Thème Sombre / Clair** : Mode par défaut *Obsidian Amethyst* avec orbes luminescents et mode clair épuré avec persistance.
- **Fond de Particules Interactif (HTML5 Canvas)** : Constellation interactive avec réaction au survol de la souris.
- **Effet Machine à Écrire (Typewriter)** : Défilement animé des rôles clés (Data Analyst Junior, Spécialiste BI, Modélisateur Power BI & DAX, etc.).
- **Télémétrie Flottante & Carte Avatar** : Photo haute résolution extraite du CV original avec badges animés (`Power BI & DAX`, `GCP BigQuery & SQL`, `Python / Pandas`, `Gemini BI Agent`).
- **Pipeline Décisionnel & Méthodologie** : Décomposition en 3 étapes (Extraction Cloud BigQuery $\rightarrow$ Modélisation DAX $\rightarrow$ Restitution BI & IA).
- **Parcours Professionnel Complet** :
  - **Manitou Group** (Alternance Data Analyst) : KPIs, GCP BigQuery, modèles Power BI, agent Gemini vs Copilot.
  - **Vibracoustic** (Alternance Digitalisation de Laboratoire) : KPIs réactivité bancs d'essais, Python (NumPy/Pandas/Matplotlib), dashboard FIFO SharePoint.
- **Diplômes & Certifications** : Licence MIAGE (Nantes Université), BTS SIO SLAM, Licence Psychologie (METU), Certifications Microsoft, Anaconda, DataCamp.
- **Téléchargement Direct du CV** : Lié au fichier PDF officiel `Murat_ERCANLI_LaTeX_Source (2).pdf`.
- **Formulaire de Contact Terminal** : Interface interactive connectée à votre messagerie via `mailto:`.

---

## 📂 Structure des Fichiers

```text
d:\muro_cv/
├── index.html                           # Structure sémantique bilingue & métadonnées SEO/OpenGraph
├── styles.css                           # Feuilles de styles CSS (tokens, responsive, glassmorphism, thèmes)
├── script.js                            # Moteur JS (Canvas mesh, dictionnaire i18n FR/EN, typewriter, thème)
├── murat_profile.png                    # Portrait haute résolution extrait du CV
├── Murat_ERCANLI_LaTeX_Source (2).pdf   # CV original téléchargeable
└── README.md                            # Documentation du projet
```

---

## 🌐 Déploiement sur GitHub Pages (https://muratcanercanli.github.io)

Puisque le nom d'utilisateur GitHub est **`muratcanercanli`**, le site fonctionnera directement sous l'adresse racine :
👉 **`https://muratcanercanli.github.io/`**

### Étapes simples de publication :

1. **Créer un nouveau dépôt sur GitHub** :
   - Nom du dépôt : **`muratcanercanli.github.io`** *(respecter exactement cette casse)*
   - Visibilité : **Public**
   - Ne pas cocher "Add a README" (le projet en contient déjà un).

2. **Lier et publier en une commande PowerShell depuis `d:\muro_cv`** :
   ```bash
   git remote add origin https://github.com/muratcanercanli/muratcanercanli.github.io.git
   git push -u origin main
   ```

3. **Activation automatique** :
   - Pour un dépôt nommé `<username>.github.io`, GitHub Pages s'active **automatiquement** !
   - En moins de 60 secondes, le site est en ligne sur **`https://muratcanercanli.github.io/`**.

