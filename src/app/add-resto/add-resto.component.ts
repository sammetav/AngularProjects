import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import {RestoService} from '../resto.service'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  currentD = new Date();
  alert:boolean=false
  ///Form
  addItem = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    amount: new FormControl('', Validators.required),
    date: new FormControl((new Date()).toLocaleString())
  })
  constructor(private resto: RestoService) { }

  ngOnInit(): void {
  }
  collectItem()
  {
    //console.warn(this.addResto.value)
    this.resto.saveItem(this.addItem.value).subscribe((result)=>{
    console.warn("result is here", result)
    })
    this.alert=true
    this.addItem.reset({})
  }
  closeAlert(){
    this.alert=false
  }

  get f()
  {
    return this.addItem.controls;
  }

}
