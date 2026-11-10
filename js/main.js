const $ = s => document.querySelector(s);
const page = document.body.dataset.page;
const esc = t => String(t ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const paras = a => a.map(t => `<p>${esc(t)}</p>`).join("");
const linkBtns = l => (l || []).filter(x => x.url).map(x => `<a class="btn" href="${esc(x.url)}" target="_blank" rel="noopener">${esc(x.label)}</a>`).join("");

function fallback(el, label) { const d = document.createElement("div"); d.className = "ph " + (el.className || ""); d.textContent = "Add image: " + label; el.replaceWith(d); }
const img = (src, alt, cls = "") => `<img class="${cls}" src="${esc(src)}" alt="${esc(alt)}" loading="lazy" onerror="fallback(this,'${esc(src)}')">`;
function media(m) {
  let inner;
  if (m.type === "youtube") inner = m.src ? `<iframe src="https://www.youtube.com/embed/${esc(m.src)}" allowfullscreen title="${esc(m.caption)}"></iframe>` : `<div class="ph">Add YouTube video ID in data.js</div>`;
  else if (m.type === "video") inner = `<video controls src="${esc(m.src)}"></video>`;
  else inner = img(m.src, m.caption);
  return `<figure>${inner}<figcaption>${esc(m.caption)}</figcaption></figure>`;
}

const nav = [["index.html", "home", "Home"], ["projects.html", "projects", "Projects"], ["music.html", "music", "Music"], ["contact.html", "contact", "Contact"]];
document.body.insertAdjacentHTML("afterbegin", `<header class="nav"><div class="wrap"><a class="brand" href="index.html">${esc(SITE.name)}</a><button class="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav">&#9776;</button><nav id="nav" aria-label="Main">${nav.map(n => `<a href="${n[0]}" class="${page === n[1] || (page === "project" && n[1] === "projects") ? "on" : ""}">${n[2]}</a>`).join("")}</nav></div></header>`);
document.body.insertAdjacentHTML("beforeend", `<footer><div class="wrap"><p>${Object.entries(SITE.links).map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener">${esc(k)}</a>`).join("")}</p><p>&copy; ${new Date().getFullYear()} ${esc(SITE.name)}</p></div></footer>`);
const mb = $(".menu-btn"), nv = $("#nav");
mb.addEventListener("click", () => { const o = nv.classList.toggle("open"); mb.setAttribute("aria-expanded", o); mb.innerHTML = o ? "&times;" : "&#9776;"; });
document.title = `${SITE.name} | ${{ home: "Home", projects: "Projects", music: "Music", contact: "Contact", project: "Project" }[page]}`;

const R = {
  home() {
    $("#app").innerHTML = `
    <div class="hero"><div class="wrap grid"><div><h1>${esc(SITE.name)}</h1><p>${esc(SITE.tagline)}</p><p>${esc(SITE.summary)}</p>
      <a class="btn" href="projects.html">See my projects</a><a class="btn ghost" href="${esc(SITE.resume)}" download>Download resume</a></div>
      ${img(SITE.photo, "Portrait of " + SITE.name, "photo")}</div></div>
    <section><div class="wrap"><h2>About me</h2>${paras(SITE.about)}</div></section>
    <section class="alt"><div class="wrap"><h2>Career goals</h2><p>${esc(SITE.goals.intro)}</p>
      <ul class="steps">${SITE.goals.steps.map(s => `<li><b>${esc(s.when)}</b><br>${esc(s.what)}</li>`).join("")}</ul></div></section>
    <section><div class="wrap"><h2>Experience &amp; skills</h2><div class="tl">${SITE.experience.map(e => `<div><small>${esc(e.when)}</small><h3>${esc(e.title)}</h3>${esc(e.text)}</div>`).join("")}</div>
      <div class="chips">${SITE.skills.map(s => `<span>${esc(s)}</span>`).join("")}</div></div></section>
    <section class="alt" id="resume"><div class="wrap"><h2>Resume</h2><iframe class="resume" src="${esc(SITE.resume)}" title="Resume"></iframe>
      <p><a class="btn" href="${esc(SITE.resume)}" target="_blank" rel="noopener">Open full screen</a><a class="btn" href="${esc(SITE.resume)}" download>Download PDF</a></p></div></section>
    <section><div class="wrap"><h2>Contact</h2><p><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a> &middot; <a href="tel:${esc(SITE.phone)}">${esc(SITE.phone)}</a> &middot; ${esc(SITE.location)}</p><a class="btn" href="contact.html">Send a message</a></div></section>`;
  },
  projects() {
    $("#app").innerHTML = `<section><div class="wrap"><h1>Projects</h1><p>Open a project for a quick summary, then follow the link for the full write-up.</p>
    ${PROJECTS.map(p => `<details class="proj"><summary>${esc(p.title)} <small class="meta">${esc(p.date)}</small></summary><div class="pbody">${img(p.cover, p.title, "thumb")}
      <div><p>${esc(p.blurb)}</p><div class="chips">${(p.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div><a class="btn" href="project.html?id=${encodeURIComponent(p.id)}">View full project</a></div></div></details>`).join("")}</div></section>`;
  },
  project() {
    const p = PROJECTS.find(x => x.id === new URLSearchParams(location.search).get("id"));
    if (!p) { $("#app").innerHTML = `<section><div class="wrap"><h1>Project not found</h1><a class="btn" href="projects.html">Back to projects</a></div></section>`; return; }
    document.title = `${p.title} | ${SITE.name}`;
    $("#app").innerHTML = `<section><div class="wrap"><a href="projects.html">&larr; All projects</a><h1>${esc(p.title)}</h1><p class="meta">${esc(p.date)}</p>
      <div class="chips">${(p.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
      ${p.sections.map(s => `<h2>${esc(s.h)}</h2>${paras(s.p)}`).join("")}
      <div class="gallery">${(p.media || []).map(media).join("")}</div>${linkBtns(p.links)}</div></section>`;
  },
  music() {
    $("#app").innerHTML = `<section><div class="wrap"><h1>Music</h1>${paras([MUSIC.intro])}${linkBtns(MUSIC.links)}</div></section>
    <section class="alt"><div class="wrap"><h2>Journey</h2><div class="tl">${MUSIC.timeline.map(e => `<div><small>${esc(e.when)}</small><h3>${esc(e.title)}</h3>${esc(e.text)}</div>`).join("")}</div></div></section>
    <section><div class="wrap"><h2>Photos &amp; videos</h2><div class="gallery">${MUSIC.media.map(media).join("")}</div></div></section>`;
  },
  contact() {
    const act = SITE.formspree ? `action="${esc(SITE.formspree)}" method="POST"` : "";
    $("#app").innerHTML = `<section><div class="wrap"><h1>Contact me</h1><p>Email <a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a>, or use the form.</p>
    <form id="f" ${act}><div><label for="n">Name</label><input id="n" name="name" required></div><div><label for="e">Your email</label><input id="e" name="email" type="email" required></div>
    <div><label for="m">Message</label><textarea id="m" name="message" rows="5" required></textarea></div><button class="btn" type="submit">Send message</button></form>
    <p>${Object.entries(SITE.links).map(([k, v]) => `<a href="${esc(v)}" target="_blank" rel="noopener">${esc(k)}</a>`).join(" &middot; ")}</p></div></section>`;
    if (!SITE.formspree) $("#f").addEventListener("submit", e => { e.preventDefault(); const v = n => encodeURIComponent($("#" + n).value);
      location.href = `mailto:${SITE.email}?subject=Message from ${v("n")}&body=${v("m")}%0A%0A${v("e")}`; });
  }
};
R[page]();
