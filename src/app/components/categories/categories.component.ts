import { Component, OnInit, } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [HttpClientModule, CommonModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit{
  categoriesList:any[]=[];
  constructor(private masterSvc : MasterService){

  }

  ngOnInit(): void {
    this.loadAllFoodCaterories();
  }

  loadAllFoodCaterories(){
    this.masterSvc.getAllfoodCategory().subscribe((res: any)=>{
        this.categoriesList = res.data;
    } )
  }
}



//https://freeapi.miniprojectideas.com/index.html