// České Lorem Ipsum v1.5 — generuje český výplňový text přímo v prohlížeči.
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
const listItems = [
  "Jasný směr a promyšlený začátek",
  "Dostatek prostoru pro nové nápady",
  "Přirozená rovnováha barev a tvarů",
  "Pozornost věnovaná drobným detailům",
  "Srozumitelné uspořádání informací",
  "Čerstvý pohled na známé souvislosti",
  "Jednoduché řešení každodenních potřeb",
  "Pravidelné ověřování jednotlivých kroků",
  "Otevřená komunikace a vzájemná důvěra",
  "Pečlivě zvolené přírodní materiály",
  "Klidná atmosféra pro soustředěnou práci",
  "Plynulý přechod od myšlenky k výsledku",
  "Příjemný rytmus všedních okamžiků",
  "Malé změny s viditelným přínosem",
  "Spolehlivý základ pro další rozvoj",
  "Důraz na přehlednost a snadnou orientaci"
];
function paragraphRange(length = 5, randomness = 20) {
  if (!Number.isInteger(length) || length < 1 || length > 12 ||
      !Number.isInteger(randomness) || randomness < 0 || randomness > 100) {
    throw new Error("Neplatné nastavení délky odstavců.");
  }
  const spread = Math.round(length * randomness / 100);
  return { min: Math.max(1, length - spread), max: length + spread };
}

const sentenceBank = [...sentences,
  "Každý nový nápad potřebuje dostatek času a prostoru pro rozvoj.",
  "Po pracovním dni se rádi vracíme do klidné zahrady, kde nás čeká příjemný stín pod rozložitými korunami stromů.",
  "Město tiše odpočívá.",
  "Světlo pomalu zaplavuje zahradu.",
  "Jemné ranní světlo pomalu proniká do pokoje.",
  "Za otevřeným oknem se pomalu probouzí nový den.",
  "Na kraji města začíná tichá cesta mezi vysokými stromy.",
  "Každý nový nápad potřebuje dostatek času a prostor pro další rozvoj.",
  "Jemné světlo za oknem postupně odhaluje drobné detaily na povrchu dřevěného stolu.",
  "Po dlouhém pracovním dni se rádi vracíme do klidné zahrady, kde nás čeká příjemný stín pod rozložitými korunami stromů.",
  "Na konci úzké lesní cesty se před námi otevírá malá paseka, kterou ranní slunce pomalu zalévá jemným a teplým světlem.",
  "Ranní světlo zaplavuje tichou zahradu.",
  "Nové nápady postupně dostávají jasné obrysy.",
  "Každý detail má svůj význam.",
  "Za oknem pomalu začíná den.",
  "Čerstvý vítr příjemně ochlazuje vzduch.",
  "Město se probouzí k životu.",
  "Drobné změny přinášejí nové možnosti.",
  "Na stole čeká prázdný zápisník.",
  "Klidná cesta vede podél řeky.",
  "Příroda nabízí prostor pro odpočinek.",
  "Promyšlený návrh propojuje jednoduché tvary s příjemnými barvami a vytváří přehledný celek.",
  "Každé ráno přináší nové příležitosti pro drobné změny a objevování zajímavých souvislostí.",
  "Když se večer nad městem rozsvítí první světla, ulice postupně ztichnou a otevřená okna vpustí do pokojů příjemný chladný vzduch.",
  "Na konci dlouhé cesty nás čeká malé náměstí, kde se mezi starými domy ukrývá tichá kavárna s několika dřevěnými stolky.",
  "Pečlivě připravený návrh nechává dostatek prostoru důležitým informacím, přirozeně vede pozornost čtenáře a zároveň vytváří příjemnou rovnováhu mezi jednotlivými částmi obsahu.",
  "Přestože se původní myšlenka během práce postupně proměňuje, její hlavní smysl zůstává zachován a každý nový detail pomáhá dotvářet výsledný celek."
];
const stripAccents = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
const wordCount = text => text.trim().split(/\s+/).length;
function sentenceBounds(length = 12, randomness = 20) {
  if (!Number.isInteger(length) || length < 5 || length > 20 ||
      !Number.isInteger(randomness) || randomness < 0 || randomness > 100)
    throw new Error("Neplatné nastavení vět.");
  const base = length, spread = Math.round(base * randomness / 100);
  return {min: Math.max(3, base - spread), max: Math.min(30, base + spread)};
}
function sentenceCandidates(target) {
  const distance = Math.min(...sentenceBank.map(s => Math.abs(wordCount(s) - target)));
  return sentenceBank.filter(s => Math.abs(wordCount(s) - target) === distance);
}
function wordPool(size = "mix", diacritics = true) {
  if (!["short","medium","long","mix"].includes(size)) throw new Error("Neplatná délka slov.");
  const source = [...sentenceBank, ...headings, ...listItems].join(" ").toLocaleLowerCase("cs-CZ");
  const normalized = diacritics ? source : stripAccents(source);
  return [...new Set(normalized.match(/\p{L}+/gu))].filter(w =>
    size === "mix" || (size === "short" ? w.length <= 4 : size === "medium" ? w.length >= 5 && w.length <= 8 : w.length >= 9));
}
function shuffled(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
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
    const listType = options.listType ?? "none";
    const itemCount = options.itemCount ?? 3;
    if (!["none", "bullets", "numbered"].includes(listType)) throw new Error("Neplatný typ seznamu.");
    if (listType !== "none" && (!Number.isInteger(itemCount) || itemCount < 1 || itemCount > 10)) {
      throw new Error("Počet položek musí být od 1 do 10.");
    }
    // Samostatně zamíchané nadpisy se v jedné dávce neopakují.
    const titles = [...headings];
    for (let i = titles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [titles[i], titles[j]] = [titles[j], titles[i]];
    }
    text = Array.from({ length: numeric }, (_, index) => {
      const sentenceCount = range.min + Math.floor(Math.random() * (range.max - range.min + 1));
      const body = Array.from({ length: sentenceCount }, next).join(" ");
      const parts = options.headings ? [titles[index], body] : [body];
      if (listType !== "none") {
        const items = [...listItems];
        for (let i = items.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [items[i], items[j]] = [items[j], items[i]];
        }
        // Každý odstavec má vlastní seznam; číslování začíná znovu od jedničky.
        parts.push(...items.slice(0, itemCount).map((item, i) =>
          (listType === "numbered" ? (i + 1) + ". " : "• ") + item));
      }
      return parts.join("\n");
    }).join("\n\n");
  } else if (unit === "sentences") {
    const bounds = sentenceBounds(options.sentenceLength ?? 12, options.sentenceRandomness ?? 20);
    const endings = {period: ".", question: "?", exclamation: "!"};
    const ending = options.ending ?? "period";
    if (ending !== "random" && !Object.hasOwn(endings, ending)) throw new Error("Neplatné zakončení vět.");
    const sentenceList = options.sentenceLines ? (options.sentenceList ?? "none") : "none";
    if (!["none","bullets","numbered"].includes(sentenceList)) throw new Error("Neplatný seznam vět.");
    text = Array.from({length: numeric}, (_, index) => {
      const target = bounds.min + Math.floor(Math.random() * (bounds.max - bounds.min + 1));
      const candidates = sentenceCandidates(target);
      const sentence = candidates[Math.floor(Math.random() * candidates.length)];
      const punctuation = ending === "random" ? [".","?","!"][Math.floor(Math.random() * 3)] : endings[ending];
      const prefix = sentenceList === "bullets" ? "• " : sentenceList === "numbered" ? (index + 1) + ". " : "";
      return prefix + sentence.replace(/[.!?]+$/, "") + punctuation;
    }).join(options.sentenceLines ? "\n" : " ");
  } else {
    const pool = wordPool(options.wordLength ?? "mix", diacritics);
    const repeat = options.repeat ?? true;
    const casing = options.casing ?? "normal";
    const separators = {space: " ", comma: ", ", newline: "\n"};
    const separator = options.separator ?? "space";
    if (!["normal","upper","lower","title"].includes(casing) || !Object.hasOwn(separators, separator))
      throw new Error("Neplatné nastavení slov.");
    if (!repeat && numeric > pool.length) throw new Error("Bez opakování je dostupných nejvýše " + pool.length + " slov. Sniž počet nebo povol opakování.");
    const unique = repeat ? [] : shuffled(pool);
    const words = Array.from({length: numeric}, (_, i) => {
      const word = repeat ? pool[Math.floor(Math.random() * pool.length)] : unique[i];
      if (casing === "upper") return word.toLocaleUpperCase("cs-CZ");
      if (casing === "title" || (casing === "normal" && i === 0)) return word[0].toLocaleUpperCase("cs-CZ") + word.slice(1);
      return word;
    });
    text = words.join(separators[separator]);
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
    const wordsOnly = text.replace(/^(?:• |\d+\. )/gm, "").trim();
    byId("words-count").textContent = (wordsOnly ? wordsOnly.split(/\s+/).length : 0).toLocaleString("cs-CZ");
    byId("characters-count").textContent = Array.from(text).length.toLocaleString("cs-CZ");
  }
  const paragraphOptions = byId("paragraph-options");
  const lengthSlider = byId("paragraph-length");
  const randomnessSlider = byId("paragraph-randomness");
  const paragraphSettings = () => ({
    length: Number(lengthSlider.value),
    randomness: Number(randomnessSlider.value),
    headings: byId("paragraph-headings").checked,
    listType: form.querySelector('input[name="paragraph-list"]:checked').value,
    itemCount: Number(byId("list-count").value)
  });
  const sentenceSettings = () => ({
    sentenceLength: Number(byId("sentence-length").value),
    sentenceRandomness: Number(byId("sentence-randomness").value),
    ending: byId("sentence-ending").value,
    sentenceLines: byId("sentence-lines").checked,
    sentenceList: form.querySelector('input[name="sentence-list"]:checked').value
  });
  const wordSettings = () => ({
    wordLength: byId("word-length").value,
    casing: byId("word-case").value,
    separator: byId("word-separator").value,
    repeat: byId("word-repeat").checked
  });
  function updateSentenceList() {
    const enabled = byId("sentence-lines").checked;
    byId("sentence-list-options").hidden = !enabled;
    byId("sentence-list-options").disabled = !enabled;
  }
  byId("sentence-lines").addEventListener("change", updateSentenceList);
  function updateSentenceLabels() {
    const settings = sentenceSettings();
    const bounds = sentenceBounds(settings.sentenceLength, settings.sentenceRandomness);
    const lengths = [];
    for (let target = bounds.min; target <= bounds.max; target++) {
      lengths.push(...sentenceCandidates(target).map(wordCount));
    }
    const min = Math.min(...lengths), max = Math.max(...lengths);
    byId("sentence-length-value").textContent = settings.sentenceLength + " slov";
    byId("sentence-length").setAttribute("aria-valuetext", settings.sentenceLength + " slov");
    byId("sentence-randomness-value").textContent = settings.sentenceRandomness + " %";
    byId("sentence-summary").textContent = min === max ? "Každá věta: " + min + " slov." : "Délka vět: " + min + "–" + max + " slov.";
    byId("sentence-randomness").setAttribute("aria-valuetext", settings.sentenceRandomness + " procent");
  }
  function updateWordLimit() {
    const settings = wordSettings();
    const capacity = wordPool(settings.wordLength, byId("diacritics").checked).length;
    const max = settings.repeat ? limits.words : Math.min(limits.words, capacity);
    byId("word-summary").textContent = settings.repeat
      ? "Zásoba: " + capacity + " různých slov. Opakování je povoleno."
      : "Bez opakování: nejvýše " + max + " slov v této délce.";
    if (unit.value === "words") {
      amount.max = max;
      byId("limit").textContent = "1–" + max.toLocaleString("cs-CZ");
    }
  }
  ["sentence-length","sentence-randomness"].forEach(id => byId(id).addEventListener("input", updateSentenceLabels));
  ["word-length","word-repeat","diacritics"].forEach(id => byId(id).addEventListener("change", updateWordLimit));
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
  function updateListControls() {
    const enabled = paragraphSettings().listType !== "none";
    byId("list-count-field").hidden = !enabled;
    byId("list-count").disabled = !enabled;
  }
  form.querySelectorAll('input[name="paragraph-list"]').forEach(input => {
    input.addEventListener("change", updateListControls);
  });
  lengthSlider.addEventListener("input", updateParagraphLabels);
  randomnessSlider.addEventListener("input", updateParagraphLabels);
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    try {
      const options = unit.value === "paragraphs" ? paragraphSettings() : unit.value === "sentences" ? sentenceSettings() : wordSettings();
      output.value = generateText(Number(amount.value), unit.value, byId("diacritics").checked, options);
    } catch (error) {
      announce(error.message);
      return;
    }
    updateStats();
    announce("Nový text je připravený.");
  });
  unit.addEventListener("change", () => {
    ["paragraphs","sentences","words"].forEach((mode, i) => {
      const panel = byId(["paragraph-options","sentence-options","word-options"][i]);
      panel.hidden = unit.value !== mode;
      panel.disabled = unit.value !== mode;
    });
    amount.max = limits[unit.value];
    amount.value = defaults[unit.value];
    byId("limit").textContent = "1–" + limits[unit.value].toLocaleString("cs-CZ");
    updateWordLimit();
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
  updateListControls();
  updateSentenceLabels();
  updateSentenceList();
  updateWordLimit();
  output.value = generateText(3, "paragraphs", true, paragraphSettings());
  updateStats();
}
