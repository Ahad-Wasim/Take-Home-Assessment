import { BASE_URL, API_TOKEN } from '../constants';

export const getSpaces = async () => {
    try {
        let response = await fetch(`${BASE_URL}/spaces`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${API_TOKEN}`
            }
        });

        return response.json();
    } catch(error) {
        console.log('There was an error while fetching for spaces', error)
    }
};
  