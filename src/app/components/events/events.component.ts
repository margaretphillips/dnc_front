import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  events:any[] = [];
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

   constructor(public dataService:DataService){
    this.dataService.getEvents().subscribe(events=>{
       console.log(events);
       this.events = events;
    })
   }
}
