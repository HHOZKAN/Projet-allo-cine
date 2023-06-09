let moovies;

fetch("data/moovies.json")
    .then((response) => response.json())
    .then((data) => {
        // Utilisez les données JSON ici
        moovies = data;
        const article = document.querySelector(".m-5");
        moovies.forEach(movie => {
            console.log(movie.Title);
            const titleElement = document.querySelector("h3");
            const plotElement = document.querySelector(".plot");
            const ratingElement = document.querySelector(".rating");

            titleElement.innerHTML = movie.Title;
            plotElement.innerHTML = movie.Plot;
            ratingElement.innerHTML = "Note " + movie.imdbRating + "/10";


            article.appendChild(titleElement);
            article.appendChild(plotElement);
            article.appendChild(ratingElement);
        });

        // const reponse = fetch("data/moovies.json");
        // const moovies = reponse.json();
        // moovies.foreach(moovies => {
            // const titleElement = document.querySelector("h3");
            // const plotElement = document.querySelector(".plot");
            // const ratingElement = document.querySelector(".rating");

            // titleElement.textContent = moovies.Title;
            // plotElement.textContent = moovies.Plot;
            // ratingElement.textContent = "Note " + moovies.imdbRating + "/10";

        //     const article = document.querySelector("article");
            // article.appendChild(titleElement);
            // article.appendChild(plotElement);
            // article.appendChild(ratingElement);
        // });
        // function article(moovies) {
        //     for(let i = 0; i<moovies.length; i++) {
        //         const moovie = moovies[i];
        //         const titleElement = document.createElement("h3");
        //         /*const plotElement = document.createElement("p:first-child");
        //         const ratingElement = document.createElement("p:last-child");*/

        //         titleElement.textContent = moovie.Title;
        //         /*plotElement.textContent = moovies.Plot;
        //         ratingElement.textContent = "Note " + moovies.imdbRating + "/10";*/

        //         const article = document.querySelector("article");
        //         article.appendChild(titleElement);
        //         /*article.appendChild(plotElement);
        //         article.appendChild(ratingElement);*/
        //     }
        // }
        article(moovies);

    })



