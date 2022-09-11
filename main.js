export const steam = "\\Icons\\steam-white-small.png";
export const battle_net = "\\Icons\\battlenet-white-small.png";
export const epic_games = "\\Icons\\epicgames-white-small.png";
export const origin = "\\Icons\\origin-white-small.png";
export const playstation = "\\Icons\\ps-white-small.png";

export function GameCard(id, title, release_year, platforms, letter, genre, price, img, href) {
    this.id = id;
    this.title = title;
    this.release_year = release_year;
    this.platforms = platforms;
    this.letter = letter;
    this.genre = genre;
    this.price = price;
    this.img = img;
    this.href = href;
}

export const topSellers = [
    new GameCard(1, "Sekiro: Shadows Die Twice", 2019, ["steam", "playstation"], "s", ["Action", "Adventure"], 50, "https://i1.sndcdn.com/artworks-000517398114-zacqqv-t500x500.jpg", "#"),
    new GameCard(2, "Monster Hunter Rise", 2022, ["steam"], "m", ["Action", "Adventure"], 30, "https://cdns-images.dzcdn.net/images/cover/9acf418acb4cebb0a17aeb48bda1b5aa/500x500.jpg", "#"),
    new GameCard(3, "Ghost of Tsushima", 2020, ["playstation"], "g", ["Action", "Adventure"], 60, "https://www.newgamenetwork.com/images/uploads/games/1583426074_ghostoftsushima.jpg", "#"),
    new GameCard(5, "Shadow Warrior 3", 2022, ["steam", "playstation"], "s", ["Action", "Adventure"], 60, "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/03/01012553/798678-shadow-warrior-3-playstation-4-front-cover.jpg", "#"),
    new GameCard(4, "FIFA 22", 2019, ["steam", "origin", "playstation"], "f", ["Simulation", "Sport"], 40, "https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png", "#"),
    new GameCard(6, "Overwatch 2", 2022, ["battle.net"], "o", ["Shooter", "Strategy"], 60, "https://image.api.playstation.com/vulcan/ap/rnd/202206/0316/QVeyja3WdMUXZwWdAFGhn8li.png", "#"),
    new GameCard(7, "Cyberpunk 2077", 2020, ["steam", "playstation", "epic games", "origin"], "c", ["RPG"], 40, "https://i1.sndcdn.com/artworks-AXbYy13hRuZghb5D-Wm6g4g-t500x500.jpg", "#"),
    new GameCard(8, "Sifu", 2022, ["epic games", "playstation"], "s", ["Action"], 50, "https://image.api.playstation.com/vulcan/img/rnd/202201/1616/THJbARAq2YiRVUv5abCQ8GYQ.png", "#"),
    new GameCard(9, "Assassin's Creed Valhalla", 2020, ["steam", "epic games", "origin"], "a", ["Adventure"], 50, "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png", "#"),
];

export const recommended = [
    new GameCard(1, "DOOM Eternal", 2020, ["steam", "playstation"], "d", ["Shooter"], 30, "https://i1.sndcdn.com/artworks-qZZjndnbbTpB9GGY-v5fkFw-t500x500.jpg", "#"),
    new GameCard(2, "Euro Truck Simulator 2", 2012, ["steam"], "e", ["Racing", "Simultaor", "Indie"], 10, "https://cdn.salla.sa/X2z7HpAloPPAg7cQwV58B2U7l9L0wmB3ChkAXqoL.png", "#"),
    new GameCard(3, "Batman: Arkham Knight", 2015, ["steam", "playstation", "epic games"], "b", ["Adventure"], 20, "https://i1.sndcdn.com/artworks-000393119445-hnz222-t500x500.jpg", "#"),
    new GameCard(4, "Mortal Kombat 11", 2019, ["steam", "playstation"], "m", ["Fighting"], 50, "https://i1.sndcdn.com/artworks-000530078760-x95npw-t500x500.jpg", "#"),
    new GameCard(5, "Dark Souls III", 2016, ["steam", "playstation", "origin"], "d", ["Adventure", "Role-playing", "RPG"], 20, "https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png", "#"),
    new GameCard(6, "Overwatch", 2016, ["battle.net"], "o", ["Shooter", "Strategy"], 30, "https://i1.sndcdn.com/artworks-000166705250-xnqrnk-t500x500.jpg", "#"),
    new GameCard(7, "Nioh 2", 2020, ["steam", "playstation"], "n", ["Adventure", "Role-playing", "RPG"], 40, "https://i1.sndcdn.com/artworks-tneLsXMjV3QvHyC6-JYLe6Q-t500x500.jpg", "#"),
    new GameCard(8, "PUBG: BATTLEGROUNDS", 2017, ["steam", "playstation"], "p", ["Indie", "Shooter"], 30, "https://gamerheadquarters.com/hub/xbox/playerunknownsbattlegrounds/1.jpg", "#"),
    new GameCard(9, "Marvel's Spider-Man: Miles Morales", 2020, ["playstation"], "s", ["Adventure"], 50, "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png", "#"),
    new GameCard(10, "Diablo Immortal", 2022, ["battle.net"], "d", ["RPG"], 50, "https://www.zastavki.com/pictures/1024x1024/2013/_Diablo_III__ever_seen_a_devil_045077_31.jpg", "#"),
    new GameCard(11, "Devil May Cry 5", 2019, ["steam", "playstation"], "d", ["Action", "Adventure"], 50, "https://www.devilmaycry.com/5se/assets/images/dmc5se-square.jpg", "#"),
    new GameCard(12, "Need for Speed Heat", 2019, ["steam", "playstation"], "n", ["Adventure", "Racing", "Sport"], 40, "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/a283ef93835eb4e6d9afbfd2e1a79d35.png", "#"),
    new GameCard(13, "New World", 2021, ["steam"], "n", ["Adventure", "Role-playing", "RPG"], 60, "https://m.media-amazon.com/images/I/91-aRrFY4AL._SS500_.jpg", "#"),
    new GameCard(14, "The Witcher 3: Wild Hunt", 2015, ["steam", "playstation", "epic games"], "t", ["Adventure", "Role-playing", "RPG"], 30, "https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_TheWitcher3WildHunt_enGB_image500w.jpg", "#"),
    new GameCard(15, "Dying Light 2: Stay Human", 2022, ["steam", "playstation"], "d", ["Adventure", "Role-playing", "RPG"], 60, "https://image.api.playstation.com/vulcan/img/rnd/202106/2908/7aJhOMuJALdBPqZHVy3CgJsg.png", "#"),
    new GameCard(16, "Ark: Survival Evolved", 2017, ["steam", "epic games"], "a", ["Adventure", "Indie", "Role-playing", "RPG", "Shooter", "Simulator"], 50, "https://image.api.playstation.com/cdn/EP0688/CUSA06782_00/4Fn75AWWgOLZiFdxIA6HvSV5wC9c3WGp.png?w=440", "#"),
];

export const comingSoon = [
    new GameCard(1, "For Honor", 2017, ["steam", "playstation", "epic games"], "f", ["Fighting"], 20, "https://image.api.playstation.com/cdn/EP0001/CUSA05264_00/wRcUGGoks6FI61tTxQzi1qZN80VPmygK.png", "#"),
    new GameCard(2, "Call of Duty: Modern Warfare 2", 2009, ["steam", "battle.net"], "c", ["Shooter"], 15, "https://lastfm.freetls.fastly.net/i/u/500x500/9371917a37cc33179cc8f00c80652922.jpg", "#"),
    new GameCard(3, "Far Cry 5", 2018, ["steam", "epic games"], "f", ["Adventure", "Shooter"], 30, "https://i1.sndcdn.com/artworks-CE95PQ5NBxwU98wv-PCe4zg-t500x500.jpg", "#"),
    new GameCard(4, "Just Cause 4", 2018, ["steam", "epic games", "origin"], "j", ["Adventure", "Shooter"], 25, "https://images.g2a.com/1080x1080/1x1x0/just-cause-4-steam-key-global/5bc9c63f5bafe3470b70d08d", "#"),
    new GameCard(5, "Forza Horizon 5", 2021, ["steam", "playstation"], "f", ["Racing", "Sport"], 50, "https://cdn.salla.sa/NNZe/QBSYdv2dAeoFY99UmHTEo61HfLJDVsjC7aN7UdCO.jpg", "#"),
    new GameCard(6, "Sea of Thieves", 2018, ["steam"], "s", ["Adventure", "Simulator"], 30, "https://assets-prd.ignimgs.com/2021/12/06/seaofthieves-1638825541601.jpg", "#"),
    new GameCard(7, "Battlefield V", 2018, ["steam", "epic games", "playstation"], "b", ["Shooter"], 50, "https://p1.akcdn.net/full/931762677.electronic-arts-battlefield-v-definitive-edition-pc.jpg", "#"),
    new GameCard(8, "Hades", 2020, ["steam"], "h", ["Adventure", "Indie", "Role-playing", "RPG"], 20, "https://i1.sndcdn.com/artworks-000518789769-kvwdok-t500x500.jpg", "#"),
    new GameCard(9, "The Crew 2", 2018, ["steam", "playstation"], "t", ["Racing"], 50, "https://cdnb.artstation.com/p/assets/covers/images/042/162/599/large/najah-benothman-najah-benothman-icon.jpg?1633728764", "#"),
    new GameCard(10, "God of War Ragnarök", 2022, ["playstation"], "g", ["Adventure"], 70, "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png", "#"),
];

export const gameArr = [
    new GameCard(1, "Sekiro: Shadows Die Twice", 2019, ["steam", "playstation"], "s", ["Action", "Adventure"], 50, "https://i1.sndcdn.com/artworks-000517398114-zacqqv-t500x500.jpg", "#"),
    new GameCard(2, "Monster Hunter Rise", 2022, ["steam"], "m", ["Action", "Adventure"], 30, "https://cdns-images.dzcdn.net/images/cover/9acf418acb4cebb0a17aeb48bda1b5aa/500x500.jpg", "#"),
    new GameCard(3, "Ghost of Tsushima", 2020, ["playstation"], "g", ["Action", "Adventure"], 60, "https://www.newgamenetwork.com/images/uploads/games/1583426074_ghostoftsushima.jpg", "#"),
    new GameCard(5, "Shadow Warrior 3", 2022, ["steam", "playstation"], "s", ["Action", "Adventure"], 60, "https://gugimages.s3.us-east-2.amazonaws.com/wp-content/uploads/2022/03/01012553/798678-shadow-warrior-3-playstation-4-front-cover.jpg", "#"),
    new GameCard(4, "FIFA 22", 2019, ["steam", "origin", "playstation"], "f", ["Simulation", "Sport"], 40, "https://image.api.playstation.com/vulcan/img/rnd/202111/0822/YiFF5Xkljek03HhUJa4gic1Y.png", "#"),
    new GameCard(6, "Overwatch 2", 2022, ["battle.net"], "o", ["Shooter", "Strategy"], 60, "https://image.api.playstation.com/vulcan/ap/rnd/202206/0316/QVeyja3WdMUXZwWdAFGhn8li.png", "#"),
    new GameCard(7, "Cyberpunk 2077", 2020, ["steam", "playstation", "epic games", "origin"], "c", ["RPG"], 40, "https://i1.sndcdn.com/artworks-AXbYy13hRuZghb5D-Wm6g4g-t500x500.jpg", "#"),
    new GameCard(8, "Sifu", 2022, ["epic games", "playstation"], "s", ["Action"], 50, "https://image.api.playstation.com/vulcan/img/rnd/202201/1616/THJbARAq2YiRVUv5abCQ8GYQ.png", "#"),
    new GameCard(9, "Assassin's Creed Valhalla", 2020, ["steam", "epic games", "origin"], "a", ["Adventure"], 50, "https://image.api.playstation.com/vulcan/ap/rnd/202008/1318/8XGEPtD1xoasK0FYkYNcCn1z.png", "#"),
    new GameCard(1, "DOOM Eternal", 2020, ["steam", "playstation"], "d", ["Shooter"], 30, "https://i1.sndcdn.com/artworks-qZZjndnbbTpB9GGY-v5fkFw-t500x500.jpg", "#"),
    new GameCard(2, "Euro Truck Simulator 2", 2012, ["steam"], "e", ["Racing", "Simultaor", "Indie"], 10, "https://cdn.salla.sa/X2z7HpAloPPAg7cQwV58B2U7l9L0wmB3ChkAXqoL.png", "#"),
    new GameCard(3, "Batman: Arkham Knight", 2015, ["steam", "playstation", "epic games"], "b", ["Adventure"], 20, "https://i1.sndcdn.com/artworks-000393119445-hnz222-t500x500.jpg", "#"),
    new GameCard(4, "Mortal Kombat 11", 2019, ["steam", "playstation"], "m", ["Fighting"], 50, "https://i1.sndcdn.com/artworks-000530078760-x95npw-t500x500.jpg", "#"),
    new GameCard(5, "Dark Souls III", 2016, ["steam", "playstation", "origin"], "d", ["Adventure", "Role-playing", "RPG"], 20, "https://image.api.playstation.com/cdn/EP0700/CUSA03365_00/OFMeAw2KhrdaEZAjW1f3tCIXbogkLpTC.png", "#"),
    new GameCard(6, "Overwatch", 2016, ["battle.net"], "o", ["Shooter", "Strategy"], 30, "https://i1.sndcdn.com/artworks-000166705250-xnqrnk-t500x500.jpg", "#"),
    new GameCard(7, "Nioh 2", 2020, ["steam", "playstation"], "n", ["Adventure", "Role-playing", "RPG"], 40, "https://i1.sndcdn.com/artworks-tneLsXMjV3QvHyC6-JYLe6Q-t500x500.jpg", "#"),
    new GameCard(8, "PUBG: BATTLEGROUNDS", 2017, ["steam", "playstation"], "p", ["Indie", "Shooter"], 30, "https://gamerheadquarters.com/hub/xbox/playerunknownsbattlegrounds/1.jpg", "#"),
    new GameCard(9, "Marvel's Spider-Man: Miles Morales", 2020, ["playstation"], "s", ["Adventure"], 50, "https://image.api.playstation.com/vulcan/ap/rnd/202008/1020/T45iRN1bhiWcJUzST6UFGBvO.png", "#"),
    new GameCard(10, "Diablo Immortal", 2022, ["battle.net"], "d", ["RPG"], 50, "https://www.zastavki.com/pictures/1024x1024/2013/_Diablo_III__ever_seen_a_devil_045077_31.jpg", "#"),
    new GameCard(11, "Devil May Cry 5", 2019, ["steam", "playstation"], "d", ["Action", "Adventure"], 50, "https://www.devilmaycry.com/5se/assets/images/dmc5se-square.jpg", "#"),
    new GameCard(12, "Need for Speed Heat", 2019, ["steam", "playstation"], "n", ["Adventure", "Racing", "Sport"], 40, "https://cdn2.steamgriddb.com/file/sgdb-cdn/grid/a283ef93835eb4e6d9afbfd2e1a79d35.png", "#"),
    new GameCard(13, "New World", 2021, ["steam"], "n", ["Adventure", "Role-playing", "RPG"], 60, "https://m.media-amazon.com/images/I/91-aRrFY4AL._SS500_.jpg", "#"),
    new GameCard(14, "The Witcher 3: Wild Hunt", 2015, ["steam", "playstation", "epic games"], "t", ["Adventure", "Role-playing", "RPG"], 30, "https://fs-prod-cdn.nintendo-europe.com/media/images/11_square_images/games_18/nintendo_switch_download_software/SQ_NSwitchDS_TheWitcher3WildHunt_enGB_image500w.jpg", "#"),
    new GameCard(15, "Dying Light 2: Stay Human", 2022, ["steam", "playstation"], "d", ["Adventure", "Role-playing", "RPG"], 60, "https://image.api.playstation.com/vulcan/img/rnd/202106/2908/7aJhOMuJALdBPqZHVy3CgJsg.png", "#"),
    new GameCard(16, "Ark: Survival Evolved", 2017, ["steam", "epic games"], "a", ["Adventure", "Indie", "Role-playing", "RPG", "Shooter", "Simulator"], 50, "https://image.api.playstation.com/cdn/EP0688/CUSA06782_00/4Fn75AWWgOLZiFdxIA6HvSV5wC9c3WGp.png?w=440", "#"),
];