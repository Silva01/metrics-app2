/**
 * Created by DanielSilva on 24/03/18.
 */

export default class Http {
  constructor() { }

  post(url: string, params: any): Promise<any> {
    return this.requisicao(url, params, 'post');
  }

  private requisicao(url: string, params: any, method: string) : Promise<any> {
    return fetch(url, { method: method, body: JSON.stringify(params) });
  }
}
