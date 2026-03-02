var halvesAreAlike = function (s) {
  const vowels = new Set(["a","e","i","o","u","A","E","I","O","U"]);
  const half = s.length / 2;
  
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      if (i < half) count++;
      else count--;
    }
  }

  return count === 0;
};