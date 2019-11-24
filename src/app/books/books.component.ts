import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Book } from '../model/Book';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];
  dataSource;
  displayedColumns: string[] = ['id', 'type', 'links', 'attributes', 'relationships'];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getBooks().then(files => { this.books = files; console.log(JSON.stringify(this.books)); this.dataSource = new MatTableDataSource(this.books); });
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
