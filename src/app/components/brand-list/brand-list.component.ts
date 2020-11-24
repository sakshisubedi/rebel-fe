import { Component, OnInit, ViewChild } from '@angular/core';
import { BrandService } from '../../services/brand.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Brand } from '../../interfaces/brand';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {
  displayedColumns: string[] = ['image', 'abv', 'ibu', 'id', 'name', 'style', 'ounces'];
  dataSource: MatTableDataSource<Brand>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  brandList: any[] = [];
  brandImages: any[] = [];
  pageSizeValue: number = 20;

  constructor(private brandServ: BrandService) { }

  ngOnInit() {
    this.getBrandImages();
    this.getBrandList();
  }

  getBrandList(): void {
    this.brandServ.getBrandList().subscribe((response: any) => {
      this.brandList = response;
      // console.log(this.brandList);
      this.dataSource = new MatTableDataSource(this.brandList);
      this.dataSource.paginator = this.paginator;
    }, (err: any) => {
      console.log(err);
    });
  }

  getBrandImages(): void {
    this.brandServ.getBrandImages().subscribe((response: any) => {
      this.brandImages = response;
      // console.log(this.brandImages);
    }, (err: any) => {
      console.log(err);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
