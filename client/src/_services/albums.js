import Axios from './caller';
export async function getAlbums() {
    return Axios.get('http://localhost:3001/album/albums')
        .then((response) => response.data)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}
