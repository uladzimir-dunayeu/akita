import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContainerComponent } from './news-container/news-container.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { NewsEffects } from './state/news.effects';
import { HttpClientModule } from '@angular/common/http';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    NewsContainerComponent,
    NewsItemComponent
  ],
  exports: [
    NewsContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AkitaNgEffectsModule.forRoot([NewsEffects])
  ]
})
export class NewsModule { }
