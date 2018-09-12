'use strict';

function findShort(s) {
  const words = s.split(' ').map(word => word.length);

  return Math.min(...words);
}
