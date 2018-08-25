function expandedForm(num) {
  const arr = num.toString().split('');
  const result = [];
  let expandedNum;

  for (let i = 0, arrLength = arr.length;  i < arrLength; i++) {
    expandedNum = arr[i] * Math.pow(10, arrLength - i - 1);

    if(expandedNum) {
      result.push(expandedNum);
    }
  }

  return result.join(' + ');
}
