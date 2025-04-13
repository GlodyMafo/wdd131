// Art Gallery

fetch('data/gallery.json')
    .then(res => res.json())
    .then(data => {
        const galleryContainer = document.getElementById('art-gallery');
        data.forEach(item => {
            galleryContainer.innerHTML += `
        <div class="item">
          <img src="${item.image}" alt="${item.alt}" loading="lazy">
          <p>
            <strong>Artiste :</strong> ${item.artist}<br><br>${item.description}
          </p>
        </div>
      `;
        });
    })
    .catch(err => console.error('Erreur galerie:', err));


fetch('data/discover.json')
    .then(res => res.json())
    .then(data => {
        const discoverContainer = document.getElementById('discover-items');
        data.forEach(item => {
            discoverContainer.innerHTML += `
        <figure>
          <img src="${item.image}" alt="${item.alt}" loading="lazy">
          <figcaption>
            <p>${item.title}</p>
            <a href="${item.link}">Read more</a>
          </figcaption>
        </figure>
      `;
        });
    })
    .catch(err => console.error('Erreur discover:', err));




// artist of the week


    let artists = [];

function getCurrentWeekIndex() {
    const startDate = new Date("2025-04-12"); 
    const now = new Date();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; 
    const weeksPassed = Math.floor((now - startDate) / oneWeek);
    return weeksPassed % artists.length;
}

function updateArtist(index) {
    const artist = artists[index];
    document.getElementById('artist-description').textContent = artist.description;
    document.getElementById('artist-image').src = artist.image;
    document.getElementById('artist-image').alt = `Portrait de ${artist.nom}`;
    document.getElementById('artwork-image').src = artist.oeuvre;
    document.getElementById('artwork-image').alt = `Œuvre de ${artist.nom}`;
}

fetch('data/artistoftheweek.json')
    .then(response => response.json())
    .then(data => {
        artists = data;
        const index = getCurrentWeekIndex();
        updateArtist(index);
    })
    .catch(error => {
        console.error("Erreur lors du chargement des artistes :", error);
    });
