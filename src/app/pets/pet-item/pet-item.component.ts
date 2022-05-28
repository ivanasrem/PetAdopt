import { Component, Input, OnInit } from '@angular/core';
import { PetList } from 'src/app/model/pet-list.model';
import { Pet } from 'src/app/model/pet.model';

@Component({
  selector: 'app-pet-item',
  templateUrl: './pet-item.component.html',
  styleUrls: ['./pet-item.component.css']
})
export class PetItemComponent implements OnInit {

  @Input()
  pet: Pet = new Pet();

  constructor() { }

  ngOnInit(): void {
  }

  changeRoute(): void{

    
  }
}
