import axios from 'axios'
import secretKey from './secret'

class Api {

    constructor() {
        // this.apiURI = "https://consolecowboys.club/jobs"
        this.apiURI = "http://consolecowboys.dev:8081/jobs"
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
        storage.setItem("stripe_token", stripeToken)

        const jobDetails    = JSON.stringify(storage)


        return axios({
            method: "POST",
            url: `${this.apiURI}/checkout`,
            data: JSON.stringify(jobDetails),
            headers: {
                "Content-Type": "application/json",
                "X-Secret-Key": secretKey
            }
        })
        .then( response => response )
        .catch( err => console.error(err) )
    }
}

export default new Api()
