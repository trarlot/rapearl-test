import Axios from './caller';
export function hasAuthenticated() {
    return new Promise((resolve, reject) => {
        let token = getToken();
        if (token) {
            Axios.post('http://localhost:3001/login/verify')
                .then((response) => {
                    resolve(response.data);
                })
                .catch((error) => {
                    reject(error);
                });
        } else {
            resolve(false);
        }
    });
}

/**
 * Récupération brut du token en localStorage()
 * @returns {string}
 */
export let getToken = () => {
    return sessionStorage.getItem('token');
};

/**
 * Suppression du token du localStorage
 */
export let logout = () => {
    sessionStorage.removeItem('token');
    window.location.href = '/';
};

/**
 * Sauvegarde du token dans le localStorage
 * @param {string} token
 */
export let saveToken = (token) => {
    sessionStorage.setItem('token', token);
};
