/**
 * Created by DanielSilva on 31/03/18.
 */
import Http from "../../../assets/classes/http";

export default class CardGraphicService {

  private http: Http;

  constructor() {
    this.http = new Http();
  }

  obterDados(type: string): Promise<any> {
    return this.http.post('', type);
  }
}
