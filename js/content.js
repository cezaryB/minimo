
// Tworzę obiekt zawierający wszystkie artykuły

var articlesDatabase = [
	{
	link: "images/img_01.jpg",
	category: "lifestyle",
	title: "More then just a music festival",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor." 
	},
	{
	link: "images/img_02.jpg",
	category: "lifestyle",
	title: "Life tastes better with coffee",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor."
	},
	{
	link: "images/img_03.jpg",
	category: "photodiary",
	title: "American dream",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor." 
	},{
	link: "images/img_04.jpg",
	category: "photodiary",
	title: "A day exploring the Alps",
	description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor." 
	}
]

//Tworzę pętlę, która doda każdy z artykułów do divu z klasą "articles-wrapper"


for (var i = 0; i < articlesDatabase.length; i++) {
	var articleHTML = "<div class='article'>";
	articleHTML += "<img src='" + articlesDatabase[i].link + "' />";
	articleHTML += "<span>" + articlesDatabase[i].category + "</span>";
	articleHTML += "<h1>" + articlesDatabase[i].title + "</h1>";
	articleHTML += "<p>" + articlesDatabase[i].description + "</p>";
	articleHTML += "</div>";
	document.querySelector(".articles-wrapper").innerHTML += articleHTML;
}

