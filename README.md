# Lern-Periode 10

25.4 bis 27.6

## Grob-Planung

1. Welche Programmiersprache möchten Sie verwenden? Was denken Sie, wo Ihre Zeit und Übung am sinnvollsten ist?  
   Ich möchte C# verwenden.
2. Welche Datenbank-Technologie möchten Sie üben? Fühlen Sie sich sicher mit SQL und möchten etwas Neues ausprobieren; oder möchten Sie sich weiter mit SQL beschäftigen?
   Ich möchte weiter SQL verwenden. 
3. Was wäre ein geeignetes Abschluss-Projekt?
   Für mein Abschluss-Projekt möchte ich mit Hilfe von SQL, ASP.NET und C# und HTML, JS und neu D3 eine Webapplikation erstellen. Das Projekt wird über Produktion und Fabriken sein. Man kann eigene Produktionslinie per Webseite "automatisch", also dank automatische D3 Visualisierung, darstellen. Und man kann die Konfiguration speichern, in dem man es als eine Datei herunterladet. Dann kann man die Datei hochladen, um weiter zu arbeiten.

## 25.4

Welche 3 *features* sind die wichtigsten Ihres Projektes? Wie können Sie die Machbarkeit dieser in jeweils 45' am einfachsten beweisen?

- [x] *make or break feature* 1: Wie kann ich eine Datei via Webseite hochladen, sodass ihre Inhalt geladen und gezeigt wird?
- [x] *make or break feature* 2: Kann ich auf eine Webseite Button drücken, um paar Berechnungen serverseitig auszuführen und zurückliefern?
- [ ] *make or break feature* 3: Wie kann ich auf eine Webseite Elemente darstellen und miteinander verbinden lassen? Brauche ich eine weniger Front-End orientierte Lösung?

✍️ Heute habe ich eine Idee um Lernatelier Anforderungen erweitert. Wenn ich Sandbox Spiele über die Produktion spiele, wie z.B. Factorio, finde ich es schwierig weiterzukommen und zu planen, weil ich nicht genug Informationen habe. Ich habe viel darüber nachgedacht, was meine Anforderungen an Informationen sind und wie ich meine Idee in einem Stack umsetzen kann. Nachdem ich ChatGPT konsultiert hatte, erfuhr ich von D3. Ich habe also entschieden, ein klassisches Webapp zu erstellen. Nachdem ich make-or-break Features aufgeschrieben habe, habe ich anhand Tutorials gelernt, wie man eine Datei hochladen kann.

☝️ Vergessen Sie nicht, den Code von heute auf github hochzuladen. Ggf. bietet es sich an, für die Code-Schnipsel einen eigenen Ordner `exploration` zu erstellen.

## 2.5

Ausgehend von Ihren Erfahrungen vom 25.4, welche *features* brauchen noch mehr Recherche? (Sie können auch mehrere AP für ein *feature* aufwenden.)

- [x] Auf einen Blatt Papier werde ich detalierter Datenbank Diagramm aufzeichnen. (📵)
- [x] Damit ich nach einen Ziel arbeite, werde ich ein Fabrik-Prozess aufzeichnen, wie es die App generieren könnte (Hälfte habe ich in blaues Heft schon gezeichnet) (📵)
- [x] *make or break feature* 2: Kann ich auf eine Webseite Button drücken, um paar Berechnungen serverseitig auszuführen und zurückliefern?
  - [x] Ein schnelles API entwerfen, um (vermutlich) mit Swagger Anfrage senden, per API fangen und, anstatt wie üblich Daten zurückliefern, eine Berechnung durchführen und ein Beispielergebniss zurückliefern.
- [ ] *make or break feature* 3: Wie kann ich auf eine Webseite Elemente darstellen und miteinander verbinden lassen? 
  - [ ] Ich werde mittels D3 ausprobieren, verschiedene Figuren mittels Code zu generieren und sie dann mit ein Strich verbinden. (für Figuren habe ich ein Tutorial gefunden [Learning D3 Part 4 - Drawing Basic Shapes with SVG - YouTube](https://www.youtube.com/watch?v=16BfEjrNzr4) )

✍️ Heute habe ich die Hauptfunktion geprüft. Ich habe eine API aus VS Templates gewählt, von alte Arbeit POST-Controller eingefügt und noch eine Klasse einegfügt, die das Format für POST hält. Dann wenn ich mit Swagger eine Anfrage mit 2 Zahlen geschickt habe, bekam ich die Summe. D3 habe ich kaum gemacht, weil das zu gross für mein Projekt ist. Gegen Ende habe ich Datenbank Diagramm etwas genauer auf Papier gezeichnet und übernahm es zur UMLet. (75)

☝️ Vergessen Sie nicht, den Code von heute auf github hochzuladen.

## 9.5

Planen Sie nun Ihr Projekt, sodass die *Kern-Funktionalität* in 3 Sitzungen realisiert ist. Schreiben Sie dazu zunächst 3 solche übergeordneten Kern-Funktionalitäten auf: 

1. Web-Applikation zeigt in 4 Kolumnen 4 Fabriken, zwei sind "inputs" zwei "outputs".  
2. Per Web-Applikation kann man Produktionsrate von "Inputs" eingeben. Anhand Daten über Maschinen aus Datenbank wird Produktion eines Outputs ausgerechnet. 
3. Anhand eingegeben Daten und Ausrechnungen werden Outputrate und Belastung auf die Webseite gezeigt.

Diese Kern-Funktionalitäten brechen Sie nun in etwa 4 AP je herunter. Versuchen Sie jetzt bereits, auch die Sitzung vom 16.5 und 23.5 zu planen (im Wissen, dass Sie kleine Anpassungen an Ihrer Planung vornehmen können).

- [x] Ich erstelle das Datenbank anhand UML-Diagramm in SSMS.
- [x] Ich erstelle die Klassen für Datenbank in API und verbinde mit SSMS.
- [ ] Ich erstelle ein Controller. Es hat eine POST-Funktion, über welchen man Daten senden kann.

Heute habe ich anhand UML-Diagramm Schritt für Schritt die Tabellein in SSMS erstellt. Ich bin dabei auf einen komisches Fehlern gestossen, wobei die Beziehung zwischen 3 Tabellen mit 6 Relationen verbunden wurde. Ich habe es repariert, indem ich ein Primärschlussel addiert habe. Danach dank meiner alter API Arbeit habe ich gewusst, wie man der Anfang einer API macht und wie man sie mit Datenbank verbindet. KI hat geholfen, das SQL-Script in C# Modellen umzuwandeln, und danach ging die Verbindung erfolgreich. Es gab ungenügend Zeit aber, noch ein POST Befehl auszuprobieren. (90)

☝️  Code befindet sich auf branch backend.

## 16.5

- [x] Ich erstelle die Webseite, mit HTML und CSS. Es soll 4 Kolumnen haben.
- [x] Auf der Webseite werden die Eingaben gesammelt und per POST-Anfrage mittels JS gesendet. (noch nicht zum Server)
- [ ] ~~Ich erstelle 6 Beispiel-Maschinen und 4 Beispiel-Fabriken.~~
- [x] Ich erstelle 2 Beispiel-Maschinen und 1 Beispiel-Fabrik
- [x] Der grösste und wichtigste Teil: Die POST Anfrage wird mit API verbunden, so dass sobald eine POST Anfrage gesendet wird, eine Meldung in der Konsole erscheint. 

✍️ Heute habe ich viel mit KI gearbeitet. Ich habe eine Empfehlung bekommen, dass eine KI mir die Webseite entwirft. Dann konnte ich mich auf die Verbindung mit HTML-Form und API fokussieren. Die Eingaben aus der Webseite werden gesammelt und mit einer POST-Anfrage gesendet. Leider habe ich aber paar Fehler in meiner Datenbank bemerkt und mit rechereche in Internet behoben. Dafür aber nur paar Fabriken in Datenbank eingegeben. Ganz am Ende habe ich die make-or-break Features verbunden und nun mit dem Submit Button wird die Anfrage geschickt und durch API empfangen.

☝️  Vergessen Sie nicht, den Code von heute auf github hochzuladen.

## 23.5

- [x] Ich erweitere die Webseite, sodass man Anzahl von Maschinen eingeben kann.
- [x] Ich erweitere die API, sodass anhand eines fixen Schemas die Anzahl produzierendes Copper Wire ausgerechnet werden kann.
- [x] Ich erweitere die Webseite, sodass die Produktionsmengen bei zwei letzten Kolumnen gezeigt werden.
- [x] Ich erweitere die API, sodass anhand eines fixen Schemas die Anzahl produzierendes Electronic Circuit augerechnet werden kann.

---

- [x] Ich lösche die Eingabenfeldern für Energieverbrauch, da man die Daten aus SQL auslesen kann.

✍️ Heute habe ich weniger Code geschrieben und viele Fehler mit meiner Idee entdeckt. Zuerst habe ich die Webseite um ein Eingabefeld erweitert. Dann habe ich das austausch von Daten konfiguriert, sodass "Submit" eingegebenen Daten sendet und spezifische Ausgaben liefert. Anschliessend werden sie auf der Webseite angezeigt. Am Ende werden beide Rezepten benutzt und auf die Webseite gezeigt, und ihre Verhältnis stimmt auch. Aber bemerkt, dass es sich eher um eine Webseite handelt und es interessanter wäre, wenn ich CRUD-Operationen einbauen würde. (78)

Mein Projekt entwickelt sich mit der Arbeit. Und ich möchte, dass es noch etwa interessant am Ende wird. Deshalb erstelle ich mir Zusatzarbeitspaketen für Funktionen.,

☝️  Vergessen Sie nicht, den Code von heute auf github hochzuladen.

---

Zusatzarbeitspaketen

- [ ] Anstatt "Iron Factory" usw. ich erlaube den Benutzer oben aus Dropdown-Liste die gespeicherten Maschinen zu wählen, damit er die eigen erstellte und gespeicherte Maschinen für die Berechnung nutzen kann.

- [ ] Ich ändere die Name zur "Factory Framework", da diese Webseite jede Spiel mit Maschinen und Rezepten akzeptieren wird.

- [ ] ~~Ich erweitere die Eingabenfeldern oben um "Speed", um Energieverbrauch mal Geschwindigkeit auszurechnen. ~~

## 6.6

Ihr Projekt sollte nun alle Funktionalität haben, dass man es benutzen kann. Allerdings gibt es sicher noch Teile, welche "schöner" werden können: Layout, Code, Architektur... beschreiben Sie kurz den Stand Ihres Projekts, und leiten Sie daraus 6 solche "kosmetischen" AP für den 6.6 und den 13.6 ab.

Mein Projekt ist vollständig verbunden. Es gibt eine Webseite, eine ASP.NET API und eine SQL-Datenbank. Web-Page hat klar eingeteilte Zonen, aber der Text ist komisch verschoben. Die API hat noch kommentaren, und unklar aufgeteilten Klassen und Ordnerstruktur. Und die SQL-Datenbank scheint zu viel Tabellen zu haben, als tatsächlich doch benutzen werde. Nun bekomme ich Ideen, was verändert sein konnte.

- [x] Erstelle neuer Kontroller, um damit Benutzer eigene Maschinen erstellen kann.

- [x] Die Webseite ergänze ich mit einer Section unter Submit Button, wo Benutzer die Daten für neue Maschine eingeben kann.

- [ ] Webseite: Die Eingabefeldern werden nach links verschoben und die Name wird oben gezeigt.
- [ ] Webseite: Unten der Eingabenfeldern werden für "Ausgabe Fabriken" Kennzahlen als Diagrammen wie ZB Pie chart gezeigt.

✍️ Heute habe ich das Projekt repariert. Am Anfang gab es einen API-Problem und stellte sich heraus, dass es noch nicht mit Datenbank verbunden war. Danach habe ich das ganze Datenbank von neu gemacht, aber es war leicht, denn ich die Scripts hatte. Schlussendlich habe ich an den Front-End gearbeitet, wo nun eine weiter Sektion gibt. In der neuer Sektion habe ich ein Button eingebaut, der ähnlich wie oben die Daten an den API und Datenbank schickt. Weil ich am Amfang problem behebte, gab hier keine Probleme. (86)

☝️  Vergessen Sie nicht, den Code von heute auf github hochzuladen.

## 13.6

- [ ] Webseite: Unten der Eingabenfeldern werden für "Ausgabe Fabriken" Kennzahlen als Diagrammen wie ZB Pie chart gezeigt.
- [x] Webseite: Die Eingabefeldern werden nach links verschoben und die Name wird oben gezeigt.

✍️ Heute habe ich an die Webseite gearbeitet. Zuerst habe ich das Titeln von Boxes nach oben verschoben. Dann konnte ich die Eingaben nach links verschieben. Danach habe ich Titeln in die Dropdown liste geändert. Da «Submit» Knopf nicht seine Funktion machen kann, musste ich auch die Änderungen in C# implementieren. 

Heute habe ich, glaube ich, mehr gelöscht als geschrieben, da ich die Funktion des Buttons von einem Austausch mit der API auf eine reine Client-seitige Änderung umstellen möchte.

☝️  Vergessen Sie nicht, den Code von heute auf github hochzuladen.

## 20.6

Was fehlt Ihrem fertigen Projekt noch, um es auszuliefern? Reicht die Zeit für ein *nice-to-have feature*?

- [x] Maschinen von Datenbank laden, damit sie in dropdown liste gezeigt werden. 
- [ ] Pie-Chart zeigen, wie gut ist gerade die Nutzung und empfehlungen geben. 

Bereiten Sie in den verbleibenden 2 AP Ihre Präsentation vor

- [x] Materialien der Präsentation vorbereiten
- [x] Präsentation üben

✍️ Heute habe ich am bisschen UI korrigiert. Es werden auch nun selbst hergestellte Maschinen gezeigt. Nach einer langen Forschung habe ich erfahren, was noch es braucht, um später die Berechnung zu ermöglichen. Dann habe ich die Datenbank und API aktualisiert. Am Ende habe ein einfaches Powerpoint gemacht. Zunächst wird Factorio vorgestellt und mein Problem beschrieben. Dann wird erklärt, wie meine Applikation als erster Schritt zur Lösung der Probleme dienen kann. (70)

☝️  Vergessen Sie nicht, die Unterlagen für Ihre Präsentation auf github hochzuladen.

## 27.6
