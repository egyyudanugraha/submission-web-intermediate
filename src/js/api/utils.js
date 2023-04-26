import axios from 'axios';
import { path } from '../config/config';

const UtilsAPI = {
  async getLocation({ latitude, longitude }) {
    const response = await axios.get(
      `https://api.opencagedata.com/geocode/v1/json?key=${path.API_KEY_GEOCODING}&q=${latitude},${longitude}&pretty=1&no_annotations=1`,
    );

    return response.data.results[0].components;
  },
};

export default UtilsAPI;
