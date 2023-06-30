const container = document.querySelector('.container');

class Card {
    static baseUrl = 'https://ajax.test-danit.com/api/json';

    constructor() {
    }

    get getUsers() {
        fetch(Card.baseUrl + '/users', {
            method:'GET'
        })
            .then(res => res.json())
            .then(users => {
                this.getPosts(users)
            })
            .catch(err => console.error(err))

    }

    getPosts(users) {
        fetch(Card.baseUrl + '/posts', {
            method: 'GET'
        })
            .then(res => res.json())
            .then(posts => {
                users.forEach((user) => {

                    const userPosts = posts.filter((post) => {
                        return post.userId == user.id

                    })
                    userPosts.forEach((post) => {
                        this.displayCard(user, post)
                    })

                })

            })
            .catch(err => console.error(err))
    }

    displayCard(user, post) {
        const card = document.createElement('div');
        card.classList.add('card')
        card.setAttribute('id', `card-${post.id}`)

        card.innerHTML = `
        <div class="card-header">
                <div class="profile">
                    <div class="profile-pic">
                </div>
                <div class="user-info">
                    <div class="name">
                        Name: ${user.name}
                    </div>
                    <div class="username">
                        Username: &#64;${user.username}
                    </div>
                    <div class="email">
                        Email: ${user.email}
                    </div>
                </div>
            </div>
            <div class="options">
                <button class="btn btn-delete">
                    DELETE
                </button>
            </div>
        </div>
        <div class="card-body">
            <h3 class="title">
                ${post.title}
            </h3>
            <p class="text">
                ${post.body}
            </p>
        </div>
        `

        const deleteBtn = card.querySelector('.btn-delete');
        deleteBtn.addEventListener('click', () => {
            this.deletePost(post.id);
        });
        
        container.append(card)

    }


    deletePost(postId) {
        fetch(`${Card.baseUrl}/posts/${postId}`, {
            method: 'DELETE',
        })
            .then((res) => {
                if (res.ok) {
                    const card = document.getElementById(`card-${postId}`)
                    card.remove()
                }
            })
            .catch(err => console.error(err))
    }


}

const card = new Card();
card.getUsers