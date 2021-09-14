function tokenizer(input) {
  let current = 0
  let tokens = []

  while(current < input.length){
    let char = input[current]

    if (char === '(') {
      tokens.push({
        type: 'paren',
        value: '(',
      });

      current++;
    }

    if (char === ')') {
      tokens.push({
        type: 'paren',
        value: ')',
      });
      current++;
      continue
    }

    let WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      current++
      continue;
    }
  }
}