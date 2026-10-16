const annexTranslations = {
  es: {
    skip: "Saltar al contenido",
    languageLabel: "Idioma de la interfaz",
    languageStatus: "6 idiomas de interfaz",
    annexNav: "Navegación del anexo",
    navSculptures: "Esculturas",
    navSources: "Fuentes",
    navAccess: "Accesibilidad",
    backToSeries: "Volver a la serie",
    annexEyebrow: "Anexo · investigación abierta",
    annexTitle: "Bibliografía de Rafael Pombo.",
    annexLoading: "Cargando el inventario bibliográfico…",
    annexSourcesLabel: "Fuentes del anexo",
    annexInventoryLabel: "Inventario bibliográfico",
    annexFooterCopy: "Un anexo para seguir verificando.",
    backToSculptures: "Volver a las esculturas",
    sourceListPrefix: "Fuente de esta lista: ",
    by: "por",
    sculpture: "escultura: ",
    alternateName: "También aparece como: ",
    updated: "Actualizado: ",
    loadError: "No se pudo cargar el inventario. Recarga la página desde el servidor local.",
  },
  en: {
    skip: "Skip to content",
    languageLabel: "Interface language",
    languageStatus: "6 interface languages",
    annexNav: "Annex navigation",
    navSculptures: "Sculptures",
    navSources: "Sources",
    navAccess: "Accessibility",
    backToSeries: "Back to the series",
    annexEyebrow: "Annex · open research",
    annexTitle: "Rafael Pombo bibliography.",
    annexLoading: "Loading the bibliography inventory…",
    annexSourcesLabel: "Annex sources",
    annexInventoryLabel: "Bibliography inventory",
    annexFooterCopy: "An annex for continued checking.",
    backToSculptures: "Back to the sculptures",
    sourceListPrefix: "Source for this list: ",
    by: "by",
    sculpture: "sculpture: ",
    alternateName: "Also appears as: ",
    updated: "Updated: ",
    loadError: "The inventory could not be loaded. Reload the page from the local server.",
  },
  pt: {
    skip: "Pular para o conteúdo",
    languageLabel: "Idioma da interface",
    languageStatus: "6 idiomas de interface",
    annexNav: "Navegação do anexo",
    navSculptures: "Esculturas",
    navSources: "Fontes",
    navAccess: "Acessibilidade",
    backToSeries: "Voltar à série",
    annexEyebrow: "Anexo · pesquisa aberta",
    annexTitle: "Bibliografia de Rafael Pombo.",
    annexLoading: "Carregando o inventário bibliográfico…",
    annexSourcesLabel: "Fontes do anexo",
    annexInventoryLabel: "Inventário bibliográfico",
    annexFooterCopy: "Um anexo para continuar verificando.",
    backToSculptures: "Voltar às esculturas",
    sourceListPrefix: "Fonte desta lista: ",
    by: "por",
    sculpture: "escultura: ",
    alternateName: "Também aparece como: ",
    updated: "Atualizado: ",
    loadError: "Não foi possível carregar o inventário. Recarregue a página pelo servidor local.",
  },
  fr: {
    skip: "Aller au contenu",
    languageLabel: "Langue de l’interface",
    languageStatus: "6 langues d’interface",
    annexNav: "Navigation de l’annexe",
    navSculptures: "Sculptures",
    navSources: "Sources",
    navAccess: "Accessibilité",
    backToSeries: "Retour à la série",
    annexEyebrow: "Annexe · recherche ouverte",
    annexTitle: "Bibliographie de Rafael Pombo.",
    annexLoading: "Chargement de l’inventaire bibliographique…",
    annexSourcesLabel: "Sources de l’annexe",
    annexInventoryLabel: "Inventaire bibliographique",
    annexFooterCopy: "Une annexe pour poursuivre les vérifications.",
    backToSculptures: "Retour aux sculptures",
    sourceListPrefix: "Source de cette liste : ",
    by: "par",
    sculpture: "sculpture : ",
    alternateName: "Aussi connu sous le nom : ",
    updated: "Mis à jour : ",
    loadError: "L’inventaire n’a pas pu être chargé. Rechargez la page depuis le serveur local.",
  },
  de: {
    skip: "Zum Inhalt springen",
    languageLabel: "Sprache der Benutzeroberfläche",
    languageStatus: "6 Oberflächensprachen",
    annexNav: "Navigation des Anhangs",
    navSculptures: "Skulpturen",
    navSources: "Quellen",
    navAccess: "Barrierefreiheit",
    backToSeries: "Zur Serie",
    annexEyebrow: "Anhang · offene Recherche",
    annexTitle: "Bibliografie von Rafael Pombo.",
    annexLoading: "Bibliografisches Verzeichnis wird geladen…",
    annexSourcesLabel: "Quellen des Anhangs",
    annexInventoryLabel: "Bibliografisches Verzeichnis",
    annexFooterCopy: "Ein Anhang für weitere Prüfungen.",
    backToSculptures: "Zu den Skulpturen",
    sourceListPrefix: "Quelle dieser Liste: ",
    by: "von",
    sculpture: "Skulptur: ",
    alternateName: "Auch bekannt als: ",
    updated: "Aktualisiert: ",
    loadError: "Das Verzeichnis konnte nicht geladen werden. Laden Sie die Seite über den lokalen Server neu.",
  },
  it: {
    skip: "Vai al contenuto",
    languageLabel: "Lingua dell’interfaccia",
    languageStatus: "6 lingue dell’interfaccia",
    annexNav: "Navigazione dell’appendice",
    navSculptures: "Sculture",
    navSources: "Fonti",
    navAccess: "Accessibilità",
    backToSeries: "Torna alla serie",
    annexEyebrow: "Appendice · ricerca aperta",
    annexTitle: "Bibliografia di Rafael Pombo.",
    annexLoading: "Caricamento dell’inventario bibliografico…",
    annexSourcesLabel: "Fonti dell’appendice",
    annexInventoryLabel: "Inventario bibliografico",
    annexFooterCopy: "Un’appendice per continuare le verifiche.",
    backToSculptures: "Torna alle sculture",
    sourceListPrefix: "Fonte di questo elenco: ",
    by: "di",
    sculpture: "scultura: ",
    alternateName: "Compare anche come: ",
    updated: "Aggiornato: ",
    loadError: "Non è stato possibile caricare l’inventario. Ricarica la pagina dal server locale.",
  },
};

const annexLanguageMeta = {
  es: "es-CO",
  en: "en",
  pt: "pt-BR",
  fr: "fr",
  de: "de",
  it: "it",
};

const annexById = (id) => document.getElementById(id);
const storedAnnexLanguage = readAnnexPreference("pombo-language", "es");
const annexState = {
  lang: Object.prototype.hasOwnProperty.call(annexLanguageMeta, storedAnnexLanguage) ? storedAnnexLanguage : "es",
};

function readAnnexPreference(key, fallback) {
  try {
    return window.localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeAnnexPreference(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Private browsing can reject localStorage; the page remains usable for this visit.
  }
}

function annexTranslate(key) {
  return annexTranslations[annexState.lang]?.[key] || annexTranslations.es[key] || key;
}

function applyAnnexLanguage() {
  document.documentElement.lang = annexLanguageMeta[annexState.lang];
  const dictionary = annexTranslations[annexState.lang];
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });
  const select = annexById("annex-language-select");
  if (select) select.value = annexState.lang;
}

function makeText(tag, className, value) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = value;
  return element;
}

function renderSources(sources) {
  const container = annexById("annex-sources");
  if (!container) return;
  container.replaceChildren();
  sources.forEach((source) => {
    const link = document.createElement("a");
    link.className = "annex-source-link";
    link.href = source.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = source.label + " ↗";
    container.append(link);
  });
}

function renderSection(section, index) {
  const wrapper = document.createElement("section");
  wrapper.className = "annex-section";
  wrapper.setAttribute("aria-labelledby", "annex-section-" + index);

  const heading = makeText("h2", null, section.title);
  heading.id = "annex-section-" + index;
  wrapper.append(heading);
  if (section.source) wrapper.append(makeText("p", "annex-section-source", annexTranslate("sourceListPrefix") + section.source));

  const list = document.createElement("ol");
  list.className = "annex-list";
  section.items.forEach((item) => {
    const listItem = document.createElement("li");
    const card = document.createElement("article");
    card.className = "bibliography-item";

    const title = makeText("h3", null, item.title);
    card.append(title);

    const metaParts = [item.type, item.date, item.author ? annexTranslate("by") + " " + item.author : "", item.sculpture ? annexTranslate("sculpture") + item.sculpture : ""].filter(Boolean);
    if (metaParts.length) card.append(makeText("p", "bibliography-meta", metaParts.join(" · ")));
    if (item.note) card.append(makeText("p", "bibliography-note", item.note));
    if (item.alternateName) card.append(makeText("p", "bibliography-note", annexTranslate("alternateName") + item.alternateName + "."));
    if (item.source) card.append(makeText("p", "bibliography-source", item.source));

    listItem.append(card);
    list.append(listItem);
  });
  wrapper.append(list);
  return wrapper;
}

async function loadAnnex() {
  try {
    const response = await fetch("content/bibliografia-rafael-pombo.json", { cache: "no-cache" });
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    annexById("annex-scope").textContent = data.scope + " " + annexTranslate("updated") + data.updated + ".";
    renderSources(data.sources || []);
    const list = annexById("annex-list");
    list.replaceChildren(...(data.sections || []).map(renderSection));
    list.setAttribute("aria-busy", "false");
  } catch (error) {
    console.warn("Pombo: no se pudo cargar el anexo", error);
    annexById("annex-scope").textContent = annexTranslate("loadError");
    annexById("annex-scope")?.setAttribute("role", "alert");
    annexById("annex-list")?.setAttribute("aria-busy", "false");
  }
}

applyAnnexLanguage();
annexById("annex-language-select")?.addEventListener("change", (event) => {
  const value = event.target.value;
  annexState.lang = Object.prototype.hasOwnProperty.call(annexLanguageMeta, value) ? value : "es";
  writeAnnexPreference("pombo-language", annexState.lang);
  applyAnnexLanguage();
  loadAnnex();
});

loadAnnex();
