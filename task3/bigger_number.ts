const biggerNumber = (n: number): number => {
    const numArr = getNumberArr(n);

    numArr.sort((a, b) => b - a);

    const result = arrayToNumber(numArr);

    return result > n ? result : -1;
}

function getNumberArr(n: number): number[] {
    const temp = n.toString();

    return [...temp].reduce((acc: number[], char: string) => acc.concat(Number(char)), []);
}

function arrayToNumber(arr: number[]): number {
    const str = arr.join('');

    return Number(str);
}