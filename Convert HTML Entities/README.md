# Convert HTML Entities

Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.


## Examples

convertHTML("Dolce & Gabbana") should return Dolce &​amp; Gabbana

convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &​lt; Pizza &​lt; Tacos

convertHTML("Sixty > twelve") should return Sixty &​gt; twelve

convertHTML('Stuff in "quotation marks"') should return Stuff in &​quot;quotation marks&​quot;

convertHTML("Shindler's List") should return Shindler&​apos;s List

convertHTML("<>") should return &​lt;&​gt;

convertHTML("abc") should return abc

### References

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp>

<http://dev.w3.org/html5/html-author/charref>

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace>