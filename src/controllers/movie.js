import {
    Movie
} from '../models/movie'
import {API} from '../api'
import db from '../storage/db'
import {
 getRenderTemplate,
 showLoader
} from '../Utils'
import gridAPI from './gridAPI'

function getAllMoviesList() {
    gridAPI.resetGrid();
    API.Movie.getAllMoviesList().then(res=>{
        db.movies.bulkAdd(res).then(last=>{
            gridAPI.reloadGrid();
        });
    })
}

function getNextPage(){
    showLoader();    
    gridAPI.offset+=gridAPI.limit;
}

function getFilteredMovieList(filter){
    showLoader();    
    gridAPI.search = filter.movie_title;
}

function getSortedMovieList(sortParam, sortOrder){
    showLoader();    
    gridAPI.sortProp = sortParam;
    gridAPI.reverseSort = sortOrder;
}

/**
 * Export only those functions which need to be made public
 */
export const MovieController = {
    getAllMoviesList,
    getFilteredMovieList,
    getSortedMovieList,
    getNextPage
}