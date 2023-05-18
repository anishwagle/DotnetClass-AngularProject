import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
userForm = new FormGroup({
  name:new FormControl(),
  age:new FormControl("18")
})


onSave(){
  if(!this.userForm.get("name")?.value){
    this.userForm.patchValue({name:"Hari"})
  }
  console.log(`Name:${this.userForm.get("name")?.value},Age:${this.userForm.get("age")?.value}`);
  
}
}
