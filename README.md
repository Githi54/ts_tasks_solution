# My implemantation
In this repository, you will see my solution for 3 algorithm tasks 

# Task 1 - String sort
Write a function that sorts string. Each word in the string will contain some digit.
This number will mean the position that the word will take as a result. Numbers can be from 1 to 9. 1 will be the first word (not 0). If the tape is empty - return the empty tape. Words in the input stream will contain only valid values.

```js
sortString(‘g5et ski3lls on6 use1 your2 to4 7top’)
Output: ‘use1 your2 ski3lls to4 g5et on6 7top’

sortString(‘’)
Output: ‘’

sortString(‘practic3 h4rder yo1u 2hould’)
Output: ‘yo1u 2hould practic3 h4rder’

```
# Task 2 - Queue at the supermarket
There is a certain queue in a supermarket with the possibility of self-service.
Task: write a function that calculates the total time required to serve all people.<br />
The function takes two arguments: <br />
  1 - Customers, an array of positive numbers representing the number of people in line. Every number indicates the amount of time required to serve one customer.<br /><br />
	2 -The number of cash registers, a positive number.<br />

The function should return a number, how much time is required in total.
There is only one queue.
The queue order never changes.
We assume that the first person approaches the cash register as soon as it is freed.
```
Explanation:
queueTime([5,3,4], 1)
3 customers that require 5, 3 and 4 minutes respectively and 1 checkout
Output: 12 (5 + 3 + 4)

queueTime([10, 2, 3, 3], 2)
4 customers that require 10, 2, 3 and 3 minutes respectively and 2 checkout
Output: 10

queueTime([], 1); - no customers, 1 checkout
Output: 0

```
Tests:
```js
queueTime([ 26, 42, 13, 18, 48, 38, 39, 25, 39, 6, 35, 11, 7, 38, 19, 14 ], 1) // 418

queueTime([ 34, 31, 40, 30, 48, 2, 19, 32, 37, 13, 30, 49, 3, 13, 12, 43, 39, 22, 47 ], 4) // 162

queueTime([ 19, 1, 27, 35, 16, 4, 45, 49, 41, 25 ], 5) // 65


```
# Task 3 - Next bigger number

Function that accepts a positive number and returns it the next larger number formed from the same digits.
```js
biggerNumber(23) // 32;
biggerNumber(624) // 642;
biggerNumber(2018) // 8210;
If there is no greater number, return -1
biggerNumber(9) = -1;
biggerNumber(111) = -1;
biggerNumber(531) = -1;
```


