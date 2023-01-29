import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsContainerComponent } from './news-container/news-container.component';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { NewsEffects } from './state/news.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    NewsContainerComponent
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
