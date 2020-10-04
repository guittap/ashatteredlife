const dialogueElement = document.getElementById("dialogue");
const optionsElement = document.getElementById("options");

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find((textNode) => textNode.id === textNodeIndex);
  dialogueElement.innerHTML =
    textNode.text + "<br>" + dialogueElement.innerHTML;
  while (optionsElement.firstChild) {
    optionsElement.removeChild(optionsElement.firstChild);
  }

  textNode.options.forEach((option) => {
    if (showOption(option)) {
      const button = document.createElement("button");
      button.innerText = option.text;
      button.classList.add("btn");
      button.classList.add("btn-outline-primary");
      button.addEventListener("click", () => selectOption(option));
      optionsElement.appendChild(button);
    }
  });
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

const textNodes = [
  {
    id: 1,
    text: "you enter the woods alone.",
    options: [
      {
        text: "walk",
        setState: { courage: 1 },
        nextText: 2,
      },
      {
        text: "stand",
        setState: { courage: 0 },
        nextText: 2,
      },
    ],
  },
  {
    id: 2,
    text: "you hear rustling behind the bushes to your right.",
    options: [
      {
        text: "run",
        setState: { courage: 1 },
        nextText: 3,
      },
      {
        text: "walk",
        setState: { courage: 1 },
        nextText: 4,
      },
      {
        text: "stand",
        setState: { courage: 0 },
        nextText: 5,
      },
    ],
  },
  {
    id: 3,
    text:
      "you pick up the pace. as you run, you can hear the monster give chance.",
    options: [
      {
        text: "run",
        setState: { courage: 1 },
        nextText: 4,
      },
      {
        text: "turn around",
        setState: { courage: 0 },
        nextText: 5,
      },
    ],
  },
];

startGame();
