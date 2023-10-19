import Axios from './caller';
export async function getIdUser(id) {
    return Axios.get('http://localhost:3001/users/user', {
        params: { IdUser: id },
    })
        .then((response) => response.data[0].ArtistName)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}
