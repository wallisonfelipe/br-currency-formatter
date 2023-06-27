
# br-currency-formatter

Simple package that converts any passed number to currency value. Below:


## Usage


```bach
  npm install br-currency-formatter
```
or

```bach
  yarn add br-currency-formatter
```
to use inside project, use:

```
import anyNumberToBrCurrency from 'br-currency-formatter';
```



## Returns


```js
anyNumberToBrCurrency("12345")
//12345.00
```

```js
anyNumberToBrCurrency("12345,00")
//12345.00
```

```js
anyNumberToBrCurrency("1,456.00")
//1456.00
```

```js
anyNumberToBrCurrency("1.456,00")
//1456.00
```

```js
anyNumberToBrCurrency("1,456,00")
//1456.00
```

```js
anyNumberToBrCurrency("1.456.00")
//1456.00
```

Works with invalid numbers too

```js
anyNumberToBrCurrency("1..,456.,.00")
//1456.00
```

```js
anyNumberToBrCurrency("1..,,,,.,.456.,.00")
//1456.00
```

## Sign

To put the sign "R$" in all formatations, pass ```true``` on second function call parameter, like this:
```js
  anyNumberToBrCurrency("45655,43", true)
  //R$ 45655.45
```




## More decimal places

To show more decimal places, use this:
```js
  anyNumberToBrCurrency("45655,435", true, 3)
  //R$ 45655.455
```
Enjoy it!