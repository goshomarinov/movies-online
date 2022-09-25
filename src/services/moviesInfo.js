const apiKey = '1ced348cdf5f3992c1662b3cd5c8af6f';
const topRatedUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`;


async function request(url) {
    try {
        const response = await fetch(url);

        if (response.ok == false) {
            const error = await response.json();
            throw new Error(error.message)
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

export async function getTopRated() {
    return request(topRatedUrl);
}

export async function getMovieImgPath(movieId) {
    return request(`https://api.themoviedb.org/3/movie/${movieId}/images?api_key=${apiKey}`);
}

export async function getMoviePoster(imgPath) {
    return request(`https://image.tmdb.org/t/p/original/${imgPath}`);
}