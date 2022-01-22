import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gifs-search',
  templateUrl: './gifs-search.component.html',
  styleUrls: ['./gifs-search.component.css']
})
export class GifsSearchComponent implements OnInit {

  @ViewChild("searchText") searchText!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  search() {
    const searchValue = this.searchText.nativeElement.value;
    this.searchText.nativeElement.value = "";
    this.gifsService.searchGifs(searchValue);
  }

}
