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

    submitJob(stripeToken) {

        const storage       = window.localStorage
        const storageKeys   = Object.keys(storage)
        let jobDetails      = new FormData()

        for (var i = 0; i < storageKeys.length; i++) {
            jobDetails.append(storageKeys[i], storage.getItem(storageKeys[i]))
        }

        // append the token to the form data object then send the fucker
        storage.setItem("stripe_token", stripeToken)
        return axios.post(`${this.apiURI}/jobs/checkout`, jobDetails)
            .then( response => console.log(response) )
            .catch( err => console.error(err) )
    }

}

export default new Api()
