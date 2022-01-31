import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

declare var Razorpay: any;

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.scss']
})
export class DispenseComponent implements OnInit {

  id: string;
  itemRef: AngularFireObject<any>;
  message: string = "Drink dispensed succesfully";
  coffeee: boolean = true;

  dispensevalue : any = localStorage.getItem("paid")
  mid : any = localStorage.getItem("uid")

  constructor(
    db: AngularFireDatabase
  ) {
    this.itemRef = db.object(this.mid);
   }

  ngOnInit(): void {
    
    if(localStorage.getItem("Status") != "@!!##!!@@@@"){
      window.open("/error","_self");
    }

    if(this.dispensevalue == null || this.mid == null){
     // window.alert("Scan QR Again")
     this.message = "Scan QR code again"
     this.coffeee = false
    }
    else{
      console.log("Set to DB")
      this.itemRef.set({[this.mid] : this.dispensevalue});
      localStorage.removeItem("paid")
      localStorage.removeItem("uid")
    }

  }

}
