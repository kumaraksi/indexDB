
import { formatCurrency} from '../Utils'
class Movie {
    splitGenres(genre){
        let genreList = genre.split("|");
        let html = ''
        for(const item of genreList){
            html+=`<li>${item}</li>`
        }
        return html
    }
    

    renderTemplate(){
        return `<div class="card">
                    <div class="card-header">
                        <h3 class="card-title">${this.movie_title}</h3>
                        <div class="card-subtitle">${this.director_name}</div>
                    </div>
                    <div class="card-desc">
                        <ul>
                            <li><strong>Actors : </strong>${this.actor_1_name}, ${this.actor_2_name} </li>
                            <li><strong>Language : </strong>${this.language} </li>
                            <li><strong>Country : </strong>${this.country} </li>
                            <li><strong>Budget : </strong>${formatCurrency(this.budget)} </li>
                            <li><strong>Genre : </strong><ul class="genre-list">${this.splitGenres(this.genres)}</ul></li>
                        </ul>
                    </div>
                    <div class="card-footer">
                            <span class="year">${this.title_year}</span>
                            <span class="tag content-rating tag-${this.content_rating}">${this.content_rating}</span>
                            <a class="imdb-link" href="${this.movie_imdb_link}" target="_blank">IMDB</a>
                    </div>
                </div>`

    }
}

export {
    Movie
}