export function nextArrayElement<T>(array: T[], currentIndex: number): T {
  if (currentIndex < array.length - 1) {
    return array[currentIndex + 1];
  } else {
    return array[0];
  }
}
