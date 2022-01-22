import { GifsService } from './../../services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gifs-results',
  templateUrl: './gifs-results.component.html',
  styleUrls: ['./gifs-results.component.css']
})
export class GifsResultsComponent implements OnInit {

  constructor(private gifsService:GifsService) { }

  ngOnInit(): void {
  }

  get searchResults() {
    return this.gifsService.searchResults;
  }

}
