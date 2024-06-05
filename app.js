const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; 
 
const spans = document.querySelectorAll('span');

for (let i = 0; i < spans.length; i++) {
  spans[i].style.color = colors[i];
}


//All images and information about the Pokémon were taken from the official Pokédex: https://www.pokemon.com/us/pokedex/

gsap.set(".information", { yPercent: 100 });

gsap.utils.toArray(".container").forEach((container) => {
  let info = container.querySelector(".information"),
    silhouette = container.querySelector(".silhouette .cover"),
    tl = gsap.timeline({ paused: true });

  tl.to(info, { yPercent: 0 }).to(silhouette, { opacity: 0 }, 0);

  container.addEventListener("mouseenter", () => tl.timeScale(1).play());
  container.addEventListener("mouseleave", () => tl.timeScale(3).reverse());
});


