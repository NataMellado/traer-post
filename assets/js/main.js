import {PostCard} from './postCard.js';

// Function async to get data from the API and create the post cards
async function getPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const postData = document.getElementById('post-data');

    try {
        postData.innerHTML = '';
        const response = await fetch(url);
        const data = await response.json();

        data.forEach(post => {
            const postCard = new PostCard(post);
            const list = postCard.createCard();
            postData.appendChild(list);
        });

        postData.style.display = 'block';
        scrollToPostData();
        return "Tarjetas de publicaciones creadas exitosamente";
    } 
    catch (error) {
        console.error('Error al cargar los datos:', error);
    }   
}

// Function to handle the button click
function handleButtonClick() {
    getPost()
        .then(message => console.log(message))
        .catch(error => console.error('Error:', error));
}

// Assign the handleButtonClick function to the button
document.getElementById('getPostButton').onclick = handleButtonClick;

// Function to smottly scroll to the top of the #post-data element
function scrollToPostData() {
    const postData = document.getElementById('post-data');
    postData.scrollIntoView({behavior: 'smooth'});
}