const searchText = document.querySelector("#searchText");
const searchBtn = document.querySelector("#searchBtn");
const image = document.querySelector('#image');


const searchMovies = async () => {
    const queryText = searchText.value; //save the value of the textbox to a variable
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${queryText}`);
    //console.log(queryText);
    searchText.value = '';
    makeImages(result.data); //bring the data of the function
}

searchBtn.addEventListener('click', searchMovies);

//function to get images from API and print to the user
const makeImages = (shows) => {
    for (let res of shows){
        if (res.show.image.medium){
            const img = document.createElement('img'); //create new image element
            img.classList.add('card-img-top');
            img.src = res.show.image.medium; //get the image from the API
            image.prepend(img);
        }       
    }
}

