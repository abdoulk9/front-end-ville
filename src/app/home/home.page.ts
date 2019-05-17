import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public townTab;
  public townSelect;
  public idInfoTown ;
  public idForUpdate;
  public id;;
  public idVilleSelected


  constructor(private httpClient: HttpClient,
              private router: Router) {

  }

  ionViewDidEnter() {
    this.httpClient.get("http://localhost:4000/villes")
      .subscribe(
        (data: any) => {
          console.log(data);
          this.townTab = data;
        },
        (err) => { console.log(err) }
      );
    console.log(this.townTab);
  }

  showTownInfo(idVilleSelected) {
    this.router.navigateByUrl('/ville-select/' + idVilleSelected);
    console.log(idVilleSelected);
  }
  updateTown(id) {
    this.router.navigateByUrl('/ville-update/' + id);
    console.log(id);
  }

  deleteTown(id) {
    this.httpClient.delete("http://localhost:4000/ville/" + id)
      .subscribe(
        (data: any) => {
          if (data.delete) {
            this.router.navigateByUrl('/home');
          } else {
            err => console.log(err)
            console.log("Echec suppression")
          }
        }
      )
  }

  insertVille() {
    this.router.navigateByUrl('/ville-insert');
  }

}





