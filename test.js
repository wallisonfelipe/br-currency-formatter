import anyNumberToBrCurrency from "./src/index.js";

// console.log(anyNumberToBrCurrency("12345"))

console.log(`12345              => ${anyNumberToBrCurrency("12345")}`)
console.log(`12345,00           => ${anyNumberToBrCurrency("12345,00")}`)
console.log(`1,456.00           => ${anyNumberToBrCurrency("1,456.00")}`)
console.log(`1.456,00           => ${anyNumberToBrCurrency("1.456,00")}`)
console.log(`1,456,00           => ${anyNumberToBrCurrency("1,456,00")}`)
console.log(`1.456.00           => ${anyNumberToBrCurrency("1.456.00")}`)
console.log(`1..,456.,.00       => ${anyNumberToBrCurrency("1..,456.,.00")}`)
console.log(`1..,,,,.,.456.,.00 => ${anyNumberToBrCurrency("1..,,,,.,.456.,.00")}`)
console.log(`45655,43           => ${anyNumberToBrCurrency("45655,43", true)}`)
console.log(`45655,435          => ${anyNumberToBrCurrency("45655,435", true, 3)}`)
console.log(`asdbc              => ${anyNumberToBrCurrency("asdbc")}`)

