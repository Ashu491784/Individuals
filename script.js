const API_CONFIG ={
    APP_KEY: '9bbb51b95dbc9d2e17f253f3d74b05a6',
    BASE_URL: 'https://gnews.io/api/v4/top-headlines?token=9bbb51b95dbc9d2e17f253f3d74b05a6&lang=en&country=lk'

}

const searchInput = document.getElementById('search-input');
const searchbtn = document.getElementById('search-btn');
const newsConteiner = document.getElementById('news-conteiner');
const quicksearchBtn = document.querySelectorAll('quick-search');
const showFavouriteBtn = document.getElementById('show-favourites');
const newsmodel = new bootstrap.Modal(document.getElementById('newsModel'));
const newsmodelTitle = document.getElementById('newsModelTitle');
const newsModalBody = document.getElementById('newsModalBody');
const saveNewsBtn = document.getElementById('save-new-btn');
const fovouriteModal = new bootstrap.Modal(document.getElementById('favouritesModal'));
const favouritesModelBody = document.getElementById('favouritemodalBody');
const nofavouriteMessage = document.getElementById('nofavouriteMessage');

let currentnews = [];
let currentnewDetails = null;
let favourites = JSON.parse(localStorage.getItem('newsfavourites')) || [];

function init(){
    searchbtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', function(e){
        if(e.key == 'Enter') handleSearch();
    });

    quicksearchBtn.forEach(btn =>{
        btn.addEventListener('click', function(){
            searchInput.value = this.dataset.query;
            handleSearch();
        })
    });
    showFavouriteBtn.addEventListener('click', showFavourites);
     saveNewsBtn.addEventListener('click', togglefavourites);  
     
     renderFavourites();
    
}

function handleSearch(){
    const query = searchInput.value.trim();
    if(query){
        fetchNews(query);
    }else{
        alert('please enter a news paper name');
    }
}

async function fetchNews(query){
    try{

        showloadingstatus();

        const url = new URL(API_CONFIG.BASE)

    }catch(error){
        showErrorMessage(error);

    }
}

