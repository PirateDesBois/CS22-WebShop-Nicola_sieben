import { } from './_functions.js'
import { } from './_class.js'

// switch theme button ----------------------------------------------------------
let switchImg = document.querySelectorAll("i")[4];
let allI = document.querySelectorAll("i");
let switchBtn = document.getElementsByClassName("fa-toggle-on")[0];
let bodyColor = document.getElementsByTagName("body")[0];
let logo = document.getElementsByClassName("brand")[0];
let navBar = document.getElementsByClassName("navbar")[0];
let bgSwitch = document.getElementsByClassName("js1");
let bull = document.getElementsByClassName("fa-caret-down");
let p = document.getElementsByTagName("p");
let bgContact = document.getElementsByClassName("overF")[0];
let navLink = document.getElementsByClassName("nav-link");
let fontAwNav = document.getElementsByClassName("scrolchange");
let sectionBag = document.getElementById("bag");
let toggler = document.getElementsByClassName("navbar-toggler")[0];
let compteurSwitch = 0
let locationIc = document.getElementsByClassName("fa-location-dot");
switchBtn.addEventListener("click", () => {
    if (compteurSwitch % 2 == 0) {
        bodyColor.style.backgroundColor = "black"
        logo.src = "public/img/white-logo.png"
        navBar.classList.replace("navbar-light", "navbar-dark");
        switchImg.classList.replace("fa-toggle-on", "fa-toggle-off");
        let tableauI = Array.from(allI);
        tableauI.forEach(element => element.classList.replace("text-dark", "text-light"));
        let tableauJ = Array.from(bgSwitch);
        tableauJ.forEach(element => element.classList.replace("bg-light", "bg-triste"));
        let tableauk = Array.from(bull);
        tableauk.forEach(element => element.classList.replace("text-light", "text-triste"));
        let tableauL = Array.from(p);
        let tabLoc = Array.from(locationIc);
        tabLoc.forEach(element => element.classList.add("text-light"));
        tableauL.forEach(element => element.classList.replace("paragrey", "paralight"));
        tableauL.forEach(element => element.classList.replace("pBlog", "paraBody"));
        tableauL.forEach(element => element.classList.replace("pTiret", "paralight2"));
        tableauL.forEach(element => element.classList.replace("pTiretDark", "paralight3"));
        bgContact.classList.replace("bgBody", "bg-dark");
        toggler.classList.add("bg-dark");
    } else {
        bodyColor.style.backgroundColor = "#F6ECE2"
        logo.src = "public/img/logo.png"
        navBar.classList.replace("navbar-dark", "navbar-light")
        switchImg.classList.replace("fa-toggle-off", "fa-toggle-on")
        let tableauI = Array.from(allI)
        tableauI.forEach(element => element.classList.replace("text-light", "text-dark"))
        let tableauJ = Array.from(bgSwitch)
        tableauJ.forEach(element => element.classList.replace("bg-triste", "bg-light"))
        let tableauk = Array.from(bull)
        tableauk.forEach(element => element.classList.replace("text-triste", "text-light"))
        let tableauL = Array.from(p)
        tableauL.forEach(element => element.classList.replace("paralight", "paragrey"))
        tableauL.forEach(element => element.classList.replace("paraBody", "pBlog"))
        tableauL.forEach(element => element.classList.replace("paralight2", "pTiret"))
        tableauL.forEach(element => element.classList.replace("paralight3", "pTiretDark"))
        let tabLoc = Array.from(locationIc);
        tabLoc.forEach(element => element.classList.remove("text-light"));
        bgContact.classList.replace("bg-dark", "bgBody");
        toggler.classList.remove("bg-dark");
    }
    compteurSwitch++
})
// switch theme button ----------------------------------------------------------
//modal ------------------------------------------------------------
let userBtn = document.getElementsByClassName('fa-user')[0];
let modal = document.getElementsByClassName('modal-off')[0];
let modal2 = document.getElementsByClassName('modal2-off')[0];
let favorite = document.getElementsByClassName('fa-heart')[0];
let modal3 = document.getElementsByClassName('modal3-off')[0];
let compteurUser = 0
userBtn.addEventListener("click", () => {
    if (compteurUser % 2 == 0) {
        modal.classList.toggle('modal-on');
        compteurUser++
    } else {
        userBtn.addEventListener("click", () => {
            modal2.classList.toggle('modal2-on');
        });
    }
});
let btnClose = document.getElementsByClassName('btn-close')[0];
btnClose.addEventListener("click", () => {
    modal.setAttribute("class", "modal-off");
});
let logIn = document.getElementsByClassName('log')[0];
logIn.addEventListener("click", () => {
    modal.setAttribute("class", "modal-off");
    userBtn.setAttribute("class", "scrolchange fas fa-user-check text-dark ");
});
let btnClose1 = document.getElementsByClassName('btn-close')[1];
btnClose1.addEventListener("click", () => {
    modal2.setAttribute("class", "modal-off");
});
let logIn1 = document.getElementsByClassName('log')[1];
logIn1.addEventListener("click", () => {
    modal2.setAttribute("class", "modal-off");
});
console.log(compteurUser);
favorite.addEventListener("click", ()=>{
    modal3.classList.replace("modal3-off","modal3-on");
});
let btnClose2 = document.getElementsByClassName('btn-close')[2];
    btnClose2.addEventListener("click", () => {
        modal3.classList.replace("modal3-on","modal3-off");
});
//modal ------------------------------------------------------------
//scroll -----------------------------------------------------------
window.addEventListener('scroll', (event) => {
    if (window.scrollY >= sectionBag.getBoundingClientRect().height) {
        navBar.style.position = "fixed";
        navBar.style.width = "100%";
        navBar.classList.replace("navbar-light", "bg-dark")
        let tableauN = Array.from(navLink)
        tableauN.forEach(element => element.classList.add("text-light"))
        logo.src = "public/img/white-logo.png"
        let tableauO = Array.from(fontAwNav)
        tableauO.forEach(element => element.classList.replace("text-dark", "text-light"))
    } else {
        navBar.style.position = "static";
        navBar.classList.replace("bg-dark", "navbar-light")
        let tableauN = Array.from(navLink)
        tableauN.forEach(element => element.classList.remove("text-light"))
        logo.src = "public/img/logo.png"
        let tableauO = Array.from(fontAwNav)
        tableauO.forEach(element => element.classList.replace("text-light", "text-dark"))
    }
});
//scroll -----------------------------------------------------------
// carousel --------------------------------------------------------
let flecheGauche = document.getElementsByClassName('fa-angle-left')[0];
let flecheDroite = document.getElementsByClassName('fa-angle-right')[0];
let parentBox = document.getElementsByClassName('container-caroussel')[0];
let dot2 = document.getElementsByClassName('dot1')[0];
let dot1 = document.getElementsByClassName('dot2')[0];
dot2.classList.add("border-black");
dot2.addEventListener('click', () => {
    parentBox.classList.add('move-left');
    parentBox.classList.remove('move-right');
    dot1.classList.remove("border-black");
    dot2.classList.add("border-black");
});
flecheGauche.addEventListener('click', () => {
    parentBox.classList.add('move-left');
    parentBox.classList.remove('move-right');
    dot1.classList.remove("border-black");
    dot2.classList.add("border-black");

});
dot1.addEventListener('click', () => {
    parentBox.classList.add('move-right');
    parentBox.classList.remove('move-left');
    dot1.classList.add("border-black");
    dot2.classList.remove("border-black");
});
flecheDroite.addEventListener('click', () => {
    parentBox.classList.add('move-right');
    parentBox.classList.remove('move-left');
    dot1.classList.add("border-black");
    dot2.classList.remove("border-black");
});
// carousel --------------------------------------------------------
// Products --------------------------------------------------------
//Page --------
let section = document.getElementById('products');
let cf = document.createElement('div');
cf.classList.add('container-fluid');
let row1 = document.createElement('div');
row1.setAttribute("class", "row justify-content-center my-5 pt-6");
let col12 = document.createElement('div');
col12.setAttribute("class", "col-12");
row1.appendChild(col12);
let h5 = document.createElement('h5');
h5.setAttribute("class", "fw-bold text-center");
h5.innerHTML = "Recent Products"
col12.appendChild(h5);
let p1 = document.createElement('p');
p1.setAttribute("class", "text-center paragrey");
p1.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit ploploploploplop Repudiandae, sint."
col12.insertAdjacentElement("beforeend", p1);
section.appendChild(cf);
cf.appendChild(row1);
let ctn = document.createElement('div');
ctn.setAttribute("class", "container-fluid");
section.insertAdjacentElement("beforeend", ctn);
let row2 = document.createElement('div');
row2.setAttribute("class", "row justify-content-center");
ctn.appendChild(row2);
//compteur de likes
let span1 = document.getElementsByClassName("rikiki")[0];
let span2 = document.getElementsByClassName("rikiki")[1];
let wish = document.getElementsByClassName("wish")[0];
console.log(wish);
let compteurLike=0
let compteurBuy=0
// Creation des infos produits -----------------------------------------------------------------------------------
class Product {
    constructor(nom, prix, sourceR, sourceV) {
        this.nom = nom;
        this.prix = prix;
        this.sourceR = sourceR;
        this.sourceV = sourceV;
    }
}
let product1 = new Product('Textured Sweater', '$50.00', 'url("../../public/img/fashion/fashion-recent-products-01-1-1.jpg")','url("../../public/img/fashion/fashion-recent-products-01-a-1-1.jpg")');
let product2 = new Product('Traveller Shirt', '$510.00', 'url("../../public/img/fashion/fashion-recent-products-01-b.jpg")','url("../../public/img/fashion/fashion-recent-products-03-a-1-1.jpg")');
let product3 = new Product('Crewneck Sweatshirt', '$20.00 - $50.00', 'url("../../public/img/fashion/fashion-recent-products-02-1-1.jpg")','url("../../public/img/fashion/fashion-recent-products-02-a-1-1-1.jpg")');
let product4 = new Product('Skinny Trouser',"<strike>$200.00</strike>"+" "+ '$160.00', 'url("../../public/img/fashion/fashion-recent-products-04.jpg")','url("../../public/img/fashion/fashion-recent-products-04-a-1.jpg")');
let product5 = new Product('High Neck Sweater', "<strike>$40.00</strike>"+" "+ '$35.00', 'url("../../public/img/fashion/fashion-recent-products-05-1.jpg")','url("../../public/img/fashion/fashion-recent-products-05-a-1.jpg")');
let product6 = new Product('Sleeve Sweater', "<strike>$140.00</strike>"+" "+ '$120.00', 'url("../../public/img/fashion/fashion-recent-products-06-1.jpg")','url("../../public/img/fashion/fashion-recent-products-06-a-1.jpg")');
let product7 = new Product('Pocket Sweatshirt', '$410.00',' url("../../public/img/fashion/fashion-recent-products-07-1.jpg")','url("../../public/img/fashion/fashion-recent-products-07-a-1.jpg")');
let product8 = new Product('Top With Pleated', '$20.00 - $50.00', 'url("../../public/img/fashion/fashion-recent-products-08-1.jpg")','url("../../public/img/fashion/fashion-recent-products-08-a.jpg")');
let product9 = new Product('Cotton Sweater', '$155.00', 'url("../../public/img/fashion/fashion-recent-products-10-1.jpg")','url("../../public/img/fashion/fashion-recent-products-10-a-1.jpg")');
let product10 = new Product('Texture Plain Regular',"<strike>$85.00 </strike>"+" "+ '$70.00', 'url("../../public/img/fashion/fashion-recent-products-01-d.jpg")','url("../../public/img/fashion/fashion-recent-products-09-a-1-1.jpg")');
let productsList = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10];
console.log(productsList);
// Creation des infos produits -----------------------------------------------------------------------------------
// boucle créant chaque éléments --------------------------------------------------------------------------------
for (let index = 0; index < 10; index++) {
    console.log('plop');
    let col2 = document.createElement('div');
    col2.setAttribute("class", "col-xl-2 col-lg-4 col-md-4 col-ms-12 m-4 position-relative");
    row2.appendChild(col2);
    let divImg = document.createElement('div');
    divImg.setAttribute("class", "card rounded-0")
    col2.appendChild(divImg);
    let lovebox = document.createElement('i');
    lovebox.setAttribute("class", "far fa-heart text-light border border-3 bg-dark rounded-pill position-absolute float-right p-2 m-3 justify-content-end d-none");
    divImg.appendChild(lovebox);
    let btnG = document.createElement('div');
    btnG.setAttribute('class', 'productbtn1 d-flex justify-content-center bg-dark position-absolute d-none');
    let btnGbtnlove = document.createElement('i');
    btnGbtnlove.setAttribute('class', 'far fa-heart text-light pt-2');
    btnG.appendChild(btnGbtnlove);
    let btnD = document.createElement('div');
    btnD.setAttribute("class", "productbtn2 d-flex justify-content-center bg-dark position-absolute d-none");
    let btnDpanier = document.createElement('i');
    btnDpanier.setAttribute("class", "fas fa-shopping-basket text-light pt-2");
    btnD.appendChild(btnDpanier);
    divImg.insertAdjacentElement("beforeend", btnG);
    divImg.insertAdjacentElement("beforeend", btnD);
    let divText = document.createElement('div');
    divText.setAttribute('class', "d-flex align-items-center flex-column");
    col2.insertAdjacentElement("beforeend", divText);
    let h52 = document.createElement('h5');
    h52.setAttribute('class', 'fw-bold text-center fs-6 pt-3')
    divText.appendChild(h52);
    let p2 = document.createElement('p');
    p2.setAttribute('class', 'paragrey');
    divText.insertAdjacentElement("beforeend", p2);
    h52.innerHTML=productsList[index].nom
    p2.innerHTML=productsList[index].prix
    divImg.style.backgroundImage=productsList[index].sourceR
    divImg.addEventListener('mouseover',()=>{
        divImg.style.backgroundImage=productsList[index].sourceV
        btnG.classList.replace("d-none","d-block");
        btnD.classList.replace("d-none","d-block");
    });
    divImg.addEventListener('mouseout',()=>{
        divImg.style.backgroundImage=productsList[index].sourceR
        btnG.classList.replace("d-block","d-none");
        btnD.classList.replace("d-block","d-none");
    });
    
    btnG.addEventListener("click",()=>{
        compteurLike++
        span1.classList.replace("d-none","d-block");
        span1.innerHTML=compteurLike
        wish.innerHTML=compteurLike
        lovebox.classList.replace("d-none","d-block");
        // Ajout de produit dans le modal --------
        let modalWish = document.getElementsByClassName("modal-wish")[0];
        console.log(modalWish);
        let newP = document.createElement("p");
        let newWishImg = document.createElement("div");
        let borderB = document.createElement("div");
        newP.setAttribute("class","mt-3")
        newWishImg.setAttribute("class","divWishImg border border-3 border-secondary mt-3");
        borderB.setAttribute("class","border border-3 border-dark w-50")
        modalWish.insertAdjacentElement("beforeend",newWishImg)
        modalWish.insertAdjacentElement("beforeend",newP);
        modalWish.insertAdjacentElement("beforeend",borderB);
        newP.innerHTML=productsList[index].nom
        newWishImg.style.backgroundImage=productsList[index].sourceR
        
        

    });    
    btnD.addEventListener("click",()=>{
        compteurBuy++
        span2.classList.replace("d-none","d-block");
        span2.innerHTML=compteurBuy
    });   
};

// boucle créant chaque éléments --------------------------------------------------------------------------------
//compte à rebours ---------------------------------------------------------------------

//compte à rebours ---------------------------------------------------------------------
