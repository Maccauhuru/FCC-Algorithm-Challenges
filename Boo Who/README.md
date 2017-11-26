# Boo Who

Check if a value is classified as a boolean primitive. Return true or false

Boolean primitives are true and false

## Examples

booWho(true) should return true

booWho(false) should return true

booWho([1, 2, 3]) should return false

booWho([].slice) should return false

booWho({ "a": 1 }) should return false

booWho(1) should return false

booWho(NaN) should return false

booWho("a") should return false

booWho("true") should return false

booWho("false") should return false

### Reference

<https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean>

<http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html>