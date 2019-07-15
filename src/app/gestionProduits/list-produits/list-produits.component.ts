import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { ProduitService } from '../../shared/services/produit.service';
import{Produit} from '../../shared/models/produit';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert';
//import { from } from 'rxjs';
@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {
 
  data:Produit[] =[];


  constructor(private http:Http,
    private produitService :ProduitService,
    private route: ActivatedRoute,
    private router: Router){
    
  }

  ngOnInit(): void {
    this.listProduits();
  }

  listProduits(){
    this.produitService.getProduits()
          .subscribe(
            (data :Produit[])=>{
              //console.log(data);
              this.data=data;
            },
            (error)=>{
            
            }
          )
  }
  supprimer(index: number){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      buttons:["concel", true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! Product has been deleted!", {
          icon: "success",
        });
        this.produitService.delete(this.data[index].id)
        .subscribe(
          (data)=>{
            this.data.splice(index,1);
          },
          (error)=> {

          }
        );
      } else {
        swal("Your product is safe!");
      }
    });

  }

  editer(produit:Produit){
    this.router.navigate(['gestionProduits/edit/',produit.id]);
    
  }
}
