import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ville-update',
  templateUrl: './ville-update.page.html',
  styleUrls: ['./ville-update.page.scss'],
})
export class VilleUpdatePage implements OnInit {

  public id;
  public idUpdate;
  public villeSelected;
  public modelTown = {
    ville: '',
    pays: '',
    continent: '',
    population: ''
  }

  //Injection des dependances
  constructor(private httpClient: HttpClient,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }


  //Importation de l'idForUpdate du component home.page.ts
  ngOnInit() {

    this.idUpdate = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.idUpdate);
  }

  ionViewDidEnter() {
    console.log(this.idUpdate);
    this.httpClient.get("http://localhost:4000/ville/" + this.idUpdate)
      .subscribe(
        (data: any) => {
          this.modelTown = data || this.modelTown;
          console.log(this.modelTown);
        },
        err => console.log(err)
      );
  }


  isValidModelTown() {
    return this.modelTown.ville && this.modelTown.ville.length > 0
      && this.modelTown.pays && this.modelTown.pays.length > 0
      && this.modelTown.continent && this.modelTown.continent.length > 0
      && this.modelTown.population && this.modelTown.population.length > 0;
  }

  validateUpdate() {
    if (this.id != 0) {
      if (this.isValidModelTown) {
        this.httpClient.put('http://localhost:4000/ville/' + this.id, this.modelTown)
          .subscribe(
            () => {
              console.log(this.modelTown);
              this.router.navigateByUrl('/home');
            },
            (err) => {
              console.log(err);
            }
          )
      } else {
        console.log('Verifier le  formulaire ');
      }
    } else {
      this.httpClient.post("http://localhost:4000/ville/", this.modelTown)
        .subscribe(
          () => {
            console.log(this.modelTown);
            this.router.navigateByUrl('/home');
          },
          err => console.log(err)
        )
    }
  }


}
