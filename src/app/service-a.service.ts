import { Injectable } from '@angular/core';
import { ServiceBService } from './service-b.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceAService {

  constructor(private serviceB:ServiceBService) {
    console.log("contructor a")
    this.serviceB.writer();
   }
}
