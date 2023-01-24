const cards = document.querySelectorAll(".card");
let matched = 0;
let cardOne, cardTwo;
let disableDeck = false;


function flipCard({target: clickedCard}) {
    if(cardOne !== clickedCard && !disableDeck) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg = cardOne.querySelector(".back-view img").src,
        cardTwoImg = cardTwo.querySelector(".back-view img").src;
        matchCards(cardOneImg, cardTwoImg);
    }
}
function redirectCv(){
    window.open("http://127.0.0.1:5500/html/cv.html", '_blank');
}

function redirectAbout(){
    window.open("http://127.0.0.1:5500/html/about.html", '_blank');
}

function redirectProjets(){
    window.open("http://127.0.0.1:5500/html/projets.html", '_blank');
}

function redirectContact(){
    window.open("http://127.0.0.1:5500/html/contact.html", ' _blank');
}
function matchCards(img1, img2) {
    console.log('laa', img1);
    if(img1 === img2) {
        matched++;
        console.log("redirect");
        if(matched == 4) {
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }
        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        if (img1 == "http://127.0.0.1:5500/images/img-1.jpeg") {
            console.log("PPL");
            setTimeout(redirectCv, 1000)
            
        }
        else if(img1 == "http://127.0.0.1:5500/images/img-2.jpeg") {
            setTimeout(redirectAbout, 1000) 
            
        }
        else if (img1 == "http://127.0.0.1:5500/images/img-3.jpeg") {
            setTimeout(redirectProjets, 1000) 
        }
        else if (img1 == "http://127.0.0.1:5500/images/img-4.jpeg") {
            setTimeout(redirectContact, 1000) 
        }
        return disableDeck = false;
    }
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);
    setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    }, 1200);
}
function shuffleCard() {
    matched = 0;
    disableDeck = false;
    cardOne = cardTwo = "";
    let arr = [1, 2, 3, 4, 1, 2, 3, 4];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);
    cards.forEach((card, i) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector(".back-view img");
        imgTag.src = `../images/img-${arr[i]}.jpeg`;
        card.addEventListener("click", flipCard);
    });
}
shuffleCard();
    
cards.forEach(card => {
    card.addEventListener("click", flipCard);
});