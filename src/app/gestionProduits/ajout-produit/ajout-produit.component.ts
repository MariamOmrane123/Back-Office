import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../shared/services/produit.service';
import { Http } from '@angular/http';
import { Produit } from '../../shared/models/produit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css']
})
export class AjoutProduitComponent{
  produit=new Produit();

  constructor(private http:Http,
    private produitService :ProduitService,
    private route: ActivatedRoute,
    private router: Router) { 
  }

  onSubmit(){
    //console.log(this.produit.label);
    this.produitService.add(this.produit)
    .subscribe(
      (data)=>{
        this.router.navigate(['gestionProduits/list']);
      },
      (error)=> {

      }
    );
  }
}
