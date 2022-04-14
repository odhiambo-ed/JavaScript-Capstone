const getComments = (itemId) => {
  fetch(
    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/comments?item_id=${itemId}`,
  )
    .then((res) => res.json())
    .then((comments) => {
      if (comments.error === undefined) {
        document.querySelector('#comments-count').innerHTML = comments.length;
        const commentsContainer = document.querySelector('#comments');
        commentsContainer.innerHTML = '';
        comments.forEach((comment) => {
          const li = document.createElement('li');
          li.innerHTML = `<strong>${comment.username}</strong>, ${comment.creation_date}<br/>${comment.comment}`;
          commentsContainer.appendChild(li);
        });
      }
    });
};
export default getComments;