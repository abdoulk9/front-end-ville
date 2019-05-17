import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ville-select',
  templateUrl: './ville-select.page.html',
  styleUrls: ['./ville-select.page.scss'],
})

export class VilleSelectPage implements OnInit {

  public id;
  public idVilleSelected;
  public townSelect = [];
  //     ville: '',
  //     pays: '',
  //     continent: '',
  //     population:''
  // ];

  //Injection des dependances
  constructor(private httpClient: HttpClient,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  //Importation de l'idInfoTown du component home.page.ts
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }


  ionViewDidEnter() {
    this.httpClient.get("http://localhost:4000/ville/" + this.id)
      .subscribe(
        (data: any) => {
          this.townSelect = data;
          console.log(this.townSelect);
        },
        err => console.log(err)
      );
  }

}
