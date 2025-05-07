// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//test
test('is phone num 1', () => {
  expect(isPhoneNumber(8585342230)).toBe(false);
});
test('is phone num 2', () => {
  expect(isPhoneNumber(8581234567)).toBe(false);
});
test('is phone num 2', () => {
  expect(isPhoneNumber("bruh")).toBe(!true);
});
test('is phone num 2', () => {
  expect(isPhoneNumber("moment")).toBe(!true);
});

test('is email num 1', () => {
  expect(isEmail("bruh@gmail.com")).toBe(true);
});
test('is email num 2', () => {
  expect(isEmail("bruhmoment@gmail.com")).toBe(true);
});
test('is email num 3', () => {
  expect(isEmail("bruhgmail.com")).toBe(false);
});
test('is email num 4', () => {
  expect(isEmail("bruhmomentgmail.com")).toBe(false);
});

test('is Strong Pw 1', () => {
  expect(isStrongPassword("123")).toBe(false);
});
test('is Strong Pw 2', () => {
  expect(isStrongPassword("1")).toBe(false);
});
test('is Strong Pw 3', () => {
  expect(isStrongPassword("bruh")).toBe(true);
});
test('is Strong Pw 4', () => {
  expect(isStrongPassword("password")).toBe(true);
});
var date = new Date();
test('is date 1', () => {
  expect(isDate(date)).toBe(!true);
});
test('is date 2', () => {
  expect(isDate(new Date)).toBe(!true);
});
test('is date 3', () => {
  expect(isDate("123104")).toBe(false);
});
test('is date 4', () => {
  expect(isDate( "december 12,2012")).toBe(false);
});

test('is date 1', () => {
  expect(isHexColor("#FF5733")).toBe(true);
});
test('is date 1', () => {
  expect(isHexColor("#FF5723")).toBe(true);
});
test('is date 1', () => {
  expect(isHexColor("#bruh")).toBe(false);
});
test('is date 1', () => {
  expect(isHexColor("#moment")).toBe(false);

});

});

