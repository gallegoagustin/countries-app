const { Country } = require('../db');
const axios = require('axios').default;

const loadCountriesToDb = async() => {
    const dbCountries = await Country.findAll();

    if(dbCountries.length) {
        return null;
    }

    let paises = await axios.get('https://restcountries.com/v2/all');
    let aux = paises.data;
    
    for(let i = 0; i < aux.length; i++) {
        console.log(aux[i])
        await Country.findOrCreate({
            where: {
                id: aux[i].alpha3Code || 'Unknown',
                name: aux[i].name || 'Unknown',
                flag: aux[i].flags.png,
                continent: aux[i].region || 'Unknown',
                capital: aux[i].capital || 'Unknown',
                subregion: aux[i].subregion || 'Unknown',
                area: aux[i].area || 0,
                population: aux[i].population || 0,
                currencies: aux[i].currencies ? aux[i].currencies[0].name : 'Unknown',
                demonym: aux[i].demonym || 'Unknown',
                language: aux[i].languages[0].name || 'Unknown'
            }
        })
    }
}

module.exports = { loadCountriesToDb };