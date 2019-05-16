import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Z_FIXED } from 'zlib';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public townTab ;
  public townSelect;


  constructor(private httpClient: HttpClient) {

  }

  ionViewDidEnter() {
    this.httpClient.get("http://localhost:4000/villes")
      .subscribe(
        (data: any) => {
          console.log(data);
          this.townTab = data;
          
        },
        err => console.log(err)
      );
     console.log(this.townTab);
  }

  validateSelect(id) {
    console.log(" voici l'id:" + id);
    if (id > 0) {
      this.httpClient.get("http://localhost:4000/ville/" + id)
        .subscribe(
          (data: any) => {
            console.log(data)
            if (data) {
              this.townSelect = data;
              console.log(this.townSelect);
            }
            err => console.log(err)

            console.log(this.townSelect);
          })
    }

  }


displayTown(town: any){
  console.log(town);
}


}





