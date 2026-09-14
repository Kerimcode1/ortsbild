/* ORTSBILD — Website & Agentur-Dashboard */
(function(){
'use strict';

/* ============================================================
   1 · Stammdaten
   ============================================================ */

var AGENTUR = {
  name:'ORTSBILD',
  claim:'Digitales Ortsbild',
  inhaber:'Lokman Kerim Türkmen',
  strasse:'Burghard-Breitner-Straße 11',
  plz:'6020',
  ort:'Innsbruck',
  land:'Österreich',
  mail:'ortsbild@outlook.com',
  tel:'+43 676 4422292',
  telRaw:'+436764422292',
  uid:'ATU79519969',
  uidDe:'DE363655440',
  gericht:'Bezirkshauptmannschaft Innsbruck',
  kammer:'Wirtschaftskammer Tirol'
};

var DEMO_CODE = 'ORTSBILD2026';

var SERVICES = [
  { t:'Website & Gestaltung',
    d:'Eine mehrseitige Website, die für Ihren Betrieb gebaut wird — nicht aus einem Baukasten zusammengeklickt.',
    li:['Individuelles Design statt Vorlage','Für Handy, Tablet und PC optimiert','Eigene Bildsprache und Texte','Schnelle Ladezeiten'] },
  { t:'Termine & Anfragen',
    d:'Interessenten sollen buchen können, wenn sie gerade Lust haben — auch um 22 Uhr, wenn Ihr Telefon längst aus ist.',
    li:['Online-Terminanfrage','Kontaktformular mit Vorauswahl','Automatische Bestätigung','Alles an einem Ort gesammelt'] },
  { t:'Ihr Kundenbereich',
    d:'Ein passwortgeschützter Bereich, in dem Sie Buchungen, Anfragen und Kunden sehen und verwalten. Ohne Technikkenntnisse.',
    li:['Buchungen und Kalender','Anfragen mit Status','Einfache Kundenkartei','Rechnungen als PDF'] },
  { t:'Technik & Betrieb',
    d:'Domain, Hosting, Verschlüsselung, Datenschutz. Den Teil, der niemandem Spaß macht, übernehmen wir vollständig.',
    li:['Eigene Domain auf Ihren Namen','Server in der EU, DSGVO-konform','SSL-Verschlüsselung inklusive','Wartung und Updates optional'] }
];

var LEISTUNG_DETAIL = [
  { t:'Struktur, die verkauft',
    d:'Wir bauen keine Bildergalerie, sondern einen Weg: Wer auf Ihrer Seite landet, versteht in wenigen Sekunden, was Sie machen, für wen, was es kostet und wie man Sie erreicht. Jede Seite hat genau eine Aufgabe.' },
  { t:'Texte, die nach Ihnen klingen',
    d:'Sie erzählen uns im Erstgespräch, wie Sie mit Kunden reden. Daraus schreiben wir die Texte. Sie bekommen sie zur Freigabe und können jeden Satz ändern.' },
  { t:'Bilder, die zum Betrieb passen',
    d:'Wenn Sie eigene Fotos haben, verwenden wir die. Wenn nicht, suchen wir lizenzfreies Bildmaterial, das zu Ihrer Branche passt — und sagen Ihnen ehrlich, wann sich ein Fotograf wirklich lohnt.' },
  { t:'Lokal gefunden werden',
    d:'Saubere Seitentitel, Beschreibungen, Öffnungszeiten und Standortdaten, damit Google Ihren Betrieb der richtigen Region zuordnet. Wir richten außerdem Ihr Google-Unternehmensprofil mit ein.' },
  { t:'Rechtliches vorbereitet',
    d:'Impressum, Datenschutzerklärung und AGB werden als Entwurf mitgeliefert und mit Ihren Daten befüllt. Die inhaltliche Verantwortung bleibt bei Ihnen — wir empfehlen eine Prüfung über die WKO oder Ihre Anwältin.' },
  { t:'Übergabe, die hält',
    d:'Nach dem Live-Gang bekommen Sie eine kurze Einschulung, Ihre Zugangsdaten und 14 Tage Nachbetreuung. Danach entscheiden Sie, ob Sie uns weiter buchen oder allein weitermachen.' }
];

/* Bewusst als Branchen-Beispiele benannt, nicht als konkrete Firmen — bis echte,
   öffentlich erreichbare Live-Versionen existieren (später, separates Vorhaben).
   live:false = noch kein eigenes Hosting. Sobald eine Seite auf Vercel umgezogen ist:
   live:true setzen und url auf die echte Adresse aendern. */
var REFERENZEN = [
  { key:'handwerk', name:'Handwerk & Sanierung', branche:'Beispiel für Handwerksbetriebe',
    img:'img/ref-handwerk.jpg', accent:'#E07A2F',
    d:'Sanierung, Elektro und Innenausbau. Mit Kostenrechner, damit Interessenten schon vor dem Anruf eine Hausnummer haben — und einem 3D-Element im Hero.',
    tags:['Kostenrechner','3D-Element','Terminbuchung','Kundenbereich'],
    live:false, url:'' },
  { key:'kosmetik', name:'Kosmetik & Med-Spa', branche:'Beispiel für Kosmetikstudios',
    img:'img/ref-spa.jpg', accent:'#B08D57',
    d:'Für Studios im gehobenen Segment. Mit Hautanalyse-Fragebogen, Mitgliedschaftsmodellen und einer Preisliste, aus der direkt gebucht wird.',
    tags:['Hautanalyse','Mitgliedschaften','Preisliste','Kundenbereich'],
    live:false, url:'' },
  { key:'praxis', name:'Zahnarzt- & Gesundheitspraxen', branche:'Beispiel für Praxen',
    img:'img/ref-dental.jpg', accent:'#2A9D8F',
    d:'Ruhiger Auftritt, klare Leistungsübersicht, Angstpatienten-Bereich und Online-Terminanfrage rund um die Uhr.',
    tags:['Terminanfrage','Leistungskatalog','Team-Seite','Kundenbereich'],
    live:false, url:'' }
];

var ABLAUF = [
  { t:'Erstgespräch', z:'15 Minuten',
    d:'Wir hören zu: Was macht Ihr Betrieb, wer sind Ihre Kunden, was nervt Sie aktuell am meisten. Kostenlos und unverbindlich, telefonisch oder vor Ort.' },
  { t:'Angebot zum Festpreis', z:'innerhalb 48 h',
    d:'Sie bekommen schriftlich, was Sie bekommen und was es kostet. Ein Preis, keine Stundenabrechnung, keine Überraschung am Schluss.' },
  { t:'Inhalte sammeln', z:'Tag 1',
    d:'Wir schicken Ihnen eine kurze Liste: Logo, Fotos, Firmendaten, Leistungen, Öffnungszeiten. Was fehlt, erarbeiten wir gemeinsam.' },
  { t:'Aufbau', z:'Tag 2–5',
    d:'Wir bauen Ihre Seite. Sie müssen in dieser Zeit nichts tun — außer weiterarbeiten wie bisher.' },
  { t:'Vorschau & Korrektur', z:'Tag 5–6',
    d:'Sie bekommen einen geschützten Vorschaulink. Eine vollständige Korrekturrunde ist im Preis enthalten.' },
  { t:'Freigabe & Live-Gang', z:'Tag 7',
    d:'Erst wenn Sie schriftlich freigeben, geht die Seite unter Ihrer Domain online. Vorher passiert gar nichts.' },
  { t:'Einschulung & Betreuung', z:'Tag 7–8',
    d:'20 Minuten Einschulung für Ihren Kundenbereich, dann 14 Tage Nachbetreuung inklusive. Danach optional Wartung.' }
];

var TIERS = [
  { key:'basis', name:'Basis', who:'Für Betriebe, die endlich online gefunden werden wollen.',
    ab:'3.800', feature:false,
    li:['Mehrseitige Website nach Maß','Mobil, Tablet und Desktop','Kontaktformular direkt an Ihr Postfach','Google-Unternehmensprofil eingerichtet','Impressum, Datenschutz, AGB als Entwurf','Domain und Hosting eingerichtet','Eine Korrekturrunde inklusive','14 Tage Nachbetreuung'] },
  { key:'plus', name:'Plus', who:'Für Betriebe mit laufenden Terminen und Anfragen.',
    ab:'6.000', feature:true,
    li:['Alles aus dem Basis-Paket','Kundenbereich mit eigenem Login','Buchungen und Kalenderübersicht','Anfragen mit Status und Verlauf','Einfache Kundenkartei','Rechnungen als PDF erstellen','Statistik über Anfragen und Umsatz','Zwei Korrekturrunden','30 Tage Nachbetreuung'] }
];

var VERSPRECHEN = [
  { t:'Festpreis, schriftlich', d:'Der Preis im Angebot ist der Preis auf der Rechnung. Keine Stundenabrechnung, keine Nachforderung.' },
  { t:'Nichts geht ohne Ihre Freigabe', d:'Die Seite geht erst online, wenn Sie sie gesehen und schriftlich freigegeben haben.' },
  { t:'Ein Ansprechpartner', d:'Sie reden mit derselben Person vom Erstgespräch bis nach dem Live-Gang. Kein Ticketsystem, kein Callcenter.' },
  { t:'Domain und Daten gehören Ihnen', d:'Die Domain läuft auf Ihren Namen. Wenn Sie gehen wollen, bekommen Sie alles — ohne Diskussion.' }
];

var FAQ = [
  { q:'Wie lange dauert es, bis meine Website online ist?',
    a:'In der Regel 7 bis 10 Werktage ab dem Moment, in dem wir Ihre Inhalte haben. Der längste Teil sind meist die Fotos und Texte von Ihrer Seite — je schneller die da sind, desto schneller sind wir fertig.' },
  { q:'Was genau muss ich liefern?',
    a:'Logo (falls vorhanden), Fotos von Betrieb und Arbeiten, Ihre Leistungen mit ungefähren Preisen, Öffnungszeiten und die Firmendaten fürs Impressum. Wir schicken Ihnen dafür eine einfache Liste zum Abhaken. Wenn etwas fehlt, finden wir eine Lösung.' },
  { q:'Wem gehört die Website und die Domain?',
    a:'Ihnen. Die Domain wird auf Ihren Namen registriert, Sie sind Inhaber. Nach Bezahlung gehören Ihnen alle Inhalte und die fertige Seite. Sie sind an uns nicht gebunden.' },
  { q:'Was kostet es laufend?',
    a:'Die Domain kostet je nach Endung etwa 10 bis 20 Euro im Jahr. Hosting ist im ersten Jahr enthalten. Danach können Sie unser Wartungspaket ab 49 Euro im Monat buchen — müssen Sie aber nicht.' },
  { q:'Kann ich später selbst Texte ändern?',
    a:'Kleine Änderungen wie Öffnungszeiten, Preise oder ein neues Foto können Sie im Kundenbereich selbst machen, wenn Sie das Plus-Paket haben. Größere Umbauten übernehmen wir — im Wartungspaket ist ein Kontingent dafür enthalten.' },
  { q:'Wie ist das mit Datenschutz und DSGVO?',
    a:'Die Server stehen in der EU. Wir setzen keine Tracking-Werkzeuge ein, ohne dass Ihre Besucher zugestimmt haben. Impressum, Datenschutzerklärung und AGB liefern wir als Entwurf mit Ihren Daten befüllt — die rechtliche Verantwortung dafür liegt allerdings bei Ihnen als Betreiber, deshalb empfehlen wir eine kurze Prüfung über die Wirtschaftskammer.' },
  { q:'Arbeitet ihr auch außerhalb von Tirol?',
    a:'Ja. Wir sitzen in Innsbruck und arbeiten in ganz Österreich, Deutschland und der Schweiz. Der gesamte Ablauf funktioniert per Telefon, Video und E-Mail — vor Ort kommen wir gerne, wenn es sich anbietet.' },
  { q:'Ich habe schon eine Website. Lohnt sich das trotzdem?',
    a:'Kommt darauf an, was sie leistet. Wenn über Ihre Seite regelmäßig Anfragen hereinkommen, lassen Sie sie. Wenn sie nur existiert, damit es sie gibt, dann ist das genau unser Thema. Sagen Sie uns im Erstgespräch die Adresse, wir schauen sie uns vorher an.' }
];

/* ============================================================
   2 · Hilfsfunktionen
   ============================================================ */

function esc(s){
  return String(s == null ? '' : s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}
function eur(n){
  return new Intl.NumberFormat('de-AT',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n);
}
function dat(iso){
  if(!iso) return '—';
  var d = new Date(iso);
  if(isNaN(d)) return '—';
  return d.toLocaleDateString('de-AT',{day:'2-digit',month:'2-digit',year:'numeric'});
}
function datTime(iso, time){
  if(!iso) return '—';
  var s = dat(iso);
  if(time) s += ', ' + time + ' Uhr';
  return s;
}
function todayISO(){ return new Date().toISOString().slice(0,10); }
function uid(){ return 'x' + Date.now().toString(36) + Math.random().toString(36).slice(2,7); }

function logoMark(){
  return '<svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">'
    + '<rect x=".8" y=".8" width="38.4" height="38.4" rx="2" fill="none" stroke="currentColor" stroke-opacity=".25" stroke-width="1.2"/>'
    + '<path d="M5 28.6 L12.8 15 L18.4 22.6 L24.8 11 L35 28.6 Z" fill="currentColor" fill-opacity=".30"/>'
    + '<path d="M13.6 28.6 V21.2 L19.2 16.8 L24.8 21.2 V28.6 Z" fill="currentColor" fill-opacity=".70"/>'
    + '<rect x="17.5" y="22.2" width="3.4" height="3.6" fill="#F0B45C"/>'
    + '<rect x="5" y="28.6" width="30" height="1.7" fill="currentColor" fill-opacity=".5"/>'
    + '</svg>';
}

var ROUTES = [
  ['', 'Start'], ['leistungen','Leistungen'], ['referenzen','Referenzen'],
  ['ablauf','Ablauf'], ['preise','Preise'], ['ueber-uns','Über uns'], ['kontakt','Kontakt']
];

function currentRoute(){
  var h = (location.hash || '#/').replace(/^#\/?/,'');
  return h.split('?')[0];
}
function queryOf(){
  var h = location.hash || '';
  var i = h.indexOf('?');
  if(i < 0) return {};
  var out = {};
  h.slice(i+1).split('&').forEach(function(p){
    if(!p) return;
    var kv = p.split('=');
    out[decodeURIComponent(kv[0])] = decodeURIComponent((kv[1]||'').replace(/\+/g,' '));
  });
  return out;
}

/* ============================================================
   3 · Lokaler Speicher (Demo-Daten des Agentur-Dashboards)
   ============================================================ */

var STORE = {
  get:function(k, fb){
    try{ var v = localStorage.getItem('ortsbild:'+k); return v ? JSON.parse(v) : fb; }
    catch(e){ return fb; }
  },
  set:function(k, v){
    try{ localStorage.setItem('ortsbild:'+k, JSON.stringify(v)); }catch(e){}
  }
};

var STATUS_LEAD = ['Neu','Mail gesendet','Angerufen','Termin','Angebot','Kunde','Abgesagt'];
var STATUS_PROJ = ['Onboarding','Aufbau','Vorschau','Freigabe','Live'];

function seed(){
  if(STORE.get('seeded')) return;
  STORE.set('leads', [
    {id:uid(), firma:'Tischlerei Aigner', branche:'Tischlerei', ort:'Hall in Tirol', tel:'+43 512 000 001', status:'Termin',   notiz:'Will Website mit Referenzgalerie. Rückruf Dienstag.', wv:'2026-09-15', angelegt:'2026-09-08'},
    {id:uid(), firma:'Elektro Steiner',   branche:'Elektrotechnik', ort:'Wattens', tel:'+43 512 000 002', status:'Angerufen', notiz:'Chef war im Außendienst, nochmal ab 17 Uhr probieren.', wv:'2026-09-14', angelegt:'2026-09-09'},
    {id:uid(), firma:'Physio am Inn',     branche:'Physiotherapie', ort:'Innsbruck', tel:'+43 512 000 003', status:'Angebot',  notiz:'Plus-Paket angefragt, Angebot verschickt.', wv:'2026-09-16', angelegt:'2026-09-05'},
    {id:uid(), firma:'Installateur Mayr', branche:'Installateur', ort:'Telfs', tel:'+43 512 000 004', status:'Mail gesendet', notiz:'Demo-Link Handwerk-Beispiel geschickt.', wv:'2026-09-15', angelegt:'2026-09-11'},
    {id:uid(), firma:'Friseur Kopfsache', branche:'Friseur', ort:'Schwaz', tel:'+43 512 000 005', status:'Neu', notiz:'Nur Instagram, keine Website.', wv:'2026-09-14', angelegt:'2026-09-12'},
    {id:uid(), firma:'Malerei Gruber',    branche:'Malerei', ort:'Kufstein', tel:'+43 512 000 006', status:'Abgesagt', notiz:'Hat Neffen, der das macht.', wv:'', angelegt:'2026-09-04'},
    {id:uid(), firma:'Dachdecker Pichler',branche:'Dachdecker', ort:'Imst', tel:'+43 512 000 007', status:'Neu', notiz:'', wv:'2026-09-16', angelegt:'2026-09-12'},
    {id:uid(), firma:'Zahnärzte Sonnberg',branche:'Zahnarzt', ort:'Kitzbühel', tel:'+43 512 000 008', status:'Kunde', notiz:'Zugesagt, Plus-Paket. Anzahlung erhalten.', wv:'', angelegt:'2026-08-28'}
  ]);
  STORE.set('kunden', [
    {id:uid(), firma:'Zahnärzte Sonnberg', ansprech:'Dr. Sonnberg', ort:'Kitzbühel', paket:'Plus', domain:'zahnaerzte-sonnberg.at', mrr:89, seit:'2026-09-01'},
    {id:uid(), firma:'Café Hauptplatz',    ansprech:'M. Ebner',    ort:'Rattenberg', paket:'Basis', domain:'cafe-hauptplatz.at', mrr:49, seit:'2026-07-15'}
  ]);
  STORE.set('projekte', [
    {id:uid(), kunde:'Zahnärzte Sonnberg', paket:'Plus',  status:'Aufbau',   start:'2026-09-09', live:'', fortschritt:45},
    {id:uid(), kunde:'Café Hauptplatz',    paket:'Basis', status:'Live',     start:'2026-07-16', live:'2026-07-28', fortschritt:100}
  ]);
  STORE.set('anfragen', [
    {id:uid(), name:'Andrea Lechner', mail:'a.lechner@example.at', firma:'Blumen Lechner', thema:'Basis-Paket', txt:'Wir hätten gern eine einfache Website mit Öffnungszeiten und Kontakt.', status:'Neu', am:'2026-09-12'},
    {id:uid(), name:'Josef Brunner',  mail:'j.brunner@example.at', firma:'Brunner Bau',    thema:'Plus-Paket',  txt:'Interessiert am Kundenbereich. Wann hätten Sie Zeit für ein Gespräch?', status:'Beantwortet', am:'2026-09-10'}
  ]);
  STORE.set('rechnungen', [
    {id:uid(), nr:'2026-014', kunde:'Zahnärzte Sonnberg', betrag:3750, status:'Bezahlt', datum:'2026-09-02', zweck:'Anzahlung Plus-Paket (50 %)'},
    {id:uid(), nr:'2026-015', kunde:'Café Hauptplatz',    betrag:4200, status:'Bezahlt', datum:'2026-07-29', zweck:'Basis-Paket, Restzahlung'},
    {id:uid(), nr:'2026-016', kunde:'Café Hauptplatz',    betrag:49,   status:'Offen',   datum:'2026-09-01', zweck:'Wartung September'}
  ]);
  STORE.set('seeded', true);
}

/* ============================================================
   4 · Seiten-Bausteine
   ============================================================ */

function header(){
  var r = currentRoute();
  var links = ROUTES.map(function(x){
    return '<a href="#/'+x[0]+'" class="'+(r === x[0] ? 'on' : '')+'">'+esc(x[1])+'</a>';
  }).join('');
  return ''
  + '<header class="site-head" id="siteHead"><div class="wrap head-in">'
  +   '<a href="#/" class="brand">'+logoMark()+'<span class="brand-txt">ORTS<em>BILD</em></span></a>'
  +   '<nav class="nav-main">'+links+'</nav>'
  +   '<div class="head-cta">'
  +     '<a href="#/kontakt" class="btn btn-glow btn-sm">Erstgespräch <span class="arr">&rarr;</span></a>'
  +     '<button class="burger" id="burger" aria-label="Menü öffnen">'
  +       '<svg width="18" height="12" viewBox="0 0 18 12" fill="none"><path d="M0 1h18M0 6h18M0 11h18" stroke="currentColor" stroke-width="1.4"/></svg>'
  +     '</button>'
  +   '</div>'
  + '</div></header>'
  + '<div class="drawer" id="drawer">'
  +   '<div class="drawer-top">'
  +     '<span class="brand">'+logoMark()+'<span class="brand-txt">ORTS<em>BILD</em></span></span>'
  +     '<button class="burger" id="drawerClose" aria-label="Menü schließen">'
  +       '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M1 1l13 13M14 1L1 14" stroke="currentColor" stroke-width="1.4"/></svg>'
  +     '</button>'
  +   '</div>'
  +   '<nav>'+links+'</nav>'
  +   '<div class="drawer-foot">'
  +     '<a href="tel:'+AGENTUR.telRaw+'" class="btn btn-glow">'+esc(AGENTUR.tel)+' anrufen</a>'
  +     '<a href="#/kontakt" class="btn btn-ghost">Kostenloses Erstgespräch</a>'
  +     '<a href="#/dashboard" class="btn btn-ghost">Agentur-Login</a>'
  +   '</div>'
  + '</div>';
}

function footer(){
  return ''
  + '<footer class="site-foot"><div class="wrap">'
  +   '<div class="foot-grid">'
  +     '<div>'
  +       '<span class="brand" style="margin-bottom:14px">'+logoMark()+'<span class="brand-txt">ORTS<em>BILD</em></span></span>'
  +       '<p style="max-width:34ch">Websites für Betriebe, die man kennen sollte. Aus Innsbruck, für Österreich, Deutschland und die Schweiz.</p>'
  +     '</div>'
  +     '<div><h5>Seiten</h5>'
  +       ROUTES.map(function(x){ return '<a href="#/'+x[0]+'">'+esc(x[1])+'</a>'; }).join('')
  +     '</div>'
  +     '<div><h5>Rechtliches</h5>'
  +       '<a href="#/impressum">Impressum</a><a href="#/datenschutz">Datenschutz</a><a href="#/agb">AGB</a>'
  +       '<a href="#/dashboard">Agentur-Login</a>'
  +     '</div>'
  +     '<div><h5>Kontakt</h5>'
  +       '<a href="tel:'+AGENTUR.telRaw+'">'+esc(AGENTUR.tel)+'</a>'
  +       '<a href="mailto:'+AGENTUR.mail+'">'+AGENTUR.mail+'</a>'
  +       '<p>'+esc(AGENTUR.strasse)+'<br>'+esc(AGENTUR.plz+' '+AGENTUR.ort)+'<br>'+esc(AGENTUR.land)+'</p>'
  +     '</div>'
  +   '</div>'
  +   '<div class="foot-bot">'
  +     '<span>&copy; '+new Date().getFullYear()+' '+esc(AGENTUR.name)+' · '+esc(AGENTUR.inhaber)+'</span>'
  +     '<span>UID '+esc(AGENTUR.uid)+'</span>'
  +   '</div>'
  + '</div></footer>';
}

function check(){
  return '<svg width="15" height="15" viewBox="0 0 15 15" fill="none"><path d="M2 8l4 4 7-9" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>';
}

/* ---------- Startseite ---------- */

function pageHome(){
  var stats = [
    ['7–10','Werktage bis live'],
    ['2','Pakete, ein Festpreis'],
    ['EU','Server, DSGVO-konform'],
    ['24 h','Antwortzeit im Projekt']
  ];
  var branchen = ['Handwerk','Zahnarztpraxis','Kosmetikstudio','Elektrotechnik','Installateur','Physiotherapie','Tischlerei','Friseur','Malerei','Steuerberatung','Gastronomie','Dachdecker'];
  var tick = branchen.map(function(b){ return '<span>'+esc(b)+'</span>'; }).join('');

  return ''
  /* Hero */
  + '<section class="hero">'
  +   '<div class="hero-bg" id="heroVisual"><div class="hero-photo"></div><canvas id="valleyCanvas"></canvas></div>'
  +   '<div class="hero-veil"></div>'
  +   '<div class="hero-in wrap" id="heroCopy">'
  +     '<div class="eyebrow">Webdesign aus Innsbruck · Österreich · Deutschland · Schweiz</div>'
  +     '<h1 class="h-xl">Gut zu sein reicht nicht.<br>Man muss Sie auch <span class="lit">finden</span>.</h1>'
  +     '<p class="lede">Wir bauen Websites für Handwerksbetriebe, Praxen und Studios — mit Terminbuchung, Anfragen-Verwaltung und allem, was im Alltag wirklich gebraucht wird. Festpreis, in 7 bis 10 Werktagen fertig.</p>'
  +     '<div class="hero-cta">'
  +       '<a href="#/kontakt" class="btn btn-glow">Kostenloses Erstgespräch <span class="arr">&rarr;</span></a>'
  +       '<a href="#/referenzen" class="btn btn-ghost">Branchenbeispiele ansehen</a>'
  +     '</div>'
  +   '</div>'
  + '</section>'
  + '<div class="hero-strip"><div class="wrap">'
  +   stats.map(function(s){ return '<div class="hstat"><b>'+esc(s[0])+'</b><span>'+esc(s[1])+'</span></div>'; }).join('')
  + '</div></div>'

  /* Ticker */
  + '<div class="ticker"><div class="ticker-row">'+tick+tick+'</div></div>'

  /* Problem */
  + '<section class="band band-light band-pad">'
  +   '<div class="wrap">'
  +     '<div class="sec-head rv">'
  +       '<div><div class="eyebrow">Das eigentliche Problem</div>'
  +       '<h2 class="h-lg">Niemand zweifelt an Ihrer Arbeit.<br>Man kommt nur nicht bis zu Ihnen.</h2></div>'
  +       '<p class="lede">Drei Dinge, die wir in fast jedem Erstgespräch hören — und die sich alle mit derselben Sache lösen lassen.</p>'
  +     '</div>'
  +     '<div class="grid g3">'
  +       '<div class="fact rv"><b>01</b><p><strong>&bdquo;Uns findet man über Mundpropaganda.&ldquo;</strong><br>Das stimmt — bei den Kunden, die Sie schon haben. Wer neu zuzieht oder Sie noch nicht kennt, sucht zuerst online. Steht dort nichts, entscheidet die Konkurrenz das Gespräch.</p><span class="src">Sichtbarkeit</span></div>'
  +       '<div class="fact rv"><b>02</b><p><strong>&bdquo;Anfragen kommen eh übers Telefon.&ldquo;</strong><br>Und gehen im Alltag verloren: Anruf auf der Baustelle, Zettel im Auto, Rückruf am Abend vergessen. Was nicht erfasst wird, wird kein Auftrag.</p><span class="src">Anfragen</span></div>'
  +       '<div class="fact rv"><b>03</b><p><strong>&bdquo;Wir haben eine Seite, die reicht.&ldquo;</strong><br>Eine Seite, die nur existiert, verkauft nichts. Ohne klare Leistungen, Preise und eine Möglichkeit zu buchen, ist sie eine digitale Visitenkarte — mehr nicht.</p><span class="src">Wirkung</span></div>'
  +     '</div>'
  +   '</div>'
  + '</section>'

  /* Leistungen */
  + '<section class="band band-night band-pad">'
  +   '<div class="wrap">'
  +     '<div class="sec-head rv">'
  +       '<div><div class="eyebrow">Was Sie bekommen</div><h2 class="h-lg">Vier Bausteine, ein fertiges Paket.</h2></div>'
  +       '<p class="lede">Sie bekommen nicht nur eine Seite, sondern das System dahinter — und niemanden, der Ihnen danach einen Technikvertrag aufschwatzt.</p>'
  +     '</div>'
  +     '<div class="grid g4">'
  +       SERVICES.map(function(s,i){
            return '<div class="svc rv"><span class="no">0'+(i+1)+'</span><h3>'+esc(s.t)+'</h3><p>'+esc(s.d)+'</p>'
              + '<ul>'+s.li.map(function(l){ return '<li>'+esc(l)+'</li>'; }).join('')+'</ul></div>';
          }).join('')
  +     '</div>'
  +     '<div style="margin-top:30px"><a href="#/leistungen" class="btn btn-ghost">Alle Leistungen im Detail <span class="arr">&rarr;</span></a></div>'
  +   '</div>'
  + '</section>'

  /* Tiefen-Parallax */
  + '<section class="depth" id="depthSec">'
  +   '<div class="depth-layer depth-back" id="dpBack"></div>'
  +   '<div class="depth-layer depth-mid" id="dpMid"></div>'
  +   '<div class="depth-veil"></div>'
  +   '<div class="depth-copy"><div class="wrap">'
  +     '<div class="eyebrow">Warum wir ORTSBILD heißen</div>'
  +     '<h2 class="h-lg">Das Ortsbild ist das, was man von einem Ort sieht.<br>Heute entsteht es im Netz.</h2>'
  +     '<p class="lede">Früher hat der Schriftzug über der Werkstatt entschieden, wer hereinkommt. Heute entscheidet, was Google zeigt, wenn jemand Ihren Beruf und Ihren Ort eintippt. Wir kümmern uns um genau diesen Teil.</p>'
  +   '</div></div>'
  + '</section>'

  /* Referenzen */
  + '<section class="band band-light band-pad">'
  +   '<div class="wrap">'
  +     '<div class="sec-head rv">'
  +       '<div><div class="eyebrow">Referenzen</div><h2 class="h-lg">Was wir bauen —<br>an drei Branchenbeispielen.</h2></div>'
  +       '<p class="lede">Vollständig gebaute Systeme samt Kundenbereich, keine Mockups. So sieht der Umfang aus, den Sie für Ihren Betrieb bekommen.</p>'
  +     '</div>'
  +     '<div class="grid g3">'+REFERENZEN.map(refCard).join('')+'</div>'
  +     '<p class="lede rv" style="margin-top:34px;max-width:64ch">Diese drei Branchen sind nur der Anfang — wir bauen und programmieren Websites für jede Nische, von der Gastronomie bis zur Steuerberatung.</p>'
  +   '</div>'
  + '</section>'

  /* Software */
  + '<section class="band band-dark band-pad">'
  +   '<div class="wrap">'
  +     '<div class="split wide-l">'
  +       '<div class="rv">'
  +         '<div class="eyebrow">Der Kundenbereich</div>'
  +         '<h2 class="h-lg">Ihre Anfragen an einem Ort.<br>Nicht auf fünf Zetteln.</h2>'
  +         '<p class="lede" style="margin-top:18px">Im Plus-Paket bekommen Sie einen passwortgeschützten Bereich. Dort sehen Sie, wer gebucht hat, welche Anfragen offen sind und was noch zu tun ist. Sie öffnen ihn im Browser — am Handy legen Sie sich das Symbol einfach auf den Startbildschirm, dann ist es wie eine App.</p>'
  +         '<div class="trust-row" style="margin-top:24px">'
  +           ['Buchungen & Kalender','Anfragen mit Status','Kundenkartei','Rechnungen als PDF','Statistik'].map(function(t){
               return '<span class="trust-chip">'+check()+esc(t)+'</span>';
             }).join('')
  +         '</div>'
  +         '<div style="margin-top:26px"><a href="#/kontakt?paket=Live-Demo" class="btn btn-glow">Live-Demo zeigen lassen <span class="arr">&rarr;</span></a></div>'
  +       '</div>'
  +       '<div class="soft-shell rv">'
  +         '<div class="soft-bar"><i></i><i></i><i></i><span class="url">ihrbetrieb.at/dashboard</span></div>'
  +         '<div class="soft-body">'
  +           '<div class="soft-side">'
  +             '<a class="on">Übersicht</a><a>Kalender</a><a>Buchungen</a><a>Anfragen</a><a>Kunden</a><a>Rechnungen</a>'
  +           '</div>'
  +           '<div class="soft-main">'
  +             '<div class="kpi-row">'
  +               '<div class="kpi"><span>Offen</span><b>7</b></div>'
  +               '<div class="kpi"><span>Diese Woche</span><b>12</b></div>'
  +               '<div class="kpi"><span>Neue Kunden</span><b class="up">+4</b></div>'
  +               '<div class="kpi"><span>Umsatz</span><b>4.180</b></div>'
  +             '</div>'
  +             '<div class="mini-table">'
  +               '<div class="mini-row"><span class="nm">Anfrage Badsanierung</span><span class="br">heute, 08:14</span><span class="pillx p-new">Neu</span></div>'
  +               '<div class="mini-row"><span class="nm">Termin Fr. Moser</span><span class="br">Fr, 14:30</span><span class="pillx p-run">Bestätigt</span></div>'
  +               '<div class="mini-row"><span class="nm">Angebot Elektroinstallation</span><span class="br">gestern</span><span class="pillx p-won">Gesendet</span></div>'
  +             '</div>'
  +           '</div>'
  +         '</div>'
  +       '</div>'
  +     '</div>'
  +   '</div>'
  + '</section>'

  /* Ablauf */
  + '<section class="band band-light band-pad">'
  +   '<div class="wrap">'
  +     '<div class="sec-head rv">'
  +       '<div><div class="eyebrow">So läuft es ab</div><h2 class="h-lg">Sieben Schritte.<br>Sie tun davon zwei.</h2></div>'
  +       '<p class="lede">Der ganze Ablauf ist darauf ausgelegt, dass Sie so wenig Zeit wie möglich investieren müssen — Sie haben schließlich einen Betrieb zu führen.</p>'
  +     '</div>'
  +     '<div class="steps">'
  +       ABLAUF.map(function(s,i){
            return '<div class="step rv"><span class="n">'+(i<9?'0':'')+(i+1)+'</span>'
              + '<h4>'+esc(s.t)+' <span style="font-family:var(--f-mono);font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-faint);display:block;margin-top:5px;font-weight:400">'+esc(s.z)+'</span></h4>'
              + '<p>'+esc(s.d)+'</p></div>';
          }).join('')
  +     '</div>'
  +   '</div>'
  + '</section>'

  /* Preise */
  + '<section class="band band-light band-pad" style="padding-top:0">'
  +   '<div class="wrap">'
  +     '<div class="sec-head rv">'
  +       '<div><div class="eyebrow">Preise</div><h2 class="h-lg">Zwei Pakete. Ein Festpreis.</h2></div>'
  +       '<p class="lede">Der Preis hängt vom Umfang ab — nicht davon, wie lange wir brauchen. Was im Angebot steht, steht auch auf der Rechnung.</p>'
  +     '</div>'
  +     '<div class="grid g2">'+TIERS.map(tierCard).join('')+'</div>'
  +     addonBox()
  +   '</div>'
  + '</section>'

  /* Versprechen */
  + '<section class="band band-night band-pad">'
  +   '<div class="wrap">'
  +     '<div class="sec-head rv">'
  +       '<div><div class="eyebrow">Unser Versprechen</div><h2 class="h-lg">Vier Dinge, auf die Sie sich verlassen können.</h2></div>'
  +     '</div>'
  +     '<div class="grid g4">'
  +       VERSPRECHEN.map(function(v,i){
            return '<div class="svc rv"><span class="no">0'+(i+1)+'</span><h3>'+esc(v.t)+'</h3><p>'+esc(v.d)+'</p></div>';
          }).join('')
  +     '</div>'
  +     '<div class="quote rv" style="margin-top:44px;max-width:62ch">'
  +       '<p>&bdquo;Ich habe zu viele Betriebe gesehen, die hervorragende Arbeit machen und trotzdem übersehen werden. Genau das ist unser Job: dass man Sie findet, bevor man die Konkurrenz findet.&ldquo;</p>'
  +       '<div class="by">'+esc(AGENTUR.inhaber)+' · Gründer, ORTSBILD</div>'
  +     '</div>'
  +   '</div>'
  + '</section>'

  /* FAQ */
  + '<section class="band band-light band-pad">'
  +   '<div class="wrap" style="max-width:900px">'
  +     '<div class="eyebrow rv">Häufige Fragen</div>'
  +     '<h2 class="h-lg rv" style="margin-bottom:34px">Was uns am Telefon am häufigsten gefragt wird.</h2>'
  +     '<div class="faq">'+FAQ.map(function(f){
            return '<details><summary>'+esc(f.q)+'</summary><div class="ans">'+esc(f.a)+'</div></details>';
          }).join('')+'</div>'
  +   '</div>'
  + '</section>'

  + ctaBand();
}

function refCard(r){
  return '<article class="ref rv">'
    + '<div class="ref-img" style="background-image:url(\''+r.img+'\')">'
    +   '<span class="ref-chip" style="background:'+r.accent+'">Branchenbeispiel</span>'
    + '</div>'
    + '<div class="ref-body">'
    +   '<h3>'+esc(r.name)+'</h3>'
    +   '<div class="ref-meta">'+esc(r.branche)+'</div>'
    +   '<p>'+esc(r.d)+'</p>'
    +   '<div class="ref-tags">'+r.tags.map(function(t){ return '<span>'+esc(t)+'</span>'; }).join('')+'</div>'
    +   (r.live
          ? '<a class="ref-link" href="'+r.url+'" target="_blank" rel="noopener">Live ansehen <span class="arr">&rarr;</span></a>'
          : '')
    + '</div></article>';
}

function tierCard(t){
  return '<div class="tier rv '+(t.feature?'feature':'')+'">'
    + (t.feature ? '<span class="tag">Empfohlen</span>' : '')
    + '<h3>'+esc(t.name)+'</h3>'
    + '<p class="who">'+esc(t.who)+'</p>'
    + '<div class="amt">ab '+esc(t.ab)+' &euro;<small>einmalig, netto · Festpreis laut Angebot</small></div>'
    + '<ul>'+t.li.map(function(l){ return '<li>'+check()+'<span>'+esc(l)+'</span></li>'; }).join('')+'</ul>'
    + '<a class="btn '+(t.feature?'btn-glow':'btn-ink')+'" href="#/kontakt?paket='+encodeURIComponent(t.name)+'">'+esc(t.name)+'-Paket anfragen</a>'
    + '</div>';
}

function addonBox(){
  return '<div class="addon rv">'
    + '<div><b>Wartung & Betreuung — 49 bis 89 &euro; pro Monat</b>'
    + '<p>Hosting, Sicherheitsupdates, Änderungen an Texten und Bildern, technischer Support. Optional zu beiden Paketen, jederzeit monatlich kündbar.</p></div>'
    + '<a href="#/kontakt?paket=Wartung" class="btn btn-ghost btn-sm">Anfragen</a>'
    + '</div>';
}

function ctaBand(){
  return '<section class="band band-dark band-pad">'
    + '<div class="wrap" style="text-align:center;max-width:760px">'
    +   '<div class="eyebrow rv" style="justify-content:center">Nächster Schritt</div>'
    +   '<h2 class="h-lg rv">15 Minuten am Telefon.<br>Danach wissen Sie, ob es passt.</h2>'
    +   '<p class="lede rv" style="margin:18px auto 0">Kein Verkaufsgespräch mit Vertrag am Ende. Wir hören uns an, was Sie machen, und sagen Ihnen ehrlich, ob und wie sich eine Website für Sie rechnet.</p>'
    +   '<div class="rv" style="margin-top:30px;display:flex;gap:12px;justify-content:center;flex-wrap:wrap">'
    +     '<a href="#/kontakt" class="btn btn-glow">Erstgespräch vereinbaren <span class="arr">&rarr;</span></a>'
    +     '<a href="tel:'+AGENTUR.telRaw+'" class="btn btn-ghost">'+esc(AGENTUR.tel)+'</a>'
    +   '</div>'
    + '</div></section>';
}

/* ---------- Unterseiten ---------- */

function pageLeistungen(){
  return subHead('Leistungen','Alles, was zu einer Website gehört — und vieles, woran man vorher nicht denkt.',
      'Wir liefern nicht nur Gestaltung. Wir liefern den kompletten Weg von &bdquo;wir hätten gern eine Website&ldquo; bis &bdquo;die Seite läuft und bringt Anfragen&ldquo;.')
  + '<section class="band band-night band-pad">'
  +   '<div class="wrap"><div class="grid g4">'
  +     SERVICES.map(function(s,i){
          return '<div class="svc rv"><span class="no">0'+(i+1)+'</span><h3>'+esc(s.t)+'</h3><p>'+esc(s.d)+'</p>'
            + '<ul>'+s.li.map(function(l){ return '<li>'+esc(l)+'</li>'; }).join('')+'</ul></div>';
        }).join('')
  +   '</div></div>'
  + '</section>'
  + '<section class="band band-light band-pad">'
  +   '<div class="wrap">'
  +     '<div class="sec-head rv"><div><div class="eyebrow">Im Detail</div><h2 class="h-lg">Woran wir arbeiten,<br>während Sie arbeiten.</h2></div></div>'
  +     '<div class="steps">'
  +       LEISTUNG_DETAIL.map(function(s,i){
            return '<div class="step rv"><span class="n">'+(i<9?'0':'')+(i+1)+'</span><h4>'+esc(s.t)+'</h4><p>'+esc(s.d)+'</p></div>';
          }).join('')
  +     '</div>'
  +   '</div>'
  + '</section>'
  + '<section class="band band-dark band-pad"><div class="wrap"><div class="split">'
  +   '<div class="split-img rv" style="background-image:url(\'img/studio.jpg\')"></div>'
  +   '<div class="rv"><div class="eyebrow">Was wir nicht machen</div>'
  +   '<h2 class="h-md">Ehrlichkeit spart allen Zeit.</h2>'
  +   '<p class="lede" style="margin-top:16px">Wir bauen keine Onlineshops mit hunderten Artikeln, keine Buchungsplattformen für ganze Ketten und keine Apps. Wenn Sie so etwas brauchen, sagen wir Ihnen das im Erstgespräch — und meistens kennen wir jemanden, der das besser kann.</p>'
  +   '<p class="lede" style="margin-top:14px">Was wir können, machen wir dafür vollständig: Websites für lokale Betriebe, mit allem, was dazugehört.</p></div>'
  + '</div></div></section>'
  + ctaBand();
}

function pageReferenzen(){
  return subHead('Referenzen','Drei Branchen. Ein System dahinter.',
      'Vollständig gebaute Beispielsysteme samt Kundenbereich — kein Mockup, keine Bildschirmfotos. So sieht der Umfang aus, den Sie für Ihren Betrieb bekommen.')
  + '<section class="band band-light band-pad">'
  +   '<div class="wrap"><div class="grid g3">'+REFERENZEN.map(refCard).join('')+'</div>'
  +   '<p class="lede rv" style="margin-top:34px;max-width:64ch">Diese drei Branchen sind nur der Anfang — wir bauen und programmieren Websites für jede Nische, egal ob Handwerk, Gesundheit, Gastronomie, Beratung oder etwas ganz anderes.</p>'
  +   '<div class="addon rv" style="margin-top:20px">'
  +     '<div><b>Hinweis zur Einordnung</b><p>Diese drei Projekte sind von uns entwickelte Beispielsysteme für die jeweilige Branche — sie zeigen Umfang, Technik und Gestaltungsniveau, das Sie bekommen. Ihre Seite wird auf dieser Basis gebaut, aber vollständig auf Ihren Betrieb zugeschnitten.</p></div>'
  +   '</div>'
  +   '</div>'
  + '</section>'
  + '<section class="band band-night band-pad"><div class="wrap">'
  +   '<div class="sec-head rv"><div><div class="eyebrow">In jedem Projekt enthalten</div><h2 class="h-lg">Was alle drei gemeinsam haben.</h2></div></div>'
  +   '<div class="grid g4">'
  +     [['Eigenes Design','Keine zwei Seiten sehen gleich aus — andere Schriften, Farben, Aufbau.'],
        ['Kundenbereich','Buchungen, Anfragen, Kunden und Rechnungen an einem Ort.'],
        ['Rechtstexte','Impressum, Datenschutz und AGB als vorbereiteter Entwurf.'],
        ['Mobil zuerst','Über die Hälfte Ihrer Besucher kommt vom Handy. Dort muss es sitzen.']].map(function(x,i){
          return '<div class="svc rv"><span class="no">0'+(i+1)+'</span><h3>'+esc(x[0])+'</h3><p>'+esc(x[1])+'</p></div>';
        }).join('')
  +   '</div>'
  + '</div></section>'
  + ctaBand();
}

function pageAblauf(){
  return subHead('Ablauf','Vom ersten Anruf bis zur fertigen Seite.',
      'Damit Sie wissen, worauf Sie sich einlassen: Hier steht jeder Schritt, wie lange er dauert und was wir dafür von Ihnen brauchen.')
  + '<section class="band band-light band-pad"><div class="wrap">'
  +   '<div class="steps">'
  +     ABLAUF.map(function(s,i){
          return '<div class="step rv"><span class="n">'+(i<9?'0':'')+(i+1)+'</span>'
            + '<h4>'+esc(s.t)+' <span style="font-family:var(--f-mono);font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:var(--ink-faint);display:block;margin-top:5px;font-weight:400">'+esc(s.z)+'</span></h4>'
            + '<p>'+esc(s.d)+'</p></div>';
        }).join('')
  +   '</div>'
  + '</div></section>'
  + '<section class="band band-dark band-pad"><div class="wrap"><div class="split">'
  +   '<div class="rv"><div class="eyebrow">Ihr Aufwand</div>'
  +     '<h2 class="h-md">Realistisch: etwa zwei Stunden.</h2>'
  +     '<p class="lede" style="margin-top:16px">Ein Erstgespräch (15 Minuten), das Zusammensuchen Ihrer Unterlagen (etwa eine Stunde), das Durchsehen der Vorschau (20 Minuten) und die Einschulung (20 Minuten). Mehr brauchen wir nicht von Ihnen.</p>'
  +     '<div class="trust-row" style="margin-top:24px">'
  +       ['Keine Technikkenntnisse nötig','Kein Termin vor Ort nötig','Keine Vorauskasse über 50 %'].map(function(t){
            return '<span class="trust-chip">'+check()+esc(t)+'</span>'; }).join('')
  +     '</div>'
  +   '</div>'
  +   '<div class="split-img rv" style="background-image:url(\'img/desk.jpg\')"></div>'
  + '</div></div></section>'
  + ctaBand();
}

function pagePreise(){
  return subHead('Preise','Was eine Website bei uns kostet.',
      'Zwei Pakete zum Festpreis. Der genaue Betrag hängt vom Umfang ab — wie viele Seiten, wie viele Leistungen, wie viel Text. Im Erstgespräch nennen wir Ihnen eine verbindliche Zahl.')
  + '<section class="band band-light band-pad"><div class="wrap">'
  +   '<div class="grid g2">'+TIERS.map(tierCard).join('')+'</div>'
  +   addonBox()
  +   '<div class="sec-head rv" style="margin-top:70px"><div><div class="eyebrow">Ehrlich gesagt</div><h2 class="h-lg">Was den Preis bewegt.</h2></div></div>'
  +   '<div class="grid g3">'
  +     [['Umfang','Eine Seite mit vier Unterseiten kostet weniger als eine mit zwölf. Wir rechnen nach Aufwand, nicht nach Bauchgefühl.'],
        ['Inhalte','Wenn Sie Texte und Fotos liefern, wird es günstiger. Wenn wir alles erarbeiten, dauert es länger und kostet entsprechend mehr.'],
        ['Kundenbereich','Der größte Unterschied zwischen Basis und Plus. Wer täglich Termine verwaltet, holt die Differenz meist im ersten Jahr wieder herein.']].map(function(x,i){
          return '<div class="fact rv"><b>0'+(i+1)+'</b><p><strong>'+esc(x[0])+'</strong><br>'+esc(x[1])+'</p></div>';
        }).join('')
  +   '</div>'
  +   '<div class="faq" style="margin-top:60px">'
  +     FAQ.slice(2,6).map(function(f){
          return '<details><summary>'+esc(f.q)+'</summary><div class="ans">'+esc(f.a)+'</div></details>';
        }).join('')
  +   '</div>'
  + '</div></section>'
  + ctaBand();
}

function pageUeber(){
  return subHead('Über uns','Zwei Leute aus Innsbruck, die Betriebe sichtbar machen.',
      'Wir sind keine Agentur mit vierzig Mitarbeitern und drei Standorten. Sie reden direkt mit den Leuten, die Ihre Seite auch bauen.')
  + '<section class="band band-light band-pad"><div class="wrap"><div class="split">'
  +   '<div class="split-img rv" style="background-image:url(\'img/innsbruck.jpg\')"></div>'
  +   '<div class="rv">'
  +     '<div class="eyebrow">Standort</div>'
  +     '<h2 class="h-md">Innsbruck — und der Rest des DACH-Raums.</h2>'
  +     '<p class="lede" style="margin-top:16px">Unser Sitz ist in Innsbruck. Gearbeitet wird in ganz Österreich, Deutschland und der Schweiz, weil der gesamte Ablauf ohnehin per Telefon, Video und E-Mail funktioniert. Wenn ein Termin vor Ort sinnvoll ist, kommen wir gern.</p>'
  +     '<p class="lede" style="margin-top:14px">Wir kommen nicht aus einer Konzernagentur. Wir haben selbst Onlineprojekte aufgebaut, betrieben und dabei gelernt, woran es in der Praxis scheitert: nicht am Design, sondern daran, dass niemand zuständig ist, wenn etwas nicht funktioniert.</p>'
  +   '</div>'
  + '</div></div></section>'
  + '<section class="band band-night band-pad"><div class="wrap">'
  +   '<div class="sec-head rv"><div><div class="eyebrow">Wie wir arbeiten</div><h2 class="h-lg">Vier Grundsätze, die wir nicht verhandeln.</h2></div></div>'
  +   '<div class="grid g4">'
  +     VERSPRECHEN.map(function(v,i){
          return '<div class="svc rv"><span class="no">0'+(i+1)+'</span><h3>'+esc(v.t)+'</h3><p>'+esc(v.d)+'</p></div>';
        }).join('')
  +   '</div>'
  +   '<div class="quote rv" style="margin-top:44px;max-width:62ch">'
  +     '<p>&bdquo;Wenn eine Website nach drei Monaten keine einzige Anfrage gebracht hat, war sie zu teuer — egal, was sie gekostet hat.&ldquo;</p>'
  +     '<div class="by">'+esc(AGENTUR.inhaber)+' · Gründer, ORTSBILD</div>'
  +   '</div>'
  + '</div></section>'
  + ctaBand();
}

function pageKontakt(){
  var q = queryOf();
  var pre = q.paket || '';
  var preBox = pre
    ? '<div class="preselect" id="preBox"><div><b>Ihre Auswahl: '+esc(pre)+'</b>'
      + '<div style="font-size:13px;color:var(--ink-soft);margin-top:3px">Wir gehen im Erstgespräch direkt darauf ein.</div></div>'
      + '<button class="x" id="preClear" aria-label="Auswahl entfernen">&times;</button></div>'
    : '';

  var opts = ['Basis-Paket','Plus-Paket','Wartung','Bin noch unsicher'].map(function(o){
    return '<option value="'+esc(o)+'"'+(pre && (o === pre || o.indexOf(pre) === 0) ? ' selected' : '')+'>'+esc(o)+'</option>';
  }).join('');

  return subHead('Kontakt','Erstgespräch vereinbaren.',
      'Schreiben Sie uns kurz, was Sie machen und was Sie brauchen. Wir melden uns innerhalb von 24 Stunden — werktags meist deutlich schneller.')
  + '<section class="band band-light band-pad"><div class="wrap"><div class="split">'
  +   '<div class="rv">'
  +     preBox
  +     '<form id="kontaktForm">'
  +       '<div class="form-grid">'
  +         '<div><label for="kName">Ihr Name *</label><input id="kName" name="name" required></div>'
  +         '<div><label for="kFirma">Betrieb / Firma *</label><input id="kFirma" name="firma" required></div>'
  +         '<div><label for="kMail">E-Mail *</label><input id="kMail" name="mail" type="email" required></div>'
  +         '<div><label for="kTel">Telefon</label><input id="kTel" name="tel"></div>'
  +         '<div class="full"><label for="kThema">Worum geht es?</label><select id="kThema" name="thema">'+opts+'</select></div>'
  +         '<div class="full"><label for="kTxt">Ihre Nachricht</label><textarea id="kTxt" name="txt" placeholder="Was machen Sie, und was soll die Website können?"></textarea></div>'
  +         '<div class="full">'
  +           '<button class="btn btn-glow" type="submit">Anfrage senden <span class="arr">&rarr;</span></button>'
  +           '<p class="form-note">Mit dem Absenden stimmen Sie zu, dass wir Ihre Angaben zur Bearbeitung der Anfrage speichern. Details in der <a href="#/datenschutz" style="color:var(--glow-2);text-decoration:underline">Datenschutzerklärung</a>.</p>'
  +         '</div>'
  +       '</div>'
  +     '</form>'
  +     '<div id="kontaktOK" hidden class="msg-ok"></div>'
  +   '</div>'
  +   '<div class="rv">'
  +     '<div class="split-img" style="background-image:url(\'img/ridge-clouds.jpg\');aspect-ratio:4/3;margin-bottom:24px"></div>'
  +     '<h3 class="h-sm" style="color:var(--ink)">Direkt erreichbar</h3>'
  +     '<p style="margin-top:12px;font-family:var(--f-display);font-weight:800;font-size:clamp(21px,2.6vw,27px);letter-spacing:-.02em;line-height:1.2">'
  +       '<a href="tel:'+AGENTUR.telRaw+'" style="color:var(--ink);border-bottom:2px solid var(--glow-2)">'+esc(AGENTUR.tel)+'</a>'
  +     '</p>'
  +     '<p class="lede" style="margin-top:12px">'
  +       '<a href="mailto:'+AGENTUR.mail+'" style="color:var(--ink);border-bottom:1px solid var(--glow-2)">'+AGENTUR.mail+'</a>'
  +     '</p>'
  +     '<p class="lede" style="margin-top:16px">'+esc(AGENTUR.inhaber)+'<br>'+esc(AGENTUR.strasse)+'<br>'+esc(AGENTUR.plz+' '+AGENTUR.ort)+', '+esc(AGENTUR.land)+'</p>'
  +     '<div class="trust-row" style="margin-top:24px">'
  +       ['Antwort in 24 Stunden','Erstgespräch kostenlos','Kein Vertrag im Erstgespräch'].map(function(t){
            return '<span class="trust-chip">'+check()+esc(t)+'</span>'; }).join('')
  +     '</div>'
  +   '</div>'
  + '</div></div></section>';
}

function subHead(kicker, title, lede){
  return '<section class="band band-night" style="padding:130px 0 clamp(40px,6vw,70px)">'
    + '<div class="wrap">'
    +   '<div class="eyebrow">'+esc(kicker)+'</div>'
    +   '<h1 class="h-lg" style="max-width:20ch">'+title+'</h1>'
    +   '<p class="lede" style="margin-top:18px">'+lede+'</p>'
    + '</div></section>';
}

/* ---------- Rechtliches ---------- */

function legalShell(title, inner){
  return '<section class="band band-night" style="padding:130px 0 40px"><div class="wrap">'
    + '<div class="eyebrow">Rechtliches</div><h1 class="h-lg">'+esc(title)+'</h1></div></section>'
    + '<section class="band band-light band-pad"><div class="wrap"><div class="legal">'+inner+'</div></div></section>';
}

function pageImpressum(){
  return legalShell('Impressum',
      '<p>Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 14 Unternehmensgesetzbuch (UGB) und § 25 Mediengesetz.</p>'
    + '<h3>Medieninhaber und Diensteanbieter</h3>'
    + '<dl class="kv">'
    +   '<dt>Inhaber</dt><dd>'+esc(AGENTUR.inhaber)+'</dd>'
    +   '<dt>Unternehmen</dt><dd>'+esc(AGENTUR.name)+'</dd>'
    +   '<dt>Anschrift</dt><dd>'+esc(AGENTUR.strasse)+', '+esc(AGENTUR.plz+' '+AGENTUR.ort)+', '+esc(AGENTUR.land)+'</dd>'
    +   '<dt>Telefon</dt><dd><a href="tel:'+AGENTUR.telRaw+'" style="color:var(--ink)">'+esc(AGENTUR.tel)+'</a></dd>'
    +   '<dt>E-Mail</dt><dd><a href="mailto:'+AGENTUR.mail+'" style="color:var(--ink)">'+AGENTUR.mail+'</a></dd>'
    +   '<dt>UID-Nummer (AT)</dt><dd>'+esc(AGENTUR.uid)+'</dd>'
    +   '<dt>USt-IdNr. (DE)</dt><dd>'+esc(AGENTUR.uidDe)+'</dd>'
    +   '<dt>Unternehmensgegenstand</dt><dd>Gestaltung und Erstellung von Websites, Webentwicklung, digitale Dienstleistungen</dd>'
    +   '<dt>Behörde</dt><dd>'+esc(AGENTUR.gericht)+'</dd>'
    +   '<dt>Kammer</dt><dd>'+esc(AGENTUR.kammer)+'</dd>'
    + '</dl>'
    + '<h3>Anwendbare Rechtsvorschriften</h3>'
    + '<p>Gewerbeordnung (GewO) in der geltenden Fassung, abrufbar über das Rechtsinformationssystem des Bundes (ris.bka.gv.at).</p>'
    + '<h3>Online-Streitbeilegung</h3>'
    + '<p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung bereit: ec.europa.eu/consumers/odr. Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>'
    + '<h3>Haftung für Inhalte</h3>'
    + '<p>Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Für Inhalte externer Links sind ausschließlich deren Betreiber verantwortlich.</p>'
    + '<h3>Urheberrecht</h3>'
    + '<p>Die auf dieser Website veröffentlichten Inhalte unterliegen dem österreichischen Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf unserer vorherigen schriftlichen Zustimmung.</p>'
    + '<h3>Bildnachweis</h3>'
    + '<p>Fotografien dieser Website stammen von Unsplash und werden gemäß der Unsplash-Lizenz verwendet.</p>');
}

function pageDatenschutz(){
  return legalShell('Datenschutzerklärung',
      '<p>Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, österreichisches Datenschutzgesetz, Telekommunikationsgesetz).</p>'
    + '<h3>Verantwortlicher</h3>'
    + '<p>'+esc(AGENTUR.inhaber)+', '+esc(AGENTUR.strasse)+', '+esc(AGENTUR.plz+' '+AGENTUR.ort)+', '+esc(AGENTUR.land)+'. E-Mail: '+esc(AGENTUR.mail)+'</p>'
    + '<h3>Kontaktaufnahme</h3>'
    + '<p>Wenn Sie uns per Formular oder E-Mail kontaktieren, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) beziehungsweise lit. f DSGVO (berechtigtes Interesse an der Beantwortung).</p>'
    + '<p>Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Sie werden gelöscht, sobald der Zweck entfällt und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.</p>'
    + '<h3>Server-Logfiles</h3>'
    + '<p>Beim Aufruf unserer Website werden automatisch Informationen übermittelt, die Ihr Browser sendet (Browsertyp, Betriebssystem, Referrer-URL, Uhrzeit der Anfrage). Diese Daten sind nicht bestimmten Personen zuordenbar und werden nach spätestens sieben Tagen gelöscht.</p>'
    + '<h3>Speicherung im Browser</h3>'
    + '<p>Der geschützte Agenturbereich dieser Website speichert Arbeitsdaten ausschließlich lokal im Speicher Ihres Browsers. Diese Daten verlassen Ihr Gerät nicht und werden nicht an uns oder Dritte übertragen. Sie können sie jederzeit über die Einstellungen Ihres Browsers löschen.</p>'
    + '<h3>Analyse- und Marketingwerkzeuge</h3>'
    + '<p>Wir setzen Analyse- oder Marketingwerkzeuge ausschließlich nach Ihrer ausdrücklichen Einwilligung über das Zustimmungsbanner ein. Ohne Ihre Zustimmung werden keine entsprechenden Skripte geladen.</p>'
    + '<h3>Hosting</h3>'
    + '<p>Diese Website wird auf Servern innerhalb der Europäischen Union gehostet. Mit dem Anbieter besteht ein Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO.</p>'
    + '<h3>Ihre Rechte</h3>'
    + '<ul><li>Auskunft über die von uns verarbeiteten Daten (Art. 15 DSGVO)</li>'
    + '<li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>'
    + '<li>Löschung (Art. 17 DSGVO) und Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>'
    + '<li>Datenübertragbarkeit (Art. 20 DSGVO)</li>'
    + '<li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li></ul>'
    + '<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, können Sie sich bei der österreichischen Datenschutzbehörde (Barichgasse 40–42, 1030 Wien, dsb.gv.at) beschweren.</p>'
    + '<p style="margin-top:26px;font-size:13px;color:var(--ink-faint)">Stand: '+dat(todayISO())+'. Dieser Text ist eine sorgfältig erstellte Vorlage und ersetzt keine Rechtsberatung.</p>');
}

function pageAGB(){
  return legalShell('Allgemeine Geschäftsbedingungen',
      '<h3>1. Geltungsbereich</h3>'
    + '<p>Diese Bedingungen gelten für alle Verträge zwischen '+esc(AGENTUR.name)+', Inhaber '+esc(AGENTUR.inhaber)+' (im Folgenden &bdquo;Auftragnehmer&ldquo;), und dem Auftraggeber über die Erstellung und Betreuung von Websites. Abweichende Bedingungen des Auftraggebers gelten nur bei ausdrücklicher schriftlicher Zustimmung.</p>'
    + '<h3>2. Angebot und Vertragsabschluss</h3>'
    + '<p>Angebote sind 14 Tage gültig und freibleibend. Der Vertrag kommt mit schriftlicher Auftragsbestätigung durch den Auftraggeber zustande, wofür eine E-Mail genügt.</p>'
    + '<h3>3. Leistungsumfang</h3>'
    + '<p>Der Leistungsumfang ergibt sich aus dem Angebot. Im vereinbarten Festpreis ist die im Angebot genannte Anzahl an Korrekturrunden enthalten. Darüber hinausgehende Wünsche werden nach Aufwand verrechnet und vorab abgestimmt.</p>'
    + '<h3>4. Mitwirkung des Auftraggebers</h3>'
    + '<p>Der Auftraggeber stellt alle benötigten Inhalte (Texte, Bilder, Logos, Firmendaten) rechtzeitig und in geeigneter Form bereit. Er sichert zu, über die erforderlichen Nutzungsrechte an den überlassenen Inhalten zu verfügen, und stellt den Auftragnehmer von Ansprüchen Dritter frei.</p>'
    + '<h3>5. Zahlungsbedingungen</h3>'
    + '<p>Sofern nicht anders vereinbart, werden 50 % des Auftragswerts bei Auftragsbestätigung und 50 % bei Übergabe fällig. Rechnungen sind binnen 14 Tagen ohne Abzug zahlbar. Laufende Betreuungsleistungen werden monatlich im Voraus verrechnet.</p>'
    + '<h3>6. Abnahme und Live-Schaltung</h3>'
    + '<p>Der Auftraggeber erhält vor der Veröffentlichung einen Vorschaulink. Die Website wird erst nach schriftlicher Freigabe veröffentlicht. Erfolgt binnen 14 Tagen nach Bereitstellung keine Rückmeldung, gilt die Leistung als abgenommen.</p>'
    + '<h3>7. Nutzungsrechte</h3>'
    + '<p>Nach vollständiger Bezahlung erhält der Auftraggeber das zeitlich und räumlich unbeschränkte Nutzungsrecht an den für ihn erstellten Inhalten. Die Domain wird auf den Auftraggeber registriert. Der Auftragnehmer darf das Projekt als Referenz nennen, sofern der Auftraggeber nicht widerspricht.</p>'
    + '<h3>8. Gewährleistung und Haftung</h3>'
    + '<p>Es gelten die gesetzlichen Gewährleistungsbestimmungen. Der Auftragnehmer haftet nur für Vorsatz und grobe Fahrlässigkeit. Eine Haftung für entgangenen Gewinn oder mittelbare Schäden ist ausgeschlossen. Für die rechtliche Zulässigkeit der vom Auftraggeber gelieferten oder freigegebenen Inhalte, insbesondere Impressum, Datenschutzerklärung und AGB, haftet der Auftraggeber.</p>'
    + '<h3>9. Verfügbarkeit</h3>'
    + '<p>Eine bestimmte Verfügbarkeit wird nur zugesagt, soweit sie ausdrücklich vereinbart ist. Wartungsfenster und Störungen im Verantwortungsbereich Dritter begründen keinen Anspruch auf Minderung.</p>'
    + '<h3>10. Laufzeit von Betreuungsverträgen</h3>'
    + '<p>Betreuungs- und Wartungsverträge laufen auf unbestimmte Zeit und können von beiden Seiten mit einer Frist von einem Monat zum Monatsende gekündigt werden.</p>'
    + '<h3>11. Schlussbestimmungen</h3>'
    + '<p>Es gilt österreichisches Recht unter Ausschluss der Verweisungsnormen. Gerichtsstand ist Innsbruck, soweit gesetzlich zulässig. Sollte eine Bestimmung unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt.</p>'
    + '<p style="margin-top:26px;font-size:13px;color:var(--ink-faint)">Stand: '+dat(todayISO())+'. Diese Bedingungen sind eine sorgfältig erstellte Vorlage und ersetzen keine Rechtsberatung.</p>');
}

/* ============================================================
   5 · Agentur-Dashboard
   ============================================================ */

var DASH_TABS = [
  ['uebersicht','Übersicht'], ['akquise','Akquise'], ['kunden','Kunden'],
  ['projekte','Projekte'], ['anfragen','Anfragen'], ['rechnungen','Rechnungen'],
  ['statistik','Statistik'], ['einstellungen','Einstellungen']
];
var dashTab = 'uebersicht';

function pageDashboard(){
  if(!sessionStorage.getItem('ortsbild:auth')){
    return '<div class="gate"><div class="gate-box">'
      + '<h2>Agentur-Login</h2>'
      + '<p>Interner Bereich von ORTSBILD. Bitte Zugangscode eingeben.</p>'
      + '<form id="gateForm"><label for="gateCode">Zugangscode</label>'
      + '<input id="gateCode" type="password" autocomplete="off" placeholder="••••••••••">'
      + '<div id="gateErr" class="gate-err" hidden>Code stimmt nicht.</div>'
      + '<button class="btn btn-glow" style="width:100%;justify-content:center;margin-top:16px" type="submit">Anmelden</button>'
      + '</form>'
      + '<p class="gate-hint">Demo-Zugang: <code style="font-family:var(--f-mono);color:var(--glow)">'+DEMO_CODE+'</code></p>'
      + '<p class="gate-hint">In der echten Version läuft dieser Bereich über ein richtiges Benutzerkonto mit eigenem Passwort.</p>'
      + '</div></div>';
  }
  seed();
  return '<div class="dash"><div class="dash-wrap">'
    + '<aside class="dash-side">'
    +   '<div class="grp">Agentur</div>'
    +   '<div class="dash-nav" id="dashNav">'
    +     DASH_TABS.map(function(t){
            return '<button data-tab="'+t[0]+'" class="'+(dashTab===t[0]?'on':'')+'">'+esc(t[1])+'</button>';
          }).join('')
    +   '</div>'
    + '</aside>'
    + '<main class="dash-main" id="dashMain">'+dashView()+'</main>'
    + '</div></div>';
}

function dashView(){
  switch(dashTab){
    case 'akquise':       return viewAkquise();
    case 'kunden':        return viewKunden();
    case 'projekte':      return viewProjekte();
    case 'anfragen':      return viewAnfragen();
    case 'rechnungen':    return viewRechnungen();
    case 'statistik':     return viewStatistik();
    case 'einstellungen': return viewEinstellungen();
    default:              return viewUebersicht();
  }
}

function dashHead(title, right){
  return '<div class="dash-head"><h2>'+esc(title)+'</h2><div>'+(right||'')+'</div></div>';
}

function viewUebersicht(){
  var leads = STORE.get('leads',[]), kunden = STORE.get('kunden',[]),
      proj = STORE.get('projekte',[]), anf = STORE.get('anfragen',[]),
      rech = STORE.get('rechnungen',[]);

  var offen = leads.filter(function(l){ return l.status!=='Kunde' && l.status!=='Abgesagt'; }).length;
  var termine = leads.filter(function(l){ return l.status==='Termin'; }).length;
  var laufend = proj.filter(function(p){ return p.status!=='Live'; }).length;
  var umsatz = rech.filter(function(r){ return r.status==='Bezahlt'; })
                   .reduce(function(a,r){ return a + (Number(r.betrag)||0); }, 0);
  var mrr = kunden.reduce(function(a,k){ return a + (Number(k.mrr)||0); }, 0);
  var neueAnf = anf.filter(function(a){ return a.status==='Neu'; }).length;

  var counts = {};
  STATUS_LEAD.forEach(function(s){ counts[s] = 0; });
  leads.forEach(function(l){ if(counts[l.status] != null) counts[l.status]++; });

  var wv = leads.filter(function(l){ return l.wv; })
    .sort(function(a,b){ return a.wv < b.wv ? -1 : 1; }).slice(0,5);

  return dashHead('Übersicht')
  + '<div class="kpi-row">'
  +   '<div class="kpi"><span>Leads offen</span><b>'+offen+'</b></div>'
  +   '<div class="kpi"><span>Termine fix</span><b class="up">'+termine+'</b></div>'
  +   '<div class="kpi"><span>Projekte laufend</span><b>'+laufend+'</b></div>'
  +   '<div class="kpi"><span>Umsatz bezahlt</span><b>'+eur(umsatz)+'</b></div>'
  + '</div>'
  + '<div class="dash-card" style="margin-top:16px"><h3>Akquise-Pipeline</h3>'
  +   '<div class="pipe">'
  +     ['Neu','Mail gesendet','Angerufen','Termin','Angebot'].map(function(s){
          return '<div class="pipe-col"><h4>'+esc(s)+'</h4><b>'+(counts[s]||0)+'</b><i>Leads</i></div>';
        }).join('')
  +   '</div>'
  +   '<div style="display:flex;gap:22px;flex-wrap:wrap;margin-top:16px;font-size:13px;color:var(--mist)">'
  +     '<span>Gewonnen: <strong style="color:var(--good)">'+(counts['Kunde']||0)+'</strong></span>'
  +     '<span>Abgesagt: <strong>'+(counts['Abgesagt']||0)+'</strong></span>'
  +     '<span>Wiederkehrend: <strong style="color:var(--glow)">'+eur(mrr)+'</strong> / Monat</span>'
  +     '<span>Neue Anfragen: <strong>'+neueAnf+'</strong></span>'
  +   '</div>'
  + '</div>'
  + '<div class="grid g2" style="margin-top:16px">'
  +   '<div class="dash-card"><h3>Nächste Wiedervorlagen</h3>'
  +     (wv.length
        ? '<div class="tbl-scroll"><table class="tbl"><thead><tr><th>Betrieb</th><th>Status</th><th>Am</th></tr></thead><tbody>'
          + wv.map(function(l){
              return '<tr><td><strong>'+esc(l.firma)+'</strong><div style="color:var(--mist-dim);font-size:12px">'+esc(l.ort)+'</div></td>'
                + '<td><span class="pillx '+pillFor(l.status)+'">'+esc(l.status)+'</span></td>'
                + '<td class="num">'+datTime(l.wv, l.wvZeit)+'</td></tr>';
            }).join('')
          + '</tbody></table></div>'
        : '<div class="empty">Keine Wiedervorlagen eingetragen.</div>')
  +   '</div>'
  +   '<div class="dash-card"><h3>Offene Anfragen von der Website</h3>'
  +     (anf.length
        ? '<div class="tbl-scroll"><table class="tbl"><thead><tr><th>Von</th><th>Thema</th><th>Status</th></tr></thead><tbody>'
          + anf.slice(0,5).map(function(a){
              return '<tr><td><strong>'+esc(a.name)+'</strong><div style="color:var(--mist-dim);font-size:12px">'+esc(a.firma)+'</div></td>'
                + '<td>'+esc(a.thema)+'</td>'
                + '<td><span class="pillx '+(a.status==='Neu'?'p-new':'p-won')+'">'+esc(a.status)+'</span></td></tr>';
            }).join('')
          + '</tbody></table></div>'
        : '<div class="empty">Noch keine Anfragen.</div>')
  +   '</div>'
  + '</div>';
}

function pillFor(s){
  if(s === 'Kunde') return 'p-new';
  if(s === 'Abgesagt') return 'p-won';
  return 'p-run';
}

function viewAkquise(){
  var leads = STORE.get('leads',[]);
  return dashHead('Akquise', '<button class="btn btn-glow btn-sm" data-act="lead-neu">+ Lead anlegen</button>')
  + '<div class="dash-card">'
  + (leads.length
    ? '<div class="tbl-scroll"><table class="tbl"><thead><tr>'
      + '<th>Betrieb</th><th class="col-opt">Branche</th><th>Telefon</th><th>Status</th><th class="col-opt">Wiedervorlage</th><th class="col-opt">Notiz</th><th></th>'
      + '</tr></thead><tbody>'
      + leads.map(function(l){
          return '<tr><td><strong>'+esc(l.firma)+'</strong><div style="color:var(--mist-dim);font-size:12px">'+esc(l.ort)+'</div></td>'
            + '<td class="col-opt">'+esc(l.branche)+'</td>'
            + '<td class="num">'+esc(l.tel||'—')+'</td>'
            + '<td><select class="sel-mini" data-lead="'+l.id+'">'
            +   STATUS_LEAD.map(function(s){ return '<option'+(s===l.status?' selected':'')+'>'+esc(s)+'</option>'; }).join('')
            + '</select></td>'
            + '<td class="num col-opt">'+datTime(l.wv, l.wvZeit)+'</td>'
            + '<td class="col-opt" style="max-width:250px;color:var(--mist);font-size:12.5px">'+esc(l.notiz||'—')+'</td>'
            + '<td style="white-space:nowrap"><button class="icon-btn" data-wv-lead="'+l.id+'">Termin</button> '
            +   '<button class="icon-btn" data-del-lead="'+l.id+'">Löschen</button></td></tr>';
        }).join('')
      + '</tbody></table></div>'
    : '<div class="empty">Noch keine Leads. Legen Sie den ersten an.</div>')
  + '</div>';
}

function viewKunden(){
  var k = STORE.get('kunden',[]);
  return dashHead('Kunden', '<button class="btn btn-glow btn-sm" data-act="kunde-neu">+ Kunde anlegen</button>')
  + '<div class="dash-card">'
  + (k.length
    ? '<div class="tbl-scroll"><table class="tbl"><thead><tr>'
      + '<th>Betrieb</th><th class="col-opt">Ansprechpartner</th><th>Paket</th><th class="col-opt">Domain</th><th>Betreuung</th><th class="col-opt">Kunde seit</th><th></th>'
      + '</tr></thead><tbody>'
      + k.map(function(c){
          return '<tr><td><strong>'+esc(c.firma)+'</strong><div style="color:var(--mist-dim);font-size:12px">'+esc(c.ort)+'</div></td>'
            + '<td class="col-opt">'+esc(c.ansprech)+'</td>'
            + '<td><span class="pillx '+(c.paket==='Plus'?'p-run':'p-won')+'">'+esc(c.paket)+'</span></td>'
            + '<td class="num col-opt" style="font-size:12.5px">'+esc(c.domain)+'</td>'
            + '<td class="num">'+eur(c.mrr)+' / Mon.</td>'
            + '<td class="num col-opt">'+dat(c.seit)+'</td>'
            + '<td style="white-space:nowrap"><button class="icon-btn" data-kunde-rech="'+c.id+'">Rechnung</button> '
            +   '<button class="icon-btn" data-kunde-proj="'+c.id+'">Projekt</button> '
            +   '<button class="icon-btn" data-del-kunde="'+c.id+'">Löschen</button></td></tr>';
        }).join('')
      + '</tbody></table></div>'
    : '<div class="empty">Noch keine Kunden erfasst.</div>')
  + '</div>';
}

function viewProjekte(){
  var p = STORE.get('projekte',[]);
  return dashHead('Projekte', '<button class="btn btn-glow btn-sm" data-act="proj-neu">+ Projekt anlegen</button>')
  + '<div class="dash-card">'
  + (p.length
    ? '<div class="tbl-scroll"><table class="tbl"><thead><tr>'
      + '<th>Kunde</th><th class="col-opt">Paket</th><th>Status</th><th>Fortschritt</th><th class="col-opt">Start</th><th class="col-opt">Live seit</th><th></th>'
      + '</tr></thead><tbody>'
      + p.map(function(x){
          return '<tr><td><strong>'+esc(x.kunde)+'</strong></td>'
            + '<td class="col-opt">'+esc(x.paket)+'</td>'
            + '<td><select class="sel-mini" data-proj="'+x.id+'">'
            +   STATUS_PROJ.map(function(s){ return '<option'+(s===x.status?' selected':'')+'>'+esc(s)+'</option>'; }).join('')
            + '</select></td>'
            + '<td style="min-width:110px"><div style="height:6px;background:var(--night);border-radius:3px;overflow:hidden">'
            +   '<div style="height:100%;width:'+(Number(x.fortschritt)||0)+'%;background:linear-gradient(90deg,var(--glow-2),var(--glow))"></div></div>'
            +   '<span class="num" style="font-size:11px;color:var(--mist-dim)">'+(Number(x.fortschritt)||0)+' %</span></td>'
            + '<td class="num col-opt">'+dat(x.start)+'</td>'
            + '<td class="num col-opt">'+(x.live ? dat(x.live) : '—')+'</td>'
            + '<td><button class="icon-btn" data-del-proj="'+x.id+'">Löschen</button></td></tr>';
        }).join('')
      + '</tbody></table></div>'
    : '<div class="empty">Noch keine Projekte angelegt.</div>')
  + '</div>';
}

function viewAnfragen(){
  var a = STORE.get('anfragen',[]);
  return dashHead('Anfragen von der Website')
  + '<div class="dash-card">'
  + (a.length
    ? '<div class="tbl-scroll"><table class="tbl"><thead><tr>'
      + '<th class="col-opt">Eingegangen</th><th>Von</th><th>Kontakt</th><th class="col-opt">Thema</th><th class="col-opt">Nachricht</th><th>Status</th><th></th>'
      + '</tr></thead><tbody>'
      + a.map(function(x){
          return '<tr><td class="num col-opt">'+dat(x.am)+'</td>'
            + '<td><strong>'+esc(x.name)+'</strong><div style="color:var(--mist-dim);font-size:12px">'+esc(x.firma||'—')+'</div></td>'
            + '<td style="font-size:12.5px"><a href="mailto:'+esc(x.mail)+'" style="color:var(--glow)">'+esc(x.mail)+'</a>'
            +   (x.tel ? '<div class="num" style="color:var(--mist-dim);font-size:12px">'+esc(x.tel)+'</div>' : '')+'</td>'
            + '<td class="col-opt">'+esc(x.thema)+'</td>'
            + '<td class="col-opt" style="max-width:280px;color:var(--mist);font-size:12.5px">'+esc(x.txt||'—')+'</td>'
            + '<td><select class="sel-mini" data-anf="'+x.id+'">'
            +   ['Neu','In Arbeit','Beantwortet','Archiviert'].map(function(s){ return '<option'+(s===x.status?' selected':'')+'>'+esc(s)+'</option>'; }).join('')
            + '</select></td>'
            + '<td><button class="icon-btn" data-del-anf="'+x.id+'">Löschen</button></td></tr>';
        }).join('')
      + '</tbody></table></div>'
    : '<div class="empty">Noch keine Anfragen eingegangen.</div>')
  + '</div>';
}

function viewRechnungen(){
  var r = STORE.get('rechnungen',[]);
  var offen = r.filter(function(x){ return x.status==='Offen'; }).reduce(function(a,x){ return a+(Number(x.betrag)||0); },0);
  var bezahlt = r.filter(function(x){ return x.status==='Bezahlt'; }).reduce(function(a,x){ return a+(Number(x.betrag)||0); },0);
  return dashHead('Rechnungen', '<button class="btn btn-glow btn-sm" data-act="rech-neu">+ Rechnung anlegen</button>')
  + '<div class="kpi-row" style="margin-bottom:16px">'
  +   '<div class="kpi"><span>Bezahlt</span><b>'+eur(bezahlt)+'</b></div>'
  +   '<div class="kpi"><span>Offen</span><b class="up">'+eur(offen)+'</b></div>'
  +   '<div class="kpi"><span>Anzahl</span><b>'+r.length+'</b></div>'
  +   '<div class="kpi"><span>Durchschnitt</span><b>'+eur(r.length ? (bezahlt+offen)/r.length : 0)+'</b></div>'
  + '</div>'
  + '<div class="dash-card">'
  + (r.length
    ? '<div class="tbl-scroll"><table class="tbl"><thead><tr>'
      + '<th class="col-opt">Nummer</th><th>Kunde</th><th class="col-opt">Zweck</th><th class="col-opt">Datum</th><th>Betrag netto</th><th class="col-opt">inkl. 20% USt</th><th>Status</th><th></th>'
      + '</tr></thead><tbody>'
      + r.map(function(x){
          var netto = Number(x.betrag)||0, brutto = Math.round(netto*1.2*100)/100;
          return '<tr><td class="num col-opt"><strong>'+esc(x.nr)+'</strong></td>'
            + '<td>'+esc(x.kunde)+'</td>'
            + '<td class="col-opt" style="color:var(--mist);font-size:12.5px">'+esc(x.zweck||'—')+'</td>'
            + '<td class="num col-opt">'+dat(x.datum)+'</td>'
            + '<td class="num"><strong>'+eur(netto)+'</strong></td>'
            + '<td class="num col-opt" style="color:var(--mist)">'+eur(brutto)+'</td>'
            + '<td><select class="sel-mini" data-rech="'+x.id+'">'
            +   ['Offen','Bezahlt','Storniert'].map(function(s){ return '<option'+(s===x.status?' selected':'')+'>'+esc(s)+'</option>'; }).join('')
            + '</select></td>'
            + '<td style="white-space:nowrap"><button class="icon-btn" data-pdf="'+x.id+'">PDF</button> '
            +   '<button class="icon-btn" data-del-rech="'+x.id+'">Löschen</button></td></tr>';
        }).join('')
      + '</tbody></table></div>'
    : '<div class="empty">Noch keine Rechnungen.</div>')
  + '</div>';
}

function viewStatistik(){
  var leads = STORE.get('leads',[]);
  var counts = {};
  STATUS_LEAD.forEach(function(s){ counts[s]=0; });
  leads.forEach(function(l){ if(counts[l.status]!=null) counts[l.status]++; });
  var max = Math.max.apply(null, STATUS_LEAD.map(function(s){ return counts[s]; }).concat([1]));

  var kunden = counts['Kunde'] || 0;
  var quote = leads.length ? Math.round(kunden / leads.length * 100) : 0;

  var rech = STORE.get('rechnungen',[]);
  var months = ['Apr','Mai','Jun','Jul','Aug','Sep'];
  var byMonth = [0,0,0,0,0,0];
  rech.forEach(function(r){
    if(r.status !== 'Bezahlt' || !r.datum) return;
    var m = new Date(r.datum).getMonth();
    var idx = m - 3;
    if(idx >= 0 && idx < 6) byMonth[idx] += Number(r.betrag)||0;
  });
  var maxM = Math.max.apply(null, byMonth.concat([1]));

  return dashHead('Statistik')
  + '<div class="kpi-row">'
  +   '<div class="kpi"><span>Leads gesamt</span><b>'+leads.length+'</b></div>'
  +   '<div class="kpi"><span>Daraus Kunden</span><b class="up">'+kunden+'</b></div>'
  +   '<div class="kpi"><span>Abschlussquote</span><b>'+quote+' %</b></div>'
  +   '<div class="kpi"><span>Abgesagt</span><b>'+(counts['Abgesagt']||0)+'</b></div>'
  + '</div>'
  + '<div class="grid g2" style="margin-top:16px">'
  +   '<div class="dash-card"><h3>Leads je Status</h3><div class="bar-chart">'
  +     STATUS_LEAD.map(function(s){
          var h = Math.round((counts[s]/max)*100);
          return '<div class="col"><span class="vl">'+counts[s]+'</span>'
            + '<div class="bar" style="height:'+Math.max(h,2)+'%"></div>'
            + '<span class="lb">'+esc(s.slice(0,4))+'</span></div>';
        }).join('')
  +   '</div></div>'
  +   '<div class="dash-card"><h3>Bezahlter Umsatz je Monat</h3><div class="bar-chart">'
  +     months.map(function(m,i){
          var h = Math.round((byMonth[i]/maxM)*100);
          return '<div class="col"><span class="vl">'+(byMonth[i] ? Math.round(byMonth[i]/100)/10+'k' : '0')+'</span>'
            + '<div class="bar" style="height:'+Math.max(h,2)+'%"></div>'
            + '<span class="lb">'+esc(m)+'</span></div>';
        }).join('')
  +   '</div></div>'
  + '</div>';
}

function viewEinstellungen(){
  return dashHead('Einstellungen')
  + '<div class="grid g2">'
  +   '<div class="dash-card"><h3>Agenturdaten</h3>'
  +     '<table class="tbl"><tbody>'
  +       [['Firma',AGENTUR.name],['Inhaber',AGENTUR.inhaber],['Anschrift',AGENTUR.strasse+', '+AGENTUR.plz+' '+AGENTUR.ort],
          ['E-Mail',AGENTUR.mail],['UID (AT)',AGENTUR.uid],['USt-IdNr. (DE)',AGENTUR.uidDe]].map(function(r){
            return '<tr><td style="color:var(--mist-dim);width:170px">'+esc(r[0])+'</td><td><strong>'+esc(r[1])+'</strong></td></tr>';
          }).join('')
  +     '</tbody></table>'
  +   '</div>'
  +   '<div class="dash-card"><h3>Daten dieser Demo</h3>'
  +     '<p style="font-size:13.5px;color:var(--mist);margin-bottom:16px">Dieser Bereich speichert alle Einträge ausschließlich lokal in Ihrem Browser. Nichts davon wird übertragen. In der Produktivversion läuft das über eine echte Datenbank mit Benutzerkonten.</p>'
  +     '<div style="display:flex;gap:9px;flex-wrap:wrap">'
  +       '<button class="btn btn-ghost btn-sm" data-act="export">Alles als JSON sichern</button>'
  +       '<button class="btn btn-ghost btn-sm" data-act="reset">Demodaten zurücksetzen</button>'
  +       '<button class="btn btn-ghost btn-sm" data-act="logout">Abmelden</button>'
  +     '</div>'
  +   '</div>'
  + '</div>';
}

/* ---------- Dashboard-Interaktion ---------- */

function rerenderDash(){
  var main = document.getElementById('dashMain');
  if(main){ main.innerHTML = dashView(); }
  var nav = document.getElementById('dashNav');
  if(nav){
    nav.querySelectorAll('button').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-tab') === dashTab);
    });
  }
}

function updRow(coll, id, patch){
  var rows = STORE.get(coll, []);
  for(var i=0;i<rows.length;i++){
    if(rows[i].id === id){ Object.keys(patch).forEach(function(k){ rows[i][k] = patch[k]; }); break; }
  }
  STORE.set(coll, rows);
}
function delRow(coll, id){
  STORE.set(coll, STORE.get(coll, []).filter(function(r){ return r.id !== id; }));
}

/* ---------- Modal (ersetzt window.prompt) ---------- */

function fieldHtml(f){
  var val = f.value != null ? f.value : '';
  var listAttr = f.listId ? ' list="'+f.listId+'"' : '';
  var ph = f.placeholder ? ' placeholder="'+esc(f.placeholder)+'"' : '';
  if(f.type === 'select'){
    var opts = (f.options||[]).map(function(o){
      var ov = (o && typeof o === 'object') ? o.value : o;
      var ol = (o && typeof o === 'object') ? o.label : o;
      return '<option value="'+esc(ov)+'"'+(String(ov)===String(val)?' selected':'')+'>'+esc(ol)+'</option>';
    }).join('');
    return '<div><label for="m_'+f.key+'">'+esc(f.label)+'</label><select id="m_'+f.key+'">'+opts+'</select></div>';
  }
  if(f.type === 'textarea'){
    return '<div><label for="m_'+f.key+'">'+esc(f.label)+'</label><textarea id="m_'+f.key+'" style="min-height:80px"'+ph+'>'+esc(val)+'</textarea></div>';
  }
  return '<div><label for="m_'+f.key+'">'+esc(f.label)+'</label><input id="m_'+f.key+'" type="'+(f.type||'text')+'" value="'+esc(val)+'"'+ph+listAttr+'></div>';
}
function flattenFields(fields){
  var out = [];
  fields.forEach(function(f){ if(Array.isArray(f)) out = out.concat(f); else out.push(f); });
  return out;
}
function closeModal(){
  var ex = document.getElementById('obModal');
  if(ex){ ex.remove(); document.removeEventListener('keydown', window.__obModalKey || function(){}); }
}
function openModal(opts){
  closeModal();
  var mask = document.createElement('div');
  mask.className = 'modal-mask';
  mask.id = 'obModal';
  var bodyHtml = opts.fields.map(function(f){
    return Array.isArray(f) ? '<div class="row2">'+f.map(fieldHtml).join('')+'</div>' : fieldHtml(f);
  }).join('');
  mask.innerHTML =
      '<div class="modal-box" role="dialog" aria-modal="true">'
    +   '<div class="modal-head"><h3>'+esc(opts.title)+'</h3><button type="button" id="obModalClose" aria-label="Schließen">&times;</button></div>'
    +   '<div class="modal-body">'+bodyHtml+(opts.extraHtml||'')+(opts.hint ? '<div class="modal-hint">'+esc(opts.hint)+'</div>' : '')+'</div>'
    +   '<div class="modal-foot"><button type="button" class="btn btn-ghost btn-sm" id="obModalCancel">Abbrechen</button>'
    +     '<button type="button" class="btn btn-glow btn-sm" id="obModalSave">'+esc(opts.submitLabel||'Speichern')+'</button></div>'
    + '</div>';
  document.body.appendChild(mask);

  function cancel(){ if(opts.onCancel) opts.onCancel(); closeModal(); }
  function onKey(e){ if(e.key === 'Escape') cancel(); }
  window.__obModalKey = onKey;
  document.addEventListener('keydown', onKey);
  mask.addEventListener('click', function(e){ if(e.target === mask) cancel(); });
  document.getElementById('obModalClose').addEventListener('click', cancel);
  document.getElementById('obModalCancel').addEventListener('click', cancel);

  var flat = flattenFields(opts.fields);
  document.getElementById('obModalSave').addEventListener('click', function(){
    var out = {};
    for(var i=0;i<flat.length;i++){
      var f = flat[i];
      var el = document.getElementById('m_'+f.key);
      var v = el.value.trim();
      if(f.required && !v){ el.focus(); el.style.borderColor = '#E06256'; return; }
      out[f.key] = v;
    }
    closeModal();
    opts.onSubmit(out);
  });

  if(opts.afterRender) opts.afterRender(mask);
  var first = mask.querySelector('input, select, textarea');
  if(first) first.focus();
}
function kundenDatalist(id){
  var kunden = STORE.get('kunden', []);
  return '<datalist id="'+id+'">' + kunden.map(function(k){ return '<option value="'+esc(k.firma)+'">'; }).join('') + '</datalist>';
}

function openWvModal(leadId){
  var lead = STORE.get('leads',[]).filter(function(l){ return l.id === leadId; })[0];
  if(!lead) return;
  openModal({
    title:'Termin / Wiedervorlage — ' + lead.firma,
    submitLabel:'Speichern',
    fields:[
      [{key:'wv', label:'Datum', type:'date', value:lead.wv || todayISO()},
       {key:'wvZeit', label:'Uhrzeit', type:'time', value:lead.wvZeit || ''}]
    ],
    onSubmit:function(d){
      updRow('leads', leadId, {wv:d.wv, wvZeit:d.wvZeit});
      rerenderDash();
    }
  });
}

var PAKET_PREIS = {Basis:3800, Plus:6000, Wartung:69, Sonstiges:''};
var PAKET_ZWECK = {Basis:'Basis-Paket, Auftragsbestätigung (50 %)', Plus:'Plus-Paket, Auftragsbestätigung (50 %)', Wartung:'Wartung & Betreuung, 1 Monat', Sonstiges:''};

function openRechnungModal(prefill){
  prefill = prefill || {};
  var startPaket = prefill.paket || 'Plus';
  openModal({
    title:'Rechnung anlegen',
    submitLabel:'Anlegen',
    fields:[
      {key:'kunde', label:'Kunde', required:true, value:prefill.kunde||'', listId:'dlKundenRech', placeholder:'Firma eingeben oder auswählen'},
      {key:'paket', label:'Paket / Leistung', type:'select', value:startPaket, options:[
        {value:'Basis', label:'Basis-Paket — '+eur(3800)},
        {value:'Plus', label:'Plus-Paket — '+eur(6000)},
        {value:'Wartung', label:'Wartung — '+eur(69)+' / Monat'},
        {value:'Sonstiges', label:'Sonstiges (manuell)'}
      ]},
      [{key:'betrag', label:'Betrag netto (€)', type:'number', value:String(PAKET_PREIS[startPaket]!=null?PAKET_PREIS[startPaket]:'')},
       {key:'zweck', label:'Zweck', value:PAKET_ZWECK[startPaket]||''}]
    ],
    extraHtml: kundenDatalist('dlKundenRech'),
    hint:'Betrag und Zweck werden beim Paket automatisch vorausgefüllt — beides bleibt änderbar. Preise netto, zzgl. 20% USt (B2B-Standard).',
    afterRender:function(){
      var paketEl = document.getElementById('m_paket');
      if(paketEl){
        paketEl.addEventListener('change', function(){
          var v = paketEl.value;
          document.getElementById('m_betrag').value = PAKET_PREIS[v] != null ? PAKET_PREIS[v] : '';
          document.getElementById('m_zweck').value = PAKET_ZWECK[v] || '';
        });
      }
    },
    onSubmit:function(r){
      var re = STORE.get('rechnungen',[]);
      var nr = new Date().getFullYear()+'-'+String(re.length+1).padStart(3,'0');
      re.unshift({id:uid(), nr:nr, kunde:r.kunde, zweck:r.zweck, betrag:Number(r.betrag)||0, status:'Offen', datum:todayISO()});
      STORE.set('rechnungen', re); rerenderDash();
    }
  });
}

function openProjektModal(prefill){
  prefill = prefill || {};
  openModal({
    title:'Projekt anlegen',
    submitLabel:'Anlegen',
    fields:[
      {key:'kunde', label:'Kunde', required:true, value:prefill.kunde||'', listId:'dlKundenProj', placeholder:'Firma eingeben oder auswählen'},
      {key:'paket', label:'Paket', type:'select', options:['Basis','Plus'], value:prefill.paket||'Plus'}
    ],
    extraHtml: kundenDatalist('dlKundenProj'),
    onSubmit:function(p){
      var pr = STORE.get('projekte',[]);
      pr.unshift({id:uid(), kunde:p.kunde, paket:p.paket||'Basis', status:'Onboarding', start:todayISO(), live:'', fortschritt:20});
      STORE.set('projekte', pr); rerenderDash();
    }
  });
}

/* Akquise: Status → "Kunde" wandelt den Lead direkt in Kunde + Projekt um,
   statt nur ein Textfeld umzuschalten — genau das war die Beschwerde. */
function openLeadZuKundeModal(leadId, selectEl){
  var lead = STORE.get('leads',[]).filter(function(l){ return l.id === leadId; })[0];
  if(!lead) return;
  var vorherStatus = lead.status;
  openModal({
    title:lead.firma + ' wird Kunde',
    submitLabel:'Kunde anlegen',
    hint:'Legt automatisch einen Eintrag bei Kunden und ein Startprojekt bei Projekte an.',
    fields:[
      {key:'firma', label:'Betrieb / Firma', required:true, value:lead.firma},
      [{key:'ansprech', label:'Ansprechpartner'}, {key:'ort', label:'Ort', value:lead.ort||''}],
      [{key:'paket', label:'Paket', type:'select', options:['Basis','Plus'], value:'Plus'},
       {key:'mrr', label:'Betreuung €/Monat', type:'number', value:'49'}],
      {key:'domain', label:'Domain (falls schon bekannt)'}
    ],
    onCancel:function(){
      if(selectEl) selectEl.value = vorherStatus;
    },
    onSubmit:function(k){
      var ku = STORE.get('kunden',[]);
      ku.unshift({id:uid(), firma:k.firma, ansprech:k.ansprech, ort:k.ort, paket:k.paket||'Basis', domain:k.domain, mrr:Number(k.mrr)||0, seit:todayISO()});
      STORE.set('kunden', ku);

      var pr = STORE.get('projekte',[]);
      pr.unshift({id:uid(), kunde:k.firma, paket:k.paket||'Basis', status:'Onboarding', start:todayISO(), live:'', fortschritt:20});
      STORE.set('projekte', pr);

      updRow('leads', leadId, {status:'Kunde'});
      dashTab = 'kunden';
      rerenderDash();
    }
  });
}

function bindDash(){
  var nav = document.getElementById('dashNav');
  if(nav){
    nav.addEventListener('click', function(e){
      var b = e.target.closest('button[data-tab]');
      if(!b) return;
      dashTab = b.getAttribute('data-tab');
      rerenderDash();
      window.scrollTo({top:0,behavior:'smooth'});
    });
  }

  var main = document.getElementById('dashMain');
  if(!main) return;

  main.addEventListener('change', function(e){
    var t = e.target;
    if(t.hasAttribute('data-lead')){
      var leadId = t.getAttribute('data-lead');
      if(t.value === 'Kunde'){ openLeadZuKundeModal(leadId, t); }
      else { updRow('leads', leadId, {status:t.value}); rerenderDash(); }
    }
    else if(t.hasAttribute('data-proj')){
      var st = t.value;
      var patch = {status:st, fortschritt: STATUS_PROJ.indexOf(st) >= 0 ? Math.round((STATUS_PROJ.indexOf(st)+1)/STATUS_PROJ.length*100) : 0};
      if(st === 'Live') patch.live = todayISO();
      updRow('projekte', t.getAttribute('data-proj'), patch);
      rerenderDash();
    }
    else if(t.hasAttribute('data-anf')){ updRow('anfragen', t.getAttribute('data-anf'), {status:t.value}); rerenderDash(); }
    else if(t.hasAttribute('data-rech')){ updRow('rechnungen', t.getAttribute('data-rech'), {status:t.value}); rerenderDash(); }
  });

  main.addEventListener('click', function(e){
    var b = e.target.closest('button');
    if(!b) return;

    if(b.hasAttribute('data-del-lead')){ if(confirm('Lead löschen?')){ delRow('leads', b.getAttribute('data-del-lead')); rerenderDash(); } return; }
    if(b.hasAttribute('data-del-kunde')){ if(confirm('Kunde löschen?')){ delRow('kunden', b.getAttribute('data-del-kunde')); rerenderDash(); } return; }
    if(b.hasAttribute('data-del-proj')){ if(confirm('Projekt löschen?')){ delRow('projekte', b.getAttribute('data-del-proj')); rerenderDash(); } return; }
    if(b.hasAttribute('data-del-anf')){ if(confirm('Anfrage löschen?')){ delRow('anfragen', b.getAttribute('data-del-anf')); rerenderDash(); } return; }
    if(b.hasAttribute('data-del-rech')){ if(confirm('Rechnung löschen?')){ delRow('rechnungen', b.getAttribute('data-del-rech')); rerenderDash(); } return; }
    if(b.hasAttribute('data-pdf')){ makePdf(b.getAttribute('data-pdf')); return; }
    if(b.hasAttribute('data-wv-lead')){ openWvModal(b.getAttribute('data-wv-lead')); return; }
    if(b.hasAttribute('data-kunde-rech')){
      var kr = STORE.get('kunden',[]).filter(function(c){ return c.id === b.getAttribute('data-kunde-rech'); })[0];
      if(kr) openRechnungModal({kunde:kr.firma, paket:kr.paket});
      return;
    }
    if(b.hasAttribute('data-kunde-proj')){
      var kp = STORE.get('kunden',[]).filter(function(c){ return c.id === b.getAttribute('data-kunde-proj'); })[0];
      if(kp) openProjektModal({kunde:kp.firma, paket:kp.paket});
      return;
    }

    var act = b.getAttribute('data-act');
    if(act === 'lead-neu'){
      openModal({
        title:'Lead anlegen',
        submitLabel:'Anlegen',
        fields:[
          {key:'firma', label:'Betrieb / Firma', required:true},
          [{key:'branche', label:'Branche'}, {key:'ort', label:'Ort'}],
          {key:'tel', label:'Telefon'},
          {key:'notiz', label:'Notiz', type:'textarea'},
          [{key:'wv', label:'Wiedervorlage – Datum', type:'date', value:todayISO()}, {key:'wvZeit', label:'Uhrzeit', type:'time'}]
        ],
        onSubmit:function(d){
          var leads = STORE.get('leads',[]);
          leads.unshift({id:uid(), firma:d.firma, branche:d.branche, ort:d.ort, tel:d.tel, status:'Neu', notiz:d.notiz, wv:d.wv, wvZeit:d.wvZeit, angelegt:todayISO()});
          STORE.set('leads', leads); rerenderDash();
        }
      });
    }
    else if(act === 'kunde-neu'){
      openModal({
        title:'Kunde anlegen',
        submitLabel:'Anlegen',
        fields:[
          {key:'firma', label:'Betrieb / Firma', required:true},
          [{key:'ansprech', label:'Ansprechpartner'}, {key:'ort', label:'Ort'}],
          [{key:'paket', label:'Paket', type:'select', options:['Basis','Plus'], value:'Plus'},
           {key:'mrr', label:'Betreuung €/Monat', type:'number', value:'49'}],
          {key:'domain', label:'Domain'}
        ],
        onSubmit:function(k){
          var ku = STORE.get('kunden',[]);
          ku.unshift({id:uid(), firma:k.firma, ansprech:k.ansprech, ort:k.ort, paket:k.paket||'Basis', domain:k.domain, mrr:Number(k.mrr)||0, seit:todayISO()});
          STORE.set('kunden', ku); rerenderDash();
        }
      });
    }
    else if(act === 'proj-neu'){
      openProjektModal();
    }
    else if(act === 'rech-neu'){
      openRechnungModal();
    }
    else if(act === 'reset'){
      if(!confirm('Alle Demodaten zurücksetzen?')) return;
      ['leads','kunden','projekte','anfragen','rechnungen','seeded'].forEach(function(k){
        try{ localStorage.removeItem('ortsbild:'+k); }catch(e){}
      });
      seed(); rerenderDash();
    }
    else if(act === 'logout'){
      sessionStorage.removeItem('ortsbild:auth');
      location.hash = '#/';
    }
    else if(act === 'export'){ exportJson(); }
  });
}

function exportJson(){
  var data = {
    exportiert: new Date().toISOString(),
    agentur: AGENTUR.name,
    leads: STORE.get('leads',[]), kunden: STORE.get('kunden',[]),
    projekte: STORE.get('projekte',[]), anfragen: STORE.get('anfragen',[]),
    rechnungen: STORE.get('rechnungen',[])
  };
  var txt = JSON.stringify(data, null, 2);
  if(window.claude && window.claude.use){
    window.claude.use('downloads').then(function(dl){
      if(!dl){ fallbackSave(txt); return; }
      dl.save({filename:'ortsbild-daten-'+todayISO()+'.json', data:txt}).catch(function(){ fallbackSave(txt); });
    }).catch(function(){ fallbackSave(txt); });
  } else { fallbackSave(txt); }
}
function fallbackSave(txt){
  try{
    var w = window.open('', '_blank');
    if(w){ w.document.write('<pre>'+esc(txt)+'</pre>'); w.document.close(); }
    else { alert('Speichern nicht möglich. Bitte Pop-ups erlauben.'); }
  }catch(e){ alert('Speichern in dieser Ansicht nicht möglich.'); }
}

function makePdf(id){
  var r = STORE.get('rechnungen',[]).filter(function(x){ return x.id === id; })[0];
  if(!r) return;
  if(typeof window.jspdf === 'undefined'){ alert('PDF-Bibliothek noch nicht geladen. Bitte kurz warten.'); return; }
  var doc = new window.jspdf.jsPDF({unit:'mm', format:'a4'});

  doc.setFont('helvetica','bold'); doc.setFontSize(20);
  doc.text('ORTSBILD', 20, 24);
  doc.setFont('helvetica','normal'); doc.setFontSize(9); doc.setTextColor(110);
  doc.text(AGENTUR.inhaber, 20, 31);
  doc.text(AGENTUR.strasse, 20, 36);
  doc.text(AGENTUR.plz+' '+AGENTUR.ort+', '+AGENTUR.land, 20, 41);
  doc.text('UID: '+AGENTUR.uid, 20, 46);
  doc.text(AGENTUR.mail, 20, 51);

  doc.setDrawColor(220); doc.line(20, 58, 190, 58);

  doc.setTextColor(20); doc.setFont('helvetica','bold'); doc.setFontSize(14);
  doc.text('Rechnung '+r.nr, 20, 70);

  doc.setFont('helvetica','normal'); doc.setFontSize(10); doc.setTextColor(70);
  doc.text('Kunde: '+r.kunde, 20, 80);
  doc.text('Rechnungsdatum: '+dat(r.datum), 20, 86);
  doc.text('Status: '+r.status, 20, 92);

  var netto = Number(r.betrag) || 0;
  var ustSatz = 0.20;
  var ust = Math.round(netto * ustSatz * 100) / 100;
  var brutto = Math.round((netto + ust) * 100) / 100;

  doc.setDrawColor(230); doc.line(20, 100, 190, 100);
  doc.setTextColor(20); doc.setFont('helvetica','bold'); doc.setFontSize(10);
  doc.text('Leistung', 20, 108); doc.text('Betrag netto', 165, 108);
  doc.setFont('helvetica','normal'); doc.setTextColor(70);
  doc.text(String(r.zweck || 'Dienstleistung'), 20, 116);
  doc.text(eur(netto), 165, 116);

  doc.setDrawColor(230); doc.line(20, 124, 190, 124);
  doc.setFont('helvetica','normal'); doc.setTextColor(70); doc.setFontSize(10);
  doc.text('Nettobetrag', 20, 133); doc.text(eur(netto), 165, 133);
  doc.text('zzgl. 20% USt', 20, 140); doc.text(eur(ust), 165, 140);

  doc.setDrawColor(210); doc.line(20, 147, 190, 147);
  doc.setFont('helvetica','bold'); doc.setTextColor(20); doc.setFontSize(12);
  doc.text('Gesamtbetrag (brutto)', 20, 157); doc.text(eur(brutto), 165, 157);

  doc.setFont('helvetica','normal'); doc.setFontSize(8.5); doc.setTextColor(130);
  doc.text('UID '+AGENTUR.uid+' · Umsatzsteuer gemäß österreichischem Recht ausgewiesen.', 20, 172);
  doc.text('Zahlbar binnen 14 Tagen ohne Abzug.', 20, 178);
  doc.text('Dieses Dokument wurde automatisch erstellt.', 20, 184);

  var blob = doc.output('blob');
  var name = 'rechnung-'+r.nr+'.pdf';
  if(window.claude && window.claude.use){
    window.claude.use('downloads').then(function(dl){
      if(!dl){ doc.save(name); return; }
      blob.arrayBuffer().then(function(buf){
        dl.save({filename:name, data:new Uint8Array(buf)}).catch(function(){ doc.save(name); });
      });
    }).catch(function(){ doc.save(name); });
  } else { doc.save(name); }
}

/* ============================================================
   6 · Router & Bindung
   ============================================================ */

function pageFor(route){
  switch(route){
    case '':            return pageHome();
    case 'leistungen':  return pageLeistungen();
    case 'referenzen':  return pageReferenzen();
    case 'ablauf':      return pageAblauf();
    case 'preise':      return pagePreise();
    case 'ueber-uns':   return pageUeber();
    case 'kontakt':     return pageKontakt();
    case 'dashboard':   return pageDashboard();
    case 'impressum':   return pageImpressum();
    case 'datenschutz': return pageDatenschutz();
    case 'agb':         return pageAGB();
    default:            return pageHome();
  }
}

var gsapReady = false;

function render(){
  var route = currentRoute();
  var isDash = route === 'dashboard';

  document.getElementById('app').innerHTML =
      header()
    + '<main id="main">' + pageFor(route) + '</main>'
    + (isDash ? '' : footer());

  bindChrome();

  if(isDash){ bindGate(); bindDash(); }
  if(route === 'kontakt'){ bindKontakt(); }
  if(route === ''){ setupHome(); }

  setupReveal();

  /* ScrollTrigger.refresh() restores whatever scroll position it saw when
     called, so it must run BEFORE we force the page to the top — never after. */
  if(window.ScrollTrigger){ window.ScrollTrigger.refresh(); }
  window.scrollTo(0, 0);
  requestAnimationFrame(function(){ window.scrollTo(0, 0); });

  if(window.ScrollTrigger && document.fonts && document.fonts.ready){
    document.fonts.ready.then(function(){
      window.ScrollTrigger.refresh();
      window.scrollTo(0, 0);
    });
  }
}

function bindChrome(){
  var head = document.getElementById('siteHead');
  function onScroll(){ if(head) head.classList.toggle('solid', window.scrollY > 30); }
  onScroll();
  window.removeEventListener('scroll', window.__obScroll || function(){});
  window.__obScroll = onScroll;
  window.addEventListener('scroll', onScroll, {passive:true});

  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');
  var close = document.getElementById('drawerClose');
  if(burger && drawer){
    burger.addEventListener('click', function(){ drawer.classList.add('open'); });
    if(close) close.addEventListener('click', function(){ drawer.classList.remove('open'); });
    drawer.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ drawer.classList.remove('open'); });
    });
  }
}

function bindGate(){
  var f = document.getElementById('gateForm');
  if(!f) return;
  f.addEventListener('submit', function(e){
    e.preventDefault();
    var v = (document.getElementById('gateCode').value || '').trim();
    if(v.toUpperCase() === DEMO_CODE){
      sessionStorage.setItem('ortsbild:auth','1');
      render();
    } else {
      document.getElementById('gateErr').hidden = false;
    }
  });
}

function bindKontakt(){
  var clear = document.getElementById('preClear');
  if(clear){
    clear.addEventListener('click', function(){
      var b = document.getElementById('preBox');
      if(b) b.remove();
      location.hash = '#/kontakt';
    });
  }
  var f = document.getElementById('kontaktForm');
  if(!f) return;
  f.addEventListener('submit', function(e){
    e.preventDefault();
    var d = new FormData(f);
    var rows = STORE.get('anfragen', []);
    rows.unshift({
      id: uid(),
      name: d.get('name') || '',
      mail: d.get('mail') || '',
      tel: d.get('tel') || '',
      firma: d.get('firma') || '',
      thema: d.get('thema') || '',
      txt: d.get('txt') || '',
      status: 'Neu',
      am: todayISO()
    });
    STORE.set('anfragen', rows);

    f.hidden = true;
    var ok = document.getElementById('kontaktOK');
    ok.hidden = false;
    ok.innerHTML = '<strong>Danke, Ihre Anfrage ist angekommen.</strong><br>'
      + 'Wir melden uns innerhalb von 24 Stunden bei Ihnen. '
      + 'Wenn es schneller gehen soll, schreiben Sie direkt an '
      + '<a href="mailto:'+AGENTUR.mail+'" style="color:var(--glow-2)">'+AGENTUR.mail+'</a>.';
    ok.scrollIntoView({behavior:'smooth', block:'center'});
  });
}

/* ---------- Startseite: 3D + Parallax ---------- */

function setupHome(){
  if(window.initValley3D){ window.initValley3D(); }

  if(!gsapReady || !window.gsap) return;

  var back = document.getElementById('dpBack');
  var mid = document.getElementById('dpMid');
  var sec = document.getElementById('depthSec');
  if(back && mid && sec){
    window.gsap.fromTo(back, {yPercent:-7}, {
      yPercent:7, ease:'none',
      scrollTrigger:{trigger:sec, start:'top bottom', end:'bottom top', scrub:.6}
    });
    window.gsap.fromTo(mid, {yPercent:9}, {
      yPercent:-9, ease:'none',
      scrollTrigger:{trigger:sec, start:'top bottom', end:'bottom top', scrub:.6}
    });
  }
}

function setupReveal(){
  var items = document.querySelectorAll('.rv');
  if(!items.length) return;

  if(!gsapReady || !window.gsap){
    items.forEach(function(el){ el.style.opacity = 1; el.style.transform = 'none'; });
    return;
  }
  items.forEach(function(el){
    window.gsap.fromTo(el, {opacity:0, y:20}, {
      opacity:1, y:0, duration:.7, ease:'power2.out',
      scrollTrigger:{trigger:el, start:'top 88%', once:true}
    });
  });
}

/* ---------- Cookie-Hinweis ---------- */

function cookieBanner(){
  if(localStorage.getItem('ortsbild:cookie')) return;
  var el = document.createElement('div');
  el.className = 'cookie';
  el.innerHTML = '<p><strong>Cookies und Statistik.</strong> Diese Website funktioniert ohne Tracking. '
    + 'Analysewerkzeuge laden wir nur, wenn Sie zustimmen. Mehr dazu in der '
    + '<a href="#/datenschutz" style="color:var(--glow)">Datenschutzerklärung</a>.</p>'
    + '<div class="row">'
    + '<button class="btn btn-glow btn-sm" data-c="all">Alle zulassen</button>'
    + '<button class="btn btn-ghost btn-sm" data-c="min">Nur notwendige</button>'
    + '</div>';
  document.body.appendChild(el);
  el.addEventListener('click', function(e){
    var b = e.target.closest('button[data-c]');
    if(!b) return;
    localStorage.setItem('ortsbild:cookie', b.getAttribute('data-c'));
    el.remove();
  });
}

/* ---------- Start ---------- */

function boot(){
  if('scrollRestoration' in history){ history.scrollRestoration = 'manual'; }
  if(window.gsap && window.ScrollTrigger){
    window.gsap.registerPlugin(window.ScrollTrigger);
    gsapReady = !(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }
  if(gsapReady) document.body.classList.add('js-anim');

  render();
  window.addEventListener('hashchange', render);
  cookieBanner();
}

if(document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

})();
