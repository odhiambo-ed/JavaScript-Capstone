const createComment = (id, newComment, newUsername) => {
  const data = {
    item_id: id,
    comment: newComment,
    username: newUsername,
  };
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/comments',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(() => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${newUsername}</strong>, now<br/>${newComment}`;
    document.querySelector('#comments').appendChild(li);

    const countSpan = document.querySelector('#comments-count');
    const newCount = parseInt(countSpan.innerHTML, 10) + 1;
    countSpan.innerHTML = newCount;
  });
};
export default createComment;