const images = ["01.jpg", "02.jpg", "03.jpg"]

const chosen = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosen}`;


document.body.appendChild(bgimage)