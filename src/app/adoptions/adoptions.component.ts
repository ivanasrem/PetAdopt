import { Component, OnInit } from '@angular/core';
import { Adoption, AdoptionList } from '../model/adoption.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-adoptions',
  templateUrl: './adoptions.component.html',
  styleUrls: ['./adoptions.component.css']
})
export class AdoptionsComponent implements OnInit {

  adoptions: AdoptionList = new AdoptionList();


  constructor(private service: PetService) { }

  ngOnInit(): void {

  this.service.getAdoptions().subscribe((adoptions: AdoptionList) => {
    this.adoptions = adoptions;
  })

  }

 onClick(id: number){
  this.service.deleteAdoption(id).subscribe((adoption: Adoption) => {
    console.log(adoption);
    this.service.getAdoptions().subscribe((adoptions: AdoptionList) => {     //refresh tabele
      this.adoptions = adoptions;
    })
  })
 }



}
