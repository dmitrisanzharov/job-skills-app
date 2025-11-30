// do NOT pass NULL or UNDEFINED into this
export function getColorByNumber(num: number): string {
  if (num === null || num === undefined) {
    throw new Error('Number cannot be null or undefined');
  }

  if (num < 0 || num > 10) {
    throw new Error('Number must be between 0 and 10');
  }

  if (num >= 8) {
    return 'green';
  } else if (num >= 5) {
    return 'yellow';
  } else {
    return 'red';
  }
}