const getLikes = () => {
  fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/D8OVZsdBVSdILi60DTqq/likes',
  )
    .then((res) => res.json())
    .then((final) => {
      final.forEach((like) => {
        document.querySelectorAll('.likes-count').forEach((tag) => {
          if (parseInt(like.item_id, 10) === parseInt(tag.previousSibling.getAttribute('data-id'), 10)) {
            tag.innerHTML = `(${like.likes})`;
            tag.previousSibling.setAttribute('data-likes', like.likes);
          }
        });
      });
    });
};
export default getLikes;
