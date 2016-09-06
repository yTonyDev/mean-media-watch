import { Http, URLSearchParams, Headers }     from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class MediaItemService {
    constructor (private http: Http){}

    get(medium){
        return this.http.get('http://nodejs-tastic.c9users.io/api/v1/mediaitems');
    }

    add(mediaItem) {
        var headers = new Headers({'Content-Type': 'application/json'});
         return this.http.post('http://nodejs-tastic.c9users.io/api/v1/mediaitems', 
            JSON.stringify(mediaItem), {headers: headers})
                .map(res => res.json());
    }

    delete (id) {
        return this.http.delete('http://nodejs-tastic.c9users.io/api/v1/mediaitems/' + id);
    }
}