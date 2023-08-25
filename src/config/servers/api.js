// export const API_BASE_URL = 'http://64.227.164.116';
export const API_BASE_URL = 'https://apistage.ashwamedha.net';
export const API_PARTNER = '/partner'
export const API_ACCOUNTS = 'accounts';
export const API_BASE_VERSION = '/api/v1';

export const API_BASE_VERSION_URL = `${API_BASE_URL}${API_PARTNER}${API_BASE_VERSION}`;

// For Login
export const getUserLoginApi = () =>  `${API_BASE_URL}${API_BASE_VERSION}/users/otp_verification`;

export const getPartnerAcountsApi = () => `${API_BASE_VERSION_URL}/accounts.json`;
export const getPartnerAccountsNetworkApi = () => `${API_BASE_VERSION_URL}/accounts/network.json`;

// For Accounts KYC GET
export const getAccountsKycUrl = () => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs.json`;

// For Accounts KYC POST
export const postAccountsKycUrl = () => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs.json`;

// For Accounts KYC PUT
export const putAccountsKycUrl = (kycId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs/${kycId}.json`;

// For Accounts Kyced BANK GET
export const getAccountsKycedBankUrl = (kycId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs/${kycId}/bank_accounts.json`;

// For Accounts Kyced BANK POST
export const postAccountsKycedBankUrl = (kycId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs/${kycId}/bank_accounts.json`;

// For Accounts Kyced BANK PUT
export const putAccountsKycedBankUrl = (bankId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/bank_accounts/${bankId}.json`;

// For Accounts Kyced Address GET
export const getAccountsKycedAddressUrl = (kycId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs/${kycId}/addresses.json`;

// For Accounts Kyced Address POST
export const postAccountsKycedAddressUrl = (kycId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs/${kycId}/addresses.json`;

// For Accounts Kyced Address PUT
export const putAccountsKycedAddressUrl = (addressId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/address/${addressId}.json`;

// For Accounts Kyced nominees GET
export const getAccountsKycedNomineesUrl = (kycId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs/${kycId}/nominees.json`;

// For Accounts Kyced nominees POST
export const postAccountsKycedNomineesUrl = (kycId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/kycs/${kycId}/nominees.json`;

// For Accounts Kyced nominees PUT
export const putAccountsKycedNomineesUrl = (nomineeId) => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/nominees/${nomineeId}.json`;

// For Accounts Onboarding GET
export const getAccountsOnboardingUrl = () => `${API_BASE_URL}/${API_ACCOUNTS}${API_BASE_VERSION}/onboarding.json`;

// For FileUpload
export const FILE_UPLOAD = () => `${API_BASE_URL}${API_BASE_VERSION}/file_upload`;
export const FILE_UPLOAD_WITH_FORM_DATA = () => `${API_BASE_URL}${API_BASE_VERSION}/file_upload`;