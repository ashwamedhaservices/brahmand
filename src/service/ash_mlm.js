import axios from 'axios';
import { getUserLoginApi, getPartnerAcountsApi, getPartnerAccountsNetworkApi } from '../config/servers/api';

// let instance;
// class ApiAdminService {
//   constructor() {
//     if (instance) {
//       throw new Error("New instance cannot be created!!");
//     }

//     instance = this;
//   }

  
// }

// let ApiAdminServiceInstance = Object.freeze(new ApiAdminService());

// export default ApiAdminServiceInstance;

// Local Storage
export const storageSetItem = (key, value) => localStorage.setItem(key, value);
export const storageGetItem = (key) => localStorage.getItem(key);
export const storageClear = () => localStorage.clear();
export const storageRemoveItem = (key) => localStorage.removeItem(key);

const getHeaderOptions = async () => {
  const token = storageGetItem('partner_token');
  return {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  }
}

// Login
export const postLogin = async (payload) => {
  try {
    let response = await axios({
      method: 'post',
      url: getUserLoginApi(),
      headers: {
        "Content-type": "application/json"
      },
      data: payload
    })
    console.log('[postLogin]::', response, response.data);
    response = response.data
    if(response.success) {
      const { attributes } = response.data
      storageSetItem('users', JSON.stringify(attributes))
      storageSetItem('partner_token', attributes.token);
      return response
    } else {
      return null
    }
  } catch (error) {
    console.log('[error]::[postLogin]', error.response)
    return null
  }
}

export const getPartnerAccounts = async () => {
  try {
    console.log('[services]::[getPartnerAccounts]:: Enter')
    const getHeader = await getHeaderOptions();
    console.log('[services]::[getPartnerAccounts]::[header]::', getHeader);
    let response = await axios({
      method: 'get',
      url: getPartnerAcountsApi(),
      headers: getHeader,
    });
    response = response.data;
    console.log('[services]::[getPartnerAccounts]::[response]:: ', response);
    if(response && response.success) {
      return response.data
    } else {
      return null;
    }
  } catch (error) {
    console.log('[services]::[getPartnerAccounts]::[error]:: ', error);
    return null;
  }
} 

export const getPartnerAccountsNetwork = async () => {
  try {
    console.log('[services]::[getPartnerAccountsNetwork]:: Enter')
    const getHeader = await getHeaderOptions();
    console.log('[services]::[getPartnerAccountsNetwork]::[header]::', getHeader);
    let response = await axios({
      method: 'get',
      url: getPartnerAccountsNetworkApi(),
      headers: getHeader,
    });
    response = response.data;
    console.log('[services]::[getPartnerAccountsNetwork]::[response]:: ', response);
    if(response && response.success) {
      return response.data
    } else {
      return null;
    }
  } catch (error) {
    console.log('[services]::[getPartnerAccountsNetwork]::[error]:: ', error);
    return null;
  }
} 
