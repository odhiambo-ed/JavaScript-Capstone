import createLike from './createLikes.js';
import getComments from './getComments.js';

const displayMovies = (movie) => {
  if (movie.name && movie.type) {
    const mainContainer = document.getElementById('main');
    const div = document.createElement('div');
    div.className = 'li';
    const div1 = document.createElement('div');
    div1.className = 'card';
    div1.style.width = '18rem';
    div1.style.marginTop = '20px';
    const div2 = document.createElement('div');
    div2.className = 'card-body';
    const h5 = document.createElement('h5');
    h5.className = 'card-title';
    h5.innerHTML = movie.name;
    const p1 = document.createElement('p');
    p1.className = 'card-text';
    p1.innerHTML = movie.type;
    const div3 = document.createElement('div');
    div3.style.display = 'flex';
    div3.style.justifyContent = 'space-between';
    div3.style.flexDirection = 'row';
    div3.style.alignItems = 'center';
    const i = document.createElement('i');
    i.className = 'fa fa-heart';
    i.style.cursor = 'pointer';
    i.addEventListener('click', (e) => {
      createLike(movie.id, e);
    });

    i.setAttribute('data-id', movie.id);
    i.setAttribute('data-likes', '0');

    const bt = document.createElement('button');
    bt.innerHTML = 'Comments';
    bt.setAttribute('type', 'button');
    bt.setAttribute('class', 'btn btn-primary');
    bt.setAttribute('data-bs-toggle', 'modal');
    bt.setAttribute('data-bs-target', '#exampleModal');

    bt.addEventListener('click', () => {
      document.querySelector('#movie-comment-id').value = movie.id;
      getComments(movie.id);
    });

    const likesContainer = document.createElement('span');
    const likesCount = document.createElement('span');
    likesCount.className = 'likes-count';
    likesCount.innerHTML = '(0)';

    likesContainer.appendChild(i);
    likesContainer.appendChild(likesCount);

    div3.appendChild(likesContainer);
    div3.appendChild(bt);
    div2.appendChild(h5);
    div2.appendChild(p1);
    div2.appendChild(div3);
    div1.appendChild(div2);
    div.appendChild(div1);

    mainContainer.appendChild(div);
  }
};
export default displayMovies;