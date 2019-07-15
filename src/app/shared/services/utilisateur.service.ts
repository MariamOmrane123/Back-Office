import { Injectable } from "@angular/core";
import { GenericService } from "./generic.service";
import { HttpClient } from "@angular/common/http";
import { Config } from "../config";

@Injectable()
export class UtilisateurService extends GenericService {
    constructor(private http:HttpClient){
        super();
    }

    delete(id: number) {
        return this.http.delete(Config.baseUrl + "/utilisateurs/"+id);
      }
      
      getUtilisateurs() {
        return this.http.get(Config.baseUrl + "/utilisateurs");
      }
}
