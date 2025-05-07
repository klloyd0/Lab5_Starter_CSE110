// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2

describe('isPhoneNumber', () => {
  test('valid phone number with dashes', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
  });

  test('valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
  });

  test('invalid phone number with letters', () => {
    expect(isPhoneNumber('123-abc-7890')).toBe(false);
  });

  test('invalid phone number with special characters', () => {
    expect(isPhoneNumber('123-456-780!')).toBe(false);
  });
});

describe('isEmail', () => {
  test('valid email address', () => {
    expect(isEmail('jimbojimmy@jimothy.com')).toBe(true);
  });
  test('valid email with only numbers', () => {
    expect(isEmail('123@numbers.com')).toBe(true);
  });
  test('invalid email without @ symbol', () => {
    expect(isEmail('blorgh.com')).toBe(false);
  });
  test('invalid email with multiple @ symbols', () => {
    expect(isEmail('grimblo@@gibbins.com')).toBe(false);
  });
});

describe('isStrongPassword', () => {
  test('valid strong password', () => {
    expect(isStrongPassword('grimblogib36')).toBe(true);
  });
  test('valid strong password with underscore', () => {
    expect(isStrongPassword('grimblo_g_36')).toBe(true);
  });
  test('too long password', () => {
    expect(isStrongPassword('grimblogibbins36')).toBe(false);
  });
  test('invalid password with special characters', () => {
    expect(isStrongPassword('!grimblo36')).toBe(false);
  });
});

describe('isDate', () => {
  test('valid date format', () => {
    expect(isDate('05/06/2025')).toBe(true);
  });
  test('valid date with single digit day and month', () => {
    expect(isDate('2/2/2022')).toBe(true);
  });
  test('invalid date with wrong format', () => {
    expect(isDate('12-15-2024')).toBe(false);
  });
  test('invalid date with letters', () => {
    expect(isDate('12/ls/`1921')).toBe(false);
  });
});

describe('isHexColor', () => {
  test('valid hex color with 3 length', () => {
    expect(isHexColor('#fff')).toBe(true);
  });
  test('valid hex color with 6 length', () => {
    expect(isHexColor('#f969a9')).toBe(true);
  });
  test('invalid hex color with letters other than a-f', () => {
    expect(isHexColor('#j90j87')).toBe(false);
  });
  test('invalid hex color with special characters', () => {
    expect(isHexColor('#75!13#')).toBe(false);
  });
});