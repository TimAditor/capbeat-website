/*
 * Black Friday 2026: schaltet sich vom 27.11. 0:00 bis 30.11. 23:59
 * (deutsche Zeit) von selbst ein und danach wieder aus. Leiste oben,
 * Kauf-Links mit Code BFWEB50, Preis im Pro-Kasten. Vorschau: ?bf
 */
(function () {
    "use strict";
    var AB = Date.parse("2026-11-26T23:00:00Z");
    var BIS = Date.parse("2026-11-30T23:00:00Z");
    var KAUF = "polar_cl_zv6pu9KQAUBAyWdWkmKKGIkIcijkCUQlQh0kd1M9tqe";
    var LINK = "https://buy.polar.sh/" + KAUF + "?discount_code=BFWEB50";

    var jetzt = Date.now();
    var vorschau = /[?&]bf\b/.test(location.search);
    if (!vorschau && (jetzt < AB || jetzt >= BIS)) { return; }

    function los() {
        var leiste = document.createElement("a");
        leiste.className = "bf-bar";
        leiste.href = LINK;
        leiste.innerHTML = "<b>Black Friday</b><span>CapBeat Pro 50% off: <s>€79</s> €39.50, until Monday night</span><i>Get it →</i>";
        document.body.insertBefore(leiste, document.body.firstChild);

        var links = document.querySelectorAll('a[href*="' + KAUF + '"]');
        for (var i = 0; i < links.length; i++) { links[i].href = LINK; }

        var preise = document.querySelectorAll("[data-bf-preis]");
        for (var k = 0; k < preise.length; k++) { preise[k].innerHTML = preise[k].getAttribute("data-bf-preis"); }
    }
    if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", los); } else { los(); }
})();
