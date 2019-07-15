import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Http } from '@angular/http';
import { ProduitService } from '../../shared/services/produit.service';
import { Produit } from '../../shared/models/produit';

@Component({
  selector: 'app-edit-produit',
  templateUrl: './edit-produit.component.html',
  styleUrls: ['./edit-produit.component.css']
})
export class EditProduitComponent implements OnInit {

  produit=new Produit();
  constructor(private http:Http,
              private produitService :ProduitService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.initializeForm();
  }


  initializeForm() {
    this.route.paramMap.subscribe(parameterMap=>{
      this.produitService.getProduit(parameterMap.get('id')).subscribe(
        (data:Produit)=>{
            this.produit.id=data.id;
            this.produit.label=data.label;
            this.produit.quantite=data.quantite;
            this.produit.prix=data.prix;
        },
        (error)=> {
  
        }
      );
    });
  }

  onSubmit(){
    this.produitService.update(this.produit)
    .subscribe(
      (data)=>{

        this.router.navigate(['gestionProduits/list']);
      },
      (error)=> {

      }
    );
  }

}
