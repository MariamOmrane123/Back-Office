import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../../shared/models/utilisateur';
import { Http } from '@angular/http';
import { UtilisateurService } from '../../shared/services/utilisateur.service';
import swal from 'sweetalert';
@Component({
  selector: 'app-list-utilisateurs',
  templateUrl: './list-utilisateurs.component.html',
  styleUrls: ['./list-utilisateurs.component.css']
})
export class ListUtilisateursComponent implements OnInit {

  data:Utilisateur[] =[];


  constructor(private http:Http,private utilisateurService :UtilisateurService){
    
  }

  ngOnInit(): void{
    this.listUtilisateurs();

  }
  listUtilisateurs(){
    this.utilisateurService.getUtilisateurs()
          .subscribe(
            (data :Utilisateur[])=>{
              this.data=data;
            },
            (error)=>{
            
            }
          )
  }
  supprimer(index:number){
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this user!",
      icon: "warning",
      buttons:["concel", true],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal("Poof! user has been deleted!", {
          icon: "success",
        });
        this.utilisateurService.delete(this.data[index].id)
      .subscribe(
        (data)=>{
          this.data.splice(index,1);
        },
        (error)=> {

        }
      );
      } else {
        swal("Your user data is safe!");
      }
    });
  }

}
