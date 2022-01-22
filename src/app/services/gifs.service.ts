import { GifResponse, Gif } from './../interfaces/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey: string = "NOuS5Ny2JKEtogImgd0qELbhACjLsxj6";
  private serviceURL = "https://api.giphy.com/v1/gifs";
  public searchResults: Gif[] = [];

  constructor(private httpClient: HttpClient) { 
    this._history = localStorage.getItem("history") ? 
    JSON.parse(localStorage.getItem("history")!) : [];
    this.initialImageLoad();
  }

  private initialImageLoad() {
    if (this._history.length > 0) {
      this.searchGifBySearchValue(this._history[0]);
    }
  }

  get history() {
    return [...this._history];
  }

  searchGifs(newSearchValue: string) {
    newSearchValue.trim();
    if (newSearchValue !== "" && !this._history.find((item) => item === newSearchValue)) {
      this._history.unshift(newSearchValue);
      this._history = this._history.splice(0, 10);
      localStorage.setItem("history", JSON.stringify(this._history));
      this.searchGifBySearchValue(newSearchValue);
    }
  }

  public searchGifBySearchValue(searchValue: string) {
    const params = new HttpParams().set("api_key", this.apiKey).set("q", searchValue).set("limit", 10);
    this.httpClient.get<GifResponse>(`${this.serviceURL}/search`, {params: params}).subscribe((response) => {
        this.searchResults = response.data;
      });
  }
}
