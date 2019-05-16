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
  public townId = 0;
  public id;


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
        (err) =>{console.log(err)} 
      );
    console.log(this.townTab);
  }

  townInfo(townId) {
    this.router.navigateByUrl('/ville-select/' + townId);
  }

  
  deleteTown(id){
    this.httpClient.delete("http://localhost:4000/ville/" + id)
    .subscribe(
      (data: any) => {
        if (data.delete) {
          this.router.navigateByUrl('/home');
        }else{
          console.log(data.err);
          console.log("Echec suppression")
        }
      }
    )
  }

}





