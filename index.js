const div = document.querySelector(".joke");
const button = document.querySelector("button");
const showJoke = document.createElement("p");

button.addEventListener("click", () => {
  const f = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await res.json();
    showJoke.textContent = joke.value;
    div.append(showJoke);
  };
  f();
});
