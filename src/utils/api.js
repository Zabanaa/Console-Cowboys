import axios from 'axios'

const getAllCharacters = () => {

    let apiUri  = "https://wintermute.design/api/characters"

    return axios.get(apiUri)
        .then( response => response.data.characters )
        .catch(err => console.error(err))
}

export default { getAllCharacters }

