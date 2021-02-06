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
    countries.forEach(country => {
        //const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className = `country`;
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p class="country-capital">${country.capital}</p>
            <button class="btn" onClick = "displayCountryDetail('${country.name}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv);
        
    
        
    })

}






const displayCountryDetail = name =>{
    const url = `https://restcountries.eu/rest/v2/name/${name}`;
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data[0]));

}

const renderCountryInfo = country => {
    const countryDiv = document.getElementById('countryDetail');
    countryDiv.innerHTML = `
         
        <h1>${country.name}</h1>
        <p>Population : ${country.population}</p>
        <p>Area : ${country.area}</p>
        <img src="${country.flag}">
        
    
    `
}

