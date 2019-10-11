import axios from 'axios';

const KEY = 'AIzaSyAiMz5C7DY2-9BE9wSNR_FT9iFt0q7ZAao';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});
