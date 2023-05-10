export const setInLocalStorage = (key, value) => {
    let data;
    if (JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_PROJECT_TITLE))) {
        data = JSON.parse(localStorage.getItem(import.meta.env.VITE_APP_PROJECT_TITLE));
    }
    else {
        data = {};
    }
    data[key] = value;
    localStorage.setItem(import.meta.env.VITE_APP_PROJECT_TITLE, JSON.stringify(data));
};
