Movies Online- React App + RESTful API
-The Movie app holds a searcheable database of movies and tv shows.

App Details
-The app is based on JavaScript + React.
-The app is deployed.
-Easy accessible no registration required.
-The website is still at development process and the video is demo,still searching for                good streamable server

-Live demo: https://lively-axolotl-674758.netlify.app


RESTful API
-Movie database with very good detailed documentation: https://developers.themoviedb.org

The following endpoints that the App uses:
-baseUrlDb: https://api.themoviedb.org
-baseUrlImg: https://image.tmdb.org

-For Movies
GET baseUrlDb/3/movie/popular?api_key=${apiKey}&page=${page} - Most popular movies.
GET baseUrlDb/3/movie/${id}?api_key=${apiKey} - Movie details by ID.
     -For movie poster
       GET baseUrlDb/3/movie/${movieId}/images?api_key=${apiKey} - Movie image path by ID.
       GET baseUrlImg/t/p/original/${imgPath} - Movie poster.

-For TV Shows Collection
GET baseUrlDb/3/tv/popular?api_key=${apiKey}&page=${page} - Most popular tv shows.
GET baseUrlDb/3/tv/${id}?api_key=${apiKey} - Tv show details by ID.
     -For tv show poster
       GET baseUrlDb/3/tv/${movieId}/images?api_key=${apiKey} - Tv show image path by ID.
       GET baseUrlImg/t/p/original/${imgPath} - Tv show poster.

-For TV/Movies Search
-The form has options for movie or tv show to search
     -Movie
        GET baseUrlDb/3/search/movie?api_key=${apiKey}&query=${keyword}&page=${page}&include_adult=true
     -Tv Show
        GET baseUrlDb/3/search/tv?api_key=${apiKey}&page=${page}&query=${keyword}&include_adult=true
