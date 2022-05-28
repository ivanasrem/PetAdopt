import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdoptionsComponent } from 'src/app/adoptions/adoptions.component';
import { Adoption } from 'src/app/model/adoption.model';
import { Pet } from 'src/app/model/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-page',
  templateUrl: './pet-page.component.html',
  styleUrls: ['./pet-page.component.css']
})
export class PetPageComponent implements OnInit {

  newAdoption: Adoption = new Adoption();

  pet: Pet = new Pet();
  petId: number = NaN;


  constructor(private route: ActivatedRoute, private service: PetService, private router: Router) { }


  ngOnInit(): void {
    this.route.params.subscribe(params=> {
      this.petId = params['id'];
      this.getPet();
    })

  }

  getPet(){
    this.service.getOne(this.petId).subscribe(x => {
      this.pet = x;
    })
  }


  submitAdoption() {

    // if(!this.adoption.name || !this.adoption.contact){
    //   this.toast.show("Please fill in the form", {classname: 'bg-danger text-light', delay: 5000})
    //   return;
    // }
    this.newAdoption.petName= this.pet.name;
    this.newAdoption.petId = this.petId;
    console.log(this.newAdoption);
    this.service.postOne(this.newAdoption, this.petId).subscribe(x => {

      this.router.navigate(['/adoptions']);               //redirekcija
    })
    }

  }



