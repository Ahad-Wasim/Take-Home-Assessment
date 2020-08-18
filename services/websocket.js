import { BASE_URL, API_TOKEN } from '../constants';

export const websocketURLFetch = async () => {
    try {
        const response = await fetch(`${BASE_URL}/sockets`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${API_TOKEN}`
            }
        });
  
    return response.json();
  
    } catch(error) {
      console.log('There was an error while fetching for socket initialization URL', error);
    }
};
