const getComments = () => {
    fetch(
        "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/t2dK1CuCLSFIH6F4oPob/comments"
    )
        .then((res) => res.json())
        .then((final) => {
            return final;
        });
};
export default getComments