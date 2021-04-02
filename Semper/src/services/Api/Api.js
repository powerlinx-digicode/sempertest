import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../../config/config';

class Api {

  constructor() {

    this.host = config.dev.API_URL;

    this.path = {
      auth: {
        login: '/api/employee/login'
      },
      scanner: {
        init: '/api/employee/assign_order'
      },
      emloyee: {
        me: '/api/employee/me'
      }

    }
  }

  async requestPOST({ path = '', method = '', body = {}, token = '' } = {}) {

    console.log("POST " + path + ', body: ' + body)

    const response = await fetch(`${this.host}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify(body)
    });

    const data = response.json();
    const statusCode = response.status;


    const json = Promise.all([statusCode, data]).then(json => {
      return {
        statusCode: json[0],
        data: json[1]
      };
    });

    return json;
  }

  async requestGET({ path = '', method = '', token = '' } = {}) {

    console.log("GET " + path)

    const response = await fetch(`${this.host}${path}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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

  // AUTH METHODS

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

  async getMe({ method = "GET", } = {}) {

    const token = await AsyncStorage.getItem('userToken');

    return this.requestGET({
      path: this.path.emloyee.me,
      token,
      method,
    });
  }

  // END AUTH METHODS

  // SCANNER METHODS

  async scanCode({ method = 'POST', code = '' } = {}) {

    const token = await AsyncStorage.getItem('userToken');

    return this.requestPOST({
      path: this.path.scanner.init,
      token,
      method,
      body: {
        "barcode": code,
      }
    });
  }

  // END SCANNER METHODS


}

export default Api;
