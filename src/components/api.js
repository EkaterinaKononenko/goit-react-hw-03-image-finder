import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '31969563-74f89289983ad06f3bfc89c89';

const fetchImages = async (query, page) => {
  const response = await axios.get(
    `${URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );

  return response.data.hits;
};

export default fetchImages;
