import db from '../storage/db'
import {showLoader,hideLoader} from '../Utils'
class gridAPI{
    constructor(){
        this._offset = 0;
        this._limit=18;
        this._sortProp = ''
        this._reverseSort = false
        this._search = ''
    }
    get offset(){
        return this._offset
    }
    set offset(val){
        this._offset = val;
        this.reloadGrid(false)
    }
    get limit(){
        return this._limit
    }
    set limit(val){
        this._limit = val;
        this.reloadGrid()
    }
    get sortProp(){
        return this._sortProp
    }
    set sortProp(val){
        if(this._sortProp != val){
            this._sortProp = val
            this.resetPagination()
            this.reloadGrid()    
        }
    }
    set reverseSort(val){
        if(this._reverseSort != val){
            this._reverseSort = val;
            this.reloadGrid()
            }
    }
    get search(){
        return this._search
    }
    set search(val){
        this._search = val;
        this.resetPagination()
        this.reloadGrid()
    }

    resetPagination(){
        this.offset = 0;
    }
    async reloadGrid(cleandAndAdd = true) {
        let html = '';
        let data='';
        if(!this._reverseSort){
            data = await db.movies.orderBy(this.sortProp).filter(item=>{
                return item.movie_title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            }).offset(this.offset).limit(this.limit).toArray();    
        }else{
            data = await db.movies.orderBy(this.sortProp).reverse().filter(item=>{
                return item.movie_title.toLowerCase().indexOf(this.search.toLowerCase()) > -1
            }).offset(this.offset).limit(this.limit).toArray();
        }
                
        for (const item of data) {
            let card =  `<div class="flex-item">
                            ${item.renderTemplate()}                    
                        </div>` 
            html+=card
        }
        // hideLoader();
        const parent = `<div class="container">
                            <div class="grid flex-grid">
                                ${html}
                            </div>   
                        </div>`;
        if(cleandAndAdd){
            document.getElementById('app').innerHTML = ''
        }
        document.getElementById('app').innerHTML += parent;  
        hideLoader();          
    }

    async resetGrid(){
        await db.movies.clear();
    }
}

export default new gridAPI();