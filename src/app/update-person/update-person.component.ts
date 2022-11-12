import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrls: ['./update-person.component.css']
})
export class UpdatePersonComponent implements OnInit {
  alert: boolean = false
  editPersons = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    state: new FormControl(''),
    age: new FormControl(''),
    city: new FormControl('')
  })
  constructor(private route: ActivatedRoute, private person: PersonService) { }
  get firstname(){
    return this.editPersons.get('firstname');
  }
  get lastname(){
    return this.editPersons.get('lastname');
  }
  
  get state(){
    return this.editPersons.get('state');
  }
  
  get age(){
    return this.editPersons.get('age');
  }
  
  get city(){
    return this.editPersons.get('city');
  }
  

  ngOnInit(): void {
    console.warn(this.route.snapshot.params['id'])
    this.person.getCurrentPerson(this.route.snapshot.params['id'])
      .subscribe((result: any) => {
        console.info(result)
        this.editPersons = new FormGroup({
          firstname: new FormControl(result.firstname),
          lastname: new FormControl(result.lastname),
          state: new FormControl(result.state),
          age: new FormControl(result.age),
          city: new FormControl(result.city)
        })
      })
  }
  updateCollection() {
    console.warn("item", this.editPersons.value)
    this.person.updatePerson(this.route.snapshot.params['id'], this.editPersons.value).subscribe((result: any) => {
      console.warn("result", result)
      this.alert = true
    })
  }
  closeAlert() {
    this.alert = false
  }

}