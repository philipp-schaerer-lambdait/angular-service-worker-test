import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { FirstPage } from './pages/first/first.page';
import { SecondPage } from './pages/second/second.page';

@NgModule({
    declarations: [AppComponent, FirstPage, SecondPage],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: 'first',
                component: FirstPage,
            },
            {
                path: 'second',
                component: SecondPage,
            },
        ]),
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
