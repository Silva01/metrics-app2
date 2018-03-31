/**
 * Created by DanielSilva on 30/03/18.
 */

import { Notification } from 'element-ui';

export default class Notificacao {

  private static SUCCESS = 'success';
  private static WARNING = 'warning';
  private static ERROR = 'error';
  private static INFO = 'info';

  constructor() { }

  static success(message: string, title: string): void {
    this.notificacao(message, title, this.SUCCESS);
  }

  static warning(message: string, title: string): void {
    this.notificacao(message, title, this.WARNING);
  }

  static error(message: string, title: string): void {
    this.notificacao(message, title, this.ERROR);
  }

  static info(message: string, title: string): void {
    this.notificacao(message, title, this.INFO);
  }

  private static notificacao(message: string, title: string, type: any): void {
    Notification({
      title: title,
      message: message,
      type: type
    });
  }
}
