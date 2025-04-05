const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Kensington, Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Kinshasa, Democratic Republic of the Congo",
		location: "Kinshasa, Democratic Republic of the Congo",
		dedicated: "2019, April 14",
		area: 12000,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
	},
	{
		templeName: "Johannesburg, South Africa",
		location: "Johannesburg, South Africa",
		dedicated: "1985, August 25",
		area: 19184,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
	},
	{
		templeName: "Montreal, Quebec Temple",
		location: "Montreal, Quebec Temple",
		dedicated: "2000, June 04",
		area: 11550,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
	},

];


hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});


const container = document.getElementById("temples-container");

function renderTemples(templeList) {
  container.innerHTML = ""; 
  templeList.forEach(temple => {
    const card = document.createElement("section");
    card.innerHTML = `
      
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy" />
	  <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
    `;
    container.appendChild(card);
  });
}

renderTemples(temples); 

function filterTemples(criteria) {
	let filtered;
	switch (criteria) {
	  case "old":
		filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
		break;
	  case "new":
		filtered = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
		break;
	  case "large":
		filtered = temples.filter(t => t.area > 90000);
		break;
	  case "small":
		filtered = temples.filter(t => t.area < 10000);
		break;
	  default:
		filtered = temples;
	}
	renderTemples(filtered);
  }
;  



