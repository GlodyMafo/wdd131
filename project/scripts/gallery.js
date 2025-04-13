document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch("data/art.json");
    const artworks = await response.json();
  
    const gallery = document.querySelector(".gallery");
    gallery.innerHTML = ""; 
  
    artworks.forEach(art => {
      const card = document.createElement("div");
      card.className = "art-card";
  
      card.innerHTML = `
        <img src="${art.image}" alt="${art.title}">
        <h2>${art.title}</h2>
        <p>${art.description}</p>
        <span>Artisan : ${art.artisan}</span>
        <a href="${art.contact}" class="contact-btn">Contacter l’artisan</a>
      `;
  
      gallery.appendChild(card);
    });
  });
  