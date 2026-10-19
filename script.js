/* ==========================================================================
   Murat Can ERCANLI - Portfolio JavaScript
   Interactive Canvas Mesh, Theme Toggle, Bilingual (FR/EN) i18n & Telemetry
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. Bilingual i18n Dictionary & Language Management
       ========================================================================== */
    const translations = {
        fr: {
            "nav.home": "Accueil",
            "nav.about": "À Propos",
            "nav.workflow": "Méthodologie",
            "nav.toolkit": "Compétences",
            "nav.experience": "Expériences",
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

            "projects.tag": "// PARCOURS & RÉALISATIONS",
            "projects.title": "Expériences Professionnelles",
            "projects.subtitle": "Missions opérationnelles menées en environnement industriel exigeant.",
            "projects.manitouTitle": "Data Analyst en alternance — Direction Opérationnelle",
            "projects.manitouDesc": "Manitou Group est un leader mondial de la manutention et de l'élévation. Dans le cadre de mon alternance MIAGE, j'ai accompagné la prise de décision opérationnelle via l'industrialisation des flux de données et la mise en œuvre de solutions BI novatrices.",
            "projects.manitouBullet1": "<strong>Définition & Suivi des KPI :</strong> Cadrage, calcul et validation d'indicateurs de performance clés en collaboration étroite avec les équipes métiers.",
            "projects.manitouBullet2": "<strong>Ingénierie des données sur GCP :</strong> Préparation, enrichissement et modélisation des données avec SQL et BigQuery, en créant des tables et colonnes calculées optimisées.",
            "projects.manitouBullet3": "<strong>Modèles Power BI & Azure DevOps :</strong> Évolution des jeux de données sémantiques, gouvernance des versions et déploiement via Azure DevOps.",
            "projects.manitouBullet4": "<strong>Agent Conversationnel Gemini vs Copilot :</strong> Développement d'un agent conversationnel Gemini pour l'interrogation de données en langage naturel ; benchmark comparatif face à Microsoft Copilot et restitution des résultats à la direction.",
            
            "projects.vibraTitle": "Digitalisation de Laboratoire d'Essais en alternance",
            "projects.vibraDesc": "Vibracoustic est un équipementier automobile de rang 1 spécialiste des systèmes anti-vibratoires. Mission d'optimisation des flux et digitalisation complète des processus du laboratoire d'essais.",
            "projects.vibraBullet1": "<strong>KPI Réactivité Machines :</strong> Définition et validation conjointe des indicateurs de temps de cycle et de disponibilité des bancs d'essais.",
            "projects.vibraBullet2": "<strong>Analytique Python :</strong> Calcul, traitement statistique et visualisation automatisée des métriques avec Python (Pandas, NumPy, Matplotlib).",
            "projects.vibraBullet3": "<strong>Tableau de Bord FIFO Échantillons :</strong> Conception intégrale d'un rapport Power BI de gestion FIFO des échantillons d'essais et publication sur SharePoint pour l'ensemble des techniciens.",
            "projects.vibraBullet4": "<strong>Administration SharePoint :</strong> Développement de fonctionnalités sur mesure, centralisation des ressources du laboratoire et maintenance du portail.",

            "projects.genaiTitle": "Agent Conversationnel BI & Benchmark LLM",
            "projects.genaiDesc": "Étude comparative et prototypage d'assistants intelligents pour l'exploration de données BI sans requêtes SQL manuelles pour les décideurs métiers.",
            "projects.genaiBullet1": "Architecture d'un agent Gemini connecté aux sources décisionnelles pour traduire des questions métier en analyses directes.",
            "projects.genaiBullet2": "Évaluation rigoureuse des hallucinations, de la fidélité des KPI et de la pertinence des réponses face à Microsoft Copilot.",

            "projects.fifoTitle": "Système de Suivi FIFO & Monitoring d'Échantillons",
            "projects.fifoDesc": "Plateforme intégrée Power BI et SharePoint permettant de réduire les temps d'attente des échantillons d'essais et d'améliorer la traçabilité des pièces d'essai automobile.",
            "projects.fifoBullet1": "Visibilité en temps réel sur les stocks d'échantillons et priorisation automatique selon la règle FIFO.",
            "projects.fifoBullet2": "Adoption immédiate par l'équipe du laboratoire grâce à une interface ergonomique et intuitive.",

            "edu.tag": "// FORMATION & ACCRÉDITATIONS",
            "edu.title": "Parcours Académique & Certifications",
            "edu.subtitle": "Un cursus universitaire complet associant informatique appliquée et sciences cognitives.",
            "edu.degreesTitle": "Diplômes Universitaires",
            "edu.miageTitle": "Licence informatique MIAGE",
            "edu.miageDesc": "Méthodes Informatiques Appliquées à la Gestion des Entreprises. Spécialisation en bases de données avancées, systèmes décisionnels, modélisation logicielle et gouvernance des systèmes d'information.",
            "edu.btsTitle": "BTS Services Informatiques aux Organisations (SIO)",
            "edu.btsDesc": "Option SLAM (Solutions logicielles et applications métiers). Développement orienté objet, bases de données relationnelles, SQL, algorithmique et méthodes de génie logiciel.",
            "edu.psyTitle": "Licence en Psychologie",
            "edu.psyDesc": "L'une des universités scientifiques les plus réputées du Moyen-Orient. Formation poussée en statistiques descriptives et inférentielles, méthodologie de recherche quantitative et analyse des comportements cognitifs.",
            "edu.certsTitle": "Certifications & Langues",
            "edu.cert1Desc": "Validation des compétences clés en analyse de données, modélisation décisionnelle et visual storytelling.",
            "edu.cert2Desc": "Maîtrise de l'environnement Anaconda, manipulation de données avec Pandas et visualisation statistique.",
            "edu.cert3Desc": "Perfectionnement continu sur les algorithmes de nettoyage, SQL interactif et analyse exploratoire.",
            "edu.langHeader": "Compétences Linguistiques",
            "edu.langFr": "Français",
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

            "projects.tag": "// TRACK RECORD",
            "projects.title": "Professional Experience",
            "projects.subtitle": "Operational missions performed in high-standard manufacturing environments.",
            "projects.manitouTitle": "Dual-Study Data Analyst — Operations Department",
            "projects.manitouDesc": "Manitou Group is a world leader in rough-terrain material handling. Within my MIAGE program, I supported operational decision-making by industrializing data pipelines and implementing pioneering BI solutions.",
            "projects.manitouBullet1": "<strong>KPI Formulation & Validation:</strong> Scoping, computing, and benchmarking operational KPIs in direct liaison with business heads.",
            "projects.manitouBullet2": "<strong>Data Engineering on GCP:</strong> Cleansing, transforming, and modeling large datasets using SQL and BigQuery with optimized calculated dimensions.",
            "projects.manitouBullet3": "<strong>Power BI Semantic Models:</strong> Enhancing analytical datasets, managing model governance, and streamlining deployment via Azure DevOps.",
            "projects.manitouBullet4": "<strong>Gemini Conversational BI Agent:</strong> Built a Gemini AI agent for natural language data exploration; benchmarked performance against Microsoft Copilot and presented findings to leadership.",

            "projects.vibraTitle": "Test Laboratory Digitalization Specialist",
            "projects.vibraDesc": "Vibracoustic is a tier-1 global automotive supplier specialized in NVH solutions. Mission focused on test bench flow optimization and end-to-end lab digitization.",
            "projects.vibraBullet1": "<strong>Test Bench Reactivity KPIs:</strong> Established and validated key metrics measuring machine response time and test bench availability.",
            "projects.vibraBullet2": "<strong>Python Numerical Analytics:</strong> Computed, statistically analyzed, and automated KPI visualization with Python (Pandas, NumPy, Matplotlib).",
            "projects.vibraBullet3": "<strong>FIFO Sample Tracking Dashboard:</strong> Designed and published an enterprise Power BI report for FIFO sample queuing, hosted on SharePoint.",
            "projects.vibraBullet4": "<strong>SharePoint Administration:</strong> Engineered tailored portal modules, centralized testing documentation, and ensured portal uptime.",

            "projects.genaiTitle": "Conversational BI Agent & LLM Benchmark",
            "projects.genaiDesc": "Comparative prototype evaluation of generative assistants designed for self-service business reporting without manual SQL coding.",
            "projects.genaiBullet1": "Engineered an intelligent Gemini agent interface translating high-level business queries into validated database insights.",
            "projects.genaiBullet2": "Assessed hallucination mitigation, calculation fidelity, and usability benchmarks against Microsoft Copilot.",

            "projects.fifoTitle": "Automotive Sample FIFO Monitoring System",
            "projects.fifoDesc": "Integrated Power BI and SharePoint solution that drastically minimized test queue bottlenecks and upgraded physical component traceability.",
            "projects.fifoBullet1": "Delivered live visibility into physical inventory status and automated FIFO prioritization logic.",
            "projects.fifoBullet2": "Achieved immediate laboratory adoption through intuitive UI architecture and clear operational indicators.",

            "edu.tag": "// EDUCATION & BADGES",
            "edu.title": "Academic Background & Certifications",
            "edu.subtitle": "A comprehensive trajectory uniting computer science and behavioral analytics.",
            "edu.degreesTitle": "University Degrees",
            "edu.miageTitle": "BSc in Computer Science (MIAGE)",
            "edu.miageDesc": "Methods for Enterprise Information Systems. Specialized in advanced database systems, decision support architecture, software design, and IT governance.",
            "edu.btsTitle": "Higher National Diploma (BTS SIO SLAM)",
            "edu.btsDesc": "Software Solutions and Business Applications. Object-oriented programming, relational databases, SQL querying, algorithms, and engineering frameworks.",
            "edu.psyTitle": "Bachelor of Science in Psychology",
            "edu.psyDesc": "One of the premier science universities in the Middle East. Rigorous curriculum in descriptive & inferential statistics, quantitative research methods, and cognitive modeling.",
            "edu.certsTitle": "Certifications & Languages",
            "edu.cert1Desc": "Validating critical competencies in exploratory analysis, decision modeling, and visual data storytelling.",
            "edu.cert2Desc": "Mastery of Anaconda ecosystems, Pandas data manipulation, and scientific visualization libraries.",
            "edu.cert3Desc": "Continuous learning track focused on production data preparation, interactive SQL, and statistical EDA.",
            "edu.langHeader": "Language Proficiency",
            "edu.langFr": "French",
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
            "contact.formNotice": "Your details are strictly kept confidential and only used to respond.",

            "footer.rights": "All rights reserved.",
            "footer.status": "System Status: Online & Open for CDI Opportunities"
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
        ]
    };

    let currentLang = localStorage.getItem('preferred_lang') || 'fr';

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
            document.title = "Murat Can ERCANLI | Data Analyst & Business Intelligence";
        } else {
            if (nameInput) nameInput.placeholder = "Ex: Jean Dupont (Recrutement)";
            if (emailInput) emailInput.placeholder = "nom@entreprise.com";
            if (subjectInput) subjectInput.placeholder = "Opportunité CDI Data Analyst - Nantes";
            if (msgInput) msgInput.placeholder = "Bonjour Murat, nous avons découvert votre profil...";
            document.title = "Murat Can ERCANLI | Data Analyst & Business Intelligence";
        }

        // Restart typewriter with new language roles
        restartTypewriter();
    }

    // Attach language button events
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetLang = btn.getAttribute('data-lang');
            setLanguage(targetLang);
        });
    });


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
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
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
    }


    /* ==========================================================================
       7. Interactive Contact Form Submission
       ========================================================================== */
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const subject = document.getElementById('contact-subject').value;
            const message = document.getElementById('contact-message').value;

            // Generate mailto link
            const mailtoUri = `mailto:ercanlimuratcan@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Nom / De: " + name + " (" + email + ")\n\n" + message)}`;

            // Visual feedback
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalHtml = submitBtn.innerHTML;

            const successText = currentLang === 'en'
                ? '<i class="fas fa-check"></i> Preparing Email Client...'
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

