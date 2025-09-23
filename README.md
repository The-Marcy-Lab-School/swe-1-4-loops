# Loops

- [Reminders](#reminders)
  - [Asking ChatGPT for Help](#asking-chatgpt-for-help)
  - [Be Okay With Being "Provisionally Complete"](#be-okay-with-being-provisionally-complete)
- [Setup](#setup)
- [Before you start](#before-you-start)
- [From Scratch Questions](#from-scratch-questions)
  - [Question 1: loop0UpTo10](#question-1-loop0upto10)
  - [Question 2: loop5to10](#question-2-loop5to10)
  - [Question 3: loopEvenNumbersUpTo10](#question-3-loopevennumbersupto10)
  - [Question 4: countdown5to0](#question-4-countdown5to0)
  - [Question 5: loopUpToNum](#question-5-loopuptonum)
- [Modify Questions](#modify-questions)
  - [Question 6: whileToFor](#question-6-whiletofor)
  - [Question 7: continueGuardClause](#question-7-continueguardclause)
- [Debug Questions](#debug-questions)
  - [Question 8: brokenLoop](#question-8-brokenloop)
  - [Question 9: brokenNested](#question-9-brokennested)
- [Question 10: fizzBuzz](#question-10-fizzbuzz)

## Reminders

### Asking ChatGPT for Help

If you’re stuck, you may use ChatGPT to clarify the assignment — but not to solve it for you. To do this, copy the meta-prompt below into ChatGPT along with the assignment question.

> You are acting as a tutor. Your job is to explain what this coding question is asking, clarify confusing wording, and highlight the relevant concepts students need to know — but do not provide the full solution or code that directly answers the question. Instead, focus on rephrasing the problem in simpler terms, identifying what’s being tested, and suggesting what steps or thought processes might help. Ask guiding questions to ensure the student is thinking critically. Do not write the final function, algorithm, or code implementation.

Be mindful of your AI usage on assignments. AI can be a great tool to help your learning but it can also be detrimental if you let it do too much of the thinking for you.

### Be Okay With Being "Provisionally Complete"

At Marcy, we will deem an assignment as "complete" if the solution passes at least **75%** of the automated tests. 

However, we know many of you will feel the urge to hold off on submitting until your assignment feels 100% perfect. That drive for excellence is an asset!

But perfectionism can also get in the way of learning — especially when we need to cover a lot in a short amount of time.

That’s why we encourage you to be comfortable with being **“provisionally complete.”** This means:

- Submitting your work even if it isn’t perfect yet
- Treating submission as a checkpoint, not a finish line
- Committing to return, revise, and improve later

Learning to move forward with provisional completeness will help you make steady progress while still building the habit of continuous improvement.

## Setup

For guidance on setting up and submitting this assignment, refer to the Marcy lab School Docs How-To guide for [Working with Short Response and Coding Assignments](https://marcylabschool.gitbook.io/marcy-lab-school-docs/how-tos/working-with-assignments#how-to-work-on-assignments).

Here are some useful commands to remember.

```sh
npm i                   # install dependencies
git checkout -b draft   # switch to the draft branch before starting

npm test # run the automated tests
npm run test:w # run the automated tests and rerun them each time you save a change

git add -A              # add a changed file to the staging area
git commit -m 'message' # create a commit with the changes
git push                # push the new commit to the remote repo
```

## Before you start
You will see a *lot* of similar loops on these problems. You may want to simply cut and copy code, and *ordinarily*, that's fine. But for this, we want to establish some muscle memory with `for` loops. So, for all the "from scratch" questions, please try to write each one out by hand.

`for` loops are used for a ton of algorithm challenges due to their dynamic nature. We want you to get so good at writing them it's literally boring.

Also, READ THE TESTS CAREFULLY, the limits are exact! And if the prompt/description is confusing, do what the *test* content says. Remember "inclusive" means "include the number" and "exclusive" means "NOT including the number"

So inclusive 1 to exclusive 5 is 1, 2, 3, 4, and exclusive 5 to inclusive 10 is 6, 7, 8, 9, 10.

## From Scratch Questions

### Question 1: loop0UpTo10
Write a `for` loop that starts on 0, and logs each number up to, but not including, 10. Increment each number by 1.

### Question 2: loop5to10
Write a `for` loop that starts on 5, and logs each number up to, and including, 10. Increment each number by 1.

### Question 3: loopEvenNumbersUpTo10
Write a `for` loop that starts on 0, and logs each *even* number up to, but not including, 10. What should you increment by?

- 0 counts as an even number for this function
- an `if` check with `continue` would *technically* work here, but it's overkill. Is there a simpler way to do this?

### Question 4: countdown5to0
Write a `for` loop that starts on 5, and logs each number down to, and including, 0. Decrement each number by 1.

### Question 5: loopUpToNum
Write a `for` loop that starts on 0, and logs up to but, but not including, a given `num` argument. Increment each number by 1.

Check the test for how this function should behave if given 0 or a negative number!

## Modify Questions

### Question 6: whileToFor
Someone wrote at perfectly functional, but pretty clunky `while` loop. Can you keep the functionality exactly the same, but write it as a `for` loop?

### Question 7: continueGuardClause
In `continueGuardClause` can fix the function so that it uses a `continue` statement in a guard clause to skip numbers `2` and `3`?

## Debug Questions

### Question 8: brokenLoop
Inside `brokenLoop` it looks like we're trying to use a loop to compile a bunch of numbers into a string. However, the loop's condition and incrementor look wrong. Can read what the tests are expecting and fix this function?

### Question 9: brokenNested
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
