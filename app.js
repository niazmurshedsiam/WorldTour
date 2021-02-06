fetch('https://restcountries.eu/rest/v2/all')
.then(res => res.json())
.then(data => displayCountries(data));

// const displayCountries = countries => {
//     const ul = document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const li = document.createElement('li');
//         li.innerText = country.name;
//         ul.appendChild(li);
        
        
//     }

// }

// const displayCountries = countries =>{
//     const countriesDiv = document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         const countryDiv = document.createElement('div');
//         const name = document.createElement('h3');
//         name.innerText = country.name;
//         const capital = document.createElement('p');
//         capital.innerText = country.capital;
//         countriesDiv.appendChild(name);
//         countriesDiv.appendChild(capital);
       
//         countryDiv.appendChild = countriesDiv;
//         countriesDiv.appendChild(countryDiv);
        
//     }
// }




const displayCountries = countries =>{
    const countriesDiv = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
        
    }
}