function sockMerchant(n, ar) {
  let done = [];
  let pair = 0;

  ar.forEach((element) => {
    let count = 0;

    if (!done.includes(element)) {
      for (let i = 0; i < ar.length; i++) {
        if (ar[i] === element) {
          count++;
        }
      }
    }

    done.push(element);

    let even = count % 2 === 0;
    if (!even) {
      count--;
    }

    pair += count / 2;
  });

  return pair;
}