interface IOptions {
    [key: string]: string;
}

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
        const ERROR_STATUS = [401, 404];
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

    load(method: string, endpoint: string, callback: (data: string) => void, options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data: string) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
