import { Component, OnInit } from '@angular/core';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-list-person',
  templateUrl: './list-person.component.html',
  styleUrls: ['./list-person.component.css']
})
export class ListPersonComponent implements OnInit {

  constructor(private person: PersonService) { }
  collection: any = [];
  ngOnInit(): void {
    
    this.person.getList().subscribe((res) => {
      console.info(res);
      this.collection = res;
    })


  }
  deletePerson(item: any) {
    console.warn(this.collection)
    this.collection.splice(item-1, 1)
    this.person.deletePerson(item).subscribe((res) => {
      console.info(res)
    })
  }
}

