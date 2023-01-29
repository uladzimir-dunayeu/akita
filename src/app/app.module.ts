import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NG_ENTITY_SERVICE_CONFIG } from '@datorama/akita-ng-entity-service';
import { NewsModule } from './news/news.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NewsModule,
    ],
  bootstrap: [AppComponent],
  providers: [{ provide: NG_ENTITY_SERVICE_CONFIG, useValue: { baseUrl: 'https://jsonplaceholder.typicode.com' }}]
})
export class AppModule { }
