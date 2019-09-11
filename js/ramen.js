var rankings = [
	{
		title: "Sonos Interns Take On Ramen!",
		url: "/images/ramen/thumbnail-bigbowls.jpg"
	},
	{
		title: "1. Santouka",
		url: "/images/ramen/thumbnail-01santouka.jpg"
	},
	{
		title: "2. Isshindo Ramen",
		url: "/images/ramen/thumbnail-02isshindo.jpg"
	},
	{
		title: "3 (tie). Oisa Ramen",
		url: "/images/ramen/thumbnail-03oisa.jpg"
	},
	{
		title: "3 (tie). Tsurumen Davis",
		url: "/images/ramen/thumbnail-03tsurumen.jpg"
	},
	{
		title: "4. Ganko Ittetsu Ramen",
		url: "/images/ramen/thumbnail-04gankoittetsu.jpg"
	},
	{
		title: "5. Shabu & Mein",
		url: "/images/ramen/thumbnail-05shabumein.jpg"
	},
	{
		title: "6. Shin Hakata Ramen",
		url: "/images/ramen/thumbnail-06shinhakata.jpg"
	},
	{
		title: "7. Snappy Kitchen",
		url: "/images/ramen/thumbnail-07snappy.jpg"
	},
	{
		title: "8. Sapporo Ramen",
		url: "/images/ramen/thumbnail-08sapporo.jpg"
	},
	{
		title: "9. One Ramen And Sushi",
		url: "/images/ramen/thumbnail-09oneramen.jpg"
	},
	{
		title: "10. Sakura Sunnaku",
		url: "/images/ramen/thumbnail-10sakurasunnaku.jpg"
	},
	{
		title: "11. Yume Wo Katare",
		url: "/images/ramen/thumbnail-11yumewokatare.jpg"
	},
	{
		title: "12. Totto Ramen",
		url: "/images/ramen/thumbnail-12totto.jpg"
	},
	{
		title: "13. Ruckus",
		url: "/images/ramen/thumbnail-13ruckus.jpg"
	},
	{
		title: "14. Wen's Yunnan Noodle and Ramen",
		url: "/images/ramen/thumbnail-14wensyunnan.jpg"
	},
	{
		title: "15. Wagamama",
		url: "/images/ramen/thumbnail-15wagamama.jpg"
	},
	{
		title: "16. Amateras",
		url: "/images/ramen/thumbnail-16amateras.jpg"
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