import { GifsService } from './../../services/gifs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  get history() {
    return this.gifsService.history;
  }

  public searchGif(searchValue: string) {
    this.gifsService.searchGifBySearchValue(searchValue);
  }

}
