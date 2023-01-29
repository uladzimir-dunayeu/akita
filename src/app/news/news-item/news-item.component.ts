import { Component, Input } from '@angular/core';
import { INews } from '../state/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss']
})
export class NewsItemComponent {
  @Input() item: INews | undefined;

}
