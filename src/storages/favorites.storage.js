import { Storage } from './Storage';
import { FAVORITES_STORAGE_KEY } from '@utils/constants';

const favoritesStorage = new Storage(FAVORITES_STORAGE_KEY);

export { favoritesStorage };
