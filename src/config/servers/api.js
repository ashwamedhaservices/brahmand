// export const API_BASE_URL = 'http://64.227.164.116';
export const API_BASE_URL = 'https://apistage.ashwamedha.net';
export const API_PARTNER = '/partner'
export const API_BASE_VERSION = '/api/v1';

export const API_BASE_VERSION_URL = `${API_BASE_URL}${API_PARTNER}${API_BASE_VERSION}`;

// For Login
export const ADMIN_LOGIN = () =>  `${API_BASE_URL}${API_BASE_VERSION}/users/login`;

// For Courses Get and Post
export const COURSE_CREATE = () => `${API_BASE_VERSION_URL}/courses.json`;
export const COURSE_GET = () => `${API_BASE_VERSION_URL}/courses.json`;

export const getPartnerAcountsApi = () => `${API_BASE_VERSION_URL}/accounts.json`;
