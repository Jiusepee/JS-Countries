import allCountries from "./data.js";
console.log(allCountries);

// pasizymiu vieta i kuria js pagalba printinsiu elementus
const my_main_div = document.getElementById('main_div');



allCountries.map((country, index) => {
    console.log(index +1);
    console.log(country.name.common);

    // kuriu elementa i kuri irasysiu salies pavadinima
    const naujas_divas = document.createElement('div');
    const my_country_name = document.createElement('h1');
    const my_img = document.createElement('img')
    my_img.src = country.flags.png;

    //idedu teksta, reiksme, kintamaji i sukura elementa
    my_country_name.innerText = country.name.common;
    
    // idedu i main div'a savo sukurta elementa su contentu
    naujas_divas.appendChild(my_country_name);
    naujas_divas.appendChild(my_img);
    my_main_div.appendChild(naujas_divas);

    const my_country_capital = document.createElement('h3');
    if(Array.isArray(country.capital)){
        console.log(country.capital[0]);
        my_country_capital.innerText = country.capital[0];
    } else {
        console.log("Info nerasta...");
        my_country_capital.innerText = "Info nerasta"
    }
    console.log("________________________");
    naujas_divas.appendChild(my_country_capital);

    my_main_div.appendChild(naujas_divas);
});

