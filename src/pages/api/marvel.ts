import axios from 'axios'
import md5 from 'md5'


const priviteKey = "aa952cb093124e8bb82bfc1eb03bfa74fe1cdb88"
const publicKey = "85544dfe67c132de5fc9938b1cd25cb6"
const time = Number(new Date())
const hash = md5(time + priviteKey + publicKey)
const baseURL = "https://gateway.marvel.com/v1/public"
const limit = 100

const api = axios.create({
    baseURL,
    params: {
        ts: time,
        apikey: publicKey,
        hash,
        limit,
        
    },
    headers: {
        "accept-Encoding": "gzip",        
    }
})

export default api