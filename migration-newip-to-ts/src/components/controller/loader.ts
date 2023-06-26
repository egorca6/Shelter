import { Callback, INew, ISource } from '../../types/index';

interface IOptions {
    [key: string]: string;
}

const ERROR_STATUS = [401, 404];

class Loader {
    private baseLink: string;
    private options: IOptions;

    constructor(baseLink: string, options: IOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint, options = {} }: { endpoint: string; options?: IOptions },
        callback = () => {
            console.error('No callback for GET response');
        }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (ERROR_STATUS.includes(res.status))
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: IOptions, endpoint: string) {
        const urlOptions = new URLSearchParams({ ...this.options, ...options }).toString();
        return `${this.baseLink}${endpoint}?${urlOptions}`;
    }

    load(method: string, endpoint: string, callback: Callback<INew> | Callback<ISource>, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: INew[] & ISource[]) => callback(data))
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
