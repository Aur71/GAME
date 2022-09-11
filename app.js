import { steam, battle_net, epic_games, origin, playstation, topSellers, recommended, comingSoon} from '/main.js'

// Search start

const search_button = document.getElementById("search_button");
const search = document.getElementById("search");
const main = document.querySelector("[data-main]");

search_button.onclick = function() {
    search.classList.toggle("active");
};

main.onclick = function() {
    search.classList.remove("active");
};


// Banner slider start

const banner_link = document.querySelector("[data-banner-link]");
const banner_img = document.querySelector("[data-banner-img]");

const slider_load = () => {
    setTimeout(() => {
        banner_link.href = "#ceva";
        banner_img.style.background = `url("https://images6.alphacoders.com/926/thumb-1920-926723.jpg")
        no-repeat center center/cover`;
        banner_img.style.opacity = 1;

    }, 0);

    setTimeout(() => {
        banner_img.style.opacity = 0;
    }, 9000)

    setTimeout(() => {
        banner_link.href = "#ceva";
        banner_img.style.background = `url("https://variety.com/wp-content/uploads/2021/03/ghost-of-tsushima-background-block-01-ps4-en-21jul20.jpeg") no-repeat
        center center/cover`;
        banner_img.style.opacity = 1;

    }, 10000),

    setTimeout(() => {
        banner_img.style.opacity = 0;
    }, 19000)

    setTimeout(() => {
        banner_link.href = "#ceva";
        banner_img.style.background = `url("https://images5.alphacoders.com/110/thumb-1920-1103913.png") no-repeat
        center center/cover`;
        banner_img.style.opacity = 1;

    }, 20000);

    setTimeout(() => {
        banner_img.style.opacity = 0;
    }, 29000)

}

setInterval(slider_load, 30000);
slider_load();

// Card slider below

const slider = document.querySelector("[data-slider]");
const sliderBtnLeft = document.querySelector("[data-slider-left]");
const sliderBtnRight = document.querySelector("[data-slider-right]");

sliderBtnLeft.addEventListener('click', () => {
    slider.scrollLeft -= 260;
});

sliderBtnRight.addEventListener('click', () => {
    slider.scrollLeft += 260;
});

// Cards below

const cardTemplate1 = document.querySelector("[data-slider-card-template]");
const sliderSection = document.querySelector("[data-slider]");

topSellers.forEach(game => {
    const card = cardTemplate1.content.cloneNode(true).children[0];

    const card_img = card.querySelector("[data-slider-card-img]");
    const card_title = card.querySelector("[data-slider-card-title]");
    const card_price = card.querySelector("[data-slider-card-price]");
    const card_link = card.querySelector("[data-slider-card-link]");
    const card_icons = card.querySelector("[data-slider-card-icons]");
    let iconsStr = ``;

    for(let i = 0; i < game.platforms.length; i++) {
        if(game.platforms[i] == "steam") {
            iconsStr += `<img src="${steam}" alt="">`
        } else if(game.platforms[i] == "battle.net") {
            iconsStr += `<img src="${battle_net}" alt="">`
        } else if(game.platforms[i] == "epic games") {
            iconsStr += `<img src="${epic_games}" alt="">`
        } else if(game.platforms[i] == "origin") {
            iconsStr += `<img src="${origin}" alt="">`
        } else if(game.platforms[i] == "playstation") {
            iconsStr += `<img src="${playstation}" alt="">`
        }
    }

    card_icons.innerHTML = iconsStr;
    card_link.href = game.href;
    card_img.innerHTML = `<img src=${game.img} alt="">`;
    card_title.textContent = game.title;
    card_price.textContent = game.price + "$";

    sliderSection.append(card);
});

// Recomennded section below

const cardTemplate2 = document.querySelector("[data-card-template]");
const card_section_1 = document.getElementById("card_section_1");

recommended.forEach(game => {
    const card = cardTemplate2.content.cloneNode(true).children[0];

    const card_img = card.querySelector("[data-card-img]");
    const card_title = card.querySelector("[data-card-title]");
    const card_price = card.querySelector("[data-card-price]");
    const card_link = card.querySelector("[data-card-link]");
    const card_icons = card.querySelector("[data-card-icons]");
    let iconsStr = ``;

    for(let i = 0; i < game.platforms.length; i++) {
        if(game.platforms[i] == "steam") {
            iconsStr += `<img src="${steam}" alt="">`
        } else if(game.platforms[i] == "battle.net") {
            iconsStr += `<img src="${battle_net}" alt="">`
        } else if(game.platforms[i] == "epic games") {
            iconsStr += `<img src="${epic_games}" alt="">`
        } else if(game.platforms[i] == "origin") {
            iconsStr += `<img src="${origin}" alt="">`
        } else if(game.platforms[i] == "playstation") {
            iconsStr += `<img src="${playstation}" alt="">`
        }
    }

    card_icons.innerHTML = iconsStr;
    card_link.href = game.href;
    card_img.innerHTML = `<img src=${game.img} alt="">`
    card_title.textContent = game.title;
    card_price.textContent = game.price + "$";
    card_section_1.append(card);
});

// Coming soon below

const card_section_2 = document.getElementById("card_section_2");

comingSoon.forEach(game => {
    const card = cardTemplate2.content.cloneNode(true).children[0];

    const card_img = card.querySelector("[data-card-img]");
    const card_title = card.querySelector("[data-card-title]");
    const card_price = card.querySelector("[data-card-price]");
    const card_link = card.querySelector("[data-card-link]");
    const card_icons = card.querySelector("[data-card-icons]");
    let iconsStr = ``;

    for(let i = 0; i < game.platforms.length; i++) {
        if(game.platforms[i] == "steam") {
            iconsStr += `<img src="${steam}" alt="">`
        } else if(game.platforms[i] == "battle.net") {
            iconsStr += `<img src="${battle_net}" alt="">`
        } else if(game.platforms[i] == "epic games") {
            iconsStr += `<img src="${epic_games}" alt="">`
        } else if(game.platforms[i] == "origin") {
            iconsStr += `<img src="${origin}" alt="">`
        } else if(game.platforms[i] == "playstation") {
            iconsStr += `<img src="${playstation}" alt="">`
        }
    }

    card_icons.innerHTML = iconsStr;
    card_link.href = game.href;
    card_img.innerHTML = `<img src=${game.img} alt="">`
    card_title.textContent = game.title;
    card_price.textContent = game.price + "$";
    card_section_2.append(card);
});

// Footer below

function hideShow(target, button, title, n) {
    const border = document.getElementById(title);
    const targetDiv = document.querySelector(target);
    const btn = document.getElementById(button);
  
    btn.addEventListener("click", (e) => {
      if (targetDiv.style.display == "block") {
        targetDiv.style.display = "none";
        border.style.border = "";
        document.querySelectorAll('.footer-btn')[n].style.setProperty("--anim-name", "plus");
      } else {
        border.style.border = "transparent";
        targetDiv.style.display = "block";
        document.querySelectorAll('.footer-btn')[n].style.setProperty("--anim-name", "minus");
      }
    });
  }
  
  hideShow(".rfi-1", "btn-1", "title-1", 0);
  hideShow(".rfi-2", "btn-2", "title-2", 1);
  hideShow(".rfi-3", "btn-3", "title-3", 2);
  hideShow(".rfi-4", "btn-4", "title-4", 3);