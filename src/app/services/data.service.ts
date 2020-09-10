import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService{

    constructor(public http:Http){
        
    }

    getEvents(){
        return this.http.get("https://radiant-fortress-55297.herokuapp.com/events")
           .map(res=>res.json());
    }

    getEvent(id){
        return this.http.get("https://radiant-fortress-55297.herokuapp.com/events/"+id)
           .map(res=>res.json());
    }

}

    
