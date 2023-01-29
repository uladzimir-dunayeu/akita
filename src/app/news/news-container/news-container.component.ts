import { Component, OnInit } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { loadNews } from '../state/news.actions';
import { NewsQuery } from '../state/news.query';
import { Observable } from 'rxjs';
import { INews } from '../state/news.model';

@Component({
  selector: 'app-news-container',
  templateUrl: './news-container.component.html',
  styleUrls: ['./news-container.component.scss']
})
export class NewsContainerComponent implements OnInit {
  news$: Observable<INews[]> | undefined

  constructor(private actions: Actions, private query: NewsQuery) {
  }

  ngOnInit(): void {
    this.news$ = this.query.selectNews$;
    this.actions.dispatch(loadNews());
  }

}
