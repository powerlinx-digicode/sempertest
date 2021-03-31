import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config';

class Api {

  constructor() {

    this.host = config.dev.API_URL;

    this.path = {
      auth: {
        login: '/api/employee/login'
      }

    }
  }

  async requestPOST({ path = '', method = '', body = {}, token = '' } = {}) {

    const response = await fetch(`${this.host}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'x-access-token': `${token}`
      },
      body: JSON.stringify(body)
    });

    const data = response.json();
    const statusCode = response.status;


    const json = Promise.all([statusCode, data]).then(async json => {
      return {
        statusCode: json[0],
        data: json[1]
      };
    });

    return json;
  }

  async requestGET({ path = '', method = '', token = '' } = {}) {

    const response = await fetch(`${this.host}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${token}`
      }
    });

    const data = response.json();
    const statusCode = response.status;


    const json = Promise.all([statusCode, data]).then(async json => {
      return {
        statusCode: json[0],
        data: json[1]
      };
    });

    return json;
  }

  async logIn({ method = 'POST', email = '', password = '', } = {}) {
    return this.requestPOST({
      path: this.path.auth.login,
      method,
      body: {
        "email": email,
        "password": password,
      }
    });
  }


}

export default Api;
