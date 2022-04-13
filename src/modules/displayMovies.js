import createLike from "./createLikes";

const displayMovies = (title, type, id) => {
    if (title && type) {
        let mainContainer = document.getElementById("main");
        let div = document.createElement("div");
        div.className = "li";
        let div1 = document.createElement("div");
        div1.className = "card";
        div1.style.width = "18rem";
        div1.style.marginTop = "20px";
        let div2 = document.createElement("div");
        div2.className = "card-body";
        let h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerHTML = title;
        let p1 = document.createElement("p");
        p1.className = "card-text";
        p1.innerHTML = type;
        let div3 = document.createElement("div");
        div3.style.display = "flex";
        div3.style.justifyContent = "space-between";
        div3.style.flexDirection = "row";
        div3.style.alignItems = "center";
        let i = document.createElement("i");
        i.className = "bi bi-suit-heart";
        i.style.cursor = "pointer";
        i.onclick = createLike(id);
        let bt = document.createElement("button");
        bt.innerHTML = "Comments";
        bt.setAttribute("type", "button");
        bt.setAttribute("class", "btn btn-primary");
        bt.setAttribute("data-bs-toggle", "modal");
        bt.setAttribute("data-bs-target", "#exampleModal");

        div3.appendChild(i);
        div3.appendChild(bt);
        div2.appendChild(h5);
        div2.appendChild(p1);
        div2.appendChild(div3);
        div1.appendChild(div2);
        div.appendChild(div1);

        mainContainer.appendChild(div);
    }
};
export default displayMovies