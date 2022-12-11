export const getCookie = () => {
    return document.cookie.split('=')[1];
}

export const setCookie = (key: string, value: string) => {
    document.cookie = `${key}=${value}`;
}