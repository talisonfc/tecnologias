import { Injectable } from '@angular/core';

@Injectable()
export class MessegeService {
	messeges: string[] = [];

	constructor() { }

	add(messege: string){
		this.messeges.push(messege);
	}

	clear(){
		this.messeges = [];
	}
}
