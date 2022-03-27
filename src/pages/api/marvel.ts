import axios from 'axios'
import md5 from 'md5'


const secretKey = "aa952cb093124e8bb82bfc1eb03bfa74fe1cdb88"
const publicKey = "85544dfe67c132de5fc9938b1cd25cb6"
const time = Number(new Date())
const hash = md5(time + secretKey + publicKey)
const baseURL = "http://gateway.marvel.com/v1/public"



const api = axios.create({
    baseURL,
    params: {
        ts: time,
        apikey: publicKey,
        hash,
    }
})

export default api