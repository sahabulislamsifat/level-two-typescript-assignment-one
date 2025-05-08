function formatString(input: string, toUpper?: boolean): string {
  if (toUpper || toUpper === undefined) {
    return input.toUpperCase();
  }

  return input.toLowerCase();
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
