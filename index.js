const num = 8222742649;

// 1)
const formatNumber = (num, divider = ",") => new Intl.NumberFormat("fa-IR").format(num).replace(/٬/g, divider)

// 2)
const formatNumber = function(num, divider = ","){
    const stringChar = [];
    let stringNum = String(num);
    const remain = stringNum.slice(0, stringNum.length % 3)

    for(let i = 0; i < stringNum.length + 1; i ++){
        stringChar.unshift(stringNum.slice(-3, stringNum.length))
        stringNum = stringNum.slice(0,-3)
    }

    return `${remain}${remain.length ? divider : ""}${stringChar.join(divider)}`;
}

// 3)
const formatNumber = function(num, divider = ","){
    const stringNum = String(num)
    return stringNum.split("").reverse().join("").match(/.{1,3}/g).reverse().join(divider)
}

console.log(formatNumber(num))