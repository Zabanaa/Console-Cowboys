import axios from 'axios'

const getAllCharacters = () => {

    let apiUri  = "https://consolecowboys.club/jobs"

    return axios.get(apiUri)
        .then( response => response )
        .catch(err => console.error(err))
}

export default { getAllCharacters }

