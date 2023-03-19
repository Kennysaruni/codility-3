function mergeStrings(str1, str2) {
    // find the maximum possible overlap
    let overlap = 0;
    for (let i = 1; i <= Math.min(str1.length, str2.length); i++) {
      if (str1.slice(-i) === str2.slice(0, i)) {
        overlap = i;
      }
    }
    
    // merge the strings
    return str1 + str2.slice(overlap);
  }
  console.log(mergeStrings("abc", "abc"))  