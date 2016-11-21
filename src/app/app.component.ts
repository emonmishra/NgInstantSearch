import { Component } from '@angular/core';
import { WikipediaSearchService } from './wikipedia-search.service';

// application wide shared Rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import {Subject} from 'rxjs/Subject';


@Component({

	selector: 'app-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.css'],
})
export class AppComponent {
	items:Array<string>;
	term$ = new Subject<string>();
	constructor(private service:WikipediaSearchService) {
		this.service.search(this.term$)
		.subscribe(results => this.items = results);


	}

	
}