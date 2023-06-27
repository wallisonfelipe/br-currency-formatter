
function removeAllButLast(string, token) {
    var parts = string.split(token);
    if (parts[1] === undefined)
        return string;
    else
        return parts.slice(0, -1).join('') + token + parts.slice(-1)
}

function format(propValue, sign=false) {
    const formatter = new Intl.NumberFormat("pt-BR", {
        style: sign ? "currency" : "decimal",
        currency: "BRL",
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
    });

    return formatter.format(propValue);
}

export default function anyNumberToBrCurrency(propValue, brSign = false, decimalParts = 2) {
    let filteredNumber = removeAllButLast(propValue, ".");
    filteredNumber = removeAllButLast(filteredNumber, ",");
    filteredNumber = filteredNumber.replace(/,/g, '.');
    filteredNumber = removeAllButLast(filteredNumber, ".");

    if (Number(filteredNumber).toString() == "NaN") {
        filteredNumber = String(filteredNumber).replace(",", "")
    }

    return format(filteredNumber, brSign);
}