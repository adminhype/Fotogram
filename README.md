# Checkliste Fotogram

**Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst.**  
Solltest du weitere Extras eingebaut haben, erwähne das kurz, damit sich die Mentoren dies bei Bedarf anschauen können.

---

## Funktionalitäten

- **Dynamische Fotoanzeige**: Alle Fotos werden über JavaScript gerendert und in einem kleinen Format auf der Seite angezeigt.
- **Hover-Effekt**: Jedes Foto hat einen Hover-Effekt.
- **Großformatfoto**: Wenn du auf ein Foto klickst, öffnet es sich im großen Format.
- **Navigation im Großformat**: Beim Großformat-Foto kannst du nach links & rechts klicken, um das vorherige oder nächste Bild anzuzeigen. (Achte auf Icons dazu!)
  - **Hinweis**: Was passiert, wenn das erste oder letzte Bild angezeigt wird und man weiterklickt?
- **Schließen des Bildes**: Wenn man neben oder auf das Bild klickt, sollte es geschlossen werden. Alternativ kannst du auch einen Schließen-Button einbauen.
- **Fixierte Buttons**: Die Buttons zum Navigieren müssen in der großen Ansicht an einer festen Stelle fixiert sein.

---

## Code

- **Aussagekräftige Namen**: Verwende klare und sinnvolle Namen für Funktionen und Variablen.
  - **Hinweis**: Vermeide vordefinierte Funktionsnamen wie `close()`, `play()`, `main()`, `delete()` usw.
- **camelCase**: Verwende camelCase für die Benennung.
  - Beispiel:  
    - richtig: `renderImages()`  
    - falsch: `renderimages()` / `render_images()`
- **Code-Formatierung**: Achte darauf, dass der Code gut formatiert ist, mit einem einheitlichen Abstand zwischen Funktionen (1 oder 2 Leerzeilen).

---

## Responsive Design

- **Mobile Ansicht**: Bis zu einer Breite von 320px muss alles responsive sein, ohne Scrollbalken.
- **Bildgröße anpassen**: Die Bilder sollen größtmöglich angezeigt werden. Gegebenenfalls müssen die Buttons neu positioniert werden, um dies zu ermöglichen.

---

## Sonstiges

- **Bildkomprimierung**: Alle Bilder sind komprimiert, sodass die Seite schnell lädt (max. 500kb pro Bild).
- **Favicon**: Ein Favicon ist vorhanden.
- **Dokumenttitel**: Der Dokumententitel muss gesetzt sein.
- **Hauptseite**: Die Hauptseite muss den Namen `index.html` tragen, damit sie standardmäßig geladen wird.

---
