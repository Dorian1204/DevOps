    import { constants } from 'crypto';
import fetch from 'mode-fetch';

    const login = async {{userName, password}} => {

        const options = {
            method: 'POST',
            body: JSON.stringify({userName, password})
            headers: {'Content-Type':'application/json'}
        };
        const apiResponse = await fetch('https://de.stedi.me/login',options);
        const loginResponse = await apiResponse.test();

        return loginResponse;
    }