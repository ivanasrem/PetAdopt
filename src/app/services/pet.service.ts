import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { Adoption, AdoptionList } from '../model/adoption.model';
import { PetList } from '../model/pet-list.model';
import { Pet } from '../model/pet.model';

const baseURL = "http://localhost:3000/api/";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient) { }

  getPets(params?: any): Observable<PetList> {

    let queryParams= {}
    if(params){
      queryParams = {
      params: new HttpParams()
      .set('filter', params && params.filter && JSON.stringify(params.filter) || "")
      .set('sort', params.sort || "")
    }
  }
    return this.http.get(`${baseURL}pets`, queryParams).pipe(map((data: any)=>{
      return new PetList(data);
    }));
  }

  getOne(id: number): Observable<Pet>{
    return this.http.get(`${baseURL}pets/${id}`).pipe(map(x => {
      return new Pet(x);
    }))
  }

  postOne(newAdoption: Adoption, id: number){
    return this.http.post(`${baseURL}adoptions`, newAdoption).pipe(map(x=> {
      return new Adoption(x);
    }))
  }

  getAdoptions(): Observable<AdoptionList> {

    return this.http.get(`${baseURL}adoptions`).pipe(map(x=> {
      return new AdoptionList(x);
    }))
  }

  deleteAdoption(id: number): Observable<Adoption> {

    return this.http.delete(`${baseURL}adoptions/${id}`).pipe(map(x=> {
      return new Adoption(x);
    }))

  }



}
