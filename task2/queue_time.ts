const queueTime = (customers: number[], numberOfRegister: number): number => {
  const tills: number[] = new Array(numberOfRegister).fill(0);

  for (const waitTime of customers) {
    const lowestWaitTill = tills.indexOf(Math.min(...tills));

    tills[lowestWaitTill] += waitTime;
  }

  return Math.max(...tills);
};
