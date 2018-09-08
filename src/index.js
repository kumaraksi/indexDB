import  './index.scss';
import { MovieController} from './controllers/movie'
import {debounce,showLoader} from './Utils'
import {TIMER} from './Constants'

/**
 * listen to DOMCOntentLoaded event
 */
document.addEventListener("DOMContentLoaded",function(){
    MovieController.getAllMoviesList();
    
    document.getElementById('search').addEventListener('keyup', debounce((e) => {
        showLoader()
        MovieController.getFilteredMovieList({
            movie_title : e.target.value
        })
      }, TIMER.DEBOUNCE ));

    document.getElementsByName('sort').forEach(item=>{
        showLoader()
        item.addEventListener('click',debounce((e) => {
            MovieController.getSortedMovieList(e.target.value,document.getElementById('sortOrder').checked)
          }, TIMER.DEBOUNCE ))
    })
    document.getElementById('sortOrder').addEventListener('click',debounce((e) => {
        showLoader()
            const sortProp = document.querySelector('input[name="sort"]:checked') ? document.querySelector('input[name="sort"]:checked').value : '';
            MovieController.getSortedMovieList(sortProp,e.target.checked)
          }, TIMER.DEBOUNCE ))
    document.getElementById('loadButton').addEventListener('click',debounce((e) => {
        showLoader()
        MovieController.getNextPage()
    }, TIMER.DEBOUNCE ))
          
});