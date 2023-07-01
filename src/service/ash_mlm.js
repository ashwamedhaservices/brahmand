import axios from 'axios';
import { CHAPTER_CREATE, CHAPTER_GET, COURSE_CREATE, COURSE_GET, SUBJECT_CREATE, SUBJECT_GET, TOPIC_CREATE, TOPIC_GET, ADMIN_LOGIN, FILE_UPLOAD, FILE_UPLOAD_WITH_FORM_DATA, getPartnerAcountsApi } from '../config/servers/api';

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
export const storageSetItem = async (key, value) => localStorage.setItem(key, value);
export const storageGetItem = async (key) => localStorage.getItem(key);
export const storageClear = async () => localStorage.clear();
export const storageRemoveItem = async (key) => localStorage.removeItem(key);

const getHeaderOptions = async () => {
  const token = await storageGetItem('partner_token');
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
      url: ADMIN_LOGIN(),
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
    console.log('[getPartnerAccounts]:: Enter')
    const getHeader = await getHeaderOptions();
    console.log('[getPartnerAccounts]::[header]::', getHeader);
    let response = await axios({
      method: 'get',
      url: getPartnerAcountsApi(),
      headers: getHeader,
    });
    console.log('[getPartnerAccounts]::[response]:: ', response);
    if(response && response.success) {
      return response.data
    } else {
      return null;
    }
  } catch (error) {
    console.log('[getPartnerAccounts]::[error]:: ', error);
    return null;
  }
} 
