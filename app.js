const searchText = document.querySelector("#searchText");
const searchBtn = document.querySelector("#searchBtn");
const row =document.querySelector('#row');



searchBtn.addEventListener('click', async function (){
    const queryText = searchText.value; //save the value of the textbox to a variable
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${queryText}`);
    makeImages(result.data); //bring the data of the function
    searchText.value = '';

});

const makeImages = (shows) => { //function which create the divs and import the data
    for (let res of shows){ //we loop the data from shows (API source)
        if(res.show.image){ //if show.image exists

            //create col-4 div
            const col4 = document.createElement('div'); //create new div 
            col4.className = 'col-4'; //name of the class col-4

            //create card div
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card';
            cardDiv.style.width = '18rem'; //add style width = 18rem to div with class card

            //create card img
            const img = document.createElement('img'); //create new image element
            img.className = 'card-img-top';
            img.src = res.show.image.medium; //get the image from the API

            //create card Title
            const h5 = document.createElement('h5');
            h5.classList.add('card-title');
            h5.textContent = `Title: ${res.show.name}`;

            //create summary
            const p = document.createElement('p');
            p.classList.add('card-text');
            p.textContent = `Description: ${res.show.summary}`;

            //create genre
            const p1 = document.createElement('p');
            p1.classList.add('card-text');
            p1.textContent = `Type: ${res.show.genres}`;

            //create language
            const p2 = document.createElement('p');
            p2.classList.add('card-text');
            p2.textContent = `Language: ${res.show.language}`;

            //create rating
            const p3 = document.createElement('p');
            p3.classList.add('card-text');
            p3.textContent = `Rating: ${res.show.rating.average}`;

            //append the divs to mother DIV
            row.append(col4); //add the col4 inside the div row
            col4.append(cardDiv); //add image div inside the div col4
            cardDiv.append(img);
            cardDiv.append(h5);
            cardDiv.append(p);
            cardDiv.append(p1);
            cardDiv.append(p2);
            cardDiv.append(p3);
        }
    }
}

