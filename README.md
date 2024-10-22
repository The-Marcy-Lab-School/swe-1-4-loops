# Loops

- [Before you start](#before-you-start)
- [Question 1: loop0UpTo10](#question-1-loop0upto10)
- [Question 2: loop5to10](#question-2-loop5to10)
- [Question 3: loopEvenNumbersUpTo10](#question-3-loopevennumbersupto10)
- [Question 4: countdown5to0](#question-4-countdown5to0)
- [Question 5: loopUpToNum](#question-5-loopuptonum)
- [Question 6: MODIFY whileToFor](#question-6-modify-whiletofor)
- [Question 7: MODIFY continueGuardClause](#question-7-modify-continueguardclause)
- [Question 8: DEBUG brokenLoop](#question-8-debug-brokenloop)
- [Question 9: DEBUG brokenNested](#question-9-debug-brokennested)
- [Question 10: fizzBuzz](#question-10-fizzbuzz)


## Before you start
You will see a *lot* of similar loops on these problems. You may want to simply cut and copy code, and *ordinarily*, that's fine. But for this, we want to establish some muscle memory with `for` loops. So, for all the "from scratch" questions, please try to write each one out by hand.

`for` loops are used for a ton of algorithm challenges due to their dynamic nature. We want you to get so good at writing them it's literally boring.

Also, READ THE TESTS CAREFULLY, the limits are exact! And if the prompt/description is confusing, do what the *test* content says. Remember "inclusive" means "include the number" and "exclusive" means "NOT including the number"

So inclusive 1 to exclusive 5 is 1, 2, 3, 4, and exclusive 5 to inclusive 10 is 6, 7, 8, 9, 10.

## Question 1: loop0UpTo10
Write a `for` loop that starts on 0, and logs each number up to, but not including, 10. Increment each number by 1.

## Question 2: loop5to10
Write a `for` loop that starts on 5, and logs each number up to, and including, 10. Increment each number by 1.

## Question 3: loopEvenNumbersUpTo10
Write a `for` loop that starts on 0, and logs each *even* number up to, but not including, 10. What should you increment by?

- 0 counts as an even number for this function
- an `if` check with `continue` would *technically* work here, but it's overkill. Is there a simpler way to do this?

## Question 4: countdown5to0
Write a `for` loop that starts on 5, and logs each number down to, and including, 0. Decrement each number by 1.

## Question 5: loopUpToNum
Write a `for` loop that starts on 0, and logs up to but, but not including, a given `num` argument. Increment each number by 1.

Check the test for how this function should behave if given 0 or a negative number!

## Question 6: MODIFY whileToFor
Someone wrote at perfectly functional, but pretty clunky `while` loop. Can you keep the functionality exactly the same, but write it as a `for` loop?

## Question 7: MODIFY continueGuardClause
In `continueGuardClause` can fix the function so that it uses a `continue` statement in a guard clause to skip numbers `2` and `3`?

## Question 8: DEBUG brokenLoop
Inside `brokenLoop` it looks like we're trying to use a loop to compile a bunch of numbers into a string. However, the loop's condition and incrementor look wrong. Can read what the tests are expecting and fix this function?

## Question 9: DEBUG brokenNested
Ah, here's a real puzzler. Inside `brokenNested` we have a nested `for` loop situation that's trying to compile a string. However instead of returning:

```plaintext
"00-01-02-03-04-05-06-07-08-09-10-11-12-13-14-15-16-17-18-19"
```
It's returning:

```plaintext
"00-11-22-33-44-55-66-77-88-99-00-11-22-33-44-55-66-77-88-99"
```

There's a problem with our child loop, can you fix it?

## Question 10: fizzBuzz
Ok, for real this time! It's fizzbuzz! The function should run from 1 to 100 (inclusive of both). Here's what it should log with each loop:

- If the number is divisible by 3, log "fizz"
- If the number is divisible by 5, log "buzz"
- If the number is divisible by 3 and 5, log "fizzbuzz"
- If the number is not divisible by either, just log the number
