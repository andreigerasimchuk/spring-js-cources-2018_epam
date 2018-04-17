export const saveList = list => localStorage.setItem('list', JSON.stringify(list));

export const getList = () => JSON.parse(localStorage.getItem('list'));
