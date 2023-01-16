export const getToken = () => localStorage.getItem('@token') || sessionStorage.getItem('@token');

export const setToken = (token: string) => localStorage.setItem('@token', token);

export const clearToken = () => localStorage.removeItem('@token');

export const setSessionToken = (token: string) => sessionStorage.setItem('@token', token);

export const clearSessionToken = () => sessionStorage.removeItem('@token'); 