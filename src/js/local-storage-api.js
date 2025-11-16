export const saveInLs = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
}

export const getFromLs = (key) => {
    const savedData = localStorage.getItem(key);
    
    if (savedData) {
        return JSON.parse(savedData);
    }
    return null;
}

export const TASKS_LS_KEY = 'tasks';