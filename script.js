/* ==========================================================================
   Murat Can ERCANLI - Portfolio JavaScript
   Interactive Canvas Mesh, Theme Toggle, Trilingual (FR/EN/TR) i18n & Telemetry
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Trilingual i18n Dictionary (FR / EN / TR) & Language Management
       ========================================================================== */
    const translations = {
        fr: {
            "nav.home": "Accueil",
            "nav.about": "À Propos",
            "nav.workflow": "Méthodologie",
            "nav.toolkit": "Compétences",
            "nav.experience": "Expériences",
            "nav.projectsMenu": "Projets",
            "nav.bigov": "Gouvernance Power BI (IT & Métier)",
            "nav.biproject": "Laboratoire FIFO & Bancs d'Essais",
            "nav.veille": "Veille",
            "nav.credentials": "Formation",
            "nav.contact": "Contact",

            "hero.badge": "Recherche CDI | Basé à Nantes (44300)",
            "hero.greeting": "Bonjour, je suis",
            "hero.description": "Diplômé d'une licence informatique MIAGE avec une double expérience en alternance industrielle (Manitou Group & Vibracoustic). Passionné par la transformation de données brutes en leviers décisionnels grâce à SQL, GCP BigQuery, Python, Power BI et l'intelligence artificielle conversationnelle.",
            "hero.btnContact": "Me Contacter",
            "hero.btnProjects": "Voir les Expériences",
            "hero.btnResume": "Télécharger CV (PDF)",
            "hero.metaLocation": "Nantes, France (Mobilité & Permis B)",
            "hero.metaDegree": "Licence MIAGE (Bac+3)",

            "about.tag": "// SYSTÈME & PROFIL",
            "about.title": "À Propos de Moi",
            "about.subtitle": "Double compétence informatique décisionnelle et compréhension métier approfondie.",
            "about.bioHeading": "Data Analyst Junior | Business Intelligence",
            "about.bioP1": "Titulaire d'une <strong>Licence informatique MIAGE</strong> à Nantes Université et d'un <strong>BTS SIO SLAM</strong>, j'associe une solide rigueur de développement logiciel à l'analyse avancée des données décisionnelles.",
            "about.bioP2": "Au cours de mes deux alternances dans l'industrie chez <strong>Manitou Group</strong> et <strong>Vibracoustic</strong>, j'ai piloté la modélisation de KPI opérationnels, automatisé des pipelines de transformation de données sur <strong>GCP BigQuery</strong> et conçu des tableaux de bord interactifs <strong>Power BI</strong> directement adoptés par les directions métier.",
            "about.bioP3": "Fort également d'un parcours initial en <strong>psychologie</strong> à l'Université Technique du Moyen-Orient (METU), je possède une sensibilité unique pour la compréhension des besoins utilisateurs, l'ergonomie des dashboards décisionnels et l'intégration d'agents IA conversationnels (Gemini, Copilot).",
            "about.badge1": "Orienté Valeur Métier",
            "about.badge2": "Automatisation ETL / Cloud",
            "about.badge3": "Culture Industrielle & Agile",
            "about.specGoalLabel": "Objectif Actuel",
            "about.specGoalVal": "Recherche CDI Data Analyst / BI",
            "about.specGoalDesc": "Disponible immédiatement à Nantes et région Pays de la Loire.",
            "about.specExpLabel": "Expérience Industrielle",
            "about.specExpVal": "2 Ans en Alternance",
            "about.specExpDesc": "Manitou Group (Engins de manutention) & Vibracoustic (Automobile).",
            "about.specLangLabel": "Langues & Communication",
            "about.specLangVal": "FR (C2 Bilingue) | EN (Maîtrise) | TR",
            "about.specLangDesc": "DUEF C2 Nantes Université • Aisance en environnement international.",
            "about.specMobLabel": "Mobilité & Disponibilité",
            "about.specMobVal": "Permis B & Véhicule Personnel",
            "about.specMobDesc": "Mobile sur l'agglomération nantaise et zones industrielles périphériques.",

            "workflow.tag": "// WORKFLOW DÉCISIONNEL",
            "workflow.title": "Méthodologie & Cycle Analytique",
            "workflow.subtitle": "Comment je structure la transformation des données pour guider l'action opérationnelle.",
            "workflow.step1Title": "Extraction & Structuration Cloud",
            "workflow.step1Desc": "Compréhension des besoins métier avec les équipes opérationnelles. Extraction, nettoyage et transformation de volumétries massives via SQL et BigQuery sur Google Cloud Platform (GCP).",
            "workflow.step2Title": "Modélisation & Mesures DAX",
            "workflow.step2Desc": "Construction de modèles sémantiques robustes (schémas en étoile, tables de faits & dimensions). Création de mesures DAX complexes, colonnes calculées et gestion du cycle de vie via Azure DevOps.",
            "workflow.step3Title": "Restitution BI & IA Conversationnelle",
            "workflow.step3Desc": "Conception de rapports visuels clairs et ergonomiques. Déploiement sécurisé sur Power BI Service / SharePoint et enrichissement avec des agents IA (Gemini & Copilot) pour l'exploration en langage naturel.",
            "workflow.tagDashboards": "Dashboards Interactifs",
            "workflow.tagAdoption": "Adoption Métier",

            "skills.tag": "// BOÎTE À OUTILS",
            "skills.title": "Compétences Techniques & Stack",
            "skills.subtitle": "Technologies et outils éprouvés en production industrielle.",
            "skills.cat1Title": "Business Intelligence & Dataviz",
            "skills.cat1Sub": "Modélisation & Tableaux de Bord",
            "skills.cat2Title": "Traitement de Données & Python",
            "skills.cat2Sub": "Analyse, Automatisation & EDA",
            "skills.cat3Title": "Cloud & Bases de Données",
            "skills.cat3Sub": "Infrastructure & Stockage",
            "skills.cat4Title": "Outils, GenAI & Méthodes",
            "skills.cat4Sub": "Déploiement & Innovation",
            "skills.lvlAdvanced": "Avancé",
            "skills.lvlSolid": "Solide",
            "skills.lvlExpertise": "Expertise",
            "skills.lvlOperational": "Opérationnel",
            "skills.lvlDaily": "Quotidien",
            "skills.lvlInnovation": "Innovation",
            "skills.lvlPracticed": "Pratiqué",
            "skills.s1_3": "Modélisation de Données (Étoile / Flocon)",
            "skills.s1_4": "Définition, Calcul & Suivi de KPI",
            "skills.s1_5": "Data Storytelling & Ergonomie BI",
            "skills.s2_1": "Python (Analyse & Scripting)",
            "skills.s2_4": "Nettoyage & Préparation (ETL)",
            "skills.s3_5": "Optimisation de Requêtes & Vues",
            "skills.s4_3": "Agents IA Conversationnels (Gemini / Copilot)",
            "skills.s4_4": "Méthodologies Agiles (Scrum / Kanban)",
            "skills.s4_5": "Recueil des Besoins & Gouvernance",

            "biproject.tag": "// PROJET BI — DIGITALISATION DU LABORATOIRE",
            "biproject.title": "Suivi FIFO des Échantillons &amp; Monitoring des Bancs d'Essais",
            "biproject.subtitle": "Reconstitution interactive d'une solution décisionnelle Power BI industrielle conçue pour piloter les flux d'échantillons, la priorisation FIFO, le suivi des urgences, les retards de file, la disponibilité des bancs et les temps de réponse machines.",
            "biproject.syntheticBadge": "Reconstitution représentative (Données synthétiques)",
            "biproject.btnFormulas": "Logique DAX & Python",
            "biproject.daxSub": "Mesures d'ordonnancement FIFO & SLA",
            "biproject.pySub": "Pré-calcul automatisé des temps de réponse",
            "biproject.btnExpand": "Agrandir",
            "biproject.filtersTitle": "FILTRES",
            "biproject.btnReset": "Reset",
            "biproject.filterProduct": "Groupe de produit",
            "biproject.filterSector": "Secteur d'essai",
            "biproject.filterPriority": "Niveau de Priorité",
            "biproject.filterUrgentOnly": "Échantillons urgents uniquement",
            "biproject.filterDelay": "Seuil de retard max",
            "biproject.fifoControlTag": "CONTRÔLE FIFO",
            "biproject.fifoRule": "Priorité automatique au plus ancien échantillon éligible.",
            "biproject.sourceTitle": "Source de données",
            "biproject.sourceRefresh": "Actualisation : Automatisée",
            "biproject.kpiAvail": "DISPONIBILITÉ BANCS",
            "biproject.kpiAvailDelta": "▲ +3.4 pts",
            "biproject.kpiAvailSub": "vs baseline",
            "biproject.kpiResp": "TEMPS RÉPONSE MÉDIAN",
            "biproject.kpiRespTarget": "Cible ≤ 18 min",
            "biproject.kpiUrgent": "ÉCHANTILLONS URGENTS",
            "biproject.kpiDelay": "RETARD MOYEN FILE",
            "biproject.kpiDelayDelta": "▼ -18% après refonte FIFO",
            "biproject.tableTitle": "FILE D'ATTENTE ÉCHANTILLONS FIFO",
            "biproject.tableSub": "Priorisation et contrôle de vieillissement des éprouvettes d'essais",
            "biproject.agingTitle": "VIEILLISSEMENT EN FILE (QUEUE AGING)",
            "biproject.agingSub": "Répartition par tranches d'attente (0–12h, 12–24h, 24h+)",
            "biproject.chartBenchTitle": "RÉACTIVITÉ PAR BANC",
            "biproject.chartBenchSub": "Temps de réponse médian (minutes)",
            "biproject.chartUrgencyTitle": "DISTRIBUTION D'URGENCE",
            "biproject.chartUrgencySub": "Répartition par criticité",
            "biproject.donutSamplesLabel": "échantillons",
            "biproject.chartTrendTitle": "DISPONIBILITÉ DES BANCS",
            "biproject.chartTrendSub": "Tendance sur 6 semaines",
            "biproject.disclaimer": "Reconstitution de portfolio basée sur des données synthétiques. Aucune donnée confidentielle de client, d'entreprise, d'échantillon ou d'exploitation n'est affichée.",
            "biproject.challengeTitle": "Défi Industriel",
            "biproject.challengeDesc": "Visibilité fragmentée sur les files d'attente d'échantillons, les retards cumulés, les urgences critiques et la disponibilité effective des bancs d'essais mécaniques et acoustiques.",
            "biproject.solutionTitle": "Solution Déployée",
            "biproject.solutionDesc": "Un tableau de bord décisionnel Power BI opérationnel combinant ordonnancement FIFO, surveillance des éprouvettes urgentes, suivi du vieillissement de file, calculs de KPI et intégration directe sous SharePoint.",
            "biproject.contributionTitle": "Contributions Clés",
            "biproject.contrib1": "Définition & validation des KPI de réactivité",
            "biproject.contrib2": "Automatisation analytique des KPI avec Python",
            "biproject.contrib3": "Conception du tableau de bord de suivi FIFO",
            "biproject.contrib4": "Intégration & administration du portail SharePoint",
            "biproject.contrib5": "Amélioration mesurable de la visibilité pour les équipes",
            "biproject.techTitle": "Technologies & Méthodes",
            "biproject.techStackDesc": "Conception de KPI · Optimisation de Flux Industriels.",
            "biproject.btnExportCsv": "Exporter CSV",
            "biproject.presetAll": "⚡ Vue Standard",
            "biproject.presetUrgent": "🚨 Crise Urgences",
            "biproject.presetBottleneck": "⚙️ Goulot TB-04",
            "biproject.presetFifo": "🛡️ Tri Strict FIFO",
            "biproject.scenariosLabel": "Scénarios BI :",
            "biproject.clickHint": "Cliquez sur une ligne pour afficher la fiche d'essai",
            "biproject.optAllGroups": "Tous les groupes",
            "biproject.optAllSectors": "Tous les secteurs",
            "biproject.chipAll": "Tous",
            "biproject.thOrder": "Ordre",
            "biproject.thProduct": "Produit",
            "biproject.thSector": "Secteur",
            "biproject.thCustomer": "Client",
            "biproject.thAge": "Âge",
            "biproject.thPriority": "Priorité",
            "biproject.thBench": "Banc",
            "biproject.thDelay": "Retard",

            "bigov.tag": "// PROJET BI D'ENTREPRISE — MODÈLE DE PRODUCTION & GOUVERNANCE",
            "bigov.title": "Monitoring & Gouvernance Power BI d'Entreprise",
            "bigov.subtitlePill": "Modèle de Données de Production · Enrichissement KPI · Tableaux de Bord IT & Métier",
            "bigov.intro": "Enrichissement d'une solution existante de monitoring Power BI d'entreprise par l'extension de son modèle de données de production et de sa couche KPI, en combinant la télémétrie plateforme Power BI avec le contexte métier/RH pour alimenter deux tableaux de bord distincts : l'un dédié aux administrateurs IT et l'autre aux Data Owners et responsables de département.",
            "bigov.archEyebrow": "ARCHITECTURE DE LA FONDATION DE DONNÉES PARTAGÉE",
            "bigov.archTitle": "Une Source Gouvernée Unique — Deux Audiences Cibles",
            "bigov.prodBadge": "DÉPLOYÉ EN PRODUCTION",
            "bigov.srcApiSub": "Télémétrie plateforme, espaces, rapports, licences",
            "bigov.srcHrTitle": "Données Métier / RH",
            "bigov.srcHrSub": "Départements, Business Units, Data Owners, Organisation",
            "bigov.nodeBqTitle": "BigQuery — Dataset de Monitoring Partagé",
            "bigov.nodeBqSub": "Transformations SQL, contrôles de doublons, intégrité référentielle & évolution de schéma",
            "bigov.nodeModelTitle": "Modèle de Données de Production & Couche KPI DAX",
            "bigov.nodeModelSub": "ONE SHARED DATA FOUNDATION — TWO AUDIENCES",
            "bigov.archAdminTitle": "Audience 1 : Administration IT",
            "bigov.archAdmin1": "Supervision technique & capacité",
            "bigov.archAdmin2": "Cycle de vie des espaces & actifs",
            "bigov.archOwnerTitle": "Audience 2 : Data Owners Métier",
            "bigov.archOwner1": "Adoption par direction & Business Unit",
            "bigov.archOwner2": "Gouvernance & Data Ownership",
            "bigov.inspHint": "Cliquez sur un nœud du schéma pour inspecter son rôle technique (Haut Niveau)",
            "bigov.inspApiTitle": "Power BI REST API — Extraction Télémétrique",
            "bigov.inspApiDesc": "Collecte automatisée des métadonnées d'espaces de travail, inventaire des rapports/datasets et journaux d'activité sans exposer les données métiers sensibles.",
            "bigov.inspHrTitle": "Référentiel Métier / RH — Contexte Organisationnel",
            "bigov.inspHrDesc": "Association des utilisateurs et espaces Power BI aux départements, Business Units et Data Owners pour ventiler l'adoption par direction métier.",
            "bigov.inspBqTitle": "GCP BigQuery — Entrepôt de Monitoring Partagé",
            "bigov.inspBqDesc": "Consolidation SQL incrémentale, déduplication des événements d'audit, contrôles d'intégrité référentielle et historisation des tendances.",
            "bigov.inspModelTitle": "Modèle Sémantique de Production & Couche DAX",
            "bigov.inspModelDesc": "Schéma en étoile gouverné et mesures DAX standardisées (taux d'adoption, actifs inactifs, couverture de propriété) partagés entre IT et métiers.",
            "bigov.inspAdminTitle": "Tableau de Bord Administration IT (Cible 1)",
            "bigov.inspAdminDesc": "Vue technique dédiée aux administrateurs : supervision de la capacité, gouvernance du cycle de vie des workspaces et détection des actifs orphelins.",
            "bigov.inspOwnerTitle": "Tableau de Bord Data Owners Métier (Cible 2)",
            "bigov.inspOwnerDesc": "Vue décisionnelle dédiée aux responsables métiers : suivi de l'adoption par département, responsabilisation des Data Owners et rationalisation du catalogue.",
            "bigov.pipeEyebrow": "CYCLE D'INGÉNIERIE DE PRODUCTION",
            "bigov.pipeTitle": "De la Sandbox BigQuery à la Mise en Production",
            "bigov.pipeTag": "SYNTHÈSE HAUT NIVEAU",
            "bigov.pipeIntro": "Enrichissement d'une solution existante de monitoring Power BI : préparation des tables SQL sous BigQuery, ajout du contexte organisationnel et déploiement en production via Azure DevOps.",
            "bigov.step1Badge": "ÉTAPE 1 · SOURCES",
            "bigov.step1Title": "Intégration API REST & Contexte Métier",
            "bigov.step1Desc": "Croisement de la télémétrie plateforme Power BI avec le référentiel organisationnel pour relier l'activité aux départements.",
            "bigov.step2Badge": "ÉTAPE 2 · BIGQUERY",
            "bigov.step2Title": "Modélisation SQL & Contrôles Qualité",
            "bigov.step2Desc": "Extension du dataset partagé, logique d'insertion incrémentale, déduplication et contrôles de cohérence.",
            "bigov.step3Badge": "ÉTAPE 3 · CI/CD",
            "bigov.step3Title": "Versionnement & Mise en Production",
            "bigov.step3Desc": "Validation par Pull Requests sous Azure DevOps et alimentation directe des rapports IT et Data Owners en production.",
            "bigov.foundationBanner": "SYNTHÈSE HAUT NIVEAU — CONFIDENTIALITÉ INDUSTRIELLE",
            "bigov.confBadge": "AUCUN TABLEAU DE BORD INTERNE EXPOSÉ",
            "bigov.disclaimer": "Conformément aux règles de confidentialité de l'entreprise, les tableaux de bord internes, les métriques détaillées et le schéma exact des tables ne sont pas affichés. Seul le flux architectural de haut niveau est présenté ci-dessus.",

            "veille.tag": "// VEILLE TECHNOLOGIQUE · DATA · IA · BI",
            "veille.title": "Veille Technologique",
            "veille.subtitle": "Data Analytics · Artificial Intelligence · Business Intelligence",
            "veille.introQuote": "Je réalise une veille régulière sur les évolutions des technologies, outils et pratiques liés à la Data, à l'Intelligence Artificielle et à la Business Intelligence. Cette veille me permet d'identifier les nouvelles tendances, d'évaluer leur impact sur les métiers de la donnée et de maintenir mes connaissances techniques et fonctionnelles à jour.",
            "veille.domainsBadge": "3 Piliers de Veille",
            "veille.domainsTitle": "Domaines de Surveillance Technologique",
            "veille.domainsDesc": "Cliquez sur un domaine pour filtrer directement les analyses correspondantes.",
            "veille.trendsBadge": "Radar Technologique",
            "veille.trendsTitle": "Tendances à suivre",
            "veille.trendsDesc": "Synthèse des 5 mouvements structurants qui redéfinissent l'ingénierie des données, l'IA et le décisionnel en 2025–2026.",
            "veille.entriesBadge": "Analyses & Décryptages",
            "veille.entriesTitle": "Analyses Détaillées & Impact Métier",
            "veille.entriesDesc": "Chaque note de veille relie une évolution technologique à son impact concret sur l'architecture Data/BI et mes projets en entreprise.",
            "veille.filterAll": "Tous",
            "veille.filterData": "Data",
            "veille.filterAI": "IA",
            "veille.filterBI": "Business Intelligence",
            "veille.filterGov": "Gouvernance",
            "veille.searchPlaceholder": "Rechercher (Fabric, Copilot, Agent, Gouvernance, AI Act...)",
            "veille.resetBtn": "Réinitialiser",
            "veille.tagsFilterLabel": "Filtrer par technologie :",
            "veille.timelineBadge": "Chronologie",
            "veille.timelineTitle": "Évolution de ma veille",
            "veille.timelineDesc": "Frise chronologique générée automatiquement à partir de mes entrées de veille (2025 – 2026).",
            "veille.methodBadge": "Démarche Structurée",
            "veille.methodTitle": "Ma méthode de veille",
            "veille.methodDesc": "Un cycle rigoureux en 4 étapes pour transformer le flux d'informations technologiques en décisions d'architecture applicables.",
            "veille.sourcesTitle": "Sources suivies",
            "veille.teaserTag": "// SYNTHÈSE DE VEILLE",
            "veille.teaserTitle": "Veille Technologique",
            "veille.teaserSubtitle": "Les tendances Data, IA et Business Intelligence que je suis et analyse.",
            "veille.teaserCta": "Explorer ma veille technologique →",

            "projects.tag": "// PARCOURS & RÉALISATIONS",
            "projects.title": "Expériences Professionnelles",
            "projects.subtitle": "Missions opérationnelles menées en environnement industriel exigeant.",
            "projects.manitouPeriod": "Sept. 2025 – Août 2026 | Ancenis, France",
            "projects.manitouTitle": "Data Analyst en alternance — Direction Opérationnelle",
            "projects.manitouDesc": "Manitou Group est un leader mondial de la manutention et de l'élévation. Dans le cadre de mon alternance MIAGE, j'ai accompagné la prise de décision opérationnelle via l'industrialisation des flux de données et la mise en œuvre de solutions BI novatrices.",
            "projects.manitouBullet1": "<strong>Définition & Suivi des KPI :</strong> Cadrage, calcul et validation d'indicateurs de performance clés en collaboration étroite avec les équipes métiers.",
            "projects.manitouBullet2": "<strong>Ingénierie des données sur GCP :</strong> Préparation, enrichissement et modélisation des données avec SQL et BigQuery, en créant des tables et colonnes calculées optimisées.",
            "projects.manitouBullet3": "<strong>Modèles Power BI & Azure DevOps :</strong> Évolution des jeux de données sémantiques, gouvernance des versions et déploiement via Azure DevOps.",
            "projects.manitouBullet4": "<strong>Agent Conversationnel Gemini vs Copilot :</strong> Développement d'un agent conversationnel Gemini pour l'interrogation de données en langage naturel ; benchmark comparatif face à Microsoft Copilot et restitution des résultats à la direction.",
            "projects.manitouBtn": "Explorer le projet Gouvernance Power BI (IT & Métier)",

            "projects.vibraPeriod": "Sept. 2023 – Août 2024 | Carquefou (Nantes)",
            "projects.vibraTitle": "Digitalisation de Laboratoire d'Essais en alternance",
            "projects.vibraDesc": "Vibracoustic est un équipementier automobile de rang 1 spécialiste des systèmes anti-vibratoires. Mission d'optimisation des flux et digitalisation complète des processus du laboratoire d'essais.",
            "projects.vibraBullet1": "<strong>KPI Réactivité Machines :</strong> Définition et validation conjointe des indicateurs de temps de cycle et de disponibilité des bancs d'essais.",
            "projects.vibraBullet2": "<strong>Analytique Python :</strong> Calcul, traitement statistique et visualisation automatisée des métriques avec Python (Pandas, NumPy, Matplotlib).",
            "projects.vibraBullet3": "<strong>Tableau de Bord FIFO Échantillons :</strong> Conception intégrale d'un rapport Power BI de gestion FIFO des échantillons d'essais et publication sur SharePoint pour l'ensemble des techniciens.",
            "projects.vibraBullet4": "<strong>Administration SharePoint :</strong> Développement de fonctionnalités sur mesure, centralisation des ressources du laboratoire et maintenance du portail.",
            "projects.vibraBtn": "Explorer le tableau de bord interactif",
            "projects.tagFifo": "Gestion FIFO",

            "projects.genaiBadge": "R&D / GenAI BI",
            "projects.genaiTitle": "Agent Conversationnel BI & Benchmark LLM",
            "projects.genaiDesc": "Étude comparative et prototypage d'assistants intelligents pour l'exploration de données BI sans requêtes SQL manuelles pour les décideurs métiers.",
            "projects.genaiBullet1": "Architecture d'un agent Gemini connecté aux sources décisionnelles pour traduire des questions métier en analyses directes.",
            "projects.genaiBullet2": "Évaluation rigoureuse des hallucinations, de la fidélité des KPI et de la pertinence des réponses face à Microsoft Copilot.",

            "projects.fifoBadge": "Opérations Industrielles",
            "projects.fifoTitle": "Système de Suivi FIFO & Monitoring d'Échantillons",
            "projects.fifoDesc": "Plateforme intégrée Power BI et SharePoint permettant de réduire les temps d'attente des échantillons d'essais et d'améliorer la traçabilité des pièces d'essai automobile.",
            "projects.fifoBullet1": "Visibilité en temps réel sur les stocks d'échantillons et priorisation automatique selon la règle FIFO.",
            "projects.fifoBullet2": "Adoption immédiate par l'équipe du laboratoire grâce à une interface ergonomique et intuitive.",

            "edu.tag": "// FORMATION & ACCRÉDITATIONS",
            "edu.title": "Parcours Académique & Certifications",
            "edu.subtitle": "Un cursus universitaire complet associant informatique appliquée et sciences cognitives.",
            "edu.degreesTitle": "Diplômes Universitaires",
            "edu.miagePeriod": "2025 – 2026 | Alternance | Bac+3",
            "edu.miageTitle": "Licence informatique MIAGE",
            "edu.miageDesc": "Méthodes Informatiques Appliquées à la Gestion des Entreprises. Spécialisation en bases de données avancées, systèmes décisionnels, modélisation logicielle et gouvernance des systèmes d'information.",
            "edu.btsPeriod": "2022 – 2024 | Alternance | Bac+2",
            "edu.btsTitle": "BTS Services Informatiques aux Organisations (SIO)",
            "edu.btsDesc": "Option SLAM (Solutions logicielles et applications métiers). Développement orienté objet, bases de données relationnelles, SQL, algorithmique et méthodes de génie logiciel.",
            "edu.psyPeriod": "2013 – 2019 | Bac+3 / Bachelor",
            "edu.psyTitle": "Licence en Psychologie",
            "edu.psyPlace": "Middle East Technical University (METU / ODTÜ), Ankara, Turquie",
            "edu.psyDesc": "L'une des universités scientifiques les plus réputées du Moyen-Orient. Formation poussée en statistiques descriptives et inférentielles, méthodologie de recherche quantitative et analyse des comportements cognitifs.",
            "edu.certsTitle": "Certifications & Langues",
            "edu.cert1Desc": "Validation des compétences clés en analyse de données, modélisation décisionnelle et visual storytelling.",
            "edu.cert2Desc": "Maîtrise de l'environnement Anaconda, manipulation de données avec Pandas et visualisation statistique.",
            "edu.cert3Issuer": "DataCamp (Depuis Juin 2026)",
            "edu.cert3Desc": "Perfectionnement continu sur les algorithmes de nettoyage, SQL interactif et analyse exploratoire.",
            "edu.langHeader": "Compétences Linguistiques",
            "edu.langFr": "Français",
            "edu.langFrLevel": "C2 (Bilingue) — DUEF Nantes Université",
            "edu.langEn": "Anglais",
            "edu.langEnLevel": "Maîtrise professionnelle (C1)",
            "edu.langTr": "Turc",
            "edu.langTrLevel": "Langue maternelle",

            "contact.tag": "// CONTACTEZ-MOI",
            "contact.title": "Initier un Échange",
            "contact.subtitle": "Vous recherchez un Data Analyst junior autonome, rigoureux et opérationnel ? Échangeons dès aujourd'hui.",
            "contact.emailLabel": "Adresse Email",
            "contact.phoneLabel": "Téléphone",
            "contact.githubLabel": "Profil GitHub",
            "contact.locLabel": "Localisation",
            "contact.locVal": "Nantes (44300), France",
            "contact.availLabel": "Statut & Disponibilité",
            "contact.availVal": "Recherche CDI • Prise de poste immédiate",
            "contact.ctaTitle": "Téléchargez le CV complet",
            "contact.ctaDesc": "Format PDF standard pour transmission interne ou ATS.",
            "contact.ctaBtn": "Curriculum Vitae (PDF)",
            "contact.formName": "Votre Nom / Entreprise *",
            "contact.formEmail": "Votre Adresse Email *",
            "contact.formSubject": "Objet du Message *",
            "contact.formMessage": "Message *",
            "contact.formSubmit": "Envoyer le Message",
            "contact.quickLabel": "Ou envoyer directement via :",
            "contact.btnCopyEmail": "Copier l'email",
            "contact.emailCopied": "Email copié !",
            "contact.formNotice": "Vos coordonnées ne seront utilisées que pour vous répondre directement.",

            "footer.rights": "Tous droits réservés.",
            "footer.status": "Statut Système : À l'écoute de nouvelles opportunités en CDI"
        },
        en: {
            "nav.home": "Home",
            "nav.about": "About",
            "nav.workflow": "Workflow",
            "nav.toolkit": "Toolkit",
            "nav.experience": "Experience",
            "nav.projectsMenu": "Projects",
            "nav.bigov": "Power BI Governance (IT & Business)",
            "nav.biproject": "Lab FIFO & Test Bench Flow",
            "nav.veille": "Tech Watch",
            "nav.credentials": "Credentials",
            "nav.contact": "Contact",

            "hero.badge": "Looking for CDI | Based in Nantes (44300)",
            "hero.greeting": "Hello, I am",
            "hero.description": "Graduate in Computer Science & Information Systems (MIAGE) with dual industrial apprenticeship experience (Manitou Group & Vibracoustic). Passionate about turning raw data into strategic business leverage using SQL, GCP BigQuery, Python, Power BI, and Generative AI conversational agents.",
            "hero.btnContact": "Get in Touch",
            "hero.btnProjects": "View Experience",
            "hero.btnResume": "Download CV (PDF)",
            "hero.metaLocation": "Nantes, France (Driving license & vehicle)",
            "hero.metaDegree": "BSc MIAGE (Bac+3)",

            "about.tag": "// SYSTEM & PROFILE",
            "about.title": "About Me",
            "about.subtitle": "Bridging software engineering, business intelligence, and human-centric decision making.",
            "about.bioHeading": "Junior Data Analyst | Business Intelligence Specialist",
            "about.bioP1": "Holding a <strong>MIAGE Computer Science Degree</strong> from Nantes University and a <strong>BTS SIO Software Solutions Diploma</strong>, I combine rigorous software development practices with advanced analytical and BI techniques.",
            "about.bioP2": "During my two industrial dual-study placements at <strong>Manitou Group</strong> and <strong>Vibracoustic</strong>, I spearheaded operational KPI engineering, automated data pipelines on <strong>GCP BigQuery</strong>, and built interactive <strong>Power BI</strong> dashboards that drove real operational adoption.",
            "about.bioP3": "With an earlier foundation in <strong>Psychology</strong> from Middle East Technical University (METU), I offer a rare advantage in understanding stakeholder behavior, designing ergonomic decision dashboards, and integrating Conversational AI agents (Gemini, Copilot).",
            "about.badge1": "Business Value Driven",
            "about.badge2": "Cloud ETL & Automation",
            "about.badge3": "Industrial & Agile Culture",
            "about.specGoalLabel": "Current Focus",
            "about.specGoalVal": "Seeking Permanent Role (CDI) - Data Analyst / BI",
            "about.specGoalDesc": "Available immediately in Nantes and the Greater West France region.",
            "about.specExpLabel": "Industrial Background",
            "about.specExpVal": "2 Years Dual-Study Experience",
            "about.specExpDesc": "Manitou Group (Material Handling) & Vibracoustic (Automotive Systems).",
            "about.specLangLabel": "Languages & Telemetry",
            "about.specLangVal": "FR (C2 Bilingual) | EN (Fluent) | TR",
            "about.specLangDesc": "DUEF C2 Nantes University • Comfortable in international matrix teams.",
            "about.specMobLabel": "Mobility & Transport",
            "about.specMobVal": "Driving License & Personal Car",
            "about.specMobDesc": "Autonomous for commuting across Nantes metropolitan area and business hubs.",

            "workflow.tag": "// ANALYTICS LIFECYCLE",
            "workflow.title": "Analytics Workflow & Methodology",
            "workflow.subtitle": "How I structure data transformation to power operational execution.",
            "workflow.step1Title": "Cloud Extraction & Cleansing",
            "workflow.step1Desc": "Translating business questions with operations teams. Ingesting, cleaning, and transforming high-volume data streams using SQL and BigQuery on Google Cloud Platform (GCP).",
            "workflow.step2Title": "Semantic Modeling & DAX",
            "workflow.step2Desc": "Designing resilient dimensional architectures (Star Schemas, Fact & Dimension tables). Formulating advanced DAX measures, calculated columns, and versioning pipelines via Azure DevOps.",
            "workflow.step3Title": "BI Delivery & Conversational AI",
            "workflow.step3Desc": "Crafting intuitive executive dashboards. Deploying securely on Power BI Service / SharePoint and augmenting user discovery with GenAI agents (Gemini & Copilot) for natural language querying.",
            "workflow.tagDashboards": "Interactive Dashboards",
            "workflow.tagAdoption": "Business Adoption",

            "skills.tag": "// TOOLKIT & STACK",
            "skills.title": "Technical Skills & Architecture",
            "skills.subtitle": "Proven technologies and tools tested in rigorous industrial production.",
            "skills.cat1Title": "Business Intelligence & Dataviz",
            "skills.cat1Sub": "Modeling & Executive Dashboards",
            "skills.cat2Title": "Data Processing & Python",
            "skills.cat2Sub": "Analysis, Automation & EDA",
            "skills.cat3Title": "Cloud & Database Systems",
            "skills.cat3Sub": "Infrastructure & Data Warehousing",
            "skills.cat4Title": "DevOps, GenAI & Agile",
            "skills.cat4Sub": "Deployment & Innovation",
            "skills.lvlAdvanced": "Advanced",
            "skills.lvlSolid": "Solid",
            "skills.lvlExpertise": "Expertise",
            "skills.lvlOperational": "Operational",
            "skills.lvlDaily": "Daily Use",
            "skills.lvlInnovation": "Innovation",
            "skills.lvlPracticed": "Practiced",
            "skills.s1_3": "Dimensional Modeling (Star / Snowflake)",
            "skills.s1_4": "KPI Scoping, Calculation & Tracking",
            "skills.s1_5": "Data Storytelling & BI Ergonomics",
            "skills.s2_1": "Python (Analytics & Scripting)",
            "skills.s2_4": "Data Cleansing & Preparation (ETL)",
            "skills.s3_5": "Query & View Optimization",
            "skills.s4_3": "Conversational AI Agents (Gemini / Copilot)",
            "skills.s4_4": "Agile Methodologies (Scrum / Kanban)",
            "skills.s4_5": "Requirements Gathering & Data Governance",

            "biproject.tag": "// BI PROJECT — LABORATORY DIGITALIZATION",
            "biproject.title": "FIFO Sample Tracking &amp; Test Bench Monitoring",
            "biproject.subtitle": "Interactive reconstruction of a Power BI solution designed to monitor laboratory sample flow, FIFO prioritization, urgent cases, queue delays, bench availability, and machine response KPIs.",
            "biproject.syntheticBadge": "Representative reconstruction (Synthetic data)",
            "biproject.btnFormulas": "DAX & Python Logic",
            "biproject.daxSub": "FIFO Queue Ranking & SLA Measures",
            "biproject.pySub": "Automated Response Time Pre-computation",
            "biproject.btnExpand": "Expand",
            "biproject.filtersTitle": "FILTERS",
            "biproject.btnReset": "Reset",
            "biproject.filterProduct": "Product group",
            "biproject.filterSector": "Test sector",
            "biproject.filterPriority": "Priority level",
            "biproject.filterUrgentOnly": "Urgent samples only",
            "biproject.filterDelay": "Max delay threshold",
            "biproject.fifoControlTag": "FIFO CONTROL",
            "biproject.fifoRule": "Oldest eligible sample prioritized automatically.",
            "biproject.sourceTitle": "Data source",
            "biproject.sourceRefresh": "Refresh: Automated",
            "biproject.kpiAvail": "BENCH AVAILABILITY",
            "biproject.kpiAvailDelta": "▲ +3.4 pts",
            "biproject.kpiAvailSub": "vs baseline",
            "biproject.kpiResp": "MEDIAN RESPONSE TIME",
            "biproject.kpiRespTarget": "Target ≤ 18 min",
            "biproject.kpiUrgent": "URGENT SAMPLES",
            "biproject.kpiDelay": "AVERAGE QUEUE DELAY",
            "biproject.kpiDelayDelta": "▼ -18% after FIFO redesign",
            "biproject.tableTitle": "FIFO SAMPLE QUEUE",
            "biproject.tableSub": "Prioritization and aging control for test samples",
            "biproject.agingTitle": "QUEUE AGING",
            "biproject.agingSub": "Breakdown by wait bands (0–12h, 12–24h, 24h+)",
            "biproject.chartBenchTitle": "BENCH REACTIVITY",
            "biproject.chartBenchSub": "Median response time by bench (minutes)",
            "biproject.chartUrgencyTitle": "URGENCY DISTRIBUTION",
            "biproject.chartUrgencySub": "Breakdown by criticality",
            "biproject.donutSamplesLabel": "samples",
            "biproject.chartTrendTitle": "BENCH AVAILABILITY",
            "biproject.chartTrendSub": "6-week trend",
            "biproject.disclaimer": "Portfolio reconstruction using synthetic data. No confidential customer, company, sample, or operational data are displayed.",
            "biproject.challengeTitle": "Industrial Challenge",
            "biproject.challengeDesc": "Fragmented visibility across sample queues, accumulated delays, critical urgencies, and actual mechanical & acoustic test bench availability.",
            "biproject.solutionTitle": "Delivered Solution",
            "biproject.solutionDesc": "A Power BI-based operational dashboard combining FIFO logic, urgent-sample monitoring, queue aging, KPI tracking, and SharePoint-based reporting.",
            "biproject.contributionTitle": "Key Contributions",
            "biproject.contrib1": "Defined & validated test bench reactivity KPIs",
            "biproject.contrib2": "Automated KPI analytics using Python",
            "biproject.contrib3": "Built FIFO queue tracking dashboard",
            "biproject.contrib4": "Integrated reporting into SharePoint",
            "biproject.contrib5": "Improved operational visibility for laboratory teams",
            "biproject.techTitle": "Technologies & Methods",
            "biproject.techStackDesc": "KPI Design · Industrial Flow Optimization.",
            "biproject.btnExportCsv": "Export CSV",
            "biproject.presetAll": "⚡ Standard View",
            "biproject.presetUrgent": "🚨 Urgent Crisis",
            "biproject.presetBottleneck": "⚙️ TB-04 Bottleneck",
            "biproject.presetFifo": "🛡️ Strict FIFO Aging",
            "biproject.scenariosLabel": "BI Scenarios:",
            "biproject.clickHint": "Click any row to inspect test order sheet",
            "biproject.optAllGroups": "All product groups",
            "biproject.optAllSectors": "All test sectors",
            "biproject.chipAll": "All",
            "biproject.thOrder": "Order",
            "biproject.thProduct": "Product",
            "biproject.thSector": "Sector",
            "biproject.thCustomer": "Customer",
            "biproject.thAge": "Age",
            "biproject.thPriority": "Priority",
            "biproject.thBench": "Bench",
            "biproject.thDelay": "Delay",

            "bigov.tag": "// ENTERPRISE BI PROJECT — PRODUCTION MODEL & GOVERNANCE",
            "bigov.title": "Enterprise Power BI Monitoring & Governance",
            "bigov.subtitlePill": "Production Data Model · KPI Enhancement · IT & Business Dashboards",
            "bigov.intro": "Enhanced an existing enterprise Power BI monitoring solution by extending its production data model and KPI layer, combining Power BI platform telemetry with business/HR context, and integrating these improvements into separate IT and Data Owner dashboards.",
            "bigov.archEyebrow": "SHARED DATA FOUNDATION ARCHITECTURE",
            "bigov.archTitle": "One Governed Production Dataset — Two Target Audiences",
            "bigov.prodBadge": "DEPLOYED TO PRODUCTION",
            "bigov.srcApiSub": "Platform telemetry, workspaces, reports, licences",
            "bigov.srcHrTitle": "Business / HR Data",
            "bigov.srcHrSub": "Departments, Business Units, Data Owners, Org context",
            "bigov.nodeBqTitle": "BigQuery — Shared Monitoring Dataset",
            "bigov.nodeBqSub": "SQL transformation, duplicate & referential quality controls, schema evolution",
            "bigov.nodeModelTitle": "Production Data Model & DAX KPI Layer",
            "bigov.nodeModelSub": "ONE SHARED DATA FOUNDATION — TWO AUDIENCES",
            "bigov.archAdminTitle": "Audience 1: IT Administration",
            "bigov.archAdmin1": "Technical monitoring & capacity",
            "bigov.archAdmin2": "Workspace & asset lifecycle",
            "bigov.archOwnerTitle": "Audience 2: Business Data Owners",
            "bigov.archOwner1": "Department & Business Unit adoption",
            "bigov.archOwner2": "Governance & Data Ownership",
            "bigov.inspHint": "Click any architecture node above to inspect its technical role (High-Level)",
            "bigov.inspApiTitle": "Power BI REST API — Telemetry Extraction",
            "bigov.inspApiDesc": "Automated extraction of workspace metadata, report/dataset inventories, and activity logs without exposing sensitive business payloads.",
            "bigov.inspHrTitle": "Business / HR Repository — Organizational Context",
            "bigov.inspHrDesc": "Mapping Power BI users and workspaces to departments, Business Units, and Data Owners to break down adoption by business line.",
            "bigov.inspBqTitle": "GCP BigQuery — Shared Monitoring Warehouse",
            "bigov.inspBqDesc": "Incremental SQL consolidation, audit event deduplication, referential integrity checks, and historical trend storage.",
            "bigov.inspModelTitle": "Production Semantic Model & DAX KPI Layer",
            "bigov.inspModelDesc": "Governed star schema and standardized DAX measures (adoption rate, inactive assets, ownership coverage) shared across IT and business views.",
            "bigov.inspAdminTitle": "IT Administration Dashboard (Target Audience 1)",
            "bigov.inspAdminDesc": "Technical view tailored for platform admins: capacity oversight, workspace lifecycle governance, and orphaned asset detection.",
            "bigov.inspOwnerTitle": "Business Data Owners Dashboard (Target Audience 2)",
            "bigov.inspOwnerDesc": "Decision view tailored for department leads: adoption tracking by business unit, Data Owner accountability, and catalog rationalization.",
            "bigov.pipeEyebrow": "PRODUCTION ENGINEERING WORKFLOW",
            "bigov.pipeTitle": "From BigQuery Sandbox Validation to Production Deployment",
            "bigov.pipeTag": "HIGH-LEVEL OVERVIEW",
            "bigov.pipeIntro": "Enhanced an existing enterprise Power BI monitoring solution: prepared SQL tables in BigQuery, joined organizational context, and deployed to production via Azure DevOps.",
            "bigov.step1Badge": "STEP 1 · SOURCES",
            "bigov.step1Title": "REST API & Business Context Integration",
            "bigov.step1Desc": "Joined Power BI platform telemetry with organizational hierarchy to link usage to departments.",
            "bigov.step2Badge": "STEP 2 · BIGQUERY",
            "bigov.step2Title": "SQL Modeling & Quality Controls",
            "bigov.step2Desc": "Extended the shared dataset, added incremental insertion logic, deduplication, and consistency checks.",
            "bigov.step3Badge": "STEP 3 · CI/CD",
            "bigov.step3Title": "Versioning & Production Release",
            "bigov.step3Desc": "Validated changes through Azure DevOps Pull Requests and supplied existing IT and Data Owner production reports.",
            "bigov.foundationBanner": "HIGH-LEVEL SUMMARY — INDUSTRIAL CONFIDENTIALITY",
            "bigov.confBadge": "NO INTERNAL DASHBOARDS EXPOSED",
            "bigov.disclaimer": "In accordance with company confidentiality rules, internal dashboards, detailed metrics, and exact table schemas are not displayed. Only the high-level architectural workflow is presented above.",

            "veille.tag": "// TECHNOLOGY WATCH · DATA · AI · BI",
            "veille.title": "Veille Technologique",
            "veille.subtitle": "Data Analytics · Artificial Intelligence · Business Intelligence",
            "veille.introQuote": "I conduct regular technology watch on evolutions in tools, architectures, and practices across Data Analytics, Artificial Intelligence, and Business Intelligence. This continuous monitoring enables me to identify emerging trends, evaluate their impact on data professions, and keep both my technical and functional skills up to date.",
            "veille.domainsBadge": "3 Monitoring Pillars",
            "veille.domainsTitle": "Technology Watch Domains",
            "veille.domainsDesc": "Click on a domain card to filter the corresponding technology-watch analyses.",
            "veille.trendsBadge": "Technology Radar",
            "veille.trendsTitle": "Key Trends to Watch",
            "veille.trendsDesc": "Overview of the 5 structural movements reshaping data engineering, AI, and enterprise BI in 2025–2026.",
            "veille.entriesBadge": "Deep-Dives & Syntheses",
            "veille.entriesTitle": "Detailed Analyses & Business Impact",
            "veille.entriesDesc": "Each technology-watch entry connects an industry evolution to its concrete impact on Data/BI architecture and my enterprise projects.",
            "veille.filterAll": "All",
            "veille.filterData": "Data",
            "veille.filterAI": "AI",
            "veille.filterBI": "Business Intelligence",
            "veille.filterGov": "Governance",
            "veille.searchPlaceholder": "Search (Fabric, Copilot, Agent, Governance, AI Act...)",
            "veille.resetBtn": "Reset",
            "veille.tagsFilterLabel": "Filter by technology:",
            "veille.timelineBadge": "Chronology",
            "veille.timelineTitle": "Technology Watch Timeline",
            "veille.timelineDesc": "Chronological timeline automatically generated from my technology-watch entries (2025 – 2026).",
            "veille.methodBadge": "Structured Process",
            "veille.methodTitle": "My Monitoring Methodology",
            "veille.methodDesc": "A rigorous 4-step workflow to turn continuous technology signals into actionable architectural decisions.",
            "veille.sourcesTitle": "Monitored Sources",
            "veille.teaserTag": "// TECH WATCH HIGHLIGHTS",
            "veille.teaserTitle": "Veille Technologique",
            "veille.teaserSubtitle": "The Data, AI, and Business Intelligence trends I monitor and analyze.",
            "veille.teaserCta": "Explore my technology watch →",

            "projects.tag": "// TRACK RECORD",
            "projects.title": "Professional Experience",
            "projects.subtitle": "Operational missions performed in high-standard manufacturing environments.",
            "projects.manitouPeriod": "Sept. 2025 – Aug. 2026 | Ancenis, France",
            "projects.manitouTitle": "Dual-Study Data Analyst — Operations Department",
            "projects.manitouDesc": "Manitou Group is a world leader in rough-terrain material handling. Within my MIAGE program, I supported operational decision-making by industrializing data pipelines and implementing pioneering BI solutions.",
            "projects.manitouBullet1": "<strong>KPI Formulation & Validation:</strong> Scoping, computing, and benchmarking operational KPIs in direct liaison with business heads.",
            "projects.manitouBullet2": "<strong>Data Engineering on GCP:</strong> Cleansing, transforming, and modeling large datasets using SQL and BigQuery with optimized calculated dimensions.",
            "projects.manitouBullet3": "<strong>Power BI Semantic Models:</strong> Enhancing analytical datasets, managing model governance, and streamlining deployment via Azure DevOps.",
            "projects.manitouBullet4": "<strong>Gemini Conversational BI Agent:</strong> Built a Gemini AI agent for natural language data exploration; benchmarked performance against Microsoft Copilot and presented findings to leadership.",
            "projects.manitouBtn": "Explore Enterprise Power BI Governance Project (IT & Business)",

            "projects.vibraPeriod": "Sept. 2023 – Aug. 2024 | Carquefou (Nantes)",
            "projects.vibraTitle": "Test Laboratory Digitalization Specialist",
            "projects.vibraDesc": "Vibracoustic is a tier-1 global automotive supplier specialized in NVH solutions. Mission focused on test bench flow optimization and end-to-end lab digitization.",
            "projects.vibraBullet1": "<strong>Test Bench Reactivity KPIs:</strong> Established and validated key metrics measuring machine response time and test bench availability.",
            "projects.vibraBullet2": "<strong>Python Numerical Analytics:</strong> Computed, statistically analyzed, and automated KPI visualization with Python (Pandas, NumPy, Matplotlib).",
            "projects.vibraBullet3": "<strong>FIFO Sample Tracking Dashboard:</strong> Designed and published an enterprise Power BI report for FIFO sample queuing, hosted on SharePoint.",
            "projects.vibraBullet4": "<strong>SharePoint Administration:</strong> Engineered tailored portal modules, centralized testing documentation, and ensured portal uptime.",
            "projects.vibraBtn": "Explore interactive dashboard",
            "projects.tagFifo": "FIFO Management",

            "projects.genaiBadge": "R&D / GenAI BI",
            "projects.genaiTitle": "Conversational BI Agent & LLM Benchmark",
            "projects.genaiDesc": "Comparative prototype evaluation of generative assistants designed for self-service business reporting without manual SQL coding.",
            "projects.genaiBullet1": "Engineered an intelligent Gemini agent interface translating high-level business queries into validated database insights.",
            "projects.genaiBullet2": "Assessed hallucination mitigation, calculation fidelity, and usability benchmarks against Microsoft Copilot.",

            "projects.fifoBadge": "Industrial Operations",
            "projects.fifoTitle": "Automotive Sample FIFO Monitoring System",
            "projects.fifoDesc": "Integrated Power BI and SharePoint solution that drastically minimized test queue bottlenecks and upgraded physical component traceability.",
            "projects.fifoBullet1": "Delivered live visibility into physical inventory status and automated FIFO prioritization logic.",
            "projects.fifoBullet2": "Achieved immediate laboratory adoption through intuitive UI architecture and clear operational indicators.",

            "edu.tag": "// EDUCATION & BADGES",
            "edu.title": "Academic Background & Certifications",
            "edu.subtitle": "A comprehensive trajectory uniting computer science and behavioral analytics.",
            "edu.degreesTitle": "University Degrees",
            "edu.miagePeriod": "2025 – 2026 | Apprenticeship | BSc (Bac+3)",
            "edu.miageTitle": "BSc in Computer Science (MIAGE)",
            "edu.miageDesc": "Methods for Enterprise Information Systems. Specialized in advanced database systems, decision support architecture, software design, and IT governance.",
            "edu.btsPeriod": "2022 – 2024 | Apprenticeship | Associate (Bac+2)",
            "edu.btsTitle": "Higher National Diploma (BTS SIO SLAM)",
            "edu.btsDesc": "Software Solutions and Business Applications. Object-oriented programming, relational databases, SQL querying, algorithms, and engineering frameworks.",
            "edu.psyPeriod": "2013 – 2019 | Bachelor of Science (Bac+3)",
            "edu.psyTitle": "Bachelor of Science in Psychology",
            "edu.psyPlace": "Middle East Technical University (METU / ODTÜ), Ankara, Türkiye",
            "edu.psyDesc": "One of the premier science universities in the Middle East. Rigorous curriculum in descriptive & inferential statistics, quantitative research methods, and cognitive modeling.",
            "edu.certsTitle": "Certifications & Languages",
            "edu.cert1Desc": "Validating critical competencies in exploratory analysis, decision modeling, and visual data storytelling.",
            "edu.cert2Desc": "Mastery of Anaconda ecosystems, Pandas data manipulation, and scientific visualization libraries.",
            "edu.cert3Issuer": "DataCamp (Since June 2026)",
            "edu.cert3Desc": "Continuous learning track focused on production data preparation, interactive SQL, and statistical EDA.",
            "edu.langHeader": "Language Proficiency",
            "edu.langFr": "French",
            "edu.langFrLevel": "C2 (Bilingual) — DUEF Nantes University",
            "edu.langEn": "English",
            "edu.langEnLevel": "Full Professional Proficiency (C1)",
            "edu.langTr": "Turkish",
            "edu.langTrLevel": "Native Language",

            "contact.tag": "// GET IN TOUCH",
            "contact.title": "Initiate Collaboration",
            "contact.subtitle": "Looking for an autonomous, rigorous, and business-focused Junior Data Analyst? Let's connect today.",
            "contact.emailLabel": "Email Address",
            "contact.phoneLabel": "Phone Number",
            "contact.githubLabel": "GitHub Profile",
            "contact.locLabel": "Location",
            "contact.locVal": "Nantes (44300), France",
            "contact.availLabel": "Status & Availability",
            "contact.availVal": "Seeking CDI • Immediate Start",
            "contact.ctaTitle": "Download Full Resume",
            "contact.ctaDesc": "Standard ATS-friendly PDF format for internal circulation.",
            "contact.ctaBtn": "Curriculum Vitae (PDF)",
            "contact.formName": "Your Name / Organization *",
            "contact.formEmail": "Your Email Address *",
            "contact.formSubject": "Subject *",
            "contact.formMessage": "Message *",
            "contact.formSubmit": "Transmit Message",
            "contact.quickLabel": "Or reach out directly via:",
            "contact.btnCopyEmail": "Copy Email",
            "contact.emailCopied": "Email copied!",
            "contact.formNotice": "Your details are strictly kept confidential and only used to respond.",

            "footer.rights": "All rights reserved.",
            "footer.status": "System Status: Online & Open for CDI Opportunities"
        },
        tr: {
            "nav.home": "Ana Sayfa",
            "nav.about": "Hakkımda",
            "nav.workflow": "Metodoloji",
            "nav.toolkit": "Yetkinlikler",
            "nav.experience": "Deneyim",
            "nav.projectsMenu": "Projeler",
            "nav.bigov": "Power BI Yönetişimi (BT & İş Birimleri)",
            "nav.biproject": "FIFO Laboratuvar & Test Bench Akışı",
            "nav.veille": "Teknoloji Takibi",
            "nav.credentials": "Eğitim",
            "nav.contact": "İletişim",

            "hero.badge": "Tam Zamanlı (CDI) Arayışı | Nantes, Fransa (44300)",
            "hero.greeting": "Merhaba, ben",
            "hero.description": "Nantes Üniversitesi MIAGE (İşletme Enformatiği) mezunu, Manitou Group ve Vibracoustic'te iki yıllık endüstriyel deneyime sahip Veri Analisti. SQL, GCP BigQuery, Python, Power BI ve Üretken Yapay Zeka (GenAI) ajanları ile ham verileri stratejik karar mekanizmalarına dönüştürüyorum.",
            "hero.btnContact": "İletişime Geç",
            "hero.btnProjects": "Deneyimleri İncele",
            "hero.btnResume": "CV İndir (PDF)",
            "hero.metaLocation": "Nantes, Fransa (B Sınıfı Ehliyet & Araç)",
            "hero.metaDegree": "MIAGE Lisans (Bac+3)",

            "about.tag": "// SİSTEM & PROFİL",
            "about.title": "Hakkımda",
            "about.subtitle": "Yazılım mühendisliği disiplini, iş zekası (BI) mimarisi ve insan odaklı analitik yaklaşımın birleşimi.",
            "about.bioHeading": "Veri Analisti (Data Analyst) | İş Zekası (BI) Uzmanı",
            "about.bioP1": "Nantes Üniversitesi <strong>MIAGE Bilgisayar Bilimleri Lisansı</strong> ve <strong>BTS SIO SLAM</strong> diplomalarımla, güçlü yazılım geliştirme temelini ileri düzey iş zekası ve veri analitiği ile birleştiriyorum.",
            "about.bioP2": "<strong>Manitou Group</strong> ve <strong>Vibracoustic</strong> bünyesindeki iki endüstriyel çalışma dönemimde; operasyonel KPI modellemesi yürüttüm, <strong>GCP BigQuery</strong> üzerinde veri dönüşüm hatlarını (ETL) otomatikleştirdim ve iş birimleri tarafından doğrudan benimsenen etkileşimli <strong>Power BI</strong> panoları tasarladım.",
            "about.bioP3": "Orta Doğu Teknik Üniversitesi (<strong>ODTÜ / METU</strong>) <strong>Psikoloji</strong> lisans geçmişim sayesinde, kullanıcı ihtiyaçlarını anlama, karar destek panolarının ergonomisini kurgulama ve doğal dil tabanlı yapay zeka ajanlarını (Gemini, Copilot) entegre etme konularında benzersiz bir bakış açısı sunuyorum.",
            "about.badge1": "İş Değeri Odaklı",
            "about.badge2": "Bulut ETL & Otomasyon",
            "about.badge3": "Endüstriyel & Çevik (Agile) Kültür",
            "about.specGoalLabel": "Mevcut Hedef",
            "about.specGoalVal": "Tam Zamanlı (CDI) Veri Analisti / BI Rolü",
            "about.specGoalDesc": "Nantes ve Batı Fransa bölgesinde hemen işbaşı yapmaya uygun.",
            "about.specExpLabel": "Endüstriyel Deneyim",
            "about.specExpVal": "2 Yıl Endüstriyel Alternance",
            "about.specExpDesc": "Manitou Group (İş Makineleri) & Vibracoustic (Otomotiv Sistemleri).",
            "about.specLangLabel": "Diller & İletişim",
            "about.specLangVal": "FR (C2 İki Dilli) | EN (C1 İleri) | TR (Anadil)",
            "about.specLangDesc": "DUEF C2 Nantes Üniversitesi • Uluslararası ekiplerde tam yetkinlik.",
            "about.specMobLabel": "Mobilite & Ulaşım",
            "about.specMobVal": "B Sınıfı Ehliyet & Şahsi Araç",
            "about.specMobDesc": "Nantes metropolü ve çevre sanayi bölgelerine tam ulaşım esnekliği.",

            "workflow.tag": "// ANALİTİK İŞ AKIŞI",
            "workflow.title": "Metodoloji & Analitik Yaşam Döngüsü",
            "workflow.subtitle": "Operasyonel kararları yönlendirmek için veri dönüşümünü nasıl yapılandırıyorum?",
            "workflow.step1Title": "Bulut Veri Çekme & Yapılandırma",
            "workflow.step1Desc": "Operasyon ekipleriyle iş ihtiyaçlarının analizi. Google Cloud Platform (GCP) üzerinde SQL ve BigQuery kullanarak yüksek hacimli verilerin çekilmesi, temizlenmesi ve dönüştürülmesi.",
            "workflow.step2Title": "Semantik Modelleme & DAX Ölçümleri",
            "workflow.step2Desc": "Güçlü boyutsal veri modellerinin (Yıldız Şeması, Olgu ve Boyut tabloları) inşası. Karmaşık DAX ölçümlerinin, hesaplanmış sütunların yazılması ve Azure DevOps ile sürüm yönetimi.",
            "workflow.step3Title": "BI Sunumu & Konuşma Tabanlı Yapay Zeka",
            "workflow.step3Desc": "Ergonomik ve anlaşılır yönetici panolarının tasarımı. Power BI Service / SharePoint üzerinden güvenli yayınlama ve doğal dilde veri sorgulama için yapay zeka ajanları (Gemini & Copilot) entegrasyonu.",
            "workflow.tagDashboards": "Etkileşimli Panolar",
            "workflow.tagAdoption": "İş Birimi Benimsemesi",

            "skills.tag": "// TEKNİK YETKİNLİKLER",
            "skills.title": "Teknik Yetkinlikler & Teknoloji Yığını",
            "skills.subtitle": "Endüstriyel üretim ortamlarında kanıtlanmış teknolojiler ve araçlar.",
            "skills.cat1Title": "İş Zekası (BI) & Veri Görselleştirme",
            "skills.cat1Sub": "Veri Modelleme & Karar Panoları",
            "skills.cat2Title": "Veri İşleme & Python",
            "skills.cat2Sub": "Analiz, Otomasyon & Keşifsel Veri Analizi (EDA)",
            "skills.cat3Title": "Bulut (Cloud) & Veritabanları",
            "skills.cat3Sub": "Altyapı & Veri Ambarı",
            "skills.cat4Title": "Araçlar, GenAI & Metodolojiler",
            "skills.cat4Sub": "Dağıtım & İnovasyon",
            "skills.lvlAdvanced": "İleri Düzey",
            "skills.lvlSolid": "Güçlü",
            "skills.lvlExpertise": "Uzmanlık",
            "skills.lvlOperational": "Operasyonel",
            "skills.lvlDaily": "Günlük Kullanım",
            "skills.lvlInnovation": "İnovasyon",
            "skills.lvlPracticed": "Uygulamalı",
            "skills.s1_3": "Boyutsal Veri Modelleme (Yıldız / Kar Tanesi)",
            "skills.s1_4": "KPI Tanımlama, Hesaplama & Takibi",
            "skills.s1_5": "Veri Hikayeleştirme & BI Ergonomisi",
            "skills.s2_1": "Python (Veri Analizi & Betik Yazımı)",
            "skills.s2_4": "Veri Temizleme & Hazırlama (ETL)",
            "skills.s3_5": "Sorgu & Görünüm (View) Optimizasyonu",
            "skills.s4_3": "Konuşma Tabanlı AI Ajanları (Gemini / Copilot)",
            "skills.s4_4": "Çevik Metodolojiler (Scrum / Kanban)",
            "skills.s4_5": "İhtiyaç Analizi & Veri Yönetişimi",

            "biproject.tag": "// BI PROJESİ — LABORATUVAR DİJİTALLEŞTİRME",
            "biproject.title": "FIFO Numune Takibi &amp; Test Bench İzleme Sistemi",
            "biproject.subtitle": "Laboratuvar numune akışını, FIFO önceliklendirmesini, acil testleri, kuyruk gecikmelerini, test düzeneği (bench) kullanılabilirliğini ve makine yanıt sürelerini yönetmek için tasarlanmış endüstriyel Power BI karar destek çözümünün etkileşimli simülasyonu.",
            "biproject.syntheticBadge": "Temsili Portfolyo Simülasyonu (Sentetik Veri)",
            "biproject.btnFormulas": "DAX & Python Mantığı",
            "biproject.daxSub": "FIFO Kuyruk Sıralaması & SLA Ölçümleri",
            "biproject.pySub": "Otomatik Yanıt Süresi Ön Hesaplaması",
            "biproject.btnExpand": "Tam Ekran",
            "biproject.filtersTitle": "FİLTRELER",
            "biproject.btnReset": "Sıfırla",
            "biproject.filterProduct": "Ürün grubu",
            "biproject.filterSector": "Test sektörü",
            "biproject.filterPriority": "Öncelik Seviyesi",
            "biproject.filterUrgentOnly": "Yalnızca acil numuneler",
            "biproject.filterDelay": "Maks. gecikme eşiği",
            "biproject.fifoControlTag": "FIFO KONTROLÜ",
            "biproject.fifoRule": "Uygun en eski numuneye otomatik öncelik verilir.",
            "biproject.sourceTitle": "Veri kaynağı",
            "biproject.sourceRefresh": "Yenileme: Otomatik",
            "biproject.kpiAvail": "BENCH KULLANILABİLİRLİĞİ",
            "biproject.kpiAvailDelta": "▲ +3.4 puan",
            "biproject.kpiAvailSub": "referansa göre",
            "biproject.kpiResp": "MEDYAN YANIT SÜRESİ",
            "biproject.kpiRespTarget": "Hedef ≤ 18 dk",
            "biproject.kpiUrgent": "ACİL NUMUNELER",
            "biproject.kpiDelay": "ORTALAMA KUYRUK GECİKMESİ",
            "biproject.kpiDelayDelta": "▼ FIFO sonrası -%18",
            "biproject.tableTitle": "FIFO NUMUNE BEKLEME KUYRUĞU",
            "biproject.tableSub": "Test numunelerinin önceliklendirme ve bekleme süresi kontrolü",
            "biproject.agingTitle": "KUYRUK YAŞLANMASI (QUEUE AGING)",
            "biproject.agingSub": "Bekleme süresi dilimlerine göre dağılım (0–12s, 12–24s, 24s+)",
            "biproject.chartBenchTitle": "BENCH BAZLI REAKTİVİTE",
            "biproject.chartBenchSub": "Medyan yanıt süresi (dakika)",
            "biproject.chartUrgencyTitle": "ACİLİYET DAĞILIMI",
            "biproject.chartUrgencySub": "Kritiklik düzeyine göre dağılım",
            "biproject.donutSamplesLabel": "numune",
            "biproject.chartTrendTitle": "BENCH KULLANILABİLİRLİĞİ",
            "biproject.chartTrendSub": "6 haftalık eğilim",
            "biproject.disclaimer": "Sentetik verilerle oluşturulmuş portfolyo simülasyonu. Hiçbir gizli müşteri, şirket, numune veya operasyon verisi gösterilmemektedir.",
            "biproject.challengeTitle": "Endüstriyel Zorluk",
            "biproject.challengeDesc": "Numune kuyrukları, birikmiş gecikmeler, kritik aciliyetler ve mekanik/akustik test düzeneklerinin gerçek kullanılabilirliği konusunda parçalı görünürlük.",
            "biproject.solutionTitle": "Devreye Alınan Çözüm",
            "biproject.solutionDesc": "FIFO sıralama mantığını, acil numune takibini, kuyruk yaşlanma analizini, KPI hesaplamalarını ve doğrudan SharePoint entegrasyonunu birleştiren operasyonel Power BI panosu.",
            "biproject.contributionTitle": "Temel Katkılar",
            "biproject.contrib1": "Reaktivite KPI'larının tanımlanması ve doğrulanması",
            "biproject.contrib2": "Python ile KPI hesaplamalarının analitik otomasyonu",
            "biproject.contrib3": "FIFO takip panosunun uçtan uca tasarımı",
            "biproject.contrib4": "SharePoint portal entegrasyonu ve yönetimi",
            "biproject.contrib5": "Laboratuvar ekipleri için ölçülebilir operasyonel görünürlük artışı",
            "biproject.techTitle": "Teknolojiler & Yöntemler",
            "biproject.techStackDesc": "KPI Tasarımı · Endüstriyel Akış Optimizasyonu.",
            "biproject.btnExportCsv": "CSV İndir",
            "biproject.presetAll": "⚡ Standart Görünüm",
            "biproject.presetUrgent": "🚨 Acil Kriz Modu",
            "biproject.presetBottleneck": "⚙️ TB-04 Darboğazı",
            "biproject.presetFifo": "🛡️ Sıkı FIFO Sıralaması",
            "biproject.scenariosLabel": "BI Senaryoları:",
            "biproject.clickHint": "Test fişini incelemek için herhangi bir satıra tıklayın",
            "biproject.optAllGroups": "Tüm ürün grupları",
            "biproject.optAllSectors": "Tüm test sektörleri",
            "biproject.chipAll": "Tümü",
            "biproject.thOrder": "Sipariş",
            "biproject.thProduct": "Ürün",
            "biproject.thSector": "Sektör",
            "biproject.thCustomer": "Müşteri",
            "biproject.thAge": "Yaş",
            "biproject.thPriority": "Öncelik",
            "biproject.thBench": "Bench",
            "biproject.thDelay": "Gecikme",

            "bigov.tag": "// KURUMSAL BI PROJESİ — ÜRETİM VERİ MODELİ & YÖNETİŞİM",
            "bigov.title": "Kurumsal Power BI İzleme & Yönetişim Mimarisi",
            "bigov.subtitlePill": "Üretim Veri Modeli · KPI Zenginleştirme · BT & İş Birimi Panoları",
            "bigov.intro": "Mevcut kurumsal Power BI izleme çözümünün üretim veri modelini ve KPI katmanını genişleterek; Power BI platform telemetrisini İK/organizasyonel bağlamla birleştirdim ve biri BT yöneticilerine, diğeri Veri Sahiplerine (Data Owners) ve departman yöneticilerine yönelik iki ayrı karar panosunu besledim.",
            "bigov.archEyebrow": "ORTAK VERİ TEMELİ MİMARİSİ",
            "bigov.archTitle": "Tek Yönetişim Veri Kaynağı — İki Hedef Kitle",
            "bigov.prodBadge": "CANLI ORTAMA (PROD) ALINDI",
            "bigov.srcApiSub": "Platform telemetrisi, çalışma alanları, raporlar, lisanslar",
            "bigov.srcHrTitle": "İş / İK Organizasyon Verisi",
            "bigov.srcHrSub": "Departmanlar, İş Birimleri (BU), Data Owner'lar, Organizasyon",
            "bigov.nodeBqTitle": "BigQuery — Ortak İzleme Veri Kümesi",
            "bigov.nodeBqSub": "SQL dönüşümleri, tekilleştirme kontrolleri, referans bütünlüğü ve şema evrimi",
            "bigov.nodeModelTitle": "Üretim Veri Modeli & DAX KPI Katmanı",
            "bigov.nodeModelSub": "TEK ORTAK VERİ TEMELİ — İKİ HEDEF KİTLE",
            "bigov.archAdminTitle": "Hedef Kitle 1: BT Yönetimi (IT Admin)",
            "bigov.archAdmin1": "Teknik izleme ve kapasite yönetimi",
            "bigov.archAdmin2": "Çalışma alanı ve rapor yaşam döngüsü",
            "bigov.archOwnerTitle": "Hedef Kitle 2: İş Birimi Veri Sahipleri",
            "bigov.archOwner1": "Departman ve İş Birimi bazında benimseme",
            "bigov.archOwner2": "Veri Yönetişimi & Data Ownership",
            "bigov.inspHint": "Teknik rolünü incelemek için yukarıdaki mimari düğümlerden birine tıklayın (Üst Düzey)",
            "bigov.inspApiTitle": "Power BI REST API — Telemetri Çekimi",
            "bigov.inspApiDesc": "Hassas iş verilerini ifşa etmeden çalışma alanı meta verilerinin, rapor/veri kümesi envanterinin ve kullanım günlüklerinin otomatik olarak çekilmesi.",
            "bigov.inspHrTitle": "İş / İK Veri Kaynağı — Organizasyonel Bağlam",
            "bigov.inspHrDesc": "Benimseme oranlarını iş kollarına göre analiz etmek için Power BI kullanıcılarının ve çalışma alanlarının departmanlar, İş Birimleri ve Data Owner'larla eşleştirilmesi.",
            "bigov.inspBqTitle": "GCP BigQuery — Ortak İzleme Veri Ambarı",
            "bigov.inspBqDesc": "Artımlı (incremental) SQL birleştirme, denetim kaydı tekilleştirme, referans bütünlüğü kontrolleri ve tarihsel eğilim saklama.",
            "bigov.inspModelTitle": "Üretim Semantik Modeli & DAX KPI Katmanı",
            "bigov.inspModelDesc": "BT ve iş birimleri arasında paylaşılan yönetişimli yıldız şeması ve standartlaştırılmış DAX ölçümleri (benimseme oranı, pasif varlıklar, sahiplik kapsamı).",
            "bigov.inspAdminTitle": "BT Yönetim Panosu (Hedef Kitle 1)",
            "bigov.inspAdminDesc": "Platform yöneticilerine özel teknik görünüm: kapasite gözetimi, çalışma alanı yaşam döngüsü yönetişimi ve sahipsiz (yetim) varlıkların tespiti.",
            "bigov.inspOwnerTitle": "İş Birimi Data Owner Panosu (Hedef Kitle 2)",
            "bigov.inspOwnerDesc": "Departman yöneticilerine özel karar görünümü: iş birimi bazında benimseme takibi, Data Owner sorumluluğu ve rapor kataloğu rasyonalizasyonu.",
            "bigov.pipeEyebrow": "ÜRETİM MÜHENDİSLİĞİ İŞ AKIŞI",
            "bigov.pipeTitle": "BigQuery Sandbox Doğrulamasından Canlı Ortama Geçiş",
            "bigov.pipeTag": "ÜST DÜZEY MİMARİ ÖZET",
            "bigov.pipeIntro": "Kurumsal Power BI izleme çözümünün geliştirilmesi: BigQuery altında SQL tablolarının hazırlanması, organizasyonel bağlamın eklenmesi ve Azure DevOps ile canlıya alınması.",
            "bigov.step1Badge": "ADIM 1 · KAYNAKLAR",
            "bigov.step1Title": "REST API & Organizasyonel Bağlam Entegrasyonu",
            "bigov.step1Desc": "Kullanım aktivitelerini departmanlarla ilişkilendirmek için Power BI platform telemetrisinin organizasyon şemasıyla birleştirilmesi.",
            "bigov.step2Badge": "ADIM 2 · BIGQUERY",
            "bigov.step2Title": "SQL Modelleme & Veri Kalite Kontrolleri",
            "bigov.step2Desc": "Ortak veri kümesinin genişletilmesi, artımlı ekleme mantığı, tekilleştirme ve tutarlılık kontrolleri.",
            "bigov.step3Badge": "ADIM 3 · CI/CD",
            "bigov.step3Title": "Sürümleme & Canlı Ortama Dağıtım",
            "bigov.step3Desc": "Azure DevOps Pull Request süreçleriyle doğrulama ve canlıdaki BT ile Data Owner raporlarının doğrudan beslenmesi.",
            "bigov.foundationBanner": "ÜST DÜZEY MİMARİ ÖZET — ENDÜSTRİYEL GİZLİLİK",
            "bigov.confBadge": "KURUM İÇİ PANOLAR GİZLİ TUTULMAKTADIR",
            "bigov.disclaimer": "Şirket gizlilik kuralları gereği kurum içi panolar, ayrıntılı metrikler ve birebir tablo şemaları gösterilmemektedir. Yukarıda yalnızca üst düzey mimari iş akışı sunulmaktadır.",

            "veille.tag": "// TEKNOLOJİ TAKİBİ · VERİ · YAPAY ZEKA · BI",
            "veille.title": "Teknoloji Takibi (Veille Technologique)",
            "veille.subtitle": "Veri Analitiği · Yapay Zeka · İş Zekası (Business Intelligence)",
            "veille.introQuote": "Veri Analitiği, Yapay Zeka ve İş Zekası alanlarındaki teknoloji, araç ve mimari gelişmeleri düzenli olarak takip ediyorum. Bu sürekli izleme süreci; yeni trendleri belirlememi, veri meslekleri üzerindeki etkilerini değerlendirmemi ve hem teknik hem de işlevsel yetkinliklerimi güncel tutmamı sağlıyor.",
            "veille.domainsBadge": "3 İzleme Sütunu",
            "veille.domainsTitle": "Teknoloji İzleme Alanları",
            "veille.domainsDesc": "İlgili teknoloji analizlerini doğrudan filtrelemek için bir alan kartına tıklayın.",
            "veille.trendsBadge": "Teknoloji Radarı",
            "veille.trendsTitle": "Takip Edilen Trendler",
            "veille.trendsDesc": "2025–2026 döneminde veri mühendisliği, yapay zeka ve kurumsal iş zekasını yeniden şekillendiren 5 yapısal hareketin sentezi.",
            "veille.entriesBadge": "Analizler & İncelemeler",
            "veille.entriesTitle": "Detaylı Analizler & İş Etkisi",
            "veille.entriesDesc": "Her teknoloji takip notu, sektörel bir gelişmeyi Veri/BI mimarisi üzerindeki somut etkisine ve kurumsal projelerime bağlar.",
            "veille.filterAll": "Tümü",
            "veille.filterData": "Veri (Data)",
            "veille.filterAI": "Yapay Zeka (AI)",
            "veille.filterBI": "Business Intelligence",
            "veille.filterGov": "Yönetişim",
            "veille.searchPlaceholder": "Ara (Fabric, Copilot, Agent, Yönetişim, AI Act...)",
            "veille.resetBtn": "Sıfırla",
            "veille.tagsFilterLabel": "Teknolojiye göre filtrele:",
            "veille.timelineBadge": "Kronoloji",
            "veille.timelineTitle": "Teknoloji Takibi Zaman Çizelgesi",
            "veille.timelineDesc": "Teknoloji takibi kayıtlarımdan otomatik olarak oluşturulan kronolojik zaman çizelgesi (2025 – 2026).",
            "veille.methodBadge": "Yapılandırılmış Süreç",
            "veille.methodTitle": "Teknoloji Takip Metodolojim",
            "veille.methodDesc": "Sürekli teknoloji sinyallerini uygulanabilir mimari kararlara dönüştürmek için 4 adımlı titiz bir çalışma döngüsü.",
            "veille.sourcesTitle": "Takip Edilen Kaynaklar",
            "veille.teaserTag": "// TEKNOLOJİ TAKİBİ ÖZETİ",
            "veille.teaserTitle": "Teknoloji Takibi (Veille Technologique)",
            "veille.teaserSubtitle": "Takip ettiğim ve analiz ettiğim Veri, Yapay Zeka ve İş Zekası trendleri.",
            "veille.teaserCta": "Teknoloji takibimi incele →",

            "projects.tag": "// KARİYER & PROJELER",
            "projects.title": "Profesyonel Deneyimler",
            "projects.subtitle": "Yüksek standartlı endüstriyel üretim ortamlarında yürütülen operasyonel görevler.",
            "projects.manitouPeriod": "Eyl. 2025 – Ağu. 2026 | Ancenis, Fransa",
            "projects.manitouTitle": "Veri Analisti (Alternance) — Operasyon Direktörlüğü",
            "projects.manitouDesc": "Manitou Group, arazi tipi taşıma ve kaldırma ekipmanlarında dünya lideridir. MIAGE eğitimim kapsamında, veri akışlarının endüstriyelleştirilmesi ve yenilikçi BI çözümlerinin devreye alınmasıyla operasyonel karar alma süreçlerine destek verdim.",
            "projects.manitouBullet1": "<strong>KPI Tanımlama & Takibi:</strong> İş birimleriyle yakın işbirliği içinde temel performans göstergelerinin kapsamının belirlenmesi, hesaplanması ve doğrulanması.",
            "projects.manitouBullet2": "<strong>GCP Üzerinde Veri Mühendisliği:</strong> SQL ve BigQuery kullanarak büyük veri kümelerinin hazırlanması, zenginleştirilmesi ve optimize edilmiş hesaplanmış tabloların oluşturulması.",
            "projects.manitouBullet3": "<strong>Power BI Modelleri & Azure DevOps:</strong> Semantik veri modellerinin geliştirilmesi, sürüm yönetişimi ve Azure DevOps üzerinden canlıya dağıtım.",
            "projects.manitouBullet4": "<strong>Gemini vs Copilot Konuşma Tabanlı AI Ajanı:</strong> Doğal dilde veri sorgulama için Gemini tabanlı bir yapay zeka ajanının geliştirilmesi; Microsoft Copilot ile karşılaştırmalı kıyaslama (benchmark) ve sonuçların yönetime sunulması.",
            "projects.manitouBtn": "Kurumsal Power BI Yönetişim Projesini İncele (BT & İş Birimleri)",

            "projects.vibraPeriod": "Eyl. 2023 – Ağu. 2024 | Carquefou (Nantes)",
            "projects.vibraTitle": "Test Laboratuvarı Dijitalleştirme Uzmanı (Alternance)",
            "projects.vibraDesc": "Vibracoustic, titreşim ve ses sönümleme (NVH) sistemlerinde uzmanlaşmış Tier-1 küresel bir otomotiv tedarikçisidir. Test laboratuvarı süreçlerinin uçtan uca dijitalleştirilmesi ve iş akışı optimizasyonu görevi.",
            "projects.vibraBullet1": "<strong>Makine Reaktivite KPI'ları:</strong> Test düzeneklerinin çevrim süresi ve kullanılabilirlik göstergelerinin tanımlanması ve doğrulanması.",
            "projects.vibraBullet2": "<strong>Python Analitiği:</strong> Python (Pandas, NumPy, Matplotlib) ile metriklerin hesaplanması, istatistiksel işlenmesi ve otomatik görselleştirilmesi.",
            "projects.vibraBullet3": "<strong>FIFO Numune Takip Panosu:</strong> Test numunelerinin FIFO yönetimi için uçtan uca Power BI raporunun tasarlanması ve tüm teknisyenler için SharePoint'te yayınlanması.",
            "projects.vibraBullet4": "<strong>SharePoint Yönetimi:</strong> Özel portal modüllerinin geliştirilmesi, laboratuvar kaynaklarının merkezileştirilmesi ve portal bakımı.",
            "projects.vibraBtn": "Etkileşimli panoyu incele",
            "projects.tagFifo": "FIFO Yönetimi",

            "projects.genaiBadge": "Ar-Ge / GenAI BI",
            "projects.genaiTitle": "Konuşma Tabanlı BI Ajanı & LLM Kıyaslaması",
            "projects.genaiDesc": "İş karar vericilerinin manuel SQL sorgusu yazmadan BI verilerini keşfetmesi için tasarlanan üretken yapay zeka asistanlarının karşılaştırmalı prototip çalışması.",
            "projects.genaiBullet1": "İş sorularını doğrudan doğrulanmış analizlere çeviren, kurumsal veri kaynaklarına bağlı Gemini ajan mimarisi.",
            "projects.genaiBullet2": "Halüsinasyon kontrolü, KPI hesaplama doğruluğu ve yanıt kalitesinin Microsoft Copilot ile titizlikle kıyaslanması.",

            "projects.fifoBadge": "Endüstriyel Operasyonlar",
            "projects.fifoTitle": "FIFO Numune Takip & İzleme Sistemi",
            "projects.fifoDesc": "Test numunelerinin bekleme sürelerini azaltan ve otomotiv test parçalarının izlenebilirliğini artıran entegre Power BI ve SharePoint platformu.",
            "projects.fifoBullet1": "Numune stokları üzerinde gerçek zamanlı görünürlük ve FIFO kuralına göre otomatik önceliklendirme.",
            "projects.fifoBullet2": "Ergonomik ve sezgisel arayüz sayesinde laboratuvar ekibi tarafından anında benimsenme.",

            "edu.tag": "// EĞİTİM & SERTİFİKALAR",
            "edu.title": "Akademik Geçmiş & Sertifikalar",
            "edu.subtitle": "Uygulamalı bilgisayar bilimleri ile bilişsel/davranışsal analitiği birleştiren kapsamlı üniversite eğitimi.",
            "edu.degreesTitle": "Üniversite Diplomaları",
            "edu.miagePeriod": "2025 – 2026 | Alternance | Lisans (Bac+3)",
            "edu.miageTitle": "MIAGE Bilgisayar Bilimleri Lisansı",
            "edu.miageDesc": "İşletme Yönetimine Uygulanan Bilişim Yöntemleri. İleri veritabanı sistemleri, karar destek mimarisi, yazılım modelleme ve bilişim sistemleri yönetişimi uzmanlığı.",
            "edu.btsPeriod": "2022 – 2024 | Alternance | Önlisans (Bac+2)",
            "edu.btsTitle": "BTS Bilişim Hizmetleri (SIO SLAM)",
            "edu.btsDesc": "Kurumsal Yazılım Çözümleri ve İş Uygulamaları. Nesne yönelimli programlama, ilişkisel veritabanları, SQL, algoritmalar ve yazılım mühendisliği yöntemleri.",
            "edu.psyPeriod": "2013 – 2019 | Lisans (Bachelor)",
            "edu.psyTitle": "Psikoloji Lisans Derecesi",
            "edu.psyPlace": "Orta Doğu Teknik Üniversitesi (ODTÜ / METU), Ankara, Türkiye",
            "edu.psyDesc": "Türkiye ve Orta Doğu'nun önde gelen teknik üniversitesi. Betimsel ve çıkarımsal istatistik, nicel araştırma yöntemleri ve bilişsel davranış analizi üzerine kapsamlı eğitim.",
            "edu.certsTitle": "Sertifikalar & Diller",
            "edu.cert1Desc": "Veri analizi, karar modellemesi ve görsel veri hikayeleştirme alanlarında temel yetkinliklerin doğrulanması.",
            "edu.cert2Desc": "Anaconda ekosistemi, Pandas ile veri manipülasyonu ve istatistiksel görselleştirme uzmanlığı.",
            "edu.cert3Issuer": "DataCamp (Haziran 2026'dan beri)",
            "edu.cert3Desc": "Veri temizleme algoritmaları, etkileşimli SQL ve keşifsel veri analizi (EDA) üzerine sürekli gelişim programı.",
            "edu.langHeader": "Dil Yetkinlikleri",
            "edu.langFr": "Fransızca",
            "edu.langFrLevel": "C2 (İki Dilli) — DUEF Nantes Üniversitesi",
            "edu.langEn": "İngilizce",
            "edu.langEnLevel": "Profesyonel Çalışma Yetkinliği (C1)",
            "edu.langTr": "Türkçe",
            "edu.langTrLevel": "Anadil",

            "contact.tag": "// İLETİŞİME GEÇİN",
            "contact.title": "İletişim Başlatın",
            "contact.subtitle": "Otonom, titiz ve iş odaklı bir Veri Analisti mi arıyorsunuz? Bugün iletişime geçelim.",
            "contact.emailLabel": "E-posta Adresi",
            "contact.phoneLabel": "Telefon",
            "contact.githubLabel": "GitHub Profili",
            "contact.locLabel": "Konum",
            "contact.locVal": "Nantes (44300), Fransa",
            "contact.availLabel": "Durum & Uygunluk",
            "contact.availVal": "Tam Zamanlı (CDI) Arayışı • Hemen Başlamaya Uygun",
            "contact.ctaTitle": "Tam Özgeçmişi (CV) İndirin",
            "contact.ctaDesc": "Kurum içi paylaşım veya ATS sistemleri için standart PDF formatı.",
            "contact.ctaBtn": "Özgeçmiş / CV (PDF)",
            "contact.formName": "Adınız / Şirketiniz *",
            "contact.formEmail": "E-posta Adresiniz *",
            "contact.formSubject": "Mesaj Konusu *",
            "contact.formMessage": "Mesajınız *",
            "contact.formSubmit": "Mesajı Gönder",
            "contact.quickLabel": "Veya doğrudan şu kanalla ulaşın:",
            "contact.btnCopyEmail": "E-postayı Kopyala",
            "contact.emailCopied": "E-posta kopyalandı!",
            "contact.formNotice": "Bilgileriniz gizli tutulur ve yalnızca size doğrudan yanıt vermek için kullanılır.",

            "footer.rights": "Tüm hakları saklıdır.",
            "footer.status": "Sistem Durumu: Çevrimiçi & Yeni Tam Zamanlı (CDI) Fırsatlara Açık"
        }
    };

    const typewriterRoles = {
        fr: [
            "Data Analyst Junior",
            "Spécialiste Business Intelligence",
            "Modélisateur Power BI & DAX",
            "Expert SQL & GCP BigQuery",
            "Développeur d'Agents IA / Gemini"
        ],
        en: [
            "Junior Data Analyst",
            "Business Intelligence Specialist",
            "Power BI & DAX Modeler",
            "GCP BigQuery & SQL Specialist",
            "GenAI & Gemini BI Agent Builder"
        ],
        tr: [
            "Veri Analisti (Data Analyst)",
            "İş Zekası (Business Intelligence) Uzmanı",
            "Power BI & DAX VeriModelleyici",
            "GCP BigQuery & SQL Uzmanı",
            "GenAI & Gemini BI Ajan Geliştiricisi"
        ]
    };

    let currentLang = localStorage.getItem('preferred_lang') || 'fr';
    if (!translations[currentLang]) currentLang = 'fr';
    let activeGovNode = 'api';

    const govNodeKeys = {
        api: { title: 'bigov.inspApiTitle', desc: 'bigov.inspApiDesc' },
        hr: { title: 'bigov.inspHrTitle', desc: 'bigov.inspHrDesc' },
        bq: { title: 'bigov.inspBqTitle', desc: 'bigov.inspBqDesc' },
        model: { title: 'bigov.inspModelTitle', desc: 'bigov.inspModelDesc' },
        admin: { title: 'bigov.inspAdminTitle', desc: 'bigov.inspAdminDesc' },
        owner: { title: 'bigov.inspOwnerTitle', desc: 'bigov.inspOwnerDesc' }
    };

    function updateGovInspectorText(lang) {
        const titleEl = document.getElementById('gov-inspector-title');
        const descEl = document.getElementById('gov-inspector-desc');
        const mapping = govNodeKeys[activeGovNode] || govNodeKeys.api;
        const dict = translations[lang] || translations.fr;
        if (titleEl && dict[mapping.title]) {
            titleEl.setAttribute('data-i18n', mapping.title);
            titleEl.textContent = dict[mapping.title];
        }
        if (descEl && dict[mapping.desc]) {
            descEl.setAttribute('data-i18n', mapping.desc);
            descEl.textContent = dict[mapping.desc];
        }
    }

    function setLanguage(lang) {
        if (!translations[lang]) return;
        currentLang = lang;
        localStorage.setItem('preferred_lang', lang);
        document.documentElement.lang = lang;

        // Update active class on buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        // Update all data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update all data-i18n-placeholder elements
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        // Update form placeholders
        const nameInput = document.getElementById('contact-name');
        const emailInput = document.getElementById('contact-email');
        const subjectInput = document.getElementById('contact-subject');
        const msgInput = document.getElementById('contact-message');

        if (lang === 'en') {
            if (nameInput) nameInput.placeholder = "e.g. Sarah Jenkins (Talent Acquisition)";
            if (emailInput) emailInput.placeholder = "name@company.com";
            if (subjectInput) subjectInput.placeholder = "Data Analyst / BI Opportunity - Nantes";
            if (msgInput) msgInput.placeholder = "Hello Murat, we reviewed your profile...";
        } else if (lang === 'tr') {
            if (nameInput) nameInput.placeholder = "Örn: Ahmet Yılmaz (İnsan Kaynakları)";
            if (emailInput) emailInput.placeholder = "isim@sirket.com";
            if (subjectInput) subjectInput.placeholder = "Veri Analisti / BI İş Fırsatı - Nantes";
            if (msgInput) msgInput.placeholder = "Merhaba Murat, profilinizi inceledik...";
        } else {
            if (nameInput) nameInput.placeholder = "Ex: Jean Dupont (Recrutement)";
            if (emailInput) emailInput.placeholder = "nom@entreprise.com";
            if (subjectInput) subjectInput.placeholder = "Opportunité CDI Data Analyst - Nantes";
            if (msgInput) msgInput.placeholder = "Bonjour Murat, nous avons découvert votre profil...";
        }

        const searchInput = document.getElementById('pbi-search-input');
        if (searchInput) {
            if (lang === 'en') {
                searchInput.placeholder = "Search order, client (e.g. OEM-A), bench, test type...";
            } else if (lang === 'tr') {
                searchInput.placeholder = "Sipariş, müşteri (örn: OEM-A), bench, test türü ara...";
            } else {
                searchInput.placeholder = "Rechercher commande, client (ex: OEM-A), banc, type d'essai...";
            }
        }

        // Keep Manitou Architecture Inspector synced with current language
        updateGovInspectorText(lang);

        // Restart typewriter with new language roles
        restartTypewriter();

        // Dispatch event for reactive dashboard & veille components
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    // Attach language button events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.getAttribute('data-lang');
            setLanguage(targetLang);
        });
    });

    /* ==========================================================================
       1B. Manitou High-Level Architecture Node Inspector & Vibracoustic Formula Drawer
       ========================================================================== */
    const govNodeEls = document.querySelectorAll('[data-gov-node]');
    if (govNodeEls.length > 0) {
        govNodeEls.forEach(nodeEl => {
            const selectNode = () => {
                const nodeKey = nodeEl.getAttribute('data-gov-node');
                if (!nodeKey || !govNodeKeys[nodeKey]) return;
                activeGovNode = nodeKey;
                govNodeEls.forEach(el => el.classList.toggle('gov-node-active', el === nodeEl));
                updateGovInspectorText(currentLang);
            };
            nodeEl.addEventListener('click', selectNode);
            nodeEl.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    selectNode();
                }
            });
        });
    }

    const formulaBtn = document.getElementById('pbi-btn-formulas');
    const formulaDrawer = document.getElementById('pbi-formula-drawer');
    if (formulaBtn && formulaDrawer) {
        formulaBtn.addEventListener('click', () => {
            const isHidden = formulaDrawer.hasAttribute('hidden');
            if (isHidden) {
                formulaDrawer.removeAttribute('hidden');
                formulaBtn.classList.add('active');
                formulaBtn.setAttribute('aria-expanded', 'true');
            } else {
                formulaDrawer.setAttribute('hidden', '');
                formulaBtn.classList.remove('active');
                formulaBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }


    /* ==========================================================================
       2. Typewriter Effect
       ========================================================================== */
    const typewriterElement = document.getElementById('typewriter-text');
    let typeIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingTimer = null;

    function typeEffect() {
        const roles = typewriterRoles[currentLang] || typewriterRoles.fr;
        const currentRole = roles[typeIndex % roles.length];

        if (isDeleting) {
            typewriterElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typewriterElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 40 : 85;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2200; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            typeIndex = (typeIndex + 1) % roles.length;
            speed = 400; // Brief pause before starting next word
        }

        typingTimer = setTimeout(typeEffect, speed);
    }

    function restartTypewriter() {
        if (typingTimer) clearTimeout(typingTimer);
        typeIndex = 0;
        charIndex = 0;
        isDeleting = false;
        if (typewriterElement) typeEffect();
    }


    /* ==========================================================================
       3. Theme Toggle Logic (Obsidian Amethyst Dark / Light Mode)
       ========================================================================== */
    const themeToggleBtn = document.getElementById('theme-toggle');
    const savedTheme = localStorage.getItem('site_theme');

    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        if (themeToggleBtn) {
            themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
        }
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('site_theme', isLight ? 'light' : 'dark');
            themeToggleBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
    }


    /* ==========================================================================
       4. Interactive Particle Mesh Background (Canvas)
       ========================================================================== */
    const canvas = document.getElementById('canvas-particles');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = Math.min(Math.floor((width * height) / 14000), 85);
        let mouseX = -1000;
        let mouseY = -1000;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        window.addEventListener('mouseleave', () => {
            mouseX = -1000;
            mouseY = -1000;
        });

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.55;
                this.vy = (Math.random() - 0.5) * 0.55;
                this.radius = Math.random() * 1.8 + 0.8;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;

                // Subtle mouse repulsion
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 120 && dist > 0) {
                    const force = (120 - dist) / 120;
                    this.x -= (dx / dist) * force * 1.5;
                    this.y -= (dy / dist) * force * 1.5;
                }
            }

            draw() {
                const isLight = document.body.classList.contains('light-theme');
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = isLight ? 'rgba(99, 102, 241, 0.45)' : 'rgba(6, 182, 212, 0.55)';
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animateParticles() {
            ctx.clearRect(0, 0, width, height);
            const isLight = document.body.classList.contains('light-theme');

            // Draw connecting lines
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();

                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 130) {
                        const alpha = (1 - dist / 130) * (isLight ? 0.15 : 0.22);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = isLight
                            ? `rgba(99, 102, 241, ${alpha})`
                            : `rgba(139, 92, 246, ${alpha})`;
                        ctx.lineWidth = 0.8;
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(animateParticles);
        }

        animateParticles();
    }


    /* ==========================================================================
       5. Scroll Progress Bar & Active Nav Link Spy
       ========================================================================== */
    const scrollBar = document.getElementById('scroll-bar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

        if (scrollBar) {
            scrollBar.style.width = `${scrollPercent}%`;
        }

        // Active section spy
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (scrollTop >= sectionTop && scrollTop < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === `#${currentSectionId}`) {
                link.classList.add('active');
            } else if (link.id === 'nav-projects-link' && (currentSectionId === 'bi-governance' || currentSectionId === 'bi-project')) {
                link.classList.add('active');
            }
        });

        document.querySelectorAll('.nav-dropdown-item').forEach(item => {
            item.classList.toggle('active', item.getAttribute('href') === `#${currentSectionId}`);
        });
    });


    /* ==========================================================================
       6. Mobile Navigation Drawer
       ========================================================================== */
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        document.querySelectorAll('.nav-dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }


    /* ==========================================================================
       7. Interactive Contact Form Submission & Quick Webmail / Copy Actions
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    const getFormPayload = () => {
        const name = (document.getElementById('contact-name')?.value || '').trim();
        const email = (document.getElementById('contact-email')?.value || '').trim();
        const subject = (document.getElementById('contact-subject')?.value || '').trim() || 'Contact Portfolio — Murat Can ERCANLI';
        const message = (document.getElementById('contact-message')?.value || '').trim();
        const body = name || email
            ? `Nom / De: ${name} (${email})\n\n${message}`
            : message;
        return { subject, body };
    };

    const btnCopyEmail = document.getElementById('btn-copy-email');
    if (btnCopyEmail) {
        btnCopyEmail.addEventListener('click', () => {
            const targetEmail = 'ercanlimuratcan@gmail.com';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(targetEmail);
            }
            const span = btnCopyEmail.querySelector('span');
            const dict = translations[currentLang] || translations.fr;
            if (span) {
                span.textContent = dict['contact.emailCopied'] || 'Copied!';
                btnCopyEmail.classList.add('copied');
                setTimeout(() => {
                    span.textContent = dict['contact.btnCopyEmail'] || 'Copy Email';
                    btnCopyEmail.classList.remove('copied');
                }, 2200);
            }
        });
    }

    const btnGmail = document.getElementById('btn-gmail-web');
    if (btnGmail) {
        btnGmail.addEventListener('click', () => {
            const { subject, body } = getFormPayload();
            const url = `https://mail.google.com/mail/?view=cm&fs=1&to=ercanlimuratcan@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        });
    }

    const btnOutlook = document.getElementById('btn-outlook-web');
    if (btnOutlook) {
        btnOutlook.addEventListener('click', () => {
            const { subject, body } = getFormPayload();
            const url = `https://outlook.office.com/mail/deeplink/compose?to=ercanlimuratcan@gmail.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            window.open(url, '_blank', 'noopener,noreferrer');
        });
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const { subject, body } = getFormPayload();
            const mailtoUri = `mailto:ercanlimuratcan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

            // Visual feedback
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalHtml = submitBtn.innerHTML;

            const successText = currentLang === 'en'
                ? '<i class="fas fa-check"></i> Preparing Email Client...'
                : currentLang === 'tr'
                    ? '<i class="fas fa-check"></i> E-posta İstemcisi Açılıyor...'
                    : '<i class="fas fa-check"></i> Ouverture de votre messagerie...';

            submitBtn.innerHTML = successText;
            submitBtn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';

            setTimeout(() => {
                window.location.href = mailtoUri;
                setTimeout(() => {
                    submitBtn.innerHTML = originalHtml;
                    submitBtn.style.background = '';
                    contactForm.reset();
                }, 2000);
            }, 500);
        });
    }

    // Initialize with preferred language
    setLanguage(currentLang);
});
