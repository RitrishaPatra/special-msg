
const compliments = [
  "You're a ray of sunshine ☀️",
  "Your smile lights up rooms! 😊",
  "Your voice is magical ✨",
  "You're the peanut butter to everyone's jelly 🥜🍓",
  "You're smart and cute 🧠💙",
  "Your energy is contagious 🔥",
  "You're not just special, you're unique 🌟",
  "You make the world better just by existing 🌈",
  "Your kindness is a gift to the people around you 🙌",
  "You're the reason group chats stay alive! 💬"
];
function revealSurprise() {
  document.getElementById("intro").style.display = "none";     
  document.getElementById("surprise").style.display = "flex";  
}

function openSurprise() {
  document.getElementById("surprise").style.display = "none";  
  const random = Math.floor(Math.random() * compliments.length);
  const chosenCompliment = compliments[random]; 

  const complimentDiv = document.getElementById("compliment");
  complimentDiv.style.display = "block"; 
  complimentDiv.innerHTML = `<p style="font-size: 1.4rem; color: rgb(20, 17, 17); font-family: Courier New, monospace;">💬 ${chosenCompliment}</p>`;
}




