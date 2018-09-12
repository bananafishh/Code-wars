'use strict';

function accum(s) {
  const arr = s.split('').map((el, i) => {
    return el.toUpperCase() + el.toLowerCase().repeat(i);
  });

  return arr.join('-');
}
