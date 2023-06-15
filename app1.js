const searchText = document.querySelector("#searchText");
const searchBtn = document.querySelector("#searchBtn");
const image = document.querySelector('#image');


const searchMovies = async () => {
    const queryText = searchText.value; //save the value of the textbox to a variable
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${queryText}`);
    //console.log(queryText);
    searchText.value = '';
    const img = document.createElement('img'); //create new image element
    img.classList.add('card-img-top');
    img.src = result.data[0].show.image.medium; //get the image from the API
    image.prepend(img);
    //console.log(result.data[0].show.name);
    //makeImages(result.data); //bring the data of the function

    //create card Title with name of the movie
    const h5 = document.createElement('h5');
    h5.classList.add('card-title');
    h5.textContent = `Title: ${result.data[0].show.name}`;
    image.append(h5);

    //create summary
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = `Description: ${result.data[0].show.summary}`;
    image.append(p);

    //create genre
    const p1 = document.createElement('p');
    p1.classList.add('card-text');
    p1.textContent = `Type: ${result.data[0].show.genres}`;
    image.append(p1);

    //create language
    const p2 = document.createElement('p');
    p2.classList.add('card-text');
    p2.textContent = `Language: ${result.data[0].show.language}`;
    image.append(p2);

    //create rating
    const p3 = document.createElement('p');
    p3.classList.add('card-text');
    p3.textContent = `Rating: ${result.data[0].show.rating.average}`;
    image.append(p3);

    //create channel
    const p4 = document.createElement('p');
    p4.classList.add('card-text');
    p4.textContent = `Channel: ${result.data[0].show.network.name}`;
    image.append(p4);

}



searchBtn.addEventListener('click', searchMovies);


