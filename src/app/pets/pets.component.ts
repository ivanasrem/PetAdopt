import { Component, OnInit } from '@angular/core';
import { PetList } from '../model/pet-list.model';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  pets: PetList = new PetList();

  params= {
    filter: {
    sex: "",
    category: ""
    },
    sort: ""
  }

  constructor(private service: PetService) { }

  ngOnInit(): void {
    this.getPets();
  }

  getPets(){
    this.service.getPets(this.params).subscribe((pets: PetList) => {
      this.pets = pets;
    })
  }

}
