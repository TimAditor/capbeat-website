/*
 * Sanftes Erscheinen beim Scrollen.
 *
 * Bewusst defensiv: Ohne JavaScript (oder mit reduzierter Bewegung im
 * Betriebssystem) bleibt alles sofort sichtbar - die Klassen werden erst
 * hier vergeben, nie im HTML. Suchmaschinen sehen also immer die volle
 * Seite, und niemand starrt auf leere Flaechen.
 */
(function () {
    "use strict";

    if (!("IntersectionObserver" in window)) { return; }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { return; }

    // Was beim Hereinscrollen erscheinen soll. Absichtlich NICHT die
    // Hero-Ueberschrift: Das Wichtigste der Seite darf nie verzoegert sein.
    var AUSWAHL = [
        ".sec-head", ".step-card", ".rm", ".tier",
        ".proof-grid > div", ".compare", ".faq details",
        ".quiet-strip .shell > *", ".outro .shell > *",
        ".anim-stage", ".anim-name", ".artikel > *"
    ];

    var elemente = document.querySelectorAll(AUSWAHL.join(","));
    if (!elemente.length) { return; }

    // Karten derselben Reihe erscheinen kurz nacheinander statt alle auf
    // einmal - das wirkt lebendig, ohne aufdringlich zu sein.
    var proEltern = new Map();
    elemente.forEach(function (el) {
        var n = proEltern.get(el.parentElement) || 0;
        el.classList.add("reveal");
        el.style.setProperty("--rv-delay", Math.min(n * 90, 360) + "ms");
        proEltern.set(el.parentElement, n + 1);
    });

    var io = new IntersectionObserver(function (eintraege) {
        eintraege.forEach(function (e) {
            if (e.isIntersecting) {
                e.target.classList.add("is-in");
                io.unobserve(e.target);
            }
        });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });

    elemente.forEach(function (el) { io.observe(el); });
})();
