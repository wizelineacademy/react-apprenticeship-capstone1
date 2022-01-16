import { Storage } from './Storage';
import { AUTH_STORAGE_KEY } from '@utils/constants';

const authStorage = new Storage(AUTH_STORAGE_KEY);

export { authStorage };
