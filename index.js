const num = 8222742649;

// 1)
const formatNumber = (num) => 
    (divider = ",") => 
        new Intl.NumberFormat("fa-IR").format(num).replace(/٬/g, divider)

// 2)
const formatNumber = function () {
    const num = Array.prototype.slice.call(arguments).join("")
    console.log(num)
    return (divider = ",") =>
        num.split("").reverse().join("").match(/.{1,3}/g).reverse().join(divider)
}

formatNumber(12344533)("/")