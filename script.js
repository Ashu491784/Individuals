const API_CONFIG ={
    APP_KEY: '4eb1f545d6fa4ef086d3e78db0afb0fd',

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

