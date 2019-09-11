var rankings = [
	{
		title: "Sonos Interns Take On Ramen!",
		url: "/images/ramen/png/bigbowls.png"
	},
	{
		title: "1. Santouka",
		url: "/images/ramen/png/01santouka.png"
	},
	{
		title: "2. Isshindo Ramen",
		url: "/images/ramen/png/02isshindo.png"
	},
	{
		title: "3 (tie). Oisa Ramen",
		url: "/images/ramen/png/03oisa.png"
	},
	{
		title: "3 (tie). Tsurumen Davis",
		url: "/images/ramen/png/03tsurumen.png"
	},
	{
		title: "4. Ganko Ittetsu Ramen",
		url: "/images/ramen/png/04gankoittetsu.png"
	},
	{
		title: "5. Shabu & Mein",
		url: "/images/ramen/png/05shabumein.png"
	},
	{
		title: "6. Shin Hakata Ramen",
		url: "/images/ramen/png/06shinhakata.png"
	},
	{
		title: "7. Snappy Kitchen",
		url: "/images/ramen/png/07snappy.png"
	},
	{
		title: "8. Sapporo Ramen",
		url: "/images/ramen/png/08sapporo.png"
	},
	{
		title: "9. One Ramen And Sushi",
		url: "/images/ramen/png/09oneramen.png"
	},
	{
		title: "10. Sakura Sunnaku",
		url: "/images/ramen/png/10sakurasunnaku.png"
	},
	{
		title: "11. Yume Wo Katare",
		url: "/images/ramen/png/11yumewokatare.png"
	},
	{
		title: "12. Totto Ramen",
		url: "/images/ramen/png/12totto.png"
	},
	{
		title: "13. Ruckus",
		url: "/images/ramen/png/13ruckus.png"
	},
	{
		title: "14. Wen's Yunnan Noodle and Ramen",
		url: "/images/ramen/png/14wensyunnan.png"
	},
	{
		title: "15. Wagamama",
		url: "/images/ramen/png/15wagamama.png"
	},
	{
		title: "16. Amateras",
		url: "/images/ramen/png/16amateras.png"
	}
];

var currentSlide = -1;
var backgroundDiv = document.getElementById("backgroundDiv");
var textElement = document.getElementById("textElement");

const animate = () => {
	currentSlide += 1;

	if(currentSlide >= rankings.length) {
		currentSlide = 0;
	}

	backgroundDiv.style.background = "linear-gradient(to bottom, rgba(255,255,255,0) 25%, #000 100%), url(" + rankings[currentSlide].url + ") no-repeat center center";
	backgroundDiv.style.backgroundSize = "cover";

	textElement.innerHTML = rankings[currentSlide].title;
}

setInterval(animate, 7000);
animate();