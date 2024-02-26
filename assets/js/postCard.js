class PostCard {
    constructor(post) {
        this.post = post;
    }

    createCard() {  
        const list = document.createElement('li');
        list.classList.add('list-group-item');

        const card = document.createElement('div');
        card.classList.add('card');

        const title = document.createElement('h3');
        title.textContent = this.post.title;
        title.classList.add('card-title');

        const body = document.createElement('p');
        body.textContent = this.post.body + '.';
        body.classList.add('card-body');

        card.appendChild(title);
        card.appendChild(body);
        list.appendChild(card);
        
        return list;
    }
}

export {PostCard};