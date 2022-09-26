const apiKey = '1ced348cdf5f3992c1662b3cd5c8af6f';

async function request(url) {
    try {
        const response = await fetch(url);

        if (response.ok == false) {
            const error = await response.json();
        }

        try {
            return await response.json();
        } catch (err) {
            return response;
        }
    } catch (err) {
        alert(err.message);
        throw err;
    }
}

export async function getTopRated(page) {
    if (page == undefined) {
        page = 1;
    }
    return request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${page}`);
}

export async function getPopularTvShows(page) {
    if (page == undefined) {
        page = 1;
    }
    return request(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=${page}`)
}

export async function getMovieImgPath(movieId) {
    return request(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`);
}

export async function getTvImgPath(movieId) {
    return request(`https://api.themoviedb.org/3/tv/${movieId}/images?api_key=${apiKey}`);
}

export async function getMoviePoster(imgPath) {
    return request(`https://image.tmdb.org/t/p/original/${imgPath}`);
}

export async function movieSearch(keyword, page) {
    if (page == undefined) {
        page = 1;
    }
    return request(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${keyword}&page=${page}&include_adult=true`);
}

export async function tvSearch(keyword, page) {
    if (page == undefined) {
        page = 1;
    }
    return request(`https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&page=${page}&query=${keyword}&include_adult=true`);
}



