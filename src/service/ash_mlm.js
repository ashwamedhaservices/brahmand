import axios from 'axios';
import { getUserLoginApi, getPartnerAcountsApi, getPartnerAccountsNetworkApi, getAccountsOnboardingUrl, putAccountsKycedNomineesUrl, postAccountsKycedNomineesUrl, getAccountsKycedNomineesUrl, putAccountsKycedAddressUrl, postAccountsKycedAddressUrl, getAccountsKycedAddressUrl, putAccountsKycedBankUrl, postAccountsKycedBankUrl, getAccountsKycedBankUrl, putAccountsKycUrl, postAccountsKycUrl, getAccountsKycUrl, FILE_UPLOAD } from '../config/servers/api';

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

// makeRequest
export const makeRequest = async (methodType, uri, payload = {}) => {
  try {
    console.log(`[service]::[makeRequest]::[method:: ${methodType}]::[uri:: ${uri}]::[payload:: ${JSON.stringify(payload)}]`);
    let url = uri;

    const headers = await getHeaderOptions();

    let response = await axios({
      method: methodType,
      url: url,
      headers: headers,
      data: payload
    });
    return response.data;
  } catch (error) {
    console.log(`[service]::[makeRequest]::[method:: ${methodType}]::[url:: ${uri}]::[payload:: ${payload}]:: [err: ${error}]`);
    return {};
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
      await storageSetItem('users', JSON.stringify(attributes))
      await storageSetItem('partner_token', attributes.token);
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

export const getPartnerAccountsNetwork = async (id) => {
  try {
    console.log('[services]::[getPartnerAccountsNetwork]:: Enter')
    const getHeader = await getHeaderOptions();
    let url = getPartnerAccountsNetworkApi();
    if(id) {
      url += `?id=${id}`
    }
    console.log('[services]::[getPartnerAccountsNetwork] url', url);
    console.log('[services]::[getPartnerAccountsNetwork]::[header]::', getHeader);
    let response = await axios({
      method: 'get',
      url: url,
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

export const getAccountsKyc = async () => {
  console.log('[service]::[getAccountsKyc]:: ');
  const responseJson =
      await makeRequest('get', getAccountsKycUrl(), {});
  console.log(
      `[service]::[getAccountsKyc]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const postAccountsKyc = async (payload) => {
  console.log(`[service]::[postAccountsKyc]:: ${payload}`);
  const responseJson = await makeRequest(
      'post', postAccountsKycUrl(), payload);
  console.log(
      `[service]::[postAccountsKyc]::[makeRequests]::[result] ${responseJson}`);
  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const putAccountsKyc = async (payload, kycId) => {
  console.log(`[service]::[putAccountsKyc]:: ${payload} ${kycId}`);
  const responseJson = await makeRequest(
      'put', putAccountsKycUrl(kycId), payload);
  console.log(
      `[service]::[putAccountsKyc]::[makeRequests]::[result] ${responseJson}`);
  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const getAccountsKycedBank = async (kycId) => {
  console.log('[service]::[getAccountsKycedBank]:: ');
  const responseJson = await makeRequest(
      'get', getAccountsKycedBankUrl(kycId), {});
  console.log(
      `[service]::[getAccountsKycedBank]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const postAccountsKycedBank = async (payload, kycId) => {
  console.log('[service]::[postAccountsKycedBank]:: ');
  const responseJson = await makeRequest(
      'post', postAccountsKycedBankUrl(kycId), payload);
  console.log(
      `[service]::[postAccountsKycedBank]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const putAccountsKycedBank = async (payload, kycId) => {
  console.log('[service]::[putAccountsKycedBank]:: ');
  const responseJson = await makeRequest(
      'put', putAccountsKycedBankUrl(kycId), payload);
  console.log(
      `[service]::[putAccountsKycedBank]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const getAccountsKycedAddress = async (kycId) => {
  console.log('[service]::[getAccountsKycedAddress]:: ');
  const responseJson = await makeRequest(
      'get', getAccountsKycedAddressUrl(kycId), {});
  console.log(
      `[service]::[getAccountsKycedAddress]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const postAccountsKycedAddress = async (payload, kycId) => {
  console.log('[service]::[postAccountsKycedAddress]:: ');
  const responseJson = await makeRequest(
      'post', postAccountsKycedAddressUrl(kycId), payload);
  console.log(
      `[service]::[postAccountsKycedAddress]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const putAccountsKycedAddress =  async (payload, kycId) => {
  console.log('[service]::[putAccountsKycedAddress]:: ');
  const responseJson = await makeRequest(
      'put', putAccountsKycedAddressUrl(kycId), payload);
  console.log(
      `[service]::[putAccountsKycedAddress]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const getAccountsKycedNominees = async (kycId) => {
  console.log('[service]::[getAccountsKycedNominees]:: ');
  const responseJson = await makeRequest(
      'get', getAccountsKycedNomineesUrl(kycId), {});
  console.log(
      `[service]::[getAccountsKycedNominees]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const postAccountsKycedNominees = async (payload, kycId) => {
  console.log('[service]::[postAccountsKycedNominees]:: ');
  const responseJson = await makeRequest(
      'post', postAccountsKycedNomineesUrl(kycId), payload);
  console.log(
      `[service]::[postAccountsKycedNominees]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const putAccountsKycedNominees = async (payload, kycId) => {
  console.log('[service]::[putAccountsKycedNominees]:: ');
  const responseJson = await makeRequest(
      'put', putAccountsKycedNomineesUrl(kycId), payload);
  console.log(
      `[service]::[putAccountsKycedNominees]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

export const getAccountsOnboarding = async () => {
  console.log('[service]::[getAccountsOnboarding]:: ');
  const responseJson = await makeRequest(
      'get', getAccountsOnboardingUrl(), {});
  console.log(
      `[service]::[getAccountsOnboarding]::[makeRequests]::[result] ${responseJson}`);

  if (responseJson['success']) {
    return responseJson['data'];
  }
  return {};
}

// UPLOAD FILE TO GET PRESIGNEDURL
// {
//   "file": {
//     "name": "image",
//     "location": "/subject_logo",
//     "type": "png"
//   }
// }

// Creating File Location
export const postFileUpload = async (payload) => {
  try {
    let response = await axios({
      method: 'post',
      url: FILE_UPLOAD(),
      headers: await getHeaderOptions(),
      data: payload
    });
    console.log('[postFileUpload]::', response);
    response = response.data
    if(response.success) {
      return response
    } else {
      return null
    }
  } catch (error) {
    console.log('[error]::[postFileUpload]', error.response)
    return null
  }
}

// File Uploaded to the location
export const putFileUpload = async (axios_url, payload, handleUploadProgress = ()=>{}, content_type = "image/*") => {
  try {
    // let data = new FormData();
    // data.append('file', payload);

    // const fileReader = await convertToBinary(payload)
    console.log('[putFileUpload]::', axios_url, payload)
    return axios({
      method: 'put',
      url: axios_url,
      headers: {
        "Content-type": content_type,
        "x-amz-acl": "public-read",
      },
      data: payload,
      onUploadProgress: handleUploadProgress
    });
  } catch (error) {
    console.log('[error]::[putFileUpload]', error.response)
    return null
  }
}