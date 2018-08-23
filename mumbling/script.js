function accum(s) {
  const arr = s.toLowerCase().split('');

  const newArr = arr.map((el, i) => {
    let repeated = '';
    let n = 0;

    while (n <= i) {
      repeated = (n === 0) ? repeated + el.toUpperCase() : repeated + el;
      n++;
    }

    return repeated;
  });

  return newArr.join('-');
}
