import axios from 'axios'

let apiUri  = "https://consolecowboys.club/jobs"

const getAllJobs = () => {


    return axios.get(apiUri)
        .then( response => response )
        .catch(err => console.error(err))
}

const getJobByContractType = contractType => {

    return axios.get(`${apiUri}/${contractType}`)
        .then(response => response)
        .catch(err => console.error(err))
}

const getRemoteJobs = () => {

    return axios.get(`${apiUri}?remote=true`)
        .then(response => response)
        .catch(err => console.error(err))
}

export default { getAllJobs, getJobByContractType, getRemoteJobs }

