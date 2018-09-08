import Dexie from 'dexie';
import {Movie} from '../models/movie'
const db = new Dexie('database');

db.version(1).stores({
    movies: `++id,movie_title,country,lang,title_year` //only add those that need to be indexed
});

db.movies.mapToClass(Movie);

export default db;