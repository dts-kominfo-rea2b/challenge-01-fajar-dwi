// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
function user(name, gender, age, email, favoriteColor, isHavePet, education, favoriteRestaurant){
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.email = email;
    this.favoriteColor = favoriteColor;
    this.isHavePet = isHavePet;
    this.education = education; 
    this.favoriteRestaurant = favoriteRestaurant;   
}

const favoriteColorFirstUser = new Set(["Yellow", "Pink", "White", "Purple"]);
const favoriteColorSecondUser = new Set(["Blue", "Black", "Grey"]);


const educationFirstUser = [
    new Map(
        [
            ["name", "SD 01"],
            ["city", "Jakarta"],
            ["graduate", 2016]
        ]
    ),
    new Map(
        [
            ["name", "SMP 02"],
            ["city", "Jakarta"],
            ["graduate", 2019]
        ]
    ),
    new Map(
        [
            ["name", "SMA 03"],
            ["city", "Tangerang"]
        ]
    )
];

const educationSecondUser = [
    new Map(
        [
            ["name", "SD 02"],
            ["city", "Jakarta"],
            ["graduate", 2010]
        ]
    ),
    new Map(
        [
            ["name", "SMP 03"],
            ["city", "Bogor"],
            ["graduate", 2013]
        ]
    ),
    new Map(
        [
            ["name", "SMA 01"],
            ["city", "Surabaya"],
            ["graduate", 2016]
        ]
    ),
    new Map(
        [
            ["name", "Universitas Maju"],
            ["city", "Tangerang"]
        ]
    )
];

const favoriteRestaurantfirstUser = new Set(["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]);
const favoriteRestaurantsecondUser = new Set(["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]);

const firstUser = new user("Monica", "Female", 17, "monica@dingdong.com", favoriteColorFirstUser, "Yes", educationFirstUser, favoriteRestaurantfirstUser);
const secondUser = new user("Wendy", "Male", 23, "wendy@dingdong.com", favoriteColorSecondUser, "No", educationSecondUser, favoriteRestaurantsecondUser);

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};