/* ==========================================================================
   Murat Can ERCANLI — Veille Technologique (Data-Driven Architecture)
   SOURCE -> INFORMATION -> ANALYSIS -> BUSINESS IMPACT -> PORTFOLIO PRACTICE
   Trilingual Support: FR / EN / TR
   ========================================================================== */

(function () {
    'use strict';

    /* ==========================================================================
       1. Structured Content Dataset (Single Source of Truth)
       Add new technology-watch entries to `VEILLE_ENTRIES` to automatically
       populate homepage teaser, featured trends, entry cards, filters, tags,
       timeline, and modal analysis views.
       ========================================================================== */
    const VEILLE_DOMAINS = [
        {
            id: "Data",
            icon: "fas fa-database",
            accentClass: "domain-data",
            title: {
                fr: "Data Analytics",
                en: "Data Analytics",
                tr: "Veri Analitiği (Data Analytics)"
            },
            desc: {
                fr: "Architecture des plateformes de données modernes, ingénierie SQL/Cloud, qualité et observabilité des flux décisionnels.",
                en: "Modern data platform architecture, SQL/Cloud engineering, data quality, and observability across analytical pipelines.",
                tr: "Modern veri platformu mimarisi, SQL/Bulut veri mühendisliği, veri kalitesi ve analitik boru hatlarında gözlemlenebilirlik."
            },
            topics: {
                fr: [
                    "Modern data platforms",
                    "Data quality",
                    "Data governance",
                    "Data engineering",
                    "Data observability",
                    "Cloud data platforms",
                    "Real-time analytics",
                    "DataOps"
                ],
                en: [
                    "Modern data platforms",
                    "Data quality",
                    "Data governance",
                    "Data engineering",
                    "Data observability",
                    "Cloud data platforms",
                    "Real-time analytics",
                    "DataOps"
                ],
                tr: [
                    "Modern veri platformları",
                    "Veri kalitesi (Data quality)",
                    "Veri yönetişimi (Governance)",
                    "Veri mühendisliği",
                    "Veri gözlemlenebilirliği",
                    "Bulut veri ambarları",
                    "Gerçek zamanlı analitik",
                    "DataOps"
                ]
            }
        },
        {
            id: "IA",
            icon: "fas fa-microchip",
            accentClass: "domain-ai",
            title: {
                fr: "Artificial Intelligence",
                en: "Artificial Intelligence",
                tr: "Yapay Zeka (Artificial Intelligence)"
            },
            desc: {
                fr: "Intégration raisonnée des grands modèles de langage (LLM), agents analytiques, RAG sur schémas SQL et conformité réglementaire.",
                en: "Controlled integration of Large Language Models (LLMs), analytical AI agents, RAG over SQL schemas, and regulatory compliance.",
                tr: "Büyük Dil Modellerinin (LLM) kontrollü entegrasyonu, analitik yapay zeka ajanları, SQL şemaları üzerinde RAG ve mevzuat uyumu."
            },
            topics: {
                fr: [
                    "Generative AI",
                    "Large Language Models",
                    "AI agents",
                    "Retrieval-Augmented Generation",
                    "Machine learning",
                    "Responsible AI",
                    "AI governance",
                    "AI regulation",
                    "AI integration into enterprise workflows"
                ],
                en: [
                    "Generative AI",
                    "Large Language Models",
                    "AI agents",
                    "Retrieval-Augmented Generation",
                    "Machine learning",
                    "Responsible AI",
                    "AI governance",
                    "AI regulation",
                    "AI integration into enterprise workflows"
                ],
                tr: [
                    "Üretken Yapay Zeka (GenAI)",
                    "Büyük Dil Modelleri (LLM)",
                    "Yapay Zeka Ajanları (AI Agents)",
                    "RAG Mimarisi",
                    "Makine Öğrenmesi",
                    "Sorumlu Yapay Zeka",
                    "AI Yönetişimi",
                    "AB Yapay Zeka Yasası (EU AI Act)",
                    "Kurumsal İş Akışı Entegrasyonu"
                ]
            }
        },
        {
            id: "Business Intelligence",
            icon: "fas fa-chart-Simple",
            iconFallback: "fas fa-chart-column",
            accentClass: "domain-bi",
            title: {
                fr: "Business Intelligence",
                en: "Business Intelligence",
                tr: "İş Zekası (Business Intelligence)"
            },
            desc: {
                fr: "Modélisation sémantique DAX, convergence Power BI & Microsoft Fabric, conception de KPI industriels et gouvernance BI.",
                en: "DAX semantic modeling, Power BI & Microsoft Fabric convergence, industrial KPI design, and enterprise BI governance.",
                tr: "DAX semantik modelleme, Power BI & Microsoft Fabric yakınsaması, endüstriyel KPI tasarımı ve kurumsal BI yönetişimi."
            },
            topics: {
                fr: [
                    "Power BI",
                    "Microsoft Fabric",
                    "Tableau",
                    "Self-service BI",
                    "Semantic models",
                    "Data visualisation",
                    "KPI design",
                    "BI governance",
                    "Embedded analytics",
                    "Decision intelligence"
                ],
                en: [
                    "Power BI",
                    "Microsoft Fabric",
                    "Tableau",
                    "Self-service BI",
                    "Semantic models",
                    "Data visualisation",
                    "KPI design",
                    "BI governance",
                    "Embedded analytics",
                    "Decision intelligence"
                ],
                tr: [
                    "Power BI",
                    "Microsoft Fabric",
                    "Tableau",
                    "Self-servis BI",
                    "Semantik modeller",
                    "Veri görselleştirme",
                    "KPI tasarımı",
                    "BI yönetişimi",
                    "Gömülü analitik",
                    "Karar zekası (Decision intelligence)"
                ]
            }
        }
    ];

    const VEILLE_ENTRIES = [
        {
            id: "fabric-unified-analytics",
            date: "2026-03-18",
            periodLabel: {
                fr: "Mars 2026",
                en: "March 2026",
                tr: "Mart 2026"
            },
            readingTime: "6 min",
            technology: "Microsoft Fabric & Power BI",
            categories: ["Business Intelligence", "Data"],
            categoryBadge: {
                fr: "Business Intelligence / Data",
                en: "Business Intelligence / Data",
                tr: "İş Zekası / Veri"
            },
            trendTitle: {
                fr: "Microsoft Fabric & Unified Analytics",
                en: "Microsoft Fabric & Unified Analytics",
                tr: "Microsoft Fabric & Birleşik Analitik"
            },
            timelineLabel: {
                fr: "Adoption de Microsoft Fabric & Modèles Direct Lake",
                en: "Microsoft Fabric & Direct Lake Adoption",
                tr: "Microsoft Fabric & Direct Lake Modellerinin Benimsenmesi"
            },
            title: {
                fr: "Microsoft Fabric : vers une plateforme unifiée pour la Data et la BI",
                en: "Microsoft Fabric: Toward a Unified Platform for Data Engineering and BI",
                tr: "Microsoft Fabric: Veri Mühendisliği ve İş Zekası (BI) İçin Birleşik Platforma Doğru"
            },
            oneSentenceInsight: {
                fr: "La convergence entre stockage OneLake et modèles sémantiques Power BI redéfinit la frontière entre Data Engineering et Business Intelligence.",
                en: "The convergence of OneLake storage and Power BI semantic models redefines the boundary between Data Engineering and Business Intelligence.",
                tr: "OneLake depolama katmanı ile Power BI semantik modellerinin birleşmesi, Veri Mühendisliği ve İş Zekası arasındaki sınırı yeniden tanımlıyor."
            },
            summary: {
                fr: "Passage d'outils BI isolés vers des plateformes de données intégrées réunissant ingénierie, stockage analytique, gouvernance et restitution au sein d'une architecture unifiée.",
                en: "Movement from isolated BI tools toward integrated data platforms combining data engineering, analytics, governance, and reporting within a unified architecture.",
                tr: "İzole BI araçlarından; veri mühendisliği, analitik depolama, yönetişim ve raporlamayı tek bir mimaride birleştiren entegre veri platformlarına geçiş."
            },
            keyPoints: {
                fr: [
                    "Centralisation du stockage analytique autour d'un lac unique (OneLake) au format ouvert Delta Parquet, évitant la duplication des silos de données.",
                    "Introduction du mode Direct Lake dans Power BI, permettant d'interroger de très grands volumes sans latence de DirectQuery ni coûts d'importation planifiée.",
                    "Gouvernance native du cycle de vie décisionnel via l'intégration Git (format PBIP / TMDL) et les pipelines de déploiement CI/CD."
                ],
                en: [
                    "Centralization of analytical storage around a single data lake (OneLake) in open Delta Parquet format, eliminating redundant data silos.",
                    "Introduction of Direct Lake mode in Power BI, enabling high-speed querying over massive datasets without DirectQuery latency or scheduled import overhead.",
                    "Native lifecycle governance through Git integration (PBIP / TMDL format) and automated CI/CD deployment pipelines."
                ],
                tr: [
                    "Veri silolarının kopyalanmasını önlemek amacıyla analitik depolamanın açık Delta Parquet formatında tek bir veri gölünde (OneLake) merkezileştirilmesi.",
                    "Power BI'da DirectQuery gecikmesi veya zamanlanmış veri aktarım maliyeti olmadan büyük veri kümelerini yüksek hızda sorgulayan Direct Lake modunun sunulması.",
                    "Git entegrasyonu (PBIP / TMDL formatı) ve otomatik CI/CD dağıtım hatları üzerinden yerel BI yaşam döngüsü yönetişimi."
                ]
            },
            whyItMatters: {
                fr: "Cette convergence réduit drastiquement la friction technique entre les pipelines SQL/Cloud en amont et les modèles sémantiques DAX en aval, garantissant une source unique de vérité (Single Source of Truth).",
                en: "This convergence drastically reduces technical friction between upstream SQL/Cloud pipelines and downstream DAX semantic models, enforcing a true Single Source of Truth.",
                tr: "Bu yakınsama, üst akıştaki SQL/Bulut veri hatları ile alt akıştaki DAX semantik modelleri arasındaki teknik sürtünmeyi azaltarak gerçek bir Tek Doğruluk Kaynağı (Single Source of Truth) sağlar."
            },
            businessImpact: {
                fr: "Accélération de la mise à disposition des KPI opérationnels, réduction des coûts de duplication de données, amélioration de la traçabilité (data lineage) et montée en compétence des analystes BI sur l'ingénierie des données.",
                en: "Faster time-to-insight for operational KPIs, lower data duplication costs, stronger end-to-end data lineage, and an expanded engineering skillset required from BI analysts.",
                tr: "Operasyonel KPI'ların daha hızlı sunulması, veri kopyalama maliyetlerinin düşmesi, uçtan uca veri soyunun (data lineage) güçlenmesi ve BI analistlerinin veri mühendisliği yetkinliklerinin genişlemesi."
            },
            analysis: {
                fr: "L'évolution de Power BI vers l'écosystème Microsoft Fabric montre que le rôle du BI Analyst s'étend progressivement au-delà de la création de tableaux de bord. La compréhension des modèles de données, de la gouvernance, du versionnement Git et de l'intégration des différentes sources Cloud devient désormais indispensable.",
                en: "The evolution of Power BI into the Microsoft Fabric ecosystem demonstrates that the BI Analyst role is expanding well beyond dashboard creation. Mastering dimensional data modeling, Git versioning, governance, and multi-source Cloud integration has become essential.",
                tr: "Power BI'ın Microsoft Fabric ekosistemine evrilmesi, BI Analisti rolünün yalnızca pano tasarımının çok ötesine geçtiğini gösteriyor. Boyutsal veri modelleme, Git sürüm kontrolü, veri yönetişimi ve çoklu Bulut kaynaklarının entegrasyonu artık vazgeçilmez birer yetkinlik haline geldi."
            },
            tags: ["Microsoft Fabric", "Power BI", "DAX", "Semantic Models", "Azure DevOps", "SQL"],
            source: {
                name: "Microsoft Learn & Fabric Blog",
                url: "https://learn.microsoft.com/en-us/fabric/get-started/microsoft-fabric-overview"
            },
            relatedProject: {
                name: {
                    fr: "Suivi FIFO Laboratoire & Monitoring Bancs d'Essais (Power BI)",
                    en: "FIFO Laboratory Sample Tracking & Test Bench Monitoring (Power BI)",
                    tr: "FIFO Laboratuvar Numune Takibi & Test Bench İzleme Sistemi (Power BI)"
                },
                anchor: "index.html#bi-project"
            },
            featured: true
        },
        {
            id: "ai-agents-data-workflows",
            date: "2026-02-24",
            periodLabel: {
                fr: "Février 2026",
                en: "February 2026",
                tr: "Şubat 2026"
            },
            readingTime: "6 min",
            technology: "Google Cloud Vertex AI / Gemini & Agents",
            categories: ["IA", "Data"],
            categoryBadge: {
                fr: "Artificial Intelligence",
                en: "Artificial Intelligence",
                tr: "Yapay Zeka (AI)"
            },
            trendTitle: {
                fr: "AI Agents for Data Workflows",
                en: "AI Agents for Data Workflows",
                tr: "Veri İş Akışları İçin Yapay Zeka Ajanları"
            },
            timelineLabel: {
                fr: "Agents IA & Analytique Agentique (Text-to-SQL gouverné)",
                en: "AI Agents & Agentic Analytics (Governed Text-to-SQL)",
                tr: "Yapay Zeka Ajanları & Yönetişimli Text-to-SQL Analitiği"
            },
            title: {
                fr: "Agents IA pour les Workflows Data : du Text-to-SQL à l'Analytique Agentique sur BigQuery",
                en: "AI Agents for Data Workflows: From Text-to-SQL to Agentic Analytics on BigQuery",
                tr: "Veri İş Akışları İçin AI Ajanları: Text-to-SQL'den BigQuery Üzerinde Ajan Tabanlı Analitiğe"
            },
            oneSentenceInsight: {
                fr: "Les agents analytiques ne sont fiables en production que lorsqu'ils sont ancrés sur des vues SQL documentées et une couche sémantique explicite.",
                en: "Analytical AI agents are only reliable in production when grounded on documented SQL views and an explicit semantic layer.",
                tr: "Analitik yapay zeka ajanları, canlı ortamda yalnızca dokümante edilmiş SQL görünümlerine (views) ve açık bir semantik katmana dayandırıldığında güvenilirdir."
            },
            summary: {
                fr: "Émergence d'agents autonomes ou semi-autonomes capables de traduire une question métier en requête SQL vérifiée, d'interroger un entrepôt Cloud et de structurer une synthèse opérationnelle.",
                en: "Emergence of autonomous and semi-autonomous agents capable of translating business questions into verified SQL queries, executing them on Cloud data warehouses, and synthesizing operational answers.",
                tr: "İş sorularını doğrulanmış SQL sorgularına dönüştürebilen, Bulut veri ambarlarını sorgulayabilen ve operasyonel özetler üretebilen otonom/yarı-otonom ajanların yükselişi."
            },
            keyPoints: {
                fr: [
                    "Passage du simple prompt isolé à des boucles agentiques capables d'inspecter le schéma de métadonnées, de générer du SQL et de valider la syntaxe avant exécution.",
                    "Rôle déterminant du Grounding (ancrage documentaire et dictionnaire de données) pour éviter les hallucinations sur les jointures complexes ou les règles de gestion.",
                    "Nécessité de benchmarks rigoureux (fidélité des KPI, temps de réponse, gestion de l'ambiguïté) entre différents modèles comme Google Gemini et Microsoft Copilot."
                ],
                en: [
                    "Shift from isolated single-turn prompts to agentic loops capable of inspecting schema metadata, generating SQL, and validating syntax prior to execution.",
                    "Critical role of Semantic Grounding (data dictionaries and curated views) to prevent hallucinations on complex joins or domain-specific business rules.",
                    "Need for rigorous benchmarking (KPI fidelity, query latency, ambiguity handling) across models such as Google Gemini and Microsoft Copilot."
                ],
                tr: [
                    "Tekil komutlardan; şema meta verilerini inceleyebilen, SQL üretebilen ve çalıştırmadan önce sözdizimini doğrulayabilen ajan döngülerine geçiş.",
                    "Karmaşık tablo birleştirmelerinde (JOIN) ve iş kurallarında halüsinasyonları önlemek için Semantik Temellendirmenin (veri sözlüğü ve doğrulanmış görünümler) kritik rolü.",
                    "Google Gemini ve Microsoft Copilot gibi modeller arasında KPI doğruluğu, yanıt süresi ve belirsizlik yönetimi açısından titiz kıyaslama (benchmark) gerekliliği."
                ]
            },
            whyItMatters: {
                fr: "Sans couche sémantique gouvernée, un agent IA interrogeant des tables brutes risque de calculer des indicateurs incohérents. L'ingénierie des métadonnées devient le socle de l'IA décisionnelle.",
                en: "Without a governed semantic layer, an AI agent querying raw tables risks computing inconsistent metrics. Metadata engineering has become the foundation of conversational BI.",
                tr: "Yönetişimli bir semantik katman olmadan ham tabloları sorgulayan bir yapay zeka ajanı tutarsız metrikler üretebilir. Meta veri mühendisliği, konuşma tabanlı iş zekasının temeli haline gelmiştir."
            },
            businessImpact: {
                fr: "Démocratisation de l'accès aux données pour les équipes opérationnelles sans maîtrise de SQL, réduction du délai de réponse sur les demandes ad-hoc et recentrage des Data Analysts sur la modélisation à forte valeur ajoutée.",
                en: "Self-service data access for non-technical operational teams, faster turnaround on ad-hoc business questions, and freeing Data Analysts to focus on high-value modeling.",
                tr: "SQL bilmeyen operasyonel ekipler için veriye erişimin demokratikleşmesi, anlık (ad-hoc) iş sorularına yanıt süresinin kısalması ve Veri Analistlerinin yüksek katma değerli modellemeye odaklanması."
            },
            analysis: {
                fr: "Lors de mon benchmark industriel entre un agent conversationnel Gemini (connecté à BigQuery) et Microsoft Copilot chez Manitou Group, j'ai constaté que la performance d'un agent dépend à 80 % de la qualité de préparation des tables SQL et de la clarté des définitions de KPI en amont.",
                en: "During my industrial benchmark comparing a Gemini conversational agent (connected to BigQuery) and Microsoft Copilot at Manitou Group, I observed that 80% of an agent's accuracy depends on upstream SQL table preparation and unambiguous KPI definitions.",
                tr: "Manitou Group'ta BigQuery'ye bağlı bir Gemini konuşma ajanı ile Microsoft Copilot arasında gerçekleştirdiğim endüstriyel kıyaslamada, bir ajanın başarısının %80 oranında üst akıştaki SQL tablolarının hazırlık kalitesine ve KPI tanımlarının netliğine bağlı olduğunu gözlemledim."
            },
            tags: ["AI Agents", "Generative AI", "LLM", "BigQuery", "SQL", "Python"],
            source: {
                name: "Google Cloud Architecture & Vertex AI",
                url: "https://cloud.google.com/bigquery/docs/generative-ai-overview"
            },
            relatedProject: {
                name: {
                    fr: "Agent Conversationnel BI Gemini vs Copilot (Manitou Group)",
                    en: "Gemini vs Copilot Conversational BI Agent (Manitou Group)",
                    tr: "Gemini vs Copilot Konuşma Tabanlı BI Ajanı (Manitou Group)"
                },
                anchor: "index.html#projects"
            },
            featured: true
        },
        {
            id: "genai-in-business-intelligence",
            date: "2026-01-29",
            periodLabel: {
                fr: "Janvier 2026",
                en: "January 2026",
                tr: "Ocak 2026"
            },
            readingTime: "5 min",
            technology: "Power BI Copilot & DAX",
            categories: ["IA", "Business Intelligence"],
            categoryBadge: {
                fr: "AI / BI",
                en: "AI / BI",
                tr: "Yapay Zeka / BI"
            },
            trendTitle: {
                fr: "Generative AI in Business Intelligence",
                en: "Generative AI in Business Intelligence",
                tr: "İş Zekasında (BI) Üretken Yapay Zeka"
            },
            timelineLabel: {
                fr: "Intégration de l'IA Générative & Copilots dans Power BI",
                en: "Generative AI & Copilot Integration in Power BI",
                tr: "Power BI'da Üretken Yapay Zeka ve Copilot Entegrasyonu"
            },
            title: {
                fr: "L'IA Générative en Business Intelligence : Copilots, DAX Assisté et Exploration en Langage Naturel",
                en: "Generative AI in Business Intelligence: Copilots, Assisted DAX, and Natural-Language Exploration",
                tr: "İş Zekasında Üretken Yapay Zeka: Copilot'lar, Destekli DAX Yazımı ve Doğal Dilde Veri Keşfi"
            },
            oneSentenceInsight: {
                fr: "Les assistants IA intégrés aux outils BI accélèrent la création de mesures DAX et la synthèse narrative, à condition que le modèle en étoile soit irréprochable.",
                en: "Embedded BI copilots accelerate DAX authoring and narrative synthesis, provided the underlying star schema is cleanly architected.",
                tr: "BI araçlarına gömülü yapay zeka asistanları, alt katmandaki yıldız şeması (star schema) kusursuz kurgulandığı sürece DAX yazımını ve yönetici özetlerini hızlandırır."
            },
            summary: {
                fr: "Transformation de l'expérience utilisateur en Business Intelligence grâce aux interfaces en langage naturel et aux copilotes capables de générer des visuels, des synthèses exécutives et des requêtes DAX.",
                en: "Transformation of the Business Intelligence user experience through natural-language interfaces and copilots capable of generating visuals, executive summaries, and DAX queries.",
                tr: "Görseller, yönetici özetleri ve DAX sorguları üretebilen doğal dil arayüzleri ve yardımcı pilotlar (copilots) sayesinde İş Zekası kullanıcı deneyiminin dönüşümü."
            },
            keyPoints: {
                fr: [
                    "Génération assistée de mesures DAX complexes et explication automatique du code existant dans DAX Query View.",
                    "Création de synthèses narratives dynamiques adaptées aux filtres actifs d'un rapport Power BI pour accélérer la lecture exécutive.",
                    "Importance critique du nommage métier des colonnes, des synonymes et des descriptions dans le modèle sémantique pour guider l'IA."
                ],
                en: [
                    "Assisted generation of complex DAX measures and automated code explanation within DAX Query View.",
                    "Creation of dynamic narrative summaries that adapt to active report slicers for faster executive consumption.",
                    "Critical importance of business-friendly column naming, synonyms, and measure descriptions in the semantic model to guide the AI."
                ],
                tr: [
                    "DAX Query View içinde karmaşık DAX ölçümlerinin destekli üretimi ve mevcut kodların otomatik açıklanması.",
                    "Yöneticilerin raporları daha hızlı okuması için aktif filtrelere uyum sağlayan dinamik anlatı özetlerinin oluşturulması.",
                    "Yapay zekayı doğru yönlendirmek için semantik modelde iş dostu sütun adlandırmalarının, eş anlamlıların ve ölçüm açıklamalarının kritik önemi."
                ]
            },
            whyItMatters: {
                fr: "L'IA générative abaisse la barrière d'entrée pour les consommateurs de rapports tout en exigeant des concepteurs BI une rigueur accrue sur le design du modèle sémantique.",
                en: "Generative AI lowers the barrier to entry for report consumers while demanding even greater rigor from BI developers in semantic model design.",
                tr: "Üretken yapay zeka, rapor kullanıcıları için giriş bariyerini düşürürken BI geliştiricilerinden semantik model tasarımında çok daha yüksek bir titizlik talep etmektedir."
            },
            businessImpact: {
                fr: "Prise de décision plus rapide lors des revues opérationnelles, réduction du temps consacré au reporting manuel répétitif et meilleure adoption des tableaux de bord par les managers.",
                en: "Faster decision-making during operational reviews, reduced time spent on repetitive manual reporting, and higher dashboard adoption among business managers.",
                tr: "Operasyonel toplantılarda daha hızlı karar alma, tekrarlayan manuel raporlamaya harcanan sürede azalma ve yöneticiler arasında daha yüksek pano benimseme oranı."
            },
            analysis: {
                fr: "Un Copilot BI ne peut pas compenser un modèle de données mal structuré. Au contraire, les bonnes pratiques de modélisation dimensionnelle (schéma en étoile strict, mesures DAX explicites, hiérarchies propres) deviennent le facteur clé de succès de l'IA en BI.",
                en: "A BI Copilot cannot compensate for a poorly structured data model. On the contrary, dimensional modeling best practices (strict star schema, explicit DAX measures, clean hierarchies) have become the primary prerequisite for successful AI in BI.",
                tr: "Bir BI Copilot'u kötü yapılandırılmış bir veri modelini telafi edemez. Aksine, boyutsal modelleme en iyi uygulamaları (katı yıldız şeması, açık DAX ölçümleri, temiz hiyerarşiler) BI'da başarılı yapay zeka kullanımının birincil ön koşulu haline gelmiştir."
            },
            tags: ["Generative AI", "Power BI", "DAX", "Semantic Models", "Self-Service BI"],
            source: {
                name: "Microsoft Power BI Blog & Learn",
                url: "https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction"
            },
            relatedProject: {
                name: {
                    fr: "Monitoring & Gouvernance Power BI d'Entreprise",
                    en: "Enterprise Power BI Monitoring & Governance",
                    tr: "Kurumsal Power BI İzleme & Yönetişim Mimarisi"
                },
                anchor: "index.html#bi-governance"
            },
            featured: true
        },
        {
            id: "data-governance-quality-enterprise",
            date: "2025-12-12",
            periodLabel: {
                fr: "Décembre 2025",
                en: "December 2025",
                tr: "Aralık 2025"
            },
            readingTime: "6 min",
            technology: "Power BI REST API & BigQuery",
            categories: ["Data", "Gouvernance", "Business Intelligence"],
            categoryBadge: {
                fr: "Data / Gouvernance",
                en: "Data / Governance",
                tr: "Veri / Yönetişim"
            },
            trendTitle: {
                fr: "Data Governance & Data Quality",
                en: "Data Governance & Data Quality",
                tr: "Veri Yönetişimi & Veri Kalitesi"
            },
            timelineLabel: {
                fr: "Gouvernance des Données, Data Ownership & Qualité pour la BI",
                en: "Data Governance, Ownership & Quality for Enterprise BI",
                tr: "Kurumsal BI İçin Veri Yönetişimi, Sahipliği (Ownership) ve Kalitesi"
            },
            title: {
                fr: "Gouvernance des Données & Data Quality : Prérequis Indispensables pour la BI et l'IA à l'Échelle",
                en: "Data Governance & Data Quality: Essential Prerequisites for Enterprise BI and AI at Scale",
                tr: "Veri Yönetişimi & Veri Kalitesi: Ölçeklenebilir Kurumsal BI ve Yapay Zeka İçin Temel Ön Koşullar"
            },
            oneSentenceInsight: {
                fr: "L'industrialisation de la BI impose de coupler la télémétrie technique avec une responsabilité métier claire (Data Ownership) et des contrôles qualité automatisés.",
                en: "Scaling enterprise BI requires pairing technical platform telemetry with clear business accountability (Data Ownership) and automated quality controls.",
                tr: "Kurumsal iş zekasını ölçeklendirmek, teknik platform telemetrisini net iş birimi sorumluluğu (Data Ownership) ve otomatik kalite kontrolleriyle birleştirmeyi gerektirir."
            },
            summary: {
                fr: "Les organisations traitent désormais la gouvernance, la traçabilité (lineage), la responsabilité éditoriale (Data Ownership) et la qualité des données comme des fondations obligatoires avant tout déploiement analytique ou IA.",
                en: "Organizations increasingly treat governance, lineage, Data Ownership, and data quality as mandatory foundations prior to scaling analytics or AI initiatives.",
                tr: "Kurumlar artık veri yönetişimini, veri soyunu (lineage), Veri Sahipliğini (Data Ownership) ve veri kalitesini analitik veya yapay zeka projelerini ölçeklendirmeden önce zorunlu temeller olarak ele alıyor."
            },
            keyPoints: {
                fr: [
                    "Exploitation des API d'administration (Power BI REST API) et stockage Cloud (BigQuery) pour suivre l'adoption réelle, détecter les rapports obsolètes et optimiser les licences.",
                    "Implémentation de contrôles SQL automatisés en amont : détection de doublons, validation de l'intégrité référentielle et surveillance de la fraîcheur des données.",
                    "Structuration du rôle de Data Owner par département afin d'aligner les indicateurs techniques avec la responsabilité métier."
                ],
                en: [
                    "Leveraging admin telemetry APIs (Power BI REST API) and Cloud warehousing (BigQuery) to track real adoption, identify stale reports, and optimize licence allocation.",
                    "Implementing automated upstream SQL checks: duplicate detection, referential integrity validation, and data freshness monitoring.",
                    "Structuring department-level Data Ownership so technical platform metrics align with business accountability."
                ],
                tr: [
                    "Gerçek benimseme oranlarını izlemek, kullanılmayan raporları tespit etmek ve lisans tahsisini optimize etmek için yönetim API'lerinin (Power BI REST API) ve Bulut veri ambarlarının (BigQuery) kullanılması.",
                    "Üst akışta otomatik SQL kontrollerinin uygulanması: mükerrer kayıt tespiti, referans bütünlüğü doğrulaması ve veri güncelliği izleme.",
                    "Teknik platform metriklerinin iş sorumluluğuyla örtüşmesi için departman düzeyinde Veri Sahipliği (Data Ownership) yapısının kurulması."
                ]
            },
            whyItMatters: {
                fr: "Sans gouvernance active, les plateformes BI souffrent de prolifération de rapports redondants (« BI Sprawl »), de dérives de coûts de licences et d'une perte de confiance des utilisateurs envers les chiffres.",
                en: "Without active governance, BI platforms suffer from report proliferation ('BI Sprawl'), licence cost drift, and eroding stakeholder trust in reported numbers.",
                tr: "Aktif yönetişim olmadan BI platformları mükerrer rapor kirliliği ('BI Sprawl'), lisans maliyet artışı ve kullanıcıların raporlanan rakamlara olan güveninin sarsılması sorunlarıyla karşılaşır."
            },
            businessImpact: {
                fr: "Fiabilisation des indicateurs présentés en comité de direction, rationalisation FinOps des licences inutilisées et responsabilisation des directions métiers sur le cycle de vie de leurs actifs data.",
                en: "Trusted KPIs in executive reviews, FinOps rationalization of dormant licences, and clear departmental accountability over the lifecycle of analytical assets.",
                tr: "Yönetim kurullarında sunulan KPI'ların güvenilirliğinin artması, pasif lisansların FinOps optimizasyonu ve departmanların kendi veri varlıklarının yaşam döngüsü üzerinde sorumluluk üstlenmesi."
            },
            analysis: {
                fr: "La gouvernance ne doit pas être perçue comme une contrainte purement informatique. En croisant la télémétrie plateforme avec le contexte organisationnel (départements, Business Units), le Data Analyst fournit à la fois aux administrateurs IT et aux Data Owners métiers les leviers pour piloter durablement leur patrimoine décisionnel.",
                en: "Governance should not be viewed as a purely IT constraint. By joining platform telemetry with organizational context (departments, Business Units), the Data Analyst equips both IT administrators and business Data Owners with actionable insights to sustainably manage their analytics estate.",
                tr: "Yönetişim yalnızca teknik bir BT kısıtlaması olarak görülmemelidir. Veri Analisti, platform telemetrisini organizasyonel bağlamla (departmanlar, İş Birimleri) birleştirerek hem BT yöneticilerine hem de iş birimi Veri Sahiplerine analitik varlıklarını sürdürülebilir şekilde yönetmeleri için somut kaldıraçlar sunar."
            },
            tags: ["Data Governance", "Data Quality", "Power BI", "BigQuery", "SQL", "KPI Design"],
            source: {
                name: "Microsoft Fabric & Power BI Adoption Roadmap",
                url: "https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-adoption-roadmap-overview"
            },
            relatedProject: {
                name: {
                    fr: "Monitoring & Gouvernance Power BI d'Entreprise (IT & Métier)",
                    en: "Enterprise Power BI Monitoring & Governance (IT & Business)",
                    tr: "Kurumsal Power BI İzleme & Yönetişim Mimarisi (BT & İş Birimleri)"
                },
                anchor: "index.html#bi-governance"
            },
            featured: true
        },
        {
            id: "ai-regulation-responsible-ai",
            date: "2025-11-05",
            periodLabel: {
                fr: "Novembre 2025",
                en: "November 2025",
                tr: "Kasım 2025"
            },
            readingTime: "5 min",
            technology: "EU AI Act & CNIL Governance",
            categories: ["IA", "Gouvernance"],
            categoryBadge: {
                fr: "AI / Gouvernance",
                en: "AI / Governance",
                tr: "Yapay Zeka / Yönetişim"
            },
            trendTitle: {
                fr: "AI Regulation & Responsible AI",
                en: "AI Regulation & Responsible AI",
                tr: "Yapay Zeka Regülasyonu & Sorumlu AI"
            },
            timelineLabel: {
                fr: "Cadre Européen AI Act, RGPD & IA Responsable en Entreprise",
                en: "EU AI Act Framework, GDPR & Responsible Enterprise AI",
                tr: "AB Yapay Zeka Yasası (EU AI Act), GDPR ve Sorumlu Kurumsal AI"
            },
            title: {
                fr: "Réglementation IA (EU AI Act) & IA Responsable : Transparence, RGPD et Gouvernance des Données en Entreprise",
                en: "AI Regulation (EU AI Act) & Responsible AI: Transparency, GDPR, and Enterprise Data Governance",
                tr: "Yapay Zeka Regülasyonu (EU AI Act) & Sorumlu AI: Kurumsal Veri Yönetişiminde Şeffaflık ve GDPR"
            },
            oneSentenceInsight: {
                fr: "La conformité à l'AI Act européen et aux recommandations de la CNIL commence dès l'architecture des jeux de données par l'anonymisation et la traçabilité.",
                en: "Compliance with the European AI Act and CNIL guidelines starts at the dataset architecture level through anonymization, minimization, and lineage.",
                tr: "Avrupa Yapay Zeka Yasası (EU AI Act) ve CNIL yönergelerine uyum, anonimleştirme, veri minimizasyonu ve izlenebilirlik ile doğrudan veri kümesi mimarisinde başlar."
            },
            summary: {
                fr: "Montée en puissance des exigences de transparence, de gestion des risques, de protection des données personnelles et de conformité réglementaire dans le déploiement de systèmes d'IA et d'analytique en entreprise.",
                en: "Growing importance of transparency, risk management, personal data protection, and regulatory compliance when deploying AI and analytics in enterprise environments.",
                tr: "Kurumsal ortamlarda yapay zeka ve analitik sistemleri devreye alınırken şeffaflık, risk yönetimi, kişisel verilerin korunması ve mevzuata uyum gereksinimlerinin artan önemi."
            },
            keyPoints: {
                fr: [
                    "Approche graduée par les risques de l'EU AI Act : exigences accrues de documentation technique, de qualité des jeux de données et de supervision humaine.",
                    "Recommandations de la CNIL sur la minimisation des données et l'agrégation anonymisée lors de l'utilisation de données RH ou comportementales dans des modèles analytiques.",
                    "Traçabilité des sources et explicabilité des résultats générés par les modèles ou agents IA utilisés pour l'aide à la décision."
                ],
                en: [
                    "Risk-based tiering under the EU AI Act: stricter requirements for technical documentation, dataset quality, and human oversight.",
                    "CNIL recommendations on data minimization and group-level anonymization when incorporating HR or behavioral data into analytical models.",
                    "Source traceability and explainability of outputs generated by AI models or decision-support agents."
                ],
                tr: [
                    "EU AI Act kapsamında risk temelli sınıflandırma: teknik dokümantasyon, veri kümesi kalitesi ve insan gözetimi için sıkılaştırılmış gereksinimler.",
                    "İK veya davranışsal verilerin analitik modellere dahil edilmesinde veri minimizasyonu ve departman bazlı anonimleştirme üzerine CNIL tavsiyeleri.",
                    "Karar destek amacıyla kullanılan yapay zeka modellerinin veya ajanlarının ürettiği çıktıların kaynak izlenebilirliği ve açıklanabilirliği."
                ]
            },
            whyItMatters: {
                fr: "Les projets Data et IA en entreprise ne peuvent plus être déployés en production sans intégrer dès la conception (Privacy & Governance by Design) la protection des données et l'explicabilité des calculs.",
                en: "Enterprise Data and AI projects can no longer move to production without embedding Privacy and Governance by Design, data protection, and calculation explainability from day one.",
                tr: "Kurumsal Veri ve Yapay Zeka projeleri, tasarımdan itibaren gizlilik ve yönetişim (Privacy & Governance by Design) ile hesaplama açıklanabilirliğini içermeden artık canlı ortama alınamaz."
            },
            businessImpact: {
                fr: "Réduction des risques juridiques et réputationnels, renforcement de la confiance des collaborateurs et des partenaires sociaux, et pérennité des architectures BI et IA déployées en production.",
                en: "Reduced legal and reputational risk, stronger employee and stakeholder trust, and long-term sustainability of production BI and AI architectures.",
                tr: "Hukuki ve itibar risklerinin azaltılması, çalışanların ve paydaşların güveninin güçlendirilmesi ve canlıdaki BI/AI mimarilerinin uzun vadeli sürdürülebilirliği."
            },
            analysis: {
                fr: "Dans la pratique d'un Data Analyst, l'IA responsable se traduit par des choix d'architecture concrets : privilégier des agrégations par direction ou groupe plutôt que d'exposer des données individuelles, documenter chaque règle de calcul et maintenir un contrôle humain sur les recommandations automatisées.",
                en: "In day-to-day Data Analyst practice, Responsible AI translates into concrete architectural choices: favoring department- or group-level aggregations over individual personal records, documenting every calculation rule, and maintaining human-in-the-loop validation.",
                tr: "Bir Veri Analistinin günlük pratiğinde Sorumlu Yapay Zeka somut mimari tercihlerle hayata geçer: bireysel kayıtları ifşa etmek yerine departman veya grup düzeyinde toplulaştırmaları (aggregation) tercih etmek, her hesaplama kuralını belgelemek ve otomatik önerilerde insan doğrulamasını korumak."
            },
            tags: ["Data Governance", "Responsible AI", "EU AI Act", "CNIL", "Data Quality"],
            source: {
                name: "Commission Européenne & CNIL",
                url: "https://www.cnil.fr/fr/intelligence-artificielle"
            },
            relatedProject: {
                name: {
                    fr: "Enrichissement RH Anonymisé & Gouvernance BI (Manitou Group)",
                    en: "Anonymized HR Context & BI Governance (Manitou Group)",
                    tr: "Anonimleştirilmiş İK Bağlamı & BI Yönetişimi (Manitou Group)"
                },
                anchor: "index.html#bi-governance"
            },
            featured: true
        }
    ];

    const VEILLE_METHOD_STEPS = [
        {
            num: "01",
            icon: "fas fa-satellite-dish",
            title: { fr: "1. Surveiller", en: "1. Monitor", tr: "1. İzle (Surveiller)" },
            desc: {
                fr: "Éditeurs technologiques (Microsoft, Google Cloud), publications de recherche, blogs d'ingénierie et autorités de régulation.",
                en: "Technology providers (Microsoft, Google Cloud), research publications, engineering blogs, and regulatory bodies.",
                tr: "Teknoloji sağlayıcıları (Microsoft, Google Cloud), akademik yayınlar, mühendislik blogları ve düzenleyici kurumlar."
            }
        },
        {
            num: "02",
            icon: "fas fa-filter",
            title: { fr: "2. Sélectionner", en: "2. Select", tr: "2. Seç (Sélectionner)" },
            desc: {
                fr: "Filtrer le bruit médiatique pour retenir les évolutions réellement structurantes en Data Analytics, IA et Business Intelligence.",
                en: "Filter out hype to retain developments with genuine architectural impact on Data Analytics, AI, and Business Intelligence.",
                tr: "Medya gürültüsünü eleyerek Veri Analitiği, Yapay Zeka ve İş Zekasında gerçek mimari etkiye sahip gelişmeleri ayıklamak."
            }
        },
        {
            num: "03",
            icon: "fas fa-microscope",
            title: { fr: "3. Analyser", en: "3. Analyze", tr: "3. Analiz Et (Analyser)" },
            desc: {
                fr: "Évaluer les implications techniques (modélisation, SQL, DAX, sécurité) et les impacts métiers (coûts, gouvernance, adoption).",
                en: "Evaluate technical implications (modeling, SQL, DAX, security) alongside business impact (cost, governance, adoption).",
                tr: "Teknik etkileri (modelleme, SQL, DAX, güvenlik) ve iş etkilerini (maliyet, yönetişim, benimseme) birlikte değerlendirmek."
            }
        },
        {
            num: "04",
            icon: "fas fa-gears",
            title: { fr: "4. Capitaliser", en: "4. Capitalize", tr: "4. Uygulamaya Dönüştür" },
            desc: {
                fr: "Transposer les apprentissages dans mes projets industriels, mes modèles de données de production et ma pratique professionnelle.",
                en: "Translate findings directly into industrial projects, production semantic models, and professional engineering practice.",
                tr: "Elde edilen bulguları doğrudan endüstriyel projelerime, üretim veri modellerime ve profesyonel mühendislik pratiğime aktarmak."
            }
        }
    ];

    const VEILLE_SOURCES_BY_TYPE = [
        {
            icon: "fas fa-server",
            category: { fr: "Official / Technology", en: "Official / Technology", tr: "Resmi / Teknoloji Sağlayıcıları" },
            items: [
                { name: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/power-bi/" },
                { name: "Microsoft Fabric Blog", url: "https://blog.fabric.microsoft.com/" },
                { name: "Power BI Blog", url: "https://powerbi.microsoft.com/en-us/blog/" },
                { name: "Google Cloud Release Notes", url: "https://cloud.google.com/bigquery/docs/release-notes" },
                { name: "AWS Big Data Blog", url: "https://aws.amazon.com/blogs/big-data/" },
                { name: "Databricks Blog", url: "https://www.databricks.com/blog" },
                { name: "Snowflake Engineering", url: "https://www.snowflake.com/en/blog/" }
            ]
        },
        {
            icon: "fas fa-brain",
            category: { fr: "AI & Research", en: "AI & Research", tr: "Yapay Zeka & Araştırma" },
            items: [
                { name: "Google DeepMind", url: "https://deepmind.google/" },
                { name: "OpenAI Research", url: "https://openai.com/research/" },
                { name: "Hugging Face", url: "https://huggingface.co/blog" },
                { name: "arXiv (cs.DB / cs.AI)", url: "https://arxiv.org/" }
            ]
        },
        {
            icon: "fas fa-chart-line",
            category: { fr: "Business / Industry", en: "Business / Industry", tr: "İş Dünyası & Endüstri" },
            items: [
                { name: "Gartner Data & Analytics", url: "https://www.gartner.com/en/data-analytics" },
                { name: "SQLBI (Marco Russo & Alberto Ferrari)", url: "https://www.sqlbi.com/articles/" },
                { name: "McKinsey Digital", url: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights" },
                { name: "MIT Technology Review", url: "https://www.technologyreview.com/" }
            ]
        },
        {
            icon: "fas fa-scale-balanced",
            category: { fr: "Regulation / Governance", en: "Regulation / Governance", tr: "Regülasyon & Veri Yönetişimi" },
            items: [
                { name: "CNIL (Intelligence Artificielle & RGPD)", url: "https://www.cnil.fr/fr/intelligence-artificielle" },
                { name: "European Commission — AI Act", url: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-artificial-intelligence" }
            ]
        }
    ];

    const UI_LABELS = {
        fr: {
            filterDomainHint: "Filtrer par ce domaine",
            activeDomainBadge: "Filtre actif",
            whyItMattersLabel: "Pourquoi c'est important",
            viewAnalysisBtn: "Voir l'analyse →",
            keyPointsTitle: "Ce qu'il faut retenir",
            businessImpactTitle: "Impact métier",
            myAnalysisTitle: "Mon analyse",
            associatedTechTitle: "Technologies associées",
            relatedProjectPrefix: "Projet associé →",
            sourceLinkLabel: "Consulter la source →",
            sourcePrefix: "Source :",
            allFilter: "Tous",
            dataFilter: "Data",
            aiFilter: "IA",
            biFilter: "Business Intelligence",
            govFilter: "Gouvernance",
            searchPlaceholder: "Rechercher un sujet, outil (Fabric, BigQuery, Gemini, AI Act)...",
            activeTagPrefix: "Tag actif :",
            clearFilters: "Réinitialiser les filtres",
            noResults: "Aucune note de veille ne correspond à votre filtre actuel.",
            closeModal: "Fermer",
            openFullModal: "Fiche d'analyse complète",
            teaserReadBtn: "Lire l'analyse →"
        },
        en: {
            filterDomainHint: "Filter by this domain",
            activeDomainBadge: "Active filter",
            whyItMattersLabel: "Why it matters",
            viewAnalysisBtn: "View analysis →",
            keyPointsTitle: "Key Takeaways (Ce qu'il faut retenir)",
            businessImpactTitle: "Business Impact (Impact métier)",
            myAnalysisTitle: "My Analysis (Mon analyse)",
            associatedTechTitle: "Associated Technologies",
            relatedProjectPrefix: "Related Project →",
            sourceLinkLabel: "Read original source →",
            sourcePrefix: "Source:",
            allFilter: "All",
            dataFilter: "Data",
            aiFilter: "AI",
            biFilter: "Business Intelligence",
            govFilter: "Governance",
            searchPlaceholder: "Search topic, tool (Fabric, BigQuery, Gemini, AI Act)...",
            activeTagPrefix: "Active tag:",
            clearFilters: "Reset filters",
            noResults: "No technology-watch entry matches your current filter.",
            closeModal: "Close",
            openFullModal: "Full analysis view",
            teaserReadBtn: "Read analysis →"
        },
        tr: {
            filterDomainHint: "Bu alana göre filtrele",
            activeDomainBadge: "Aktif filtre",
            whyItMattersLabel: "Neden Önemli?",
            viewAnalysisBtn: "Analizi İncele →",
            keyPointsTitle: "Öne Çıkan Noktalar (Ce qu'il faut retenir)",
            businessImpactTitle: "İş Etkisi (Impact métier)",
            myAnalysisTitle: "Kişisel Analizim (Mon analyse)",
            associatedTechTitle: "İlgili Teknolojiler",
            relatedProjectPrefix: "İlgili Portfolyo Projesi →",
            sourceLinkLabel: "Orijinal kaynağı incele →",
            sourcePrefix: "Kaynak:",
            allFilter: "Tümü",
            dataFilter: "Veri (Data)",
            aiFilter: "Yapay Zeka (AI)",
            biFilter: "Business Intelligence",
            govFilter: "Yönetişim",
            searchPlaceholder: "Konu veya araç ara (Fabric, BigQuery, Gemini, AI Act)...",
            activeTagPrefix: "Aktif etiket:",
            clearFilters: "Filtreleri sıfırla",
            noResults: "Mevcut filtrenizle eşleşen teknoloji takip notu bulunamadı.",
            closeModal: "Kapat",
            openFullModal: "Tam analiz görünümü",
            teaserReadBtn: "Analizi oku →"
        }
    };

    /* ==========================================================================
       2. State Management
       ========================================================================== */
    let state = {
        lang: localStorage.getItem('preferred_lang') || 'fr',
        category: 'Tous', // 'Tous' | 'Data' | 'IA' | 'Business Intelligence' | 'Gouvernance'
        tag: null,
        search: '',
        activeModalId: null
    };

    function getLang() {
        const docLang = (document.documentElement.lang || 'fr').toLowerCase();
        if (docLang.startsWith('en')) return 'en';
        if (docLang.startsWith('tr')) return 'tr';
        return 'fr';
    }

    function t(obj) {
        if (!obj) return '';
        const lang = state.lang;
        return obj[lang] || obj.fr || '';
    }

    function getCategoryAccent(catString) {
        const lower = (catString || '').toLowerCase();
        if (lower.includes('ia') || lower.includes('ai') || lower.includes('yapay')) return 'v-badge-ai';
        if (lower.includes('gouvernance') || lower.includes('governance') || lower.includes('yönetişim')) return 'v-badge-gov';
        if (lower.includes('business intelligence') || lower.includes('bi') || lower.includes('iş zekası')) return 'v-badge-bi';
        return 'v-badge-data';
    }

    /* ==========================================================================
       3. Render Functions (All Driven by VEILLE_ENTRIES)
       ========================================================================== */

    // 3.1 Render 3 Monitoring Domain Cards (Act as interactive filters)
    function renderDomains() {
        const container = document.getElementById('veille-domains-grid');
        if (!container) return;

        const labels = UI_LABELS[state.lang] || UI_LABELS.fr;
        container.innerHTML = VEILLE_DOMAINS.map(domain => {
            const isActive = state.category === domain.id;
            const iconClass = domain.iconFallback || domain.icon;
            const topicsHtml = (domain.topics[state.lang] || domain.topics.fr)
                .map(topic => `<span class="v-domain-topic-chip">${topic}</span>`)
                .join('');

            return `
                <div class="v-domain-card ${domain.accentClass} ${isActive ? 'active' : ''}"
                     data-domain-filter="${domain.id}"
                     role="button"
                     tabindex="0"
                     aria-pressed="${isActive}">
                    <div class="v-domain-card-head">
                        <div class="v-domain-icon"><i class="${iconClass}"></i></div>
                        <div>
                            <h3 class="v-domain-title">${t(domain.title)}</h3>
                            <span class="v-domain-filter-hint">
                                <i class="fas fa-filter"></i> ${isActive ? labels.activeDomainBadge : labels.filterDomainHint}
                            </span>
                        </div>
                    </div>
                    <p class="v-domain-desc">${t(domain.desc)}</p>
                    <div class="v-domain-topics">${topicsHtml}</div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('.v-domain-card').forEach(card => {
            const triggerFilter = () => {
                const domainId = card.getAttribute('data-domain-filter');
                state.category = (state.category === domainId) ? 'Tous' : domainId;
                renderAll();
                const entriesAnchor = document.getElementById('veille-controls-anchor');
                if (entriesAnchor && state.category !== 'Tous') {
                    entriesAnchor.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            };
            card.addEventListener('click', triggerFilter);
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    triggerFilter();
                }
            });
        });
    }

    // 3.2 Render Featured Trends ("Tendances à suivre" — 5 compact cards)
    function renderFeaturedTrends() {
        const container = document.getElementById('veille-trends-grid');
        if (!container) return;

        const labels = UI_LABELS[state.lang] || UI_LABELS.fr;
        const featuredEntries = VEILLE_ENTRIES.filter(e => e.featured);

        container.innerHTML = featuredEntries.map(entry => {
            const badgeClass = getCategoryAccent(t(entry.categoryBadge));
            return `
                <article class="v-trend-card">
                    <div class="v-trend-top">
                        <div class="v-trend-meta">
                            <span class="v-cat-pill ${badgeClass}">${t(entry.categoryBadge)}</span>
                            <span class="v-trend-period">${t(entry.periodLabel)}</span>
                        </div>
                        <h4 class="v-trend-title">${t(entry.trendTitle)}</h4>
                        <p class="v-trend-summary">${t(entry.summary)}</p>
                    </div>
                    <div class="v-trend-why">
                        <span class="v-trend-why-label"><i class="fas fa-bullseye"></i> ${labels.whyItMattersLabel}</span>
                        <p>${t(entry.whyItMatters)}</p>
                    </div>
                    <div class="v-trend-footer">
                        <span class="v-trend-source-tag"><i class="fas fa-book-open"></i> ${entry.source.name}</span>
                        <button type="button" class="v-trend-btn" data-goto-entry="${entry.id}">
                            ${labels.viewAnalysisBtn}
                        </button>
                    </div>
                </article>
            `;
        }).join('');

        container.querySelectorAll('[data-goto-entry]').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetId = btn.getAttribute('data-goto-entry');
                focusOrOpenEntry(targetId);
            });
        });
    }

    // 3.3 Render Category Filter Bar, Active Tag Pill & Search Status
    function renderFilterControls() {
        const labels = UI_LABELS[state.lang] || UI_LABELS.fr;
        const searchInput = document.getElementById('veille-search-input');
        if (searchInput && searchInput.placeholder !== labels.searchPlaceholder) {
            searchInput.placeholder = labels.searchPlaceholder;
        }

        const filterButtons = document.querySelectorAll('.v-cat-filter-btn');
        filterButtons.forEach(btn => {
            const cat = btn.getAttribute('data-v-cat');
            btn.classList.toggle('active', cat === state.category);
        });

        // Collect all unique tags across VEILLE_ENTRIES
        const tagCloud = document.getElementById('veille-tag-cloud');
        if (tagCloud) {
            const allTags = [...new Set(VEILLE_ENTRIES.flatMap(e => e.tags))];
            tagCloud.innerHTML = allTags.map(tag => {
                const active = state.tag === tag;
                return `<button type="button" class="v-tag-chip ${active ? 'active' : ''}" data-v-tag="${tag}">#${tag}</button>`;
            }).join('');

            tagCloud.querySelectorAll('.v-tag-chip').forEach(chip => {
                chip.addEventListener('click', () => {
                    const clickedTag = chip.getAttribute('data-v-tag');
                    state.tag = (state.tag === clickedTag) ? null : clickedTag;
                    renderAll();
                });
            });
        }

        // Reset button visibility
        const resetBtn = document.getElementById('veille-reset-filters');
        if (resetBtn) {
            const hasActiveFilter = state.category !== 'Tous' || state.tag !== null || state.search.trim() !== '';
            resetBtn.style.display = hasActiveFilter ? 'inline-flex' : 'none';
            resetBtn.innerHTML = `<i class="fas fa-rotate-left"></i> <span>${labels.clearFilters}</span>`;
        }
    }

    // 3.4 Filter Entries Helper
    function getFilteredEntries() {
        return VEILLE_ENTRIES.filter(entry => {
            // Category match
            if (state.category !== 'Tous') {
                if (!entry.categories.includes(state.category)) return false;
            }
            // Tag match
            if (state.tag) {
                if (!entry.tags.includes(state.tag)) return false;
            }
            // Search query match
            if (state.search.trim() !== '') {
                const q = state.search.trim().toLowerCase();
                const haystack = [
                    t(entry.title),
                    t(entry.trendTitle),
                    t(entry.summary),
                    t(entry.whyItMatters),
                    t(entry.businessImpact),
                    t(entry.analysis),
                    entry.technology,
                    entry.source.name,
                    ...entry.tags,
                    ...(entry.keyPoints[state.lang] || entry.keyPoints.fr)
                ].join(' ').toLowerCase();
                if (!haystack.includes(q)) return false;
            }
            return true;
        });
    }

    // 3.5 Render Main Veille Entries Collection
    function renderEntries() {
        const container = document.getElementById('veille-entries-list');
        if (!container) return;

        const labels = UI_LABELS[state.lang] || UI_LABELS.fr;
        const filtered = getFilteredEntries();

        if (filtered.length === 0) {
            container.innerHTML = `
                <div class="v-empty-state">
                    <i class="fas fa-magnifying-glass"></i>
                    <p>${labels.noResults}</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(entry => {
            const badgeClass = getCategoryAccent(t(entry.categoryBadge));
            const keyPointsHtml = (entry.keyPoints[state.lang] || entry.keyPoints.fr)
                .map(pt => `<li>${pt}</li>`)
                .join('');

            const tagsHtml = entry.tags
                .map(tag => {
                    const isSelected = state.tag === tag;
                    return `<button type="button" class="v-entry-tag ${isSelected ? 'active' : ''}" data-entry-tag="${tag}">${tag}</button>`;
                })
                .join('');

            const relatedHtml = entry.relatedProject
                ? `
                    <a href="${entry.relatedProject.anchor}" class="v-related-project-link">
                        <i class="fas fa-diagram-project"></i>
                        <span><strong>${labels.relatedProjectPrefix}</strong> ${t(entry.relatedProject.name)}</span>
                        <i class="fas fa-arrow-right v-rel-arrow"></i>
                    </a>
                  `
                : '';

            return `
                <article class="v-entry-card" id="veille-entry-${entry.id}">
                    <!-- Top Metadata Header -->
                    <div class="v-entry-header">
                        <div class="v-entry-meta-left">
                            <span class="v-cat-pill ${badgeClass}">${t(entry.categoryBadge)}</span>
                            <span class="v-meta-item"><i class="far fa-calendar"></i> ${t(entry.periodLabel)}</span>
                            <span class="v-meta-item"><i class="fas fa-layer-group"></i> ${entry.technology}</span>
                            <span class="v-meta-item"><i class="far fa-clock"></i> ${entry.readingTime}</span>
                        </div>
                        <div class="v-entry-source-badge">
                            <span>${labels.sourcePrefix}</span>
                            <strong>${entry.source.name}</strong>
                        </div>
                    </div>

                    <!-- Entry Title & Summary -->
                    <h3 class="v-entry-title">${t(entry.title)}</h3>
                    <p class="v-entry-summary">${t(entry.summary)}</p>

                    <!-- Structured 2x2 Analytical Grid: Key Points, Why It Matters, Business Impact, My Analysis -->
                    <div class="v-entry-analysis-grid">
                        <!-- 1. Ce qu'il faut retenir -->
                        <div class="v-analysis-box">
                            <h4 class="v-box-heading"><i class="fas fa-list-check"></i> ${labels.keyPointsTitle}</h4>
                            <ul class="v-keypoints-list">${keyPointsHtml}</ul>
                        </div>

                        <!-- 2. Pourquoi c'est important & Impact métier -->
                        <div class="v-analysis-box">
                            <div class="v-sub-block">
                                <h4 class="v-box-heading"><i class="fas fa-bullseye"></i> ${labels.whyItMattersLabel}</h4>
                                <p class="v-box-text">${t(entry.whyItMatters)}</p>
                            </div>
                            <div class="v-sub-block v-sub-impact">
                                <h4 class="v-box-heading"><i class="fas fa-briefcase"></i> ${labels.businessImpactTitle}</h4>
                                <p class="v-box-text">${t(entry.businessImpact)}</p>
                            </div>
                        </div>
                    </div>

                    <!-- 3. Mon analyse (Personal Interpretation Blockquote) -->
                    <blockquote class="v-personal-analysis">
                        <div class="v-analysis-label"><i class="fas fa-user-pen"></i> ${labels.myAnalysisTitle}</div>
                        <p>« ${t(entry.analysis)} »</p>
                    </blockquote>

                    <!-- Footer: Associated Tags, Related Portfolio Project & Source Link -->
                    <div class="v-entry-footer">
                        <div class="v-entry-tags-wrap">
                            <span class="v-tags-label">${labels.associatedTechTitle} :</span>
                            <div class="v-entry-tags">${tagsHtml}</div>
                        </div>

                        <div class="v-entry-actions-row">
                            ${relatedHtml}
                            <div class="v-entry-cta-group">
                                <button type="button" class="v-modal-trigger-btn" data-open-modal="${entry.id}">
                                    <i class="fas fa-expand"></i> ${labels.openFullModal}
                                </button>
                                <a href="${entry.source.url}" target="_blank" rel="noopener noreferrer" class="v-source-btn">
                                    <span>${labels.sourceLinkLabel}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            `;
        }).join('');

        // Attach tag click listeners inside entries
        container.querySelectorAll('[data-entry-tag]').forEach(btn => {
            btn.addEventListener('click', () => {
                const clickedTag = btn.getAttribute('data-entry-tag');
                state.tag = (state.tag === clickedTag) ? null : clickedTag;
                renderAll();
            });
        });

        // Attach modal open listeners
        container.querySelectorAll('[data-open-modal]').forEach(btn => {
            btn.addEventListener('click', () => {
                openEntryModal(btn.getAttribute('data-open-modal'));
            });
        });
    }

    // 3.6 Render Visual Timeline ("Évolution de ma veille" — populated from VEILLE_ENTRIES)
    function renderTimeline() {
        const container = document.getElementById('veille-timeline-track');
        if (!container) return;

        // Sort chronologically descending
        const sorted = [...VEILLE_ENTRIES].sort((a, b) => b.date.localeCompare(a.date));

        container.innerHTML = sorted.map((entry, idx) => {
            const badgeClass = getCategoryAccent(t(entry.categoryBadge));
            return `
                <div class="v-timeline-node" data-timeline-entry="${entry.id}" role="button" tabindex="0">
                    <div class="v-timeline-marker">
                        <span class="v-timeline-dot"></span>
                        ${idx < sorted.length - 1 ? '<span class="v-timeline-line"></span>' : ''}
                    </div>
                    <div class="v-timeline-content">
                        <div class="v-timeline-head">
                            <span class="v-timeline-date">${t(entry.periodLabel)}</span>
                            <span class="v-cat-pill ${badgeClass}">${t(entry.categoryBadge)}</span>
                        </div>
                        <h4 class="v-timeline-title">${t(entry.timelineLabel)}</h4>
                        <p class="v-timeline-sub">${t(entry.oneSentenceInsight)}</p>
                    </div>
                </div>
            `;
        }).join('');

        container.querySelectorAll('[data-timeline-entry]').forEach(node => {
            const activate = () => focusOrOpenEntry(node.getAttribute('data-timeline-entry'));
            node.addEventListener('click', activate);
            node.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    activate();
                }
            });
        });
    }

    // 3.7 Render 4-Step Methodology & Sources Suivies
    function renderMethodologyAndSources() {
        const stepsContainer = document.getElementById('veille-method-steps');
        if (stepsContainer) {
            stepsContainer.innerHTML = VEILLE_METHOD_STEPS.map(step => `
                <div class="v-method-step-card">
                    <div class="v-method-step-top">
                        <span class="v-method-num">${step.num}</span>
                        <i class="${step.icon}"></i>
                    </div>
                    <h4 class="v-method-step-title">${t(step.title)}</h4>
                    <p class="v-method-step-desc">${t(step.desc)}</p>
                </div>
            `).join('');
        }

        const sourcesContainer = document.getElementById('veille-sources-grid');
        if (sourcesContainer) {
            sourcesContainer.innerHTML = VEILLE_SOURCES_BY_TYPE.map(group => {
                const linksHtml = group.items.map(item => `
                    <li>
                        <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                            <span>${item.name}</span>
                            <i class="fas fa-arrow-up-right-from-square"></i>
                        </a>
                    </li>
                `).join('');

                return `
                    <div class="v-source-group-card">
                        <div class="v-source-group-head">
                            <i class="${group.icon}"></i>
                            <h4>${t(group.category)}</h4>
                        </div>
                        <ul class="v-source-group-list">${linksHtml}</ul>
                    </div>
                `;
            }).join('');
        }
    }

    // 3.8 Render Homepage Compact Teaser (Latest 3 Entries before Contact section)
    function renderHomeTeaser() {
        const container = document.getElementById('veille-teaser-grid');
        if (!container) return;

        const labels = UI_LABELS[state.lang] || UI_LABELS.fr;
        const latestThree = [...VEILLE_ENTRIES]
            .sort((a, b) => b.date.localeCompare(a.date))
            .slice(0, 3);

        container.innerHTML = latestThree.map(entry => {
            const badgeClass = getCategoryAccent(t(entry.categoryBadge));
            return `
                <article class="v-teaser-card" data-teaser-entry="${entry.id}" role="button" tabindex="0">
                    <div class="v-teaser-meta">
                        <span class="v-cat-pill ${badgeClass}">${t(entry.categoryBadge)}</span>
                        <span class="v-teaser-date">${t(entry.periodLabel)}</span>
                    </div>
                    <h3 class="v-teaser-title">${t(entry.title)}</h3>
                    <p class="v-teaser-insight">${t(entry.oneSentenceInsight)}</p>
                    <div class="v-teaser-footer">
                        <span class="v-teaser-source">${entry.source.name}</span>
                        <span class="v-teaser-link">${labels.teaserReadBtn}</span>
                    </div>
                </article>
            `;
        }).join('');

        container.querySelectorAll('[data-teaser-entry]').forEach(card => {
            const go = () => focusOrOpenEntry(card.getAttribute('data-teaser-entry'));
            card.addEventListener('click', go);
            card.addEventListener('keydown', e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    go();
                }
            });
        });
    }

    /* ==========================================================================
       4. Navigation & Modal Reader Helpers
       ========================================================================== */
    function focusOrOpenEntry(entryId) {
        const existingCard = document.getElementById(`veille-entry-${entryId}`);
        if (!existingCard && !document.getElementById('veille-entries-list')) {
            window.location.href = `veille.html#veille-entry-${entryId}`;
            return;
        }
        // Ensure filters don't hide the target entry
        state.category = 'Tous';
        state.tag = null;
        state.search = '';
        const searchInput = document.getElementById('veille-search-input');
        if (searchInput) searchInput.value = '';
        renderAll();

        const cardEl = document.getElementById(`veille-entry-${entryId}`);
        if (cardEl) {
            cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
            cardEl.classList.add('v-entry-highlight-pulse');
            setTimeout(() => cardEl.classList.remove('v-entry-highlight-pulse'), 2200);
        }
    }

    function openEntryModal(entryId) {
        const entry = VEILLE_ENTRIES.find(e => e.id === entryId);
        const modal = document.getElementById('veille-modal-backdrop');
        const modalBody = document.getElementById('veille-modal-content');
        if (!entry || !modal || !modalBody) return;

        state.activeModalId = entryId;
        const labels = UI_LABELS[state.lang] || UI_LABELS.fr;
        const badgeClass = getCategoryAccent(t(entry.categoryBadge));
        const keyPointsHtml = (entry.keyPoints[state.lang] || entry.keyPoints.fr)
            .map(pt => `<li>${pt}</li>`)
            .join('');

        const relatedHtml = entry.relatedProject
            ? `
                <a href="${entry.relatedProject.anchor}" class="v-related-project-link" id="veille-modal-project-link">
                    <i class="fas fa-diagram-project"></i>
                    <span><strong>${labels.relatedProjectPrefix}</strong> ${t(entry.relatedProject.name)}</span>
                    <i class="fas fa-arrow-right v-rel-arrow"></i>
                </a>
              `
            : '';

        modalBody.innerHTML = `
            <div class="v-modal-top-bar">
                <div class="v-entry-meta-left">
                    <span class="v-cat-pill ${badgeClass}">${t(entry.categoryBadge)}</span>
                    <span class="v-meta-item"><i class="far fa-calendar"></i> ${t(entry.periodLabel)}</span>
                    <span class="v-meta-item"><i class="fas fa-layer-group"></i> ${entry.technology}</span>
                    <span class="v-meta-item"><i class="far fa-clock"></i> ${entry.readingTime}</span>
                </div>
                <button type="button" class="v-modal-close-btn" id="veille-modal-close" aria-label="${labels.closeModal}">&times;</button>
            </div>

            <h3 class="v-modal-title">${t(entry.title)}</h3>
            <div class="v-modal-source-line">
                <span>${labels.sourcePrefix} <strong>${entry.source.name}</strong></span>
            </div>

            <p class="v-entry-summary">${t(entry.summary)}</p>

            <div class="v-analysis-box">
                <h4 class="v-box-heading"><i class="fas fa-list-check"></i> ${labels.keyPointsTitle}</h4>
                <ul class="v-keypoints-list">${keyPointsHtml}</ul>
            </div>

            <div class="v-entry-analysis-grid">
                <div class="v-analysis-box">
                    <h4 class="v-box-heading"><i class="fas fa-bullseye"></i> ${labels.whyItMattersLabel}</h4>
                    <p class="v-box-text">${t(entry.whyItMatters)}</p>
                </div>
                <div class="v-analysis-box">
                    <h4 class="v-box-heading"><i class="fas fa-briefcase"></i> ${labels.businessImpactTitle}</h4>
                    <p class="v-box-text">${t(entry.businessImpact)}</p>
                </div>
            </div>

            <blockquote class="v-personal-analysis">
                <div class="v-analysis-label"><i class="fas fa-user-pen"></i> ${labels.myAnalysisTitle}</div>
                <p>« ${t(entry.analysis)} »</p>
            </blockquote>

            <div class="v-modal-footer">
                ${relatedHtml}
                <a href="${entry.source.url}" target="_blank" rel="noopener noreferrer" class="v-source-btn">
                    <span>${labels.sourceLinkLabel}</span>
                </a>
            </div>
        `;

        modal.hidden = false;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');

        const closeBtn = document.getElementById('veille-modal-close');
        if (closeBtn) closeBtn.addEventListener('click', closeEntryModal);

        const projLink = document.getElementById('veille-modal-project-link');
        if (projLink) projLink.addEventListener('click', closeEntryModal);
    }

    function closeEntryModal() {
        const modal = document.getElementById('veille-modal-backdrop');
        if (!modal) return;
        modal.hidden = true;
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        state.activeModalId = null;
    }

    /* ==========================================================================
       5. Master Render & Event Listeners
       ========================================================================== */
    function renderAll() {
        state.lang = getLang();
        renderDomains();
        renderFeaturedTrends();
        renderFilterControls();
        renderEntries();
        renderTimeline();
        renderMethodologyAndSources();
        renderHomeTeaser();
        if (state.activeModalId) {
            openEntryModal(state.activeModalId);
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Category filter buttons
        document.querySelectorAll('.v-cat-filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                state.category = btn.getAttribute('data-v-cat') || 'Tous';
                renderAll();
            });
        });

        // Search input
        const searchInput = document.getElementById('veille-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', e => {
                state.search = e.target.value || '';
                renderFilterControls();
                renderEntries();
            });
        }

        // Reset button
        const resetBtn = document.getElementById('veille-reset-filters');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                state.category = 'Tous';
                state.tag = null;
                state.search = '';
                if (searchInput) searchInput.value = '';
                renderAll();
            });
        }

        // Modal backdrop click & Escape key
        const modal = document.getElementById('veille-modal-backdrop');
        if (modal) {
            modal.addEventListener('click', e => {
                if (e.target === modal) closeEntryModal();
            });
        }
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape' && state.activeModalId) {
                closeEntryModal();
            }
        });

        // React to language switch
        window.addEventListener('languageChanged', e => {
            state.lang = (e.detail && e.detail.lang) ? e.detail.lang : getLang();
            renderAll();
        });

        // Initial render
        renderAll();
    });
})();
