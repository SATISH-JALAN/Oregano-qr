// Canvas Setup
const canvas = document.getElementById("animated-bg");
const ctx = canvas.getContext("2d");

// Resize Canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});

// Particles Array
let particles = [];

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1.2 - 0.6;
    this.speedY = Math.random() * 1.2 - 0.6;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x <= 0 || this.x >= canvas.width) this.speedX *= -1;
    if (this.y <= 0 || this.y >= canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = "rgba(0, 255, 0, 0.6)";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Initialize Particles
function initParticles() {
  particles = [];
  for (let i = 80; i < 100; i++) {
    particles.push(new Particle());
  }
}
// Live Timer
setInterval(() => {
  document.getElementById("timer").textContent =
    new Date().toLocaleTimeString();
}, 1000);

// Animate Particles
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animateParticles);
}

// Start Animation
initParticles();
animateParticles();

// Typing Effect for "Follow Our Socials"
const followText = document.getElementById("followText");
const text = "Follow Our Socials...";
let index = 0;

function typeText() {
  if (index < text.length) {
    followText.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

window.onload = function () {
  typeText();
};
// Random Crypto Facts
const facts = [
  "Bitcoin was the first cryptocurrency, launched in 2009.",
  "Ethereum introduced smart contracts in 2015.",
  "El Salvador was the first country to adopt Bitcoin as legal tender.",
  "The mysterious creator of Bitcoin is known as Satoshi Nakamoto.",
  "There will only ever be 21 million Bitcoins in existence.",
  "Dogecoin started as a joke but became widely popular.",
  "The first real-world Bitcoin transaction was for two pizzas in 2010.",
  "NFTs (Non-Fungible Tokens) gained mainstream popularity in 2021.",
  "China has banned cryptocurrency multiple times but remains a key player in mining.",
  "Ethereum is moving from Proof-of-Work to Proof-of-Stake for better energy efficiency.",
  "The most expensive NFT ever sold was over $69 million.",
  "Over 20,000 different cryptocurrencies exist today.",
  "Some countries are developing their own central bank digital currencies (CBDCs).",
  "Bitcoin mining consumes more electricity than some countries.",
  "Lightning Network enables faster and cheaper Bitcoin transactions.",
];

function changeFact() {
  document.getElementById("cryptoFact").textContent =
    facts[Math.floor(Math.random() * facts.length)];
}

setInterval(changeFact, 5000);
changeFact();
