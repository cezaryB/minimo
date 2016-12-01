//1. Tworzę zmienne dla każdego artykułu
	//1.1. Tworzę div, w którym znajdzie się artykuł oraz nadaję mu klasę "article"
	var divGroup = document.getElementsByClassName("articles-wrapper")[0];
	
	var divArticle01 = document.createElement("div");
	divArticle01.className = "article";

	var divArticle02 = document.createElement("div");
	divArticle02.className = "article";

	var divArticle03 = document.createElement("div");
	divArticle03.className = "article";

	var divArticle04 = document.createElement("div");
	divArticle04.className = "article";
	//1.2. Dodaje każdy div z artykułem do divu z klasą "articles-wrapper"

	divGroup.appendChild(divArticle01)
	divGroup.appendChild(divArticle02)
	divGroup.appendChild(divArticle03)
	divGroup.appendChild(divArticle04)

	//1.3. Tworzę <img> z odpowiednim atrybutem href, oddzielny dla każdego artykułu

	var img01 = document.createElement("img");
	img01.src = "images/img_01.jpg";

	var img02 = document.createElement("img");
	img02.src = "images/img_02.jpg";

	var img03 = document.createElement("img");
	img03.src = "images/img_03.jpg";

	var img04 = document.createElement("img");
	img04.src = "images/img_04.jpg";

	//1.4. Tworzę <span> z kategorią, oddzielny dla każdego artykułu oraz nadaję mu odpowiednią treść

	var span01 = document.createElement("span");
	span01.innerText = "lifestyle"

	var span02 = document.createElement("span");
	span02.innerText = "lifestyle"

	var span03 = document.createElement("span");
	span03.innerText = "photodiary"

	var span04 = document.createElement("span");
	span04.innerText = "photodiary"


	//1.5. Tworzę nagłówek <h1>, oddzielny dla każdego artykułu oraz nadaję mu odpowiednią treść

	var header01 = document.createElement("h1");
	header01.innerText = "More then just a music festival";

	var header02 = document.createElement("h1");
	header02.innerText = "Life tastes better with coffee";

	var header03 = document.createElement("h1");
	header03.innerText = "American dream";

	var header04 = document.createElement("h1");
	header04.innerText = "A day exploring the Alps";

	//1.6. Tworzę <p> z opisem, oddzielny dla każdego artykułu oraz nadaję mu odpowiednią treść


	var paragraph01 = document.createElement("p");
	paragraph01.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor."

	var paragraph02 = document.createElement("p");
	paragraph02.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor."

	var paragraph03 = document.createElement("p");
	paragraph03.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor."

	var paragraph04 = document.createElement("p");
	paragraph04.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sagittis ligula vel libero condimentum pharetra. Quisque sed ultricies odio. Donec imperdiet dolor in nunc pulvinar, vel placerat nibh finibus. In mattis laoreet auctor."


//2. Tworzę funkcję kreującą obiekty (każdy obiekt to 1 artykuł)

function createArticle(img, span, header, paragraph) {
	var article = {
		image: img,
		category: span,
		title: header,
		description: paragraph
	}
	return article;
}

//3. Tworzę osobny obiekt dla każdego z artykułów przy pomocy funkcji

var article01 = createArticle(img01, span01, header01, paragraph01);
var article02 = createArticle(img02, span02, header02, paragraph02);
var article03 = createArticle(img03, span03, header03, paragraph03);
var article04 = createArticle(img04, span04, header04, paragraph04);


//4. Tworzę pętlę, która dodaje property z obiektu z artykułem do danego divu

for (element in article01) {
	divArticle01.appendChild(article01[element]);
}

for (element in article02) {
	divArticle02.appendChild(article02[element]);
}

for (element in article03) {
	divArticle03.appendChild(article03[element]);
}

for (element in article04) {
	divArticle04.appendChild(article04[element]);
}