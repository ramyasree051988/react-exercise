export const isValidYear = (year)=>{
    return /^\d{4}$/.test(year);
}
export const isFutureYear = (year)=>{
    const currentYear = new Date().getFullYear();
    return (parseInt(year) > currentYear);
}
