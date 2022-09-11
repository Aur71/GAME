import { steam, battle_net, epic_games, origin, playstation, gameArr} from '/main.js'

// Search start

const search_button = document.getElementById("search_button");
const search = document.getElementById("search");
const main = document.querySelector("[data-main]");
const searchInput = document.querySelector("[data-search]");

search_button.onclick = function() {
    search.classList.toggle("active");
};

main.onclick = function() {
    search.classList.remove("active");
};

// Card Section start

const cardTemplate = document.querySelector("[data-card-template]");
const card_section = document.getElementById("card_section");

gameArr.forEach(game => {
    const card = cardTemplate.content.cloneNode(true).children[0];

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
    card_section.append(card);

    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        const isVisible = game.title.toLowerCase().includes(value);
        card.classList.toggle("hide", !isVisible);
    });
});
