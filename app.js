// České Lorem Ipsum v1.1 — generuje český výplňový text přímo v prohlížeči.
"use strict";
const sentences = [
"Ranní světlo pomalu proniká otevřeným oknem a kreslí jemné stíny na dřevěnou podlahu.",
"Za poslední zatáčkou se objevuje malé náměstí s kašnou a několika rozkvetlými stromy.",
"Každý nový nápad potřebuje dostatek prostoru, trochu odvahy a především čas na promyšlené zpracování.",
"Vůně čerstvého chleba se mísí s chladným vzduchem, zatímco město začíná svůj obvyklý den.",
"Podél řeky vede úzká cesta, která spojuje klidná zákoutí s rušnými ulicemi v centru.",
"Na první pohled nenápadný detail dokáže změnit celkový dojem i způsob, jakým vnímáme okolní svět.",
"Mezi stránkami starého zápisníku zůstávají drobné poznámky, náčrty a vzpomínky na dávné výpravy.",
"Pečlivě zvolené barvy vytvářejí přirozenou rovnováhu a nechávají vyniknout tomu, co je skutečně důležité.",
"Tichá zahrada za domem nabízí příjemné místo pro odpočinek, rozhovory i plánování dalších kroků.",
"Čerstvý vítr přináší od vzdáleného lesa šumění listů a vůni vlhké půdy po dešti.",
"Jednoduché řešení často vzniká až ve chvíli, kdy si dovolíme podívat se na věci z jiné strany.",
"Uprostřed pracovního stolu leží několik tužek, prázdný hrnek a papír připravený pro první skicu.",
"Přestože se krajina s každým ročním obdobím mění, její známé obrysy zůstávají stále stejně blízké.",
"Večer se nad střechami rozsvěcují první hvězdy a ruch okolních ulic postupně utichá.",
"Dobře navržený prostor přirozeně propojuje praktické potřeby s příjemnou atmosférou každodenního života.",
"Někdy stačí malá změna rytmu, abychom znovu objevili radost z obyčejných činností.",
"Pod širokou korunou dubu se zastavují kolemjdoucí a na chvíli zapomínají na spěch všedního dne.",
"Výrazná typografie pomáhá uspořádat myšlenky, zvýraznit podstatné informace a usnadnit orientaci v textu.",
"Po úzkých schodech vystoupáme na vyhlídku, odkud je vidět celé údolí i vzdálené horské vrcholy.",
"Každá stránka má svůj vlastní rytmus, který vzniká střídáním písmen, mezer a volného místa.",
"Zkušenost nás učí všímat si souvislostí, klást přesnější otázky a hledat srozumitelné odpovědi.",
"V přístřešku na konci zahrady čeká jízdní kolo připravené na další cestu za město.",
"Průběžné drobné úpravy postupně mění původní návrh v promyšlený a spolehlivě fungující celek.",
"Měkké světlo zvýrazňuje strukturu přírodních materiálů a dodává prostoru pocit klidu i lehkosti.",
"Široká pěšina mizí mezi břízami, jejichž bílé kmeny vystupují z tmavého lesního pozadí.",
"Před dokončením práce je dobré na chvíli zpomalit a prohlédnout si výsledek s čerstvým odstupem.",
"Žluté květy na kraji louky přitahují pozornost stejně jako drobný barevný akcent v čisté kompozici.",
"Řemeslná zručnost a trpělivost dávají vzniknout předmětům, které dobře slouží po mnoho let.",
"Z nádraží vyráží první vlak a za jeho okny se střídají zahrady, políčka i malé vesnice.",
"Otevřená komunikace vytváří prostor pro spolupráci a pomáhá nacházet společný směr i při složitějších úkolech.",
"Příliš žluťoučký kůň úpěl ďábelské ódy.",
"Řádky postupně zaplňují prázdnou plochu a vytvářejí obraz, ve kterém mají své místo i čárky a háčky.",
"Vzdálené zvony ohlašují poledne, zatímco na terase pomalu chladne čerstvě připravený čaj.",
"Nad vodní hladinou krouží vážky a v průzračné mělčině se mihotají drobné stříbrné ryby.",
"Smysluplný výsledek stojí na jasném zadání, vzájemné důvěře a ochotě průběžně ověřovat jednotlivá rozhodnutí.",
"Úspěšný návrh nechává dostatek místa obsahu a vede čtenářovu pozornost přirozeně od začátku až do konce."
];
function shuffledSentences() {
  const pool = [...sentences];
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}
// Nastavení platí společně pro všechny odstavce; délka se měří počtem vět.
const headings = [
  "Prostor pro nové myšlenky", "Když detaily tvoří celek",
  "Každý den trochu jinak", "Na cestě za inspirací",
  "Světlo mezi řádky", "Malé změny, velké možnosti",
  "Příběhy všedních okamžiků", "V rytmu vlastních nápadů",
  "Místo pro dobrý začátek", "Pohled z druhé strany",
  "Klid uprostřed města", "Za hranicí první skici",
  "Souvislosti, které dávají smysl", "Proměny známé krajiny",
  "Od myšlenky k výsledku", "Lehkost přirozených tvarů",
  "Nový směr na obzoru", "Zastavení mezi kroky",
  "Pod povrchem obyčejných věcí", "Jemná rovnováha",
  "Otevřená cesta vpřed", "Barvy každodenního života",
  "Čas na čerstvý pohled", "Ticho za otevřeným oknem",
  "Řád v drobných detailech", "Nápady dostávají obrysy",
  "S lehkostí do dalšího dne", "Přirozený prostor pro změnu",
  "Kousek světa za rohem", "Všechno má své místo"
];
function paragraphRange(length = 5, randomness = 20) {
  if (!Number.isInteger(length) || length < 1 || length > 12 ||
      !Number.isInteger(randomness) || randomness < 0 || randomness > 100) {
    throw new Error("Neplatné nastavení délky odstavců.");
  }
  const spread = Math.round(length * randomness / 100);
  return { min: Math.max(1, length - spread), max: length + spread };
}
function generateText(count, unit, diacritics = true, options = {}) {
  const limits = { paragraphs: 30, sentences: 100, words: 3000 };
  if (!Object.hasOwn(limits, unit)) throw new Error("Neznámá jednotka.");
  const numeric = Number(count);
  if (!Number.isInteger(numeric) || numeric < 1 || numeric > limits[unit]) throw new Error("Počet je mimo povolený rozsah.");
  let pool = [];
  const next = () => { if (!pool.length) pool = shuffledSentences(); return pool.pop(); };
  let text;
  if (unit === "paragraphs") {
    const range = paragraphRange(options.length ?? 5, options.randomness ?? 20);
    // Samostatně zamíchané nadpisy se v jedné dávce neopakují.
    const titles = [...headings];
    for (let i = titles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [titles[i], titles[j]] = [titles[j], titles[i]];
    }
    text = Array.from({ length: numeric }, (_, index) => {
      const sentenceCount = range.min + Math.floor(Math.random() * (range.max - range.min + 1));
      const body = Array.from({ length: sentenceCount }, next).join(" ");
      return options.headings ? titles[index] + "\n" + body : body;
    }).join("\n\n");
  } else if (unit === "sentences") {
    text = Array.from({ length: numeric }, next).join(" ");
  } else {
    const words = [];
    while (words.length < numeric) words.push(...next().split(/\s+/));
    text = words.slice(0, numeric).join(" ").replace(/[.,;:!?]+$/, "") + ".";
  }
  return diacritics ? text : text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
if (typeof document !== "undefined") {
  const byId = id => document.getElementById(id);
  const form = byId("generator");
  const output = byId("output");
  const amount = byId("amount");
  const unit = byId("unit");
  const status = byId("status");
  const limits = { paragraphs: 30, sentences: 100, words: 3000 };
  const defaults = { paragraphs: 3, sentences: 5, words: 100 };
  const embedded = new URLSearchParams(location.search).get("embed") === "1";
  document.body.classList.toggle("embedded", embedded);
  const announce = message => { status.textContent = message; };
  function updateStats() {
    const text = output.value;
    byId("words-count").textContent = (text.trim() ? text.trim().split(/\s+/).length : 0).toLocaleString("cs-CZ");
    byId("characters-count").textContent = Array.from(text).length.toLocaleString("cs-CZ");
  }
  const paragraphOptions = byId("paragraph-options");
  const lengthSlider = byId("paragraph-length");
  const randomnessSlider = byId("paragraph-randomness");
  const paragraphSettings = () => ({
    length: Number(lengthSlider.value),
    randomness: Number(randomnessSlider.value),
    headings: byId("paragraph-headings").checked
  });
  const sentenceLabel = n => n === 1 ? "věta" : n <= 4 ? "věty" : "vět";
  function updateParagraphLabels() {
    const settings = paragraphSettings();
    const range = paragraphRange(settings.length, settings.randomness);
    byId("length-value").textContent = settings.length + " " + sentenceLabel(settings.length);
    byId("randomness-value").textContent = settings.randomness + " %";
    byId("paragraph-range").textContent = range.min === range.max
      ? "Každý odstavec: " + range.min + " " + sentenceLabel(range.min) + ". Délka ve slovech se může lišit."
      : "Každý odstavec: " + range.min + "–" + range.max + " vět. Nastavení platí pro všechny odstavce.";
    lengthSlider.setAttribute("aria-valuetext", settings.length + " " + sentenceLabel(settings.length));
    randomnessSlider.setAttribute("aria-valuetext", settings.randomness + " procent");
  }
  lengthSlider.addEventListener("input", updateParagraphLabels);
  randomnessSlider.addEventListener("input", updateParagraphLabels);
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    output.value = generateText(Number(amount.value), unit.value, byId("diacritics").checked, paragraphSettings());
    updateStats();
    announce("Nový text je připravený.");
  });
  unit.addEventListener("change", () => {
    paragraphOptions.hidden = unit.value !== "paragraphs";
    paragraphOptions.disabled = unit.value !== "paragraphs";
    amount.max = limits[unit.value];
    amount.value = defaults[unit.value];
    byId("limit").textContent = "1–" + limits[unit.value].toLocaleString("cs-CZ");
  });
  byId("copy").addEventListener("click", async () => {
    if (!output.value) return announce("Nejdřív vygeneruj text.");
    try {
      await navigator.clipboard.writeText(output.value);
      announce("Text byl zkopírován do schránky.");
    } catch {
      output.focus();
      output.select();
      try {
        if (!document.execCommand("copy")) throw new Error("copy");
        announce("Text byl zkopírován do schránky.");
      } catch {
        announce("Text je označený. Zkopíruj jej pomocí ⌘C nebo Ctrl+C.");
      }
    }
  });
  byId("download").addEventListener("click", () => {
    const url = URL.createObjectURL(new Blob([output.value], { type: "text/plain;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "ceske-lorem-ipsum.txt";
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    announce("Text je připravený ke stažení.");
  });
  output.addEventListener("input", updateStats);
  updateParagraphLabels();
  output.value = generateText(3, "paragraphs", true, paragraphSettings());
  updateStats();
}
