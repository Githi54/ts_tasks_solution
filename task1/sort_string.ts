function sortString(str: string): string {
    const arr = str.split(' ')
    let position = 1;
    let result = '';
    let i = 0;
  
    while (position <= arr.length) {
        if (i === arr.length) {
            i = 0;
            position++;
        }
  
        if (arr[i].includes(`${position}`)) {
            result += arr[i];
            result += ' ';
            position++;
        }
  
        i++;
    }
       
    return result;
}
