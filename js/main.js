let moovies;

    fetch("data/moovies.json")
      .then(response => response.json())
      .then(data => {
        // Utilisez les données JSON ici
        moovies = data;
        // console.log(moovies.Title);
        // console.log(moovies.Plot);
        // console.log(moovies.imdbRating);
        moovies.forEach(movie => {
            console.log(movie.Title);
            console.log(movie.Plot);
            console.log(movie.imdbRating);
            console.log(movie.Images);
          });
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors du chargement du fichier JSON :", error);
      });

  