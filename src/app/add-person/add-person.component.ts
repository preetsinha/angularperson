import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../person.service';
@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  addPerson = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    state: new FormControl('',[Validators.required]),
    age: new FormControl('',[Validators.required]),
    city: new FormControl('',[Validators.required])
  });
  constructor(private person :PersonService) { }
  alert:boolean = false


get firstname(){
  return this.addPerson.get('firstname');
}
get lastname(){
  return this.addPerson.get('lastname');
}

get state(){
  return this.addPerson.get('state');
}

get age(){
  return this.addPerson.get('age');
}

get city(){
  return this.addPerson.get('city');
}


  ngOnInit(): void {
  }
  collectPerson(){
    // console.info(this.addPerson.value)
    this.person.savePerson(this.addPerson.value).subscribe((result)=>{
      this.alert=true;
        console.warn(result);
    })  
    this.addPerson.reset({});
  }
  closeAlert(){
    this.alert=false
  }

}
