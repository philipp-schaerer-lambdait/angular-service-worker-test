import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'angular-sw';

    constructor(http: HttpClient) {
        http.get('http://localhost:8081/hello-world').subscribe(x => console.log('got hello-world??', x));
    }
}
