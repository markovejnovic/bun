import { highlightJavaScript as highlighter } from "bun:internal-for-testing";
import { expect, test } from "bun:test";
import stripAnsiColors from "strip-ansi";

test("highlighter", () => {
  expect(highlighter("`can do ${123} ${'123'} ${`123`}`").length).toBeLessThan(150);
  expect(highlighter("`can do ${123} ${'123'} ${`123`}`123").length).toBeLessThan(150);
});

test("highlighter-with-multiline-interpolated-string", () => {
  const testStr = '`foo: \${bar';
  const highlighted = highlighter(testStr);
  expect(stripAnsiColors(highlighted)).toBe(testStr);
});

test("highlighter-with-interpolated-string", () => {
  const testStr = '`foo: \${bar}';
  const highlighted = highlighter(testStr);
  expect(stripAnsiColors(highlighted)).toBe(testStr);
});
