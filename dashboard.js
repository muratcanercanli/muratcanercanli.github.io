/* ==========================================================================
   FIFO Laboratory Power BI Dashboard Reconstruction
   Expanded Synthetic Data Engine, Dynamic Slicers, Preset Scenarios & CSV Export
   Role: Test Laboratory Digitalization Specialist (Tier-1 Automotive Supplier)
   ========================================================================== */

(function () {
    // --------------------------------------------------------------------------
    // 0. Trilingual (FR / EN / TR) Dynamic Dashboard Strings
    // --------------------------------------------------------------------------
    const DASH_I18N = {
        fr: {
            urgentSub: (n) => `${n} action${n > 1 ? 's' : ''} requise${n > 1 ? 's' : ''} < 2 h`,
            trendCurrent: (val) => `${val}% actuel`,
            emptyTable: "Aucun échantillon ne correspond aux filtres sélectionnés.",
            rowTitle: "Cliquer pour inspecter les détails du test",
            showing: "Affichage",
            of: "sur",
            filteredSamples: "échantillons filtrés",
            prevPage: "Page précédente",
            nextPage: "Page suivante",
            priorityLabels: { Normal: "NORMAL", High: "ÉLEVÉE", Urgent: "URGENT" },
            priorityShort: { Normal: "Normal", High: "Élevée", Urgent: "Urgent" },
            modalTitle: "Fiche Éprouvette d'Essai",
            modalCust: "Client (Fictif)",
            modalProd: "Groupe de Produit",
            modalType: "Type d'Essai Spécifique",
            modalSector: "Secteur Laboratoire",
            modalBench: "Banc d'Essai Assigné",
            modalPrio: "Priorité FIFO",
            modalAge: "Âge en File d'Attente",
            modalDelay: "Retard Cumulé",
            modalOnTime: "0 h (À l'heure)",
            modalTemp: "Conditions Thermiques",
            modalCycles: "Cycles d'Endurance Cible",
            modalDisclaimer: "Donnée de démonstration synthétique.",
            modalClose: "Fermer",
            noExport: "Aucune donnée à exporter.",
            expand: "Agrandir",
            collapse: "Réduire",
            testsWord: "essais"
        },
        en: {
            urgentSub: (n) => `${n} action${n !== 1 ? 's' : ''} due < 2 h`,
            trendCurrent: (val) => `${val}% current`,
            emptyTable: "No samples match the selected filters.",
            rowTitle: "Click to inspect test details",
            showing: "Showing",
            of: "of",
            filteredSamples: "filtered samples",
            prevPage: "Previous page",
            nextPage: "Next page",
            priorityLabels: { Normal: "NORMAL", High: "HIGH", Urgent: "URGENT" },
            priorityShort: { Normal: "Normal", High: "High", Urgent: "Urgent" },
            modalTitle: "Test Sample Record",
            modalCust: "Customer (Synthetic)",
            modalProd: "Product Group",
            modalType: "Specific Test Type",
            modalSector: "Lab Sector",
            modalBench: "Assigned Test Bench",
            modalPrio: "FIFO Priority",
            modalAge: "Queue Aging",
            modalDelay: "Accumulated Delay",
            modalOnTime: "0 h (On schedule)",
            modalTemp: "Thermal Chamber Temp",
            modalCycles: "Target Test Cycles",
            modalDisclaimer: "Synthetic demonstration record.",
            modalClose: "Close",
            noExport: "No data to export.",
            expand: "Expand",
            collapse: "Collapse",
            testsWord: "tests"
        },
        tr: {
            urgentSub: (n) => `< 2 saat içinde ${n} acil işlem`,
            trendCurrent: (val) => `%${val} güncel`,
            emptyTable: "Seçilen filtrelere uygun numune bulunamadı.",
            rowTitle: "Test detaylarını incelemek için tıklayın",
            showing: "Gösterilen:",
            of: "/",
            filteredSamples: "filtrelenmiş numune",
            prevPage: "Önceki sayfa",
            nextPage: "Sonraki sayfa",
            priorityLabels: { Normal: "NORMAL", High: "YÜKSEK", Urgent: "ACİL" },
            priorityShort: { Normal: "Normal", High: "Yüksek", Urgent: "Acil" },
            modalTitle: "Test Numunesi Kayıt Fişi",
            modalCust: "Müşteri (Sentetik)",
            modalProd: "Ürün Grubu",
            modalType: "Özel Test Türü",
            modalSector: "Laboratuvar Sektörü",
            modalBench: "Atanan Test Düzeneği (Bench)",
            modalPrio: "FIFO Önceliği",
            modalAge: "Kuyruk Bekleme Süresi",
            modalDelay: "Birikmiş Gecikme",
            modalOnTime: "0 s (Zamanında)",
            modalTemp: "Termal Kabin Sıcaklığı",
            modalCycles: "Hedef Dayanım Çevrimi",
            modalDisclaimer: "Sentetik portfolyo gösterim verisi.",
            modalClose: "Kapat",
            noExport: "Dışa aktarılacak veri yok.",
            expand: "Tam Ekran",
            collapse: "Küçült",
            testsWord: "test"
        }
    };

    function getDashLang() {
        const lang = (document.documentElement.lang || "fr").toLowerCase();
        if (lang.startsWith("en")) return "en";
        if (lang.startsWith("tr")) return "tr";
        return "fr";
    }

    function tDash() {
        return DASH_I18N[getDashLang()] || DASH_I18N.fr;
    }

    // --------------------------------------------------------------------------
    // 1. Synthetic Industrial Dataset (44 Fictitious Laboratory Records)
    // --------------------------------------------------------------------------
    const syntheticData = [
        { order: "100432-10", productGroup: "Engine Mounts", parts: 4, sector: "Dynamic", customer: "OEM-A", ageHours: 31, priority: "Urgent", bench: "TB-04", delayHours: 9, availability: 91.2, responseTime: 21.4, testType: "High-Frequency NVH", temp: "70°C", cycles: "500k" },
        { order: "100431-20", productGroup: "Chassis Mounts", parts: 2, sector: "Static", customer: "OEM-B", ageHours: 24, priority: "High", bench: "TB-02", delayHours: 4, availability: 93.5, responseTime: 16.8, testType: "Triaxial Stiffness", temp: "23°C", cycles: "100k" },
        { order: "100430-40", productGroup: "Engine Mounts", parts: 6, sector: "Fatigue", customer: "OEM-C", ageHours: 17, priority: "Normal", bench: "TB-05", delayHours: 0, availability: 94.0, responseTime: 14.2, testType: "Endurance Block Test", temp: "85°C", cycles: "1.2M" },
        { order: "100425-10", productGroup: "Chassis Mounts", parts: 2, sector: "Engineering", customer: "OEM-E", ageHours: 38, priority: "Urgent", bench: "TB-03", delayHours: 12, availability: 89.4, responseTime: 23.1, testType: "Resonance Sweep", temp: "-20°C", cycles: "250k" },
        { order: "100423-50", productGroup: "Isolators", parts: 8, sector: "Creep", customer: "OEM-B", ageHours: 11, priority: "Normal", bench: "TB-02", delayHours: 0, availability: 93.5, responseTime: 15.0, testType: "Long-term Relaxation", temp: "100°C", cycles: "Static" },
        { order: "100422-30", productGroup: "Bushings", parts: 4, sector: "Dynamic", customer: "OEM-D", ageHours: 29, priority: "High", bench: "TB-01", delayHours: 6, availability: 92.1, responseTime: 17.5, testType: "Torsional Damping", temp: "23°C", cycles: "400k" },
        { order: "100421-15", productGroup: "Engine Mounts", parts: 3, sector: "Fatigue", customer: "OEM-A", ageHours: 42, priority: "Urgent", bench: "TB-04", delayHours: 14, availability: 91.2, responseTime: 22.8, testType: "Multi-axis Fatigue", temp: "90°C", cycles: "800k" },
        { order: "100419-80", productGroup: "Bushings", parts: 12, sector: "Static", customer: "OEM-C", ageHours: 8, priority: "Normal", bench: "TB-06", delayHours: 0, availability: 95.2, responseTime: 12.8, testType: "Axial Push-out Force", temp: "23°C", cycles: "N/A" },
        { order: "100418-20", productGroup: "Isolators", parts: 4, sector: "Dynamic", customer: "OEM-F", ageHours: 26, priority: "High", bench: "TB-01", delayHours: 5, availability: 92.1, responseTime: 18.2, testType: "Transmissibility Ratio", temp: "40°C", cycles: "350k" },
        { order: "100417-60", productGroup: "Chassis Mounts", parts: 2, sector: "Fatigue", customer: "OEM-B", ageHours: 19, priority: "Normal", bench: "TB-05", delayHours: 1, availability: 94.0, responseTime: 13.9, testType: "Durability Cycling", temp: "23°C", cycles: "750k" },
        { order: "100415-40", productGroup: "Engine Mounts", parts: 4, sector: "Engineering", customer: "OEM-D", ageHours: 36, priority: "Urgent", bench: "TB-03", delayHours: 10, availability: 89.4, responseTime: 24.5, testType: "Loss Angle Characterization", temp: "110°C", cycles: "150k" },
        { order: "100414-10", productGroup: "Bushings", parts: 6, sector: "Dynamic", customer: "OEM-A", ageHours: 14, priority: "Normal", bench: "TB-06", delayHours: 0, availability: 95.2, responseTime: 13.4, testType: "Radial Dynamic Rate", temp: "23°C", cycles: "200k" },
        { order: "100412-90", productGroup: "Isolators", parts: 2, sector: "Creep", customer: "OEM-E", ageHours: 28, priority: "High", bench: "TB-02", delayHours: 7, availability: 93.5, responseTime: 17.1, testType: "Thermal Settling", temp: "80°C", cycles: "Static" },
        { order: "100410-30", productGroup: "Chassis Mounts", parts: 4, sector: "Static", customer: "OEM-C", ageHours: 9, priority: "Normal", bench: "TB-01", delayHours: 0, availability: 92.1, responseTime: 14.5, testType: "Preload Deflection", temp: "23°C", cycles: "50k" },
        { order: "100408-70", productGroup: "Engine Mounts", parts: 2, sector: "Dynamic", customer: "OEM-F", ageHours: 33, priority: "Urgent", bench: "TB-04", delayHours: 11, availability: 91.2, responseTime: 20.9, testType: "Hydraulic Damping Peak", temp: "60°C", cycles: "300k" },
        { order: "100406-25", productGroup: "Bushings", parts: 8, sector: "Fatigue", customer: "OEM-B", ageHours: 16, priority: "Normal", bench: "TB-05", delayHours: 0, availability: 94.0, responseTime: 13.1, testType: "Cardanic Durability", temp: "23°C", cycles: "600k" },
        { order: "100405-50", productGroup: "Isolators", parts: 4, sector: "Engineering", customer: "OEM-A", ageHours: 22, priority: "High", bench: "TB-03", delayHours: 3, availability: 89.4, responseTime: 18.0, testType: "Acoustic Noise Transfer", temp: "-10°C", cycles: "100k" },
        { order: "100403-10", productGroup: "Engine Mounts", parts: 2, sector: "Static", customer: "OEM-D", ageHours: 6, priority: "Normal", bench: "TB-06", delayHours: 0, availability: 95.2, responseTime: 11.9, testType: "Ultimate Tensile Breaking", temp: "23°C", cycles: "Destructive" },
        { order: "100402-80", productGroup: "Chassis Mounts", parts: 6, sector: "Dynamic", customer: "OEM-E", ageHours: 45, priority: "Urgent", bench: "TB-04", delayHours: 16, availability: 91.2, responseTime: 25.0, testType: "High Amplitude Shock", temp: "50°C", cycles: "150k" },
        { order: "100400-40", productGroup: "Bushings", parts: 10, sector: "Creep", customer: "OEM-C", ageHours: 13, priority: "Normal", bench: "TB-02", delayHours: 0, availability: 93.5, responseTime: 14.8, testType: "Compression Set 72h", temp: "95°C", cycles: "Static" },
        { order: "100398-15", productGroup: "Engine Mounts", parts: 4, sector: "Fatigue", customer: "OEM-B", ageHours: 27, priority: "High", bench: "TB-05", delayHours: 5, availability: 94.0, responseTime: 16.5, testType: "Torque Reversal Block", temp: "75°C", cycles: "900k" },
        { order: "100396-70", productGroup: "Isolators", parts: 2, sector: "Dynamic", customer: "OEM-A", ageHours: 39, priority: "Urgent", bench: "TB-03", delayHours: 13, availability: 89.4, responseTime: 22.3, testType: "Frequency Domain Analysis", temp: "23°C", cycles: "450k" },
        { order: "100394-30", productGroup: "Chassis Mounts", parts: 4, sector: "Engineering", customer: "OEM-F", ageHours: 18, priority: "Normal", bench: "TB-01", delayHours: 0, availability: 92.1, responseTime: 15.2, testType: "Finite Element Correlation", temp: "23°C", cycles: "80k" },
        { order: "100392-60", productGroup: "Bushings", parts: 6, sector: "Static", customer: "OEM-D", ageHours: 25, priority: "High", bench: "TB-06", delayHours: 4, availability: 95.2, responseTime: 17.0, testType: "Conical Elasticity Curve", temp: "23°C", cycles: "120k" },
        { order: "100390-20", productGroup: "Engine Mounts", parts: 2, sector: "Creep", customer: "OEM-E", ageHours: 12, priority: "Normal", bench: "TB-02", delayHours: 0, availability: 93.5, responseTime: 14.1, testType: "Elastomer Aging Test", temp: "105°C", cycles: "Static" },
        { order: "100388-90", productGroup: "Isolators", parts: 4, sector: "Dynamic", customer: "OEM-C", ageHours: 34, priority: "Urgent", bench: "TB-04", delayHours: 8, availability: 91.2, responseTime: 21.0, testType: "Rough Road Simulation", temp: "45°C", cycles: "600k" },
        { order: "100385-40", productGroup: "Chassis Mounts", parts: 4, sector: "Fatigue", customer: "OEM-B", ageHours: 21, priority: "High", bench: "TB-05", delayHours: 2, availability: 94.0, responseTime: 17.8, testType: "Cornering Load Cycles", temp: "23°C", cycles: "850k" },
        { order: "100383-10", productGroup: "Bushings", parts: 8, sector: "Dynamic", customer: "OEM-A", ageHours: 7, priority: "Normal", bench: "TB-01", delayHours: 0, availability: 92.1, responseTime: 13.5, testType: "High-Speed Harmonic Rate", temp: "23°C", cycles: "300k" },
        { order: "100380-55", productGroup: "Engine Mounts", parts: 2, sector: "Engineering", customer: "OEM-D", ageHours: 37, priority: "Urgent", bench: "TB-03", delayHours: 11, availability: 89.4, responseTime: 23.8, testType: "Non-linear FEA Benchmark", temp: "80°C", cycles: "200k" },
        { order: "100378-30", productGroup: "Isolators", parts: 6, sector: "Static", customer: "OEM-E", ageHours: 15, priority: "Normal", bench: "TB-06", delayHours: 0, availability: 95.2, responseTime: 12.3, testType: "Static Clamp Load", temp: "23°C", cycles: "30k" },
        { order: "100375-75", productGroup: "Chassis Mounts", parts: 4, sector: "Dynamic", customer: "OEM-A", ageHours: 30, priority: "High", bench: "TB-04", delayHours: 7, availability: 91.2, responseTime: 19.4, testType: "Curb Impact Pulse", temp: "-15°C", cycles: "100k" },
        { order: "100372-10", productGroup: "Bushings", parts: 8, sector: "Creep", customer: "OEM-B", ageHours: 10, priority: "Normal", bench: "TB-02", delayHours: 0, availability: 93.5, responseTime: 14.6, testType: "Ozone Chamber Resistance", temp: "40°C", cycles: "Static" },
        { order: "100370-45", productGroup: "Engine Mounts", parts: 3, sector: "Fatigue", customer: "OEM-C", ageHours: 41, priority: "Urgent", bench: "TB-05", delayHours: 15, availability: 94.0, responseTime: 21.9, testType: "Accelerated Life Profiling", temp: "100°C", cycles: "1.5M" },
        { order: "100368-20", productGroup: "Isolators", parts: 4, sector: "Engineering", customer: "OEM-F", ageHours: 23, priority: "High", bench: "TB-01", delayHours: 4, availability: 92.1, responseTime: 16.9, testType: "Material Hysteresis Loop", temp: "23°C", cycles: "75k" },
        { order: "100365-90", productGroup: "Chassis Mounts", parts: 2, sector: "Static", customer: "OEM-A", ageHours: 5, priority: "Normal", bench: "TB-06", delayHours: 0, availability: 95.2, responseTime: 11.5, testType: "Burst Pressure Resistance", temp: "23°C", cycles: "Destructive" },
        { order: "100363-15", productGroup: "Bushings", parts: 6, sector: "Dynamic", customer: "OEM-E", ageHours: 28, priority: "High", bench: "TB-04", delayHours: 6, availability: 91.2, responseTime: 18.7, testType: "Multi-axis Road Load Data", temp: "35°C", cycles: "500k" },
        { order: "100360-80", productGroup: "Engine Mounts", parts: 2, sector: "Dynamic", customer: "OEM-B", ageHours: 35, priority: "Urgent", bench: "TB-03", delayHours: 9, availability: 89.4, responseTime: 22.5, testType: "Engine Shake Damping", temp: "85°C", cycles: "400k" },
        { order: "100358-35", productGroup: "Isolators", parts: 4, sector: "Fatigue", customer: "OEM-C", ageHours: 19, priority: "Normal", bench: "TB-05", delayHours: 0, availability: 94.0, responseTime: 13.7, testType: "Rotational Fatigue", temp: "23°C", cycles: "650k" },
        { order: "100355-60", productGroup: "Chassis Mounts", parts: 4, sector: "Creep", customer: "OEM-D", ageHours: 27, priority: "High", bench: "TB-02", delayHours: 5, availability: 93.5, responseTime: 16.3, testType: "Permanent Set Evolution", temp: "70°C", cycles: "Static" },
        { order: "100352-25", productGroup: "Bushings", parts: 8, sector: "Engineering", customer: "OEM-A", ageHours: 16, priority: "Normal", bench: "TB-01", delayHours: 0, availability: 92.1, responseTime: 14.0, testType: "Subframe NVH Coupling", temp: "23°C", cycles: "90k" },
        { order: "100350-10", productGroup: "Engine Mounts", parts: 4, sector: "Dynamic", customer: "OEM-F", ageHours: 44, priority: "Urgent", bench: "TB-04", delayHours: 16, availability: 91.2, responseTime: 24.2, testType: "Idle Isolation Efficiency", temp: "75°C", cycles: "350k" },
        { order: "100348-70", productGroup: "Isolators", parts: 2, sector: "Static", customer: "OEM-B", ageHours: 8, priority: "Normal", bench: "TB-06", delayHours: 0, availability: 95.2, responseTime: 12.0, testType: "Radial Shear Compliance", temp: "23°C", cycles: "40k" },
        { order: "100345-40", productGroup: "Chassis Mounts", parts: 6, sector: "Fatigue", customer: "OEM-E", ageHours: 25, priority: "High", bench: "TB-05", delayHours: 3, availability: 94.0, responseTime: 17.2, testType: "Full Car Suspension Rig", temp: "23°C", cycles: "1.0M" },
        { order: "100342-95", productGroup: "Bushings", parts: 4, sector: "Dynamic", customer: "OEM-C", ageHours: 32, priority: "Urgent", bench: "TB-03", delayHours: 8, availability: 89.4, responseTime: 21.6, testType: "Dynamic Stiffness 200Hz", temp: "50°C", cycles: "300k" }
    ];

    // State for interactive slicers, presets, and sorting
    const state = {
        productGroup: "All",
        sector: "All",
        priority: "All",
        urgentOnly: false,
        delayThreshold: 48,
        searchQuery: "",
        sortColumn: "ageHours",
        sortDirection: "desc", // FIFO priority: oldest first
        page: 1,
        pageSize: 7
    };

    // DOM Elements Cache
    let elProductSelect, elSectorSelect, elPriorityButtons, elUrgentToggle;
    let elDelaySlider, elDelayValue, elResetBtn, elSearchInput, elBtnExportCsv;
    let elTableBody, elTablePagination;
    let elKpiAvailability, elKpiResponse, elKpiUrgent, elKpiDelay;
    let elAgingBar, elAgingCounts, elAgingNormalPct, elAgingHighPct, elAgingUrgentPct;
    let elBenchSvg, elDonutSvg, elDonutTotal, elAvailabilityTrendSvg;
    let elDashboardWrapper, elFullscreenBtn;

    // --------------------------------------------------------------------------
    // 2. Initialization & DOM Hookup
    // --------------------------------------------------------------------------
    function initDashboard() {
        elProductSelect = document.getElementById("pbi-filter-product");
        elSectorSelect = document.getElementById("pbi-filter-sector");
        elPriorityButtons = document.querySelectorAll(".pbi-chip-priority");
        elUrgentToggle = document.getElementById("pbi-filter-urgent-only");
        elDelaySlider = document.getElementById("pbi-filter-delay");
        elDelayValue = document.getElementById("pbi-delay-val");
        elResetBtn = document.getElementById("pbi-btn-reset");
        elSearchInput = document.getElementById("pbi-search-input");
        elBtnExportCsv = document.getElementById("pbi-btn-export-csv");

        elTableBody = document.getElementById("pbi-table-body");
        elTablePagination = document.getElementById("pbi-table-pagination");

        elKpiAvailability = document.getElementById("kpi-availability-val");
        elKpiResponse = document.getElementById("kpi-response-val");
        elKpiUrgent = document.getElementById("kpi-urgent-val");
        elKpiDelay = document.getElementById("kpi-delay-val");

        elAgingBar = document.getElementById("pbi-aging-bar");
        elAgingCounts = document.getElementById("pbi-aging-counts");
        elAgingNormalPct = document.getElementById("pbi-aging-normal-pct");
        elAgingHighPct = document.getElementById("pbi-aging-high-pct");
        elAgingUrgentPct = document.getElementById("pbi-aging-urgent-pct");

        elBenchSvg = document.getElementById("pbi-bench-chart");
        elDonutSvg = document.getElementById("pbi-donut-chart");
        elDonutTotal = document.getElementById("pbi-donut-total");
        elAvailabilityTrendSvg = document.getElementById("pbi-trend-chart");

        elDashboardWrapper = document.getElementById("pbi-dashboard-container");
        elFullscreenBtn = document.getElementById("pbi-btn-fullscreen");

        if (!elProductSelect || !elTableBody) {
            return;
        }

        bindEvents();
        updateDashboard();
    }

    // --------------------------------------------------------------------------
    // 3. Filtering & Calculation Engine
    // --------------------------------------------------------------------------
    function getFilteredData() {
        const query = state.searchQuery.trim().toLowerCase();

        return syntheticData.filter(item => {
            if (state.productGroup !== "All" && item.productGroup !== state.productGroup) return false;
            if (state.sector !== "All" && item.sector !== state.sector) return false;
            if (state.urgentOnly && item.priority !== "Urgent") return false;
            if (!state.urgentOnly && state.priority !== "All" && item.priority !== state.priority) return false;
            if (item.delayHours > state.delayThreshold) return false;

            if (query) {
                const matchOrder = item.order.toLowerCase().includes(query);
                const matchCustomer = item.customer.toLowerCase().includes(query);
                const matchBench = item.bench.toLowerCase().includes(query);
                const matchType = (item.testType || "").toLowerCase().includes(query);
                if (!matchOrder && !matchCustomer && !matchBench && !matchType) return false;
            }

            return true;
        });
    }

    function calculateKPIs(data) {
        if (data.length === 0) {
            return {
                benchAvailability: "0.0%",
                medianResponseTime: "0.0 min",
                urgentSamples: 0,
                avgDelay: "0.0 h",
                urgentDueCount: 0
            };
        }

        // 1. Bench Availability (Mean of active availability)
        const avgAvail = data.reduce((sum, item) => sum + item.availability, 0) / data.length;

        // 2. Median Response Time
        const responseTimes = data.map(d => d.responseTime).sort((a, b) => a - b);
        const mid = Math.floor(responseTimes.length / 2);
        const medianResp = responseTimes.length % 2 !== 0 
            ? responseTimes[mid] 
            : (responseTimes[mid - 1] + responseTimes[mid]) / 2;

        // 3. Urgent Samples count
        const urgentCount = data.filter(d => d.priority === "Urgent").length;
        const urgentDue = data.filter(d => d.priority === "Urgent" && d.delayHours > 8).length;

        // 4. Average Queue Delay
        const avgDelayHours = data.reduce((sum, item) => sum + item.delayHours, 0) / data.length;

        return {
            benchAvailability: avgAvail.toFixed(1) + "%",
            medianResponseTime: medianResp.toFixed(1) + " min",
            urgentSamples: urgentCount,
            avgDelay: avgDelayHours.toFixed(1) + " h",
            urgentDueCount: urgentDue
        };
    }

    // --------------------------------------------------------------------------
    // 4. Rendering Views
    // --------------------------------------------------------------------------
    function updateDashboard() {
        const filtered = getFilteredData();
        const L = tDash();

        // Update priority slicer chip labels for Normal / High
        elPriorityButtons.forEach(btn => {
            const p = btn.getAttribute("data-priority");
            if (p === "Normal" || p === "High") {
                btn.textContent = L.priorityShort[p] || p;
            }
        });

        // 1. Update KPI Cards
        const kpis = calculateKPIs(filtered);
        if (elKpiAvailability) elKpiAvailability.textContent = kpis.benchAvailability;
        if (elKpiResponse) elKpiResponse.textContent = kpis.medianResponseTime;
        if (elKpiUrgent) elKpiUrgent.textContent = kpis.urgentSamples;
        if (elKpiDelay) elKpiDelay.textContent = kpis.avgDelay;

        // Subtext urgency note
        const elUrgentSub = document.getElementById("kpi-urgent-sub");
        if (elUrgentSub) {
            elUrgentSub.textContent = L.urgentSub(kpis.urgentDueCount);
        }

        // 2. Render Table with sorting and pagination
        renderTable(filtered);

        // 3. Render Queue Aging Stacked Bar
        renderQueueAging(filtered);

        // 4. Render Bench Reactivity Bar Chart
        renderBenchReactivity(filtered);

        // 5. Render Urgency Donut Chart
        renderUrgencyDonut(filtered);

        // 6. Render Availability 6-Week Trend Chart
        renderAvailabilityTrend(filtered);
    }

    // Table renderer
    function renderTable(data) {
        if (!elTableBody) return;
        const L = tDash();

        // Sort data
        const sorted = [...data].sort((a, b) => {
            let valA = a[state.sortColumn];
            let valB = b[state.sortColumn];

            if (typeof valA === "string") {
                return state.sortDirection === "asc" 
                    ? valA.localeCompare(valB) 
                    : valB.localeCompare(valA);
            }
            return state.sortDirection === "asc" ? valA - valB : valB - valA;
        });

        // Pagination
        const totalItems = sorted.length;
        const totalPages = Math.max(1, Math.ceil(totalItems / state.pageSize));
        if (state.page > totalPages) state.page = totalPages;

        const startIdx = (state.page - 1) * state.pageSize;
        const pageItems = sorted.slice(startIdx, startIdx + state.pageSize);

        if (pageItems.length === 0) {
            elTableBody.innerHTML = `
                <tr>
                    <td colspan="8" class="pbi-td-empty">
                        <i class="fas fa-filter"></i> ${L.emptyTable}
                    </td>
                </tr>
            `;
            if (elTablePagination) elTablePagination.innerHTML = "";
            return;
        }

        let html = "";
        pageItems.forEach((row, idx) => {
            const isEven = idx % 2 === 0;
            const priorityClass = row.priority.toLowerCase();
            const delayClass = row.delayHours > 6 ? "severe" : (row.delayHours > 0 ? "warning" : "normal");
            const delaySign = row.delayHours > 0 ? `+${row.delayHours} h` : "0 h";
            const prioLabel = L.priorityLabels[row.priority] || row.priority.toUpperCase();

            html += `
                <tr class="pbi-row ${isEven ? 'pbi-row-even' : 'pbi-row-odd'} pbi-priority-${priorityClass}" 
                    data-order="${row.order}" 
                    title="${L.rowTitle}">
                    <td class="pbi-td pbi-td-order">
                        <span class="pbi-priority-edge pbi-edge-${priorityClass}"></span>
                        <code>${row.order}</code>
                    </td>
                    <td class="pbi-td">
                        <strong>${row.productGroup}</strong>
                        <div class="pbi-sub-meta">${row.testType || ''}</div>
                    </td>
                    <td class="pbi-td">${row.sector}</td>
                    <td class="pbi-td"><span class="pbi-customer-badge">${row.customer}</span></td>
                    <td class="pbi-td pbi-td-num"><strong>${row.ageHours} h</strong></td>
                    <td class="pbi-td">
                        <span class="pbi-chip pbi-chip-${priorityClass}">
                            ${prioLabel}
                        </span>
                    </td>
                    <td class="pbi-td pbi-td-bench">${row.bench}</td>
                    <td class="pbi-td pbi-td-delay ${delayClass}">
                        ${delaySign}
                    </td>
                </tr>
            `;
        });

        elTableBody.innerHTML = html;

        // Attach click listener for row detail inspection
        elTableBody.querySelectorAll(".pbi-row").forEach(tr => {
            tr.addEventListener("click", () => {
                const orderId = tr.getAttribute("data-order");
                const record = syntheticData.find(d => d.order === orderId);
                if (record) openRecordModal(record);
            });
        });

        // Render table pagination controls
        if (elTablePagination) {
            elTablePagination.innerHTML = `
                <div class="pbi-pagination-info">
                    ${L.showing} <strong>${startIdx + 1}–${Math.min(startIdx + state.pageSize, totalItems)}</strong> ${L.of} <strong>${totalItems}</strong> ${L.filteredSamples}
                </div>
                <div class="pbi-pagination-btns">
                    <button class="pbi-page-btn" ${state.page <= 1 ? 'disabled' : ''} id="pbi-page-prev" title="${L.prevPage}">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="pbi-page-indicator">${state.page} / ${totalPages}</span>
                    <button class="pbi-page-btn" ${state.page >= totalPages ? 'disabled' : ''} id="pbi-page-next" title="${L.nextPage}">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            `;

            const prevBtn = document.getElementById("pbi-page-prev");
            const nextBtn = document.getElementById("pbi-page-next");
            if (prevBtn) prevBtn.addEventListener("click", () => { state.page--; updateDashboard(); });
            if (nextBtn) nextBtn.addEventListener("click", () => { state.page++; updateDashboard(); });
        }
    }

    // Modal detail inspector for a clicked test record
    function openRecordModal(record) {
        const L = tDash();
        let modal = document.getElementById("pbi-record-modal");
        if (!modal) {
            modal = document.createElement("div");
            modal.id = "pbi-record-modal";
            modal.className = "pbi-modal-backdrop";
            document.body.appendChild(modal);
        }

        const prioLabel = L.priorityLabels[record.priority] || record.priority.toUpperCase();

        modal.innerHTML = `
            <div class="pbi-modal-card">
                <div class="pbi-modal-header">
                    <div class="pbi-modal-title">
                        <i class="fas fa-microchip"></i>
                        <span>${L.modalTitle} : ${record.order}</span>
                    </div>
                    <button class="pbi-modal-close" id="pbi-modal-close-btn">&times;</button>
                </div>
                <div class="pbi-modal-grid">
                    <div class="modal-field">
                        <span class="field-label">${L.modalCust}</span>
                        <span class="field-value highlight-cyan">${record.customer}</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalProd}</span>
                        <span class="field-value">${record.productGroup}</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalType}</span>
                        <span class="field-value">${record.testType || 'Dynamic Characterization'}</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalSector}</span>
                        <span class="field-value">${record.sector}</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalBench}</span>
                        <span class="field-value highlight-yellow">${record.bench}</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalPrio}</span>
                        <span class="field-value"><span class="pbi-chip pbi-chip-${record.priority.toLowerCase()}">${prioLabel}</span></span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalAge}</span>
                        <span class="field-value">${record.ageHours} h</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalDelay}</span>
                        <span class="field-value ${record.delayHours > 6 ? 'highlight-red' : ''}">${record.delayHours > 0 ? '+' + record.delayHours + ' h' : L.modalOnTime}</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalTemp}</span>
                        <span class="field-value">${record.temp || '23°C'}</span>
                    </div>
                    <div class="modal-field">
                        <span class="field-label">${L.modalCycles}</span>
                        <span class="field-value">${record.cycles || '500k'}</span>
                    </div>
                </div>
                <div class="pbi-modal-footer">
                    <span class="modal-disclaimer"><i class="fas fa-shield-halved"></i> ${L.modalDisclaimer}</span>
                    <button class="btn btn-secondary" id="pbi-modal-ok-btn">${L.modalClose}</button>
                </div>
            </div>
        `;

        modal.classList.add("active");

        const closeBtn = document.getElementById("pbi-modal-close-btn");
        const okBtn = document.getElementById("pbi-modal-ok-btn");
        const closeModal = () => modal.classList.remove("active");

        if (closeBtn) closeBtn.onclick = closeModal;
        if (okBtn) okBtn.onclick = closeModal;
        modal.onclick = (e) => {
            if (e.target === modal) closeModal();
        };
    }

    // CSV Export Capability: Exports the active filtered dataset
    function exportFilteredCSV() {
        const filtered = getFilteredData();
        const L = tDash();
        if (filtered.length === 0) {
            alert(L.noExport);
            return;
        }

        const headers = ["Order", "ProductGroup", "Sector", "Customer", "AgeHours", "Priority", "Bench", "DelayHours", "AvailabilityPct", "ResponseTimeMin", "TestType", "Temperature", "TargetCycles"];
        
        let csvContent = headers.join(",") + "\n";
        filtered.forEach(row => {
            const vals = [
                row.order,
                `"${row.productGroup}"`,
                `"${row.sector}"`,
                `"${row.customer}"`,
                row.ageHours,
                `"${row.priority}"`,
                `"${row.bench}"`,
                row.delayHours,
                row.availability,
                row.responseTime,
                `"${row.testType || ''}"`,
                `"${row.temp || ''}"`,
                `"${row.cycles || ''}"`
            ];
            csvContent += vals.join(",") + "\n";
        });

        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.setAttribute("href", url);
        link.setAttribute("download", `fifo_lab_samples_export_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Queue Aging Bar Renderer
    function renderQueueAging(data) {
        if (!elAgingBar) return;
        const L = tDash();

        const total = data.length;
        if (total === 0) {
            elAgingBar.innerHTML = `<div class="pbi-aging-seg empty" style="width:100%"></div>`;
            return;
        }

        const count0_12 = data.filter(d => d.ageHours <= 12).length;
        const count12_24 = data.filter(d => d.ageHours > 12 && d.ageHours <= 24).length;
        const count24_plus = data.filter(d => d.ageHours > 24).length;

        const pct0_12 = ((count0_12 / total) * 100).toFixed(0);
        const pct12_24 = ((count12_24 / total) * 100).toFixed(0);
        const pct24_plus = ((count24_plus / total) * 100).toFixed(0);

        elAgingBar.innerHTML = `
            <div class="pbi-aging-seg seg-blue" style="width: ${pct0_12}%" title="0–12 h: ${count0_12} (${pct0_12}%)"></div>
            <div class="pbi-aging-seg seg-amber" style="width: ${pct12_24}%" title="12–24 h: ${count12_24} (${pct12_24}%)"></div>
            <div class="pbi-aging-seg seg-red" style="width: ${pct24_plus}%" title="24 h+: ${count24_plus} (${pct24_plus}%)"></div>
        `;

        if (elAgingCounts) {
            elAgingCounts.innerHTML = `
                <span class="aging-count-label"><i class="fas fa-circle seg-dot-blue"></i> 0–12 h: <strong>${count0_12}</strong> (${pct0_12}%)</span>
                <span class="aging-count-label"><i class="fas fa-circle seg-dot-amber"></i> 12–24 h: <strong>${count12_24}</strong> (${pct12_24}%)</span>
                <span class="aging-count-label"><i class="fas fa-circle seg-dot-red"></i> 24 h+: <strong>${count24_plus}</strong> (${pct24_plus}%)</span>
            `;
        }

        // Priority distribution badges
        const normalCount = data.filter(d => d.priority === "Normal").length;
        const highCount = data.filter(d => d.priority === "High").length;
        const urgentCount = data.filter(d => d.priority === "Urgent").length;

        if (elAgingNormalPct) elAgingNormalPct.textContent = `${((normalCount / total) * 100).toFixed(0)}% ${L.priorityShort.Normal} (${normalCount})`;
        if (elAgingHighPct) elAgingHighPct.textContent = `${((highCount / total) * 100).toFixed(0)}% ${L.priorityShort.High} (${highCount})`;
        if (elAgingUrgentPct) elAgingUrgentPct.textContent = `${((urgentCount / total) * 100).toFixed(0)}% ${L.priorityShort.Urgent} (${urgentCount})`;
    }

    // Bench Reactivity Bar Chart (SVG)
    function renderBenchReactivity(data) {
        if (!elBenchSvg) return;
        const L = tDash();

        const benches = ["TB-01", "TB-02", "TB-03", "TB-04", "TB-05", "TB-06"];
        const benchMedians = benches.map(b => {
            const benchItems = data.filter(d => d.bench === b);
            if (benchItems.length === 0) return { bench: b, median: 0, count: 0 };
            const times = benchItems.map(d => d.responseTime).sort((x, y) => x - y);
            const m = Math.floor(times.length / 2);
            const medianVal = times.length % 2 !== 0 ? times[m] : (times[m - 1] + times[m]) / 2;
            return { bench: b, median: medianVal, count: benchItems.length };
        });

        const chartTop = 25;
        const chartBottom = 135;
        const chartLeft = 32;
        const chartRight = 315;
        const maxTime = 28; // scale limit
        const targetTime = 18; // target line

        const targetY = chartBottom - ((targetTime / maxTime) * (chartBottom - chartTop));

        const barWidth = 26;
        const totalSpacing = (chartRight - chartLeft);
        const slotWidth = totalSpacing / benches.length;

        let barsSvg = "";

        benchMedians.forEach((bm, i) => {
            const x = chartLeft + i * slotWidth + (slotWidth - barWidth) / 2;
            const barHeight = bm.median > 0 ? (bm.median / maxTime) * (chartBottom - chartTop) : 0;
            const y = chartBottom - barHeight;

            let fillColor = "#38a2e5";
            if (bm.median > 19) fillColor = "#ff6b57";
            else if (bm.median >= 17) fillColor = "#f2c811";

            if (bm.count === 0) fillColor = "#24354a";

            barsSvg += `
                <g class="pbi-chart-bar-group" data-bench="${bm.bench}" data-median="${bm.median.toFixed(1)}" data-count="${bm.count}">
                    <rect x="${x}" y="${y}" width="${barWidth}" height="${barHeight}" rx="4" fill="${fillColor}" class="pbi-chart-bar" />
                    <text x="${x + barWidth / 2}" y="${chartBottom + 16}" text-anchor="middle" font-size="11" fill="#9db1c7" class="pbi-axis-text">${bm.bench.replace('TB-', '')}</text>
                    <title>${bm.bench}: ${bm.median.toFixed(1)} min (${bm.count} ${L.testsWord})</title>
                </g>
            `;
        });

        elBenchSvg.innerHTML = `
            <!-- Grid & Target Line -->
            <line x1="${chartLeft}" y1="${chartBottom}" x2="${chartRight}" y2="${chartBottom}" stroke="#233a52" stroke-width="1.5" />
            <line x1="${chartLeft}" y1="${targetY}" x2="${chartRight}" y2="${targetY}" stroke="#e8a838" stroke-dasharray="4 4" stroke-width="1.2" />
            <text x="${chartLeft - 4}" y="${targetY + 4}" text-anchor="end" font-size="10" fill="#e8a838" font-family="JetBrains Mono, monospace">18m</text>

            <!-- Bars -->
            ${barsSvg}
        `;
    }

    // Urgency Donut Chart (SVG)
    function renderUrgencyDonut(data) {
        if (!elDonutSvg) return;
        const L = tDash();

        const total = data.length;
        if (elDonutTotal) elDonutTotal.textContent = total;

        const elNormalLeg = document.getElementById("pbi-donut-leg-normal");
        const elHighLeg = document.getElementById("pbi-donut-leg-high");
        const elUrgentLeg = document.getElementById("pbi-donut-leg-urgent");

        if (total === 0) {
            elDonutSvg.innerHTML = `<circle cx="65" cy="65" r="48" fill="none" stroke="#23394f" stroke-width="16" />`;
            if (elNormalLeg) elNormalLeg.textContent = `● ${L.priorityShort.Normal}: 0`;
            if (elHighLeg) elHighLeg.textContent = `● ${L.priorityShort.High}: 0`;
            if (elUrgentLeg) elUrgentLeg.textContent = `● ${L.priorityShort.Urgent}: 0`;
            return;
        }

        const countNormal = data.filter(d => d.priority === "Normal").length;
        const countHigh = data.filter(d => d.priority === "High").length;
        const countUrgent = data.filter(d => d.priority === "Urgent").length;

        if (elNormalLeg) elNormalLeg.textContent = `● ${L.priorityShort.Normal}: ${countNormal}`;
        if (elHighLeg) elHighLeg.textContent = `● ${L.priorityShort.High}: ${countHigh}`;
        if (elUrgentLeg) elUrgentLeg.textContent = `● ${L.priorityShort.Urgent}: ${countUrgent}`;

        const r = 48;
        const circumference = 2 * Math.PI * r;

        const normalDash = (countNormal / total) * circumference;
        const highDash = (countHigh / total) * circumference;
        const urgentDash = (countUrgent / total) * circumference;

        const offsetNormal = 0;
        const offsetHigh = -normalDash;
        const offsetUrgent = -(normalDash + highDash);

        elDonutSvg.innerHTML = `
            <circle cx="65" cy="65" r="${r}" fill="none" stroke="#1c2d42" stroke-width="16" />
            
            <circle cx="65" cy="65" r="${r}" fill="none" stroke="#38a2e5" stroke-width="16"
                stroke-dasharray="${normalDash} ${circumference}"
                stroke-dashoffset="${offsetNormal}"
                transform="rotate(-90 65 65)" class="donut-slice" title="${L.priorityShort.Normal}: ${countNormal}" />

            <circle cx="65" cy="65" r="${r}" fill="none" stroke="#f2c811" stroke-width="16"
                stroke-dasharray="${highDash} ${circumference}"
                stroke-dashoffset="${offsetHigh}"
                transform="rotate(-90 65 65)" class="donut-slice" title="${L.priorityShort.High}: ${countHigh}" />

            <circle cx="65" cy="65" r="${r}" fill="none" stroke="#ff6b57" stroke-width="16"
                stroke-dasharray="${urgentDash} ${circumference}"
                stroke-dashoffset="${offsetUrgent}"
                transform="rotate(-90 65 65)" class="donut-slice" title="${L.priorityShort.Urgent}: ${countUrgent}" />
        `;
    }

    // Availability Trend Line Chart (SVG)
    function renderAvailabilityTrend(data) {
        if (!elAvailabilityTrendSvg) return;
        const L = tDash();

        const currentAvg = data.length > 0 
            ? data.reduce((s, d) => s + d.availability, 0) / data.length 
            : 92.6;

        const weeks = [
            { w: "W1", val: +(currentAvg - 3.8).toFixed(1) },
            { w: "W2", val: +(currentAvg - 2.5).toFixed(1) },
            { w: "W3", val: +(currentAvg - 2.9).toFixed(1) },
            { w: "W4", val: +(currentAvg - 1.2).toFixed(1) },
            { w: "W5", val: +(currentAvg - 0.4).toFixed(1) },
            { w: "W6", val: +currentAvg.toFixed(1) }
        ];

        const minVal = 86;
        const maxVal = 96;
        const pLeft = 14;
        const pRight = 138;
        const pBottom = 85;
        const pTop = 15;

        const points = weeks.map((item, idx) => {
            const x = pLeft + (idx / (weeks.length - 1)) * (pRight - pLeft);
            const y = pBottom - ((item.val - minVal) / (maxVal - minVal)) * (pBottom - pTop);
            return { x, y, val: item.val, label: item.w };
        });

        const polylinePoints = points.map(p => `${p.x},${p.y}`).join(" ");

        let dotsHtml = "";
        points.forEach(p => {
            dotsHtml += `
                <circle cx="${p.x}" cy="${p.y}" r="3.5" fill="#50d59e" class="trend-dot" />
                <title>${p.label}: ${p.val}%</title>
            `;
        });

        elAvailabilityTrendSvg.innerHTML = `
            <line x1="${pLeft}" y1="${pBottom}" x2="${pRight}" y2="${pBottom}" stroke="#233a52" stroke-width="1.2" />
            <polyline points="${polylinePoints}" fill="none" stroke="#50d59e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            ${dotsHtml}
            <text x="${pLeft}" y="${pBottom + 16}" font-size="10" fill="#8ea0b8">W1</text>
            <text x="${pRight}" y="${pBottom + 16}" text-anchor="end" font-size="10" fill="#8ea0b8">W6</text>
        `;

        const elTrendCurrent = document.getElementById("pbi-trend-current-val");
        if (elTrendCurrent) {
            elTrendCurrent.textContent = L.trendCurrent(currentAvg.toFixed(1));
        }
    }

    // --------------------------------------------------------------------------
    // 5. Preset Scenarios & Interactive Controls
    // --------------------------------------------------------------------------
    function applyScenario(scenarioKey) {
        state.page = 1;
        state.searchQuery = "";
        if (elSearchInput) elSearchInput.value = "";

        if (scenarioKey === "all") {
            state.productGroup = "All";
            state.sector = "All";
            state.priority = "All";
            state.urgentOnly = false;
            state.delayThreshold = 48;
            state.sortColumn = "ageHours";
            state.sortDirection = "desc";
        } else if (scenarioKey === "urgent_crisis") {
            state.productGroup = "All";
            state.sector = "All";
            state.priority = "Urgent";
            state.urgentOnly = true;
            state.delayThreshold = 48;
            state.sortColumn = "delayHours";
            state.sortDirection = "desc";
        } else if (scenarioKey === "bottleneck_tb04") {
            state.productGroup = "Engine Mounts";
            state.sector = "Dynamic";
            state.priority = "All";
            state.urgentOnly = false;
            state.delayThreshold = 48;
            state.sortColumn = "ageHours";
            state.sortDirection = "desc";
        } else if (scenarioKey === "fifo_aged") {
            state.productGroup = "All";
            state.sector = "All";
            state.priority = "All";
            state.urgentOnly = false;
            state.delayThreshold = 48;
            state.sortColumn = "ageHours";
            state.sortDirection = "desc";
        }

        // Sync UI inputs
        if (elProductSelect) elProductSelect.value = state.productGroup;
        if (elSectorSelect) elSectorSelect.value = state.sector;
        if (elUrgentToggle) elUrgentToggle.checked = state.urgentOnly;
        if (elDelaySlider) elDelaySlider.value = state.delayThreshold;
        if (elDelayValue) elDelayValue.textContent = `${state.delayThreshold} h`;

        elPriorityButtons.forEach(b => {
            b.classList.toggle("active", b.getAttribute("data-priority") === state.priority);
        });

        // Update active class on preset pills
        document.querySelectorAll(".pbi-scenario-btn").forEach(btn => {
            btn.classList.toggle("active", btn.getAttribute("data-scenario") === scenarioKey);
        });

        updateDashboard();
    }

    function bindEvents() {
        // Product Group Slicer
        if (elProductSelect) {
            elProductSelect.addEventListener("change", (e) => {
                state.productGroup = e.target.value;
                state.page = 1;
                updateDashboard();
            });
        }

        // Sector Slicer
        if (elSectorSelect) {
            elSectorSelect.addEventListener("change", (e) => {
                state.sector = e.target.value;
                state.page = 1;
                updateDashboard();
            });
        }

        // Priority Filter Pills
        elPriorityButtons.forEach(btn => {
            btn.addEventListener("click", () => {
                const p = btn.getAttribute("data-priority");
                state.priority = p;
                state.urgentOnly = (p === "Urgent");
                if (elUrgentToggle) elUrgentToggle.checked = state.urgentOnly;

                elPriorityButtons.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                state.page = 1;
                updateDashboard();
            });
        });

        // Urgent Only Toggle
        if (elUrgentToggle) {
            elUrgentToggle.addEventListener("change", (e) => {
                state.urgentOnly = e.target.checked;
                state.priority = state.urgentOnly ? "Urgent" : "All";

                elPriorityButtons.forEach(b => {
                    const isUrgentBtn = b.getAttribute("data-priority") === "Urgent";
                    b.classList.toggle("active", state.urgentOnly ? isUrgentBtn : (b.getAttribute("data-priority") === "All"));
                });

                state.page = 1;
                updateDashboard();
            });
        }

        // Delay Threshold Slider
        if (elDelaySlider) {
            elDelaySlider.addEventListener("input", (e) => {
                state.delayThreshold = parseInt(e.target.value, 10);
                if (elDelayValue) elDelayValue.textContent = `${state.delayThreshold} h`;
                state.page = 1;
                updateDashboard();
            });
        }

        // Search Input (Real-time search across order, customer, bench, test type)
        if (elSearchInput) {
            elSearchInput.addEventListener("input", (e) => {
                state.searchQuery = e.target.value;
                state.page = 1;
                updateDashboard();
            });
        }

        // Preset Scenario Buttons
        document.querySelectorAll(".pbi-scenario-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const scenario = btn.getAttribute("data-scenario");
                applyScenario(scenario);
            });
        });

        // Export Filtered CSV Button
        if (elBtnExportCsv) {
            elBtnExportCsv.addEventListener("click", exportFilteredCSV);
        }

        // Reset Filters Button
        if (elResetBtn) {
            elResetBtn.addEventListener("click", () => {
                applyScenario("all");
            });
        }

        // Sortable Table Headers
        const sortHeaders = document.querySelectorAll(".pbi-th-sortable");
        sortHeaders.forEach(th => {
            th.addEventListener("click", () => {
                const col = th.getAttribute("data-col");
                if (state.sortColumn === col) {
                    state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
                } else {
                    state.sortColumn = col;
                    state.sortDirection = (col === "ageHours" || col === "delayHours") ? "desc" : "asc";
                }

                // Update sort icons
                sortHeaders.forEach(header => {
                    header.classList.remove("sorted-asc", "sorted-desc");
                    const icon = header.querySelector(".pbi-sort-icon");
                    if (icon) icon.className = "fas fa-sort pbi-sort-icon";
                });

                th.classList.add(state.sortDirection === "asc" ? "sorted-asc" : "sorted-desc");
                const currentIcon = th.querySelector(".pbi-sort-icon");
                if (currentIcon) {
                    currentIcon.className = `fas fa-sort-${state.sortDirection === "asc" ? 'up' : 'down'} pbi-sort-icon`;
                }

                updateDashboard();
            });
        });

        // Fullscreen / Modal Toggle
        if (elFullscreenBtn && elDashboardWrapper) {
            elFullscreenBtn.addEventListener("click", () => {
                elDashboardWrapper.classList.toggle("pbi-expanded");
                const isExpanded = elDashboardWrapper.classList.contains("pbi-expanded");
                const L = tDash();

                elFullscreenBtn.innerHTML = isExpanded 
                    ? `<i class="fas fa-compress"></i> <span data-i18n="biproject.btnExpand">${L.collapse}</span>` 
                    : `<i class="fas fa-expand"></i> <span data-i18n="biproject.btnExpand">${L.expand}</span>`;
                
                document.body.classList.toggle("modal-open", isExpanded);
            });
        }

        // Listen for language changes from main script
        window.addEventListener("languageChanged", () => {
            updateDashboard();
        });
        window.updatePBIDashboard = updateDashboard;
    }

    // Boot on DOM ready
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", initDashboard);
    } else {
        initDashboard();
    }
})();
