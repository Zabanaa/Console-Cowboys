import axios from 'axios'

class Api {

    constructor() {

        this.apiURI = "https://consolecowboys.club/jobs"
    }

    getAllJobs() {

        return axios.get(this.apiURI)
            .then( response => response )
            .catch(err => console.error(err))
    }

    getJobByContractType(contractType) {

        return axios.get(`${this.apiURI}/${contractType}`)
            .then(response => response)
            .catch(err => console.error(err))
    }

    getRemoteJobs() {

        return axios.get(`${this.apiURI}?remote=true`)
            .then(response => response)
            .catch(err => console.error(err))
    }

}

export default new Api()
