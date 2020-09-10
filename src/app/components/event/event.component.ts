import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent{
  id:'';
  event={
    id:'',
    status:'',
    start_date:'',
    end_date:'',
    description:'',
    official:'',
    visibility:'',
    guests_can_invite_others:'',
    modified_date:'',
    created_date:'',
    participant_count:'',
    reason_for_private:'',
    order_email_template:'',
    name:'',
    contact_phone:'',
    contact_email:'',
    contact_family_name:'',
    contact_given_name:'',
    host_given_name:'',
    timezone:'',
    city:'',
    locality:'',
    state:'',
    address_type:'',
    latitude:'',
    longitude:'',
    accuracy:'',
    address1:'',
    address2:'',
    postal_code:'',
    country:'',
    number_spaces_remaining:'',
    spaces_remaining:'',
    location_name:''
   }
   constructor(private activatedroute:ActivatedRoute, public dataService:DataService){
    this.dataService.getEvent(this.activatedroute.snapshot.params['id']).subscribe(event=>{
       console.log(event);
       this.event = event;
    })
   }

 

}
