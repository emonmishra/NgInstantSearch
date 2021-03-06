import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class WikipediaSearchService {
	constructor(private jsonp: Jsonp) { }

	search(term$: Observable<string>, debounceTime=400){

	return	term$
			.debounceTime(400)
			.distinctUntilChanged()
			.switchMap(term => this.rawSearch(term));
		

	}

	rawSearch (term: string) {
		let search = new URLSearchParams();
		search.set('action', 'opensearch');
		search.set('search', term);
		search.set('format', 'json');

		return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
		.map(response => response.json()[1]);
	}
}