const API = 'https://restcountries.com/v3.1/all'


export const getInfo = async () => {
    const res = await fetch(API)
    return await res.json()
}

export const Country = async (name) => {
    //console.log(name);
    //console.log(`https://restcountries.com/v3.1/name/${name}?fullText=true`);
    const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
    return await res.json()
}

export const searchApi = async (t) =>{
    //console.log(t);
    //console.log(`https://restcountries.com/v3.1/name/${t}`);
    const res = await fetch(`https://restcountries.com/v3.1/name/${t}`)
    return await res.json()
}