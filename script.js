const qs = (selector) => document.querySelector(selector);
const question = qs(".question");
const gif = qs(".gif");
const [yesBtn, noBtn] = [".yes-btn", ".no-btn"].map(qs);

const handleYesClick = () => {
  question.innerHTML = "Great! Choose a place for our Coffee:";
  gif.src = "https://media.giphy.com/media/RDg2okFUR1OFosFuCt/giphy.gif";

  noBtn.removeEventListener("mouseover", handleNoMouseOver);
  noBtn.remove();

  const options = ["Starbucks", "Still North", "Dirtcowboy Cafe"];
  const optionsContainer = document.createElement("div");
  optionsContainer.classList.add("options-container");

  options.forEach((option) => {
    const optionBtn = document.createElement("button");
    optionBtn.textContent = option;
    optionBtn.classList.add("option-btn");
    optionBtn.addEventListener("click", () => {
      alert(`See you then at ${option}!`);
    });
    optionsContainer.appendChild(optionBtn);
  });

  // Replace or append the container
  yesBtn.parentNode.replaceChild(optionsContainer, yesBtn);
};


const handleNoMouseOver = () => {
  const { width, height } = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - width;
  const maxY = window.innerHeight - height;

  noBtn.style.left = `${Math.floor(Math.random() * maxX)}px`;
  noBtn.style.top = `${Math.floor(Math.random() * maxY)}px`;
};

yesBtn.addEventListener("click", handleYesClick);
noBtn.addEventListener("mouseover", handleNoMouseOver);