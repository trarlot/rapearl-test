import Axios from './caller';
export async function getSong() {
    return Axios.get('http://localhost:3001/song')
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}
