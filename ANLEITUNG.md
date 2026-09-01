# NAEL — Anleitung zum Hochladen auf GitHub

## So lädst du alles hoch

1. Gehe zu deinem GitHub-Repository im Browser
2. Klicke auf **"Add file"** → **"Upload files"**
3. Öffne den entpackten Ordner **"portfolio"**
4. Ziehe **alle Dateien und Unterordner** hinein (alle `.html`-Dateien, den
   `css`-Ordner, den `js`-Ordner, den `images`-Ordner — alles auf einmal)
5. Unten auf **"Commit changes"** klicken
6. Nach ein paar Minuten ist die Seite live unter deiner Domain (nael.agency)

**Wichtig:** Falls schon Dateien mit gleichem Namen im Repository liegen,
werden sie automatisch ersetzt — das ist so gewollt.

## Seitenübersicht

```
index.html                     → Startseite
work.html                      → Portfolio-Übersicht (2 Kategorien)
work-packaging.html            → Brand & Packaging (5 Projekte)
work-presentations.html        → Brand Presentations (1 Projekt)
about.html                     → Über NAEL + Team (Nadine & Eliane) + Kontaktformular

projekt-nora.html              → Nøra Mushroom Coffee
projekt-supplement.html        → Supplement System (AVEO)
projekt-lunar.html             → Lunar Tide
projekt-schuewo.html           → SCHÜWO (Concept Redesign)
projekt-soundgate.html         → Soundgate Instruments
projekt-bloc.html              → BLOC Group (Presentation)
projekt-dream.html             → Dream Tea Collection — pausiert, nirgends
                                   verlinkt, Datei bleibt vollständig erhalten
projekt-template.html          → Leere Vorlage für neue Projekte

css/style.css                  → Alle Farben, Schriften, Abstände
js/script.js                   → Menü, Header-Verhalten (nicht anfassen)
images/                        → Alle Bilder, nach Projekt sortiert
images/favicon.ico, favicon-*  → Browser-Tab-Icon
```

## Kontakt

- **E-Mail:** hello@nael.agency (aktiv)
- **Kontaktformular** auf der About-Seite → läuft über Formspree
  (Endpoint: `https://formspree.io/f/xjybqbll`), Nachrichten landen direkt
  im Postfach

## Ein neues Projekt hinzufügen

1. Kopiere `projekt-template.html`, benenne die Kopie um
   (z. B. `projekt-neuername.html`)
2. Leg einen neuen Ordner unter `images/projects/` an, lade deine Bilder hoch
3. Passe in der neuen Datei Bildpfade, Texte, Titel an
4. Füge in `work-packaging.html` **oder** `work-presentations.html` eine
   neue Projekt-Karte hinzu (kopiere eine bestehende `<a class="project-card">`)
5. Aktualisiere die Zahl bei der jeweiligen Kachel auf `work.html` und
   `index.html` ("X Projects")

Für **Presentation**-Projekte gilt: nur 3 kuratierte Slides zeigen, nicht
das ganze Deck (eigene Vorgabe von dir).

## Dream Tea Collection reaktivieren

Datei und Bilder sind vollständig vorhanden unter `projekt-dream.html` und
`images/projects/dream/`. Um sie zurückzuholen: in `work-packaging.html`
wieder eine Projekt-Karte mit `href="projekt-dream.html"` ergänzen.

## Social-Media-Links aktivieren

Der Bereich ist in jeder Seite als HTML-Kommentar versteckt (Suche nach
"Socials-Bereich vorerst versteckt" im Footer). Sobald ihr echte,
aufgeräumte Profile habt: Kommentar-Markierungen (`<!--` und `-->`)
entfernen und die `href="#"`-Platzhalter durch echte Links ersetzen.

## Noch offen (bewusst verschoben)

- **Impressum** — rechtlich in Deutschland meist verpflichtend, aber bewusst
  zurückgestellt, bis das Geschäft läuft. Vor dem "richtigen" Launch nochmal
  prüfen (z. B. mit einem kostenlosen Generator wie e-recht24.de)
- **Deutsche Sprachversion** — bewusst nicht umgesetzt, englischsprachig
  reicht für den Start

## Bilder austauschen

Bild einfach mit demselben Dateinamen überschreiben — dann muss im Code
nichts angepasst werden.

## Wenn du unsicher bist

Schick mir einfach einen Screenshot oder beschreib, was nicht so aussieht
wie gewünscht.
