const annexById = (id) => document.getElementById(id);

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
  if (section.source) wrapper.append(makeText("p", "annex-section-source", "Fuente de esta lista: " + section.source));

  const list = document.createElement("ol");
  list.className = "annex-list";
  section.items.forEach((item) => {
    const listItem = document.createElement("li");
    const card = document.createElement("article");
    card.className = "bibliography-item";

    const title = makeText("h3", null, item.title);
    card.append(title);

    const metaParts = [item.type, item.date, item.author ? "por " + item.author : "", item.sculpture ? "escultura: " + item.sculpture : ""].filter(Boolean);
    if (metaParts.length) card.append(makeText("p", "bibliography-meta", metaParts.join(" · ")));
    if (item.note) card.append(makeText("p", "bibliography-note", item.note));
    if (item.alternateName) card.append(makeText("p", "bibliography-note", "También aparece como: " + item.alternateName + "."));
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
    annexById("annex-scope").textContent = data.scope + " Actualizado: " + data.updated + ".";
    renderSources(data.sources || []);
    const list = annexById("annex-list");
    list.replaceChildren(...(data.sections || []).map(renderSection));
    list.setAttribute("aria-busy", "false");
  } catch (error) {
    console.warn("Pombo: no se pudo cargar el anexo", error);
    annexById("annex-scope").textContent = "No se pudo cargar el inventario. Recarga la página desde el servidor local.";
    annexById("annex-scope")?.setAttribute("role", "alert");
    annexById("annex-list")?.setAttribute("aria-busy", "false");
  }
}

loadAnnex();
