import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutBlankComponent } from './layout/layout-blank/layout-blank.component';
import { HttpClient } from '@angular/common/http';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SBSharedModule } from './shared/sbshare.module';
import { MLayoutModule } from './layout/layout.module';
import { PagesComponent } from './pages/pages.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    LayoutBlankComponent,
    PagesComponent,
  ],
  imports: [
    AppRoutingModule,
    MLayoutModule,
    SBSharedModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    }),
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
