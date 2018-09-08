
const BASE_URL = 'http://starlord.hackerearth.com/'
let METHOD = 'get'

function getAllMoviesList(){
    let url = `${BASE_URL}movieslisting`
    return fetch(url)
        .then((response) => response.json())
}

export default{
    getAllMoviesList
}