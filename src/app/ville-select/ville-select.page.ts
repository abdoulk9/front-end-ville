import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ville-select',
  templateUrl: './ville-select.page.html',
  styleUrls: ['./ville-select.page.scss'],
})

export class VilleSelectPage implements OnInit {

  public townId;
  public townSelect;

   //Injection des dependances
  constructor(private httpClient: HttpClient,
    private route : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.townId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("id dans oniti"+ this.townId);
  }


  ionViewDidEnter(){
    this.httpClient.get("http://localhost:4000/ville" + this.townId)
    .subscribe(
      (data: any) => {
        this.townSelect = data.villes[0];
        console.log(this.townSelect);
      },
      err => console.log(err)
    );
  }

}
