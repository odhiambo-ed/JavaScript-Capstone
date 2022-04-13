const createLike = (id) => {
  const data = {
      item_id: id,
  };
  fetch(
      "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t2dK1CuCLSFIH6F4oPob/likes",
      {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
              "Content-Type": "application/json",
          },
      }
  ).then((res) => console.log(res));
};

export default createLike
