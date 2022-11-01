import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': 'd4a8c9b389msh45eca5e05ba3ba7p1aa6f8jsn6356271538a7',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
})

    return data;
}