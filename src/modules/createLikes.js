const createLike = (id, e) => {
  console.log('liked');
  const data = {
    item_id: id,
  };
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/likes',
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    },
  ).then(() => {
    const likeBtn = e.target;
    const newCount = parseInt(likeBtn.getAttribute('data-likes'), 10) + 1;
    likeBtn.setAttribute('data-likes', newCount);
    likeBtn.nextSibling.innerHTML = `(${newCount})`;
  });
};

export default createLike;