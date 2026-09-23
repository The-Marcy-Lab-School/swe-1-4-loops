import inspect

from from_scratch import (
    countdown_5_to_0,
    fizzbuzz,
    loop_0_up_to_10,
    loop_5_to_10,
    loop_even_numbers_up_to_10,
    loop_up_to_num,
)

TEST_SUITE_NAME = "From Scratch Tests"


def printed(capsys):
    return [line for line in capsys.readouterr().out.splitlines() if line.strip()]


def test_loop_0_up_to_10(capsys):
    """loop_0_up_to_10 - it prints from 0 (inclusive) to 10 (exclusive) by 1"""
    loop_0_up_to_10()
    assert printed(capsys) == [str(n) for n in range(10)]


def test_loop_5_to_10(capsys):
    """loop_5_to_10 - it prints from 5 (inclusive) to 10 (inclusive) by 1"""
    loop_5_to_10()
    assert printed(capsys) == ["5", "6", "7", "8", "9", "10"]


def test_loop_even_numbers_up_to_10(capsys):
    """loop_even_numbers_up_to_10 - it prints from 0 (inclusive) to 10 (exclusive) by 2"""
    loop_even_numbers_up_to_10()
    assert printed(capsys) == ["0", "2", "4", "6", "8"]


def test_loop_even_numbers_up_to_10_no_if(capsys):
    """loop_even_numbers_up_to_10 - does not rely on an if check or continue keyword"""
    source = inspect.getsource(loop_even_numbers_up_to_10)
    assert "if" not in source
    assert "continue" not in source

    loop_even_numbers_up_to_10()  # repeated to keep the test from auto-passing
    assert printed(capsys) == ["0", "2", "4", "6", "8"]


def test_countdown_5_to_0(capsys):
    """countdown_5_to_0 - it prints from 5 (inclusive) to 0 (inclusive) by -1"""
    countdown_5_to_0()
    assert printed(capsys) == ["5", "4", "3", "2", "1", "0"]


def test_loop_up_to_num(capsys):
    """loop_up_to_num - it prints from 0 (inclusive) to the given number (exclusive) by 1"""
    loop_up_to_num(5)
    assert printed(capsys) == ["0", "1", "2", "3", "4"]

    loop_up_to_num(3)
    assert printed(capsys) == ["0", "1", "2"]

    loop_up_to_num(0)
    assert printed(capsys) == []


def test_fizzbuzz(capsys):
    """fizzbuzz - it prints fizz, buzz, fizzbuzz, or the number correctly"""
    fizzbuzz()
    lines = printed(capsys)

    assert len(lines) == 100
    assert lines[0] == "1"
    assert lines[1] == "2"
    assert lines[2] == "fizz"
    assert lines[3] == "4"
    assert lines[4] == "buzz"
    assert lines[5] == "fizz"
    assert lines[9] == "buzz"
    assert lines[14] == "fizzbuzz"
    assert lines[29] == "fizzbuzz"
    assert lines[44] == "fizzbuzz"
    assert lines[59] == "fizzbuzz"
    assert lines[74] == "fizzbuzz"
    assert lines[89] == "fizzbuzz"
    assert lines[96] == "97"
    assert lines[99] == "buzz"
