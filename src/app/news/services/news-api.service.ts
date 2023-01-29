import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { createNews, INews, INewsResponse } from '../state/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private newsUrl = 'https://webapi.autodoc.ru/api/news/';

  constructor(private httpClient: HttpClient) {
  }

  getNews(page: number = 1, pageSize: number = 10): Observable<INews[]> {
    return this.httpClient.get<INewsResponse>(`${this.newsUrl}${page}/${pageSize}`)
      .pipe(
        map(response => response.news.map((item) => createNews(item)))
      );
  }
}
