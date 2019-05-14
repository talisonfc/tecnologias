import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { MessegeService } from './messege.service';

@Injectable()
export class HeroService {
	constructor(private messageService: MessegeService) { }

	getHeroes(): Observable<Hero[]>{
		this.messageService.add('HeroService: fetched heroes');
		return of(HEROES);
	}
}
