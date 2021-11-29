let total = 0;

function addition(x) {
  total += x;
  return total;
}

function soustraction(x) {
  total -= x;
  return total;
}

function division(x) {
  if (total === 0) {
    return (total = x);
    // si total est égal à 0 on lui met la valeur de x
  } else {
    total /= x;
    return total;
  }
}

function multiplication(x) {
  if (total === 0) {
    return (total = x);
    // si total est égal à 0 on lui met la valeur de x
  } else {
    total *= x;
    return total;
  }
}

function reset() {
  total = 0;
}
