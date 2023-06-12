import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '84f7a50a0e6d4ead8966edb04995cb58', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
