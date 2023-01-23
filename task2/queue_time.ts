const queueTime = (customers: number[], numberOfRegister: number): number => {
  const tills: number[] = new Array(numberOfRegister).fill(0);

  for (const waitTime of customers) {
    const lowestWaitTill = getMinNumberIndex(tills);

    tills[lowestWaitTill] += waitTime;
  }

  return Math.max(...tills);
};

function getMinNumberIndex(arr: number[]): number {
    return arr.indexOf(Math.min(...arr))
}; 
