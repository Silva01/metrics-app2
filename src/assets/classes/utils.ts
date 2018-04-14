/**
 * Created by DanielSilva on 14/04/18.
 */

export default class Utils {
  constructor() {  }

  static convertDateToString(date: Date): string {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }
}
