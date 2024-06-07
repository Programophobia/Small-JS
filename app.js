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

//add pokemon
const addPlace = document.getElementById('yourPokemon')
let url = './Poke/'
//let inputValue = document.querySelector('input').value;
//let inputParsedInValue = parseInt(inputValue);
//console.log(inputParsedInValue);


function addPokemon(){
  let inputValue = document.querySelector('.input').value;
  let inputParsedInValue = parseInt(inputValue);
  const element = document.createElement('img');
  element.src = `${url}${inputParsedInValue}.png`
addPlace.appendChild(element);
  console.log('dziala klik', element.src);
  inputValue = ''

}

const btn = document.querySelector('.button')
console.log(btn)

btn.addEventListener('click', addPokemon)


const heading = document.getElementById('print');
const input = document.querySelector('input');
 
input.addEventListener('input', function () {
  if (!this.value) {
    return heading.innerText = `Enter the number from 1 to 90`
  }
  heading.innerText = `Pokemon number: ${input.value} thank you for adding`;
})
