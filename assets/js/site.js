(() => {
  const cards = [...document.querySelectorAll("[data-joke-card]")];
  const search = document.querySelector("#joke-search");
  const empty = document.querySelector("#empty-state");

  function randomJoke() {
    const available = cards.filter(card => !card.hidden);
    const source = available.length ? available : cards;
    if (!source.length) return;
    const chosen = source[Math.floor(Math.random() * source.length)];
    window.location.href = chosen.dataset.jokeUrl;
  }

  document.querySelectorAll(".random-joke, #random-joke-top").forEach(button => {
    button.addEventListener("click", randomJoke);
  });

  if (search) {
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase();
      let visible = 0;

      cards.forEach(card => {
        const matches = !query || card.dataset.search.includes(query);
        card.hidden = !matches;
        if (matches) visible++;
      });

      if (empty) empty.hidden = visible !== 0;
    });
  }
})();
