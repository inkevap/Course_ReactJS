import APIRequest from '../utils/config/axios.config';


export async function getRandomJoke() {
    return await APIRequest.get('/', {
        validateStatus: function (status) {
          return status < 500; // Resolve only if the status code is less than 500
        }
    }); //https://api.chucknorris.io/jokes/random
}
