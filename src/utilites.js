export function filterByValue(array, string) {
  return array.filter(
    (data) =>
      JSON.stringify(data).toLowerCase().indexOf(string.toLowerCase()) !== -1
  );
}
