import Http from "./http";
/**
 * Created by DanielSilva on 14/04/18.
 */

export default class Metricas {

  private http: Http;

  constructor() {
    this.http = new Http();
  }

  countingSuccessQuestions(params: Object): Promise<any> {
    return this.http.post('http://metrics.graphic.success', params);
  }
}
