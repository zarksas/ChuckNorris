const div = document.querySelector(".joke");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const showJoke = document.createElement("p");
  const f = async () => {
    const res = await fetch("https://api.chucknorris.io/jokes/random");
    const joke = await res.json();
    showJoke.textContent = joke.value;
    document.body.append(showJoke);
  };
  f();

  document.body.append(div);
  div.append(button);
});
