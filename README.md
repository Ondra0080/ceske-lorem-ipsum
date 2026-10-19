# České Lorem Ipsum · v1.0

Český výplňový text pro grafické návrhy, sazbu a weby. Bez registrace, externích knihoven, analytiky a placeného API.

## Funkce

- Volba 1–30 odstavců, 1–100 vět nebo 1–3000 slov.
- Česká diakritika s možností vypnutí.
- Kopírování do schránky a stažení souboru TXT v UTF-8.
- Upravitelné textové pole, počítadlo slov a znaků včetně mezer.
- Responzivní vzhled a kompaktní režim pro iframe.
- Věty jsou předem napsané české ukázky, náhodně kombinované v prohlížeči. Nejde o generování pomocí AI.

## Zveřejnění na GitHub Pages

V **Settings → Pages** nastavte **Deploy from a branch**, větev **main**, složku **/(root)** a uložte přes **Save**.
Po dokončení nasazení bude stránka na:
https://ondra0080.github.io/ceske-lorem-ipsum/

## Vložení do Joomla / SP Page Builder

Do doplňku Raw HTML vložte:

```html
<!-- České Lorem Ipsum v1.0 — vložení generátoru do webu. -->
<iframe
  src="https://ondra0080.github.io/ceske-lorem-ipsum/?embed=1"
  title="Generátor českého Lorem Ipsum"
  width="100%"
  height="800"
  loading="lazy"
  allow="clipboard-write"
  style="border:0; display:block;"
></iframe>
```

Výška 800 px počítá i s mobilním zobrazením; podle umístění ji můžete upravit. Textové pole má vlastní posuvník, celý iframe také zůstává posuvný. Pokud editor iframe odstraňuje, zkontrolujte jeho HTML filtr a oprávnění pro Raw HTML.

## Použití bez GitHub Pages

Otevřete `index.html` v prohlížeči nebo nahrajte `index.html`, `style.css` a `app.js` společně do jedné složky na vlastním hostingu. Pro moderní Clipboard API používejte HTTPS; při nedostupné schránce se text označí pro ruční kopírování.

## Úpravy

Texty a logika jsou v `app.js`, vzhled v `style.css` a struktura v `index.html`.
Nejsou potřeba žádné build nástroje. Změny ve větvi main se po zapnutí Pages automaticky publikují.

Vytvořeno pro [Bahula Studio](https://bahulastudio.cz).
