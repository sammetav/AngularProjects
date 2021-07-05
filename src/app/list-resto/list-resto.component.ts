import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'



@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {



  constructor(private resto: RestoService) { }
  collection: any = [];
  name:any;
  p:number=1;
  ngOnInit(): void {
    ///Get 
    this.resto.Getlist().subscribe((result:any) => {
      console.warn(result)
      this.collection = result;
    })
  }
  ///delete Item 
  deleteResto(item: any) {
    this.collection.splice(item - 1, 1)
    this.resto.deleteResto(item).subscribe((result:any) => {
      console.warn("result", result)
    })
  }
  ///Search by name in the table
  Search(){
    if (this.name == ""){
      this.ngOnInit();
    } else {
      this.collection=this.collection.filter((res:any)=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }
  }

  ///Sorting the data by amount or quantity
  key:string='id';
  reverse:boolean=false;
  sort(key:any){
    this.key=key;
    this.reverse=!this.reverse;
  }
}
