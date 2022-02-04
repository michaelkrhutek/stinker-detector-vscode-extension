export const removeDiacritics = (str: string): string => {
    return str.normalize('NFD').replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '');
}