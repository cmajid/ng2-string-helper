export function StringIsNullOrEmpty(str: string) {
  var notNull = typeof str != 'undefined' && str;
  var result = !notNull;
  return result;
}