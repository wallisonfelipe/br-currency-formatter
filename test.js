import anyNumberToBrCurrency from "./src/index.js";

// console.log(anyNumberToBrCurrency("12345"))
console.log(
    anyNumberToBrCurrency("12345"),
    anyNumberToBrCurrency("12345,00"),
    anyNumberToBrCurrency("1,456.00"),
    anyNumberToBrCurrency("1.456,00"),
    anyNumberToBrCurrency("1,456,00"),
    anyNumberToBrCurrency("1.456.00"),
    anyNumberToBrCurrency("1..,456.,.00"),
    anyNumberToBrCurrency("1..,,,,.,.456.,.00"),
    anyNumberToBrCurrency("45655,43", true),
    anyNumberToBrCurrency("45655,435", true, 3),
)
