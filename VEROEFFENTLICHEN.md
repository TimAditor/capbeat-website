# Website veröffentlichen — Schritt für Schritt

Dieser Ordner ist eine fertige statische Website. Kein Baukasten, kein
Server nötig — genau richtig für GitHub Pages (kostenlos, mit HTTPS).

## Vorher ausfüllen (Pflicht)

Suche in allen Dateien nach diesen Markierungen:

| Markierung | Wo | Was tun |
|---|---|---|
| `DEINE-DOMAIN.de` | index.html, robots.txt, sitemap.xml | durch die echte Domain ersetzen |
| `TODO` | index.html (7×) | Download-/Kauf-Links eintragen |
| `[PLATZHALTER]`-Blöcke | impressum.html, datenschutz.html | **Pflichtangaben** — ohne Impressum drohen in Deutschland Abmahnungen |

## Veröffentlichen mit GitHub Pages

1. **Repository anlegen** auf github.com (z. B. `wordbeat-website`,
   öffentlich). Nur den Inhalt DIESES Ordners hineinlegen — nicht das
   ganze Plugin-Projekt.
2. **Pages einschalten:** Repository → Settings → Pages →
   Source: „Deploy from a branch“ → Branch `main`, Ordner `/ (root)`.
   Nach 1–2 Minuten ist die Seite unter
   `https://BENUTZERNAME.github.io/wordbeat-website/` erreichbar.
3. **Eigene Domain** (dringend empfohlen, ~10 €/Jahr, z. B. bei INWX,
   Namecheap oder Cloudflare):
   - Beim Domain-Anbieter vier A-Records auf GitHubs Adressen setzen:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     und einen CNAME-Record `www` → `BENUTZERNAME.github.io`.
   - In den Pages-Einstellungen die Domain eintragen und
     **„Enforce HTTPS“** anhaken (Zertifikat kommt automatisch).
4. **Bei Google anmelden:** [Google Search Console](https://search.google.com/search-console)
   → Domain bestätigen → `sitemap.xml` einreichen. Das kostet nichts und
   ist der Unterschied zwischen „bei Google auffindbar“ und „unsichtbar“.

## Wichtig: Die EXE gehört NICHT ins Repository

GitHub lehnt Dateien über 100 MB ab — die Setup-EXE hat 163 MB.
Der richtige Ort ist ein **GitHub Release** (bis 2 GB pro Datei, kostenlos):

Repository → Releases → „Draft a new release“ → Tag z. B. `v0.8` →
EXE als Anhang hochladen. Der Download-Link sieht dann so aus:

    https://github.com/BENUTZERNAME/REPO/releases/latest/download/SubtitleCaptions-Setup-0.8.exe

Genau diesen Link in die „Herunterladen“-Knöpfe der index.html eintragen —
`releases/latest` zeigt automatisch immer auf die neueste Version.

## Was GitHub Pages NICHT kann — und die Lösung

Pages liefert nur statische Dateien aus. Bezahlung läuft deshalb über
einen Anbieter, der als Verkäufer auftritt (Merchant of Record) und
EU-Umsatzsteuer, Rechnungen und Rückerstattungen übernimmt:

- **Lemon Squeezy** oder **Paddle** — Produkt anlegen, den fertigen
  Checkout-Link in die „Pro kaufen“-Knöpfe eintragen. Fertig; die Seite
  selbst braucht dafür keinerlei Code.

**Aber:** Erst verkaufen, wenn (1) die EXE signiert ist und (2) das Plugin
eine Lizenzprüfung hat. Beides existiert noch nicht — bis dahin die
Kauf-Knöpfe durch „Bald verfügbar“ ersetzen oder die Preissektion
ausblenden.

## Noch offen für die fertige Seite

- `og.png` (1200×630) für Vorschaubilder beim Teilen — im `<head>` bereits
  verlinkt, Datei fehlt noch.
- Die drei „Video folgt“-Platzhalter durch echte Bildschirmaufnahmen
  ersetzen (MP4, je unter 8 s, ohne Ton).
- Favicon.
