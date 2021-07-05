import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  currentU = new Date();
  alert:boolean=false;
  editItem = new FormGroup({
    name: new FormControl(''),
    amount: new FormControl(''),
    date: new FormControl(''),
    updateddate: new FormControl((new Date()).toLocaleString())
  })

  constructor(private router: ActivatedRoute, private resto: RestoService) { }

  ngOnInit(): void {

    console.warn(this.router.snapshot.params.id)
    this.resto.getcurrentResto(this.router.snapshot.params.id).subscribe((result: any) => {
      this.editItem = new FormGroup({
        name: new FormControl(result['name'], [Validators.required, Validators.minLength(3)]),
        amount: new FormControl(result['amount'], Validators.required),
        date: new FormControl(result['date']),
        updateddate: new FormControl((new Date()).toLocaleString())
      })

    })
  }
  collection()
  {
    console.warn(this.editItem.value);
    this.resto.updateResto(this.router.snapshot.params.id,this.editItem.value).subscribe((result)=>{
      this.alert=true
    })
  }
  closeAlert()
  {
    this.alert=false
  }
}
