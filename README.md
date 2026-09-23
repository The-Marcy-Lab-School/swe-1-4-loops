# Loops

Practice repeating work with `for` and `while`, and with `range()`.

**Practicing:** for loops, while loops, `range()`, `continue`

- [AI Use on This Assignment](#ai-use-on-this-assignment)
- [Setup](#setup)
- [Before You Start](#before-you-start)
- [From Scratch](#from-scratch)
  - [Question 1: `loop_0_up_to_10`](#question-1-loop_0_up_to_10)
  - [Question 2: `loop_5_to_10`](#question-2-loop_5_to_10)
  - [Question 3: `loop_even_numbers_up_to_10`](#question-3-loop_even_numbers_up_to_10)
  - [Question 4: `countdown_5_to_0`](#question-4-countdown_5_to_0)
  - [Question 5: `loop_up_to_num`](#question-5-loop_up_to_num)
  - [Question 6: `fizzbuzz`](#question-6-fizzbuzz)
- [Modify](#modify)
  - [Question 7: `while_to_for`](#question-7-while_to_for)
  - [Question 8: `continue_guard_clause`](#question-8-continue_guard_clause)
- [Debug](#debug)
  - [Question 9: `broken_loop`](#question-9-broken_loop)
  - [Question 10: `broken_nested`](#question-10-broken_nested)
- [Submitting](#submitting)
- [Good luck!](#good-luck)

## AI Use on This Assignment

Use whichever mode matches where you are with this material. Both are fine,
and most people move between them as a concept clicks.

**Tutor mode.** The AI explains, questions, quizzes, and critiques, and you
write every line you submit. For this assignment that means asking it what the
three numbers in `range()` do, or having it quiz you until you can predict
what your own loop will print. Ask it a hundred questions — that is the whole
point. What you do not do is ask it for the function. Paste this at the start
of a chat and it will hold for the rest of the conversation:

> You are acting as a tutor. Your job is to explain what this coding question
> is asking, clarify confusing wording, and highlight the relevant concepts I
> need to know — but do not provide the full solution or code that directly
> answers the question. Instead, rephrase the problem in simpler terms,
> identify what is being tested, and suggest what steps or thought processes
> might help. Ask me guiding questions to make sure I am thinking critically.
> Do not write the final function, algorithm, or code implementation.

**Implementer mode.** You write a specification first, the AI writes code from
it, and then you verify that code line by line. For this assignment your spec
must say, for every loop, where it starts, where it stops, and whether the
last value is included. If what comes back does more than you asked for,
reject it — over-delivery is a defect, and catching it is part of the job.

You own every line either way, and you will be asked to explain it.

## Setup

Work in `development/mod-1`. Make a draft branch before you start.

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
git checkout -b draft
```

Run `pytest` for everything, or `pytest -k fizzbuzz` for one question. Scores
land in `scores/scores.json`.

75% of tests passing counts as complete. Submit at that point even if it is
not perfect. Treat submitting as a checkpoint rather than a finish line, and
come back to improve it.

## Before You Start

Python has no C-style `for (let i = 0; i < 10; i++)` loop. You use `range()`
instead, which takes up to three numbers:

```python
range(5)          # 0, 1, 2, 3, 4
range(2, 5)       # 2, 3, 4
range(0, 10, 2)   # 0, 2, 4, 6, 8
range(5, 0, -1)   # 5, 4, 3, 2, 1
```

**The stop value is never included.** That catches everyone once. To finish on
10, you stop at 11.

Most of these questions **print** rather than return. The tests read what you
printed, so a returned value will not count.

## From Scratch

Write your solutions in `src/from_scratch.py`.

### Question 1: `loop_0_up_to_10`

Print every number from 0 up to but not including 10.

### Question 2: `loop_5_to_10`

Print every number from 5 to 10, **including** 10.

### Question 3: `loop_even_numbers_up_to_10`

Print 0, 2, 4, 6, 8.

You do **not** need an `if` check or a `continue`, and the tests confirm you
did not use either. `range()` can count in twos on its own.

### Question 4: `countdown_5_to_0`

Print 5 down to 0, including 0.

### Question 5: `loop_up_to_num`

Print every number from 0 up to but not including `num`.

```python
loop_up_to_num(3)   # prints 0, 1, 2
loop_up_to_num(0)   # prints nothing
```

### Question 6: `fizzbuzz`

Print every number from 1 to 100, with three exceptions:

- multiples of 3 print `"fizz"`
- multiples of 5 print `"buzz"`
- multiples of **both** print `"fizzbuzz"`

```text
1
2
fizz
4
buzz
fizz
...
```

Order matters here. If you check 3 before checking both, 15 never prints
`"fizzbuzz"`. This question comes up in real interviews more than it has any
right to, so it's worth getting comfortable with. Don't overthink it!

## Modify

Change the two functions already in `src/modify.py`.

### Question 7: `while_to_for`

Rewrite `while_to_for` as a `for` loop with `range()`. It currently prints 0
to 4 using a `while` loop and a counter it has to increment by hand. The
output stays exactly the same, and the tests check the `while` is gone.

### Question 8: `continue_guard_clause`

Add a guard clause to `continue_guard_clause` so that 2 and 3 are skipped
entirely, printing nothing at all for them. It currently prints a message and
a number for 1 through 4.

A **guard clause** here is an `if` that runs `continue`. `continue` abandons
the current trip through the loop and starts the next one, skipping the rest
of the body. The tests check you used it.

## Debug

### Question 9: `broken_loop`

`broken_loop(start, end)` should build a string of every number from `start`
to `end`, **including** `end`. It currently skips every other number and stops
one short.

```python
broken_loop(1, 10)   # want "12345678910"
broken_loop(0, 0)    # want "0"
broken_loop(0, -1)   # want ""
```

Both problems are in the `range()` call. Note the last two cases: a range that
covers one number, and a range that covers none.

### Question 10: `broken_nested`

`broken_nested` should build `"00-01-02-...-18-19"`, joining each outer number
to each inner one. It returns doubled digits instead.

```python
broken_nested()   # want "00-01-02-03-04-05-06-07-08-09-10-11-...-19"
```

Look closely at the two loop variables. What happens to the outer one while
the inner loop is running?

## Submitting

```sh
git add -A
git commit -m "your message"
git push
```

Open a pull request to your instructor for feedback.

## Good luck!

Off-by-one errors are a rite of passage. When a loop misbehaves, print the
counter and watch what it actually does. You got this!
