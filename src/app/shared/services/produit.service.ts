import {Injectable} from "@angular/core";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import {GenericService} from "./generic.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {StorageService} from "./storage.service";
import {Config} from "../config";
import {Http,Response} from '@angular/http';
import { Produit } from "../models/produit";
import { pipe } from "rxjs";

@Injectable()
export class ProduitService extends GenericService {
 
    constructor(private http:HttpClient){
        super();
    }

    getProduits(){
        return this.http.get(Config.baseUrl + "/produits");
    }

    getProduit(id: string) {
        return this.http.get(Config.baseUrl + "/produits/"+id);
    }

    add(produit:Produit){
        return this.http.post<Produit>(Config.baseUrl + "/produits",produit,{
            headers:new HttpHeaders({
                'content-type':'application/json'
            })
        });

    }
    delete(id){
        return this.http.delete(Config.baseUrl + "/produits/"+id);
    }

    update(produit: Produit) {
        return this.http.put<Produit>(Config.baseUrl + "/produits/"+produit.id,produit,{
            headers:new HttpHeaders({
                'content-type':'application/json'
        })
      });
    }
}