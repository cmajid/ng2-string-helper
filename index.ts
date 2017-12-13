export class StringHelper {
  public static StringIsNullOrEmpty(str: string): boolean {
    var notNull = typeof str != 'undefined' && str;
    var result = !notNull;
    return result;
  }
}
