import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchField', { static: true }) searchField!: ElementRef<HTMLInputElement>;

  ngOnInit() {
    this.searchField.nativeElement.focus();
  }
}