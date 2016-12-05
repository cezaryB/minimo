//1. Tworzę contenery dla każdego artykułu	

	var divGroup = document.getElementsByClassName("articles-wrapper")[0];
	
	var divArticle00 = document.createElement("div");
	divArticle00.className = "article";

	var divArticle01 = document.createElement("div");
	divArticle01.className = "article";

	var divArticle02 = document.createElement("div");
	divArticle02.className = "article";

	var divArticle03 = document.createElement("div");
	divArticle03.className = "article";

	var articleContainer = document.getElementsByClassName("article");

//2. Dodaje każdy div z artykułem do divu z klasą "articles-wrapper"

	divGroup.appendChild(divArticle00)
	divGroup.appendChild(divArticle01)
	divGroup.appendChild(divArticle02)
	divGroup.appendChild(divArticle03)


//3. Tworzę pętlę, która przechodzi przez array "articles" zawarty w pliku JSON (każdy obiekt wewnątrz array to artykuł)
//   Pętla dodaje każdy element artykułu do odpowiedniego divu

for (var i = 0; i < articles.length; i++) {
	articleContainer[i].appendChild(articles[i].img);
	articleContainer[i].appendChild(articles[i].span);
	articleContainer[i].appendChild(articles[i].header);
	articleContainer[i].appendChild(articles[i].paragraph);
}


