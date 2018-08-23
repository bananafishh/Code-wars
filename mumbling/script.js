function accum(s) {
  const arr = s.toLowerCase().split('').map((el, i) => {
    let repeated = '';
    let n = 0;

    while (n <= i) {
      repeated = (n === 0) ? repeated + el.toUpperCase() : repeated + el;
      n++;
    }

    return repeated;
  });

  return arr.join('-');
}
