import axios from 'axios';

const KEY = 'AIzaSyCoSudlL949Tc5OY8wjXkkL9jXlYXd06iY';

export default axios.create({
    baseURL: 'https://wwww.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
