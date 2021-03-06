import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

var dataes: string;
declare var Razorpay: any; 
var newid: string;
var cost: number;
var splitid: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  id: string;

  title = 'client';
    options = {
        "key": 'rzp_live_3An6GtWmU1mL16', // Enter the Key ID generated from the Dashboard
        "amount": cost, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
        "currency": "INR",
        "name": "Coffee",
        "description": "pay for coffee",
        "image": "https://raw.githubusercontent.com/iamtheretronerd/iamtheretronerd.github.io/main/Untitled%20design.png",
        "handler": function (response: { razorpay_payment_id: any; }) {
            localStorage.setItem("paid",dataes)
            localStorage.setItem("uid",newid)
            // alert(response.razorpay_payment_id);
            window.open("/dispense","_self")
            console.log("paid")
        },
        "prefill": {
            "name": "Milano Coffee",
            "email": "hello@milanocoffee.in",
            "contact": "123456789",
            'method': 'upi',
        },
        "notes": {
            "address": "note value"
        },
        "theme": {
            "color": "#F37254",
            'hide_topbar': 'true', //To hide the back button
        }
      };

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Status") != "@!!##!!@@@@"){
      window.open("/error","_self");
    }
    
    this.id = this.route.snapshot.params.id;
    splitid = this.id.split("-")
    newid = splitid[0];
    cost = splitid[1] * 1
    this.dispense()
  
  }
  
  initPay() {
    var rzp1 = new Razorpay(this.options);
    rzp1.open();
    console.log("works");
}

dispense(){
  this.options = {
    "key": 'rzp_live_3An6GtWmU1mL16', // Enter the Key ID generated from the Dashboard
    "amount": cost, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500.
    "currency": "INR",
    "name": "Soup",
    "description": "pay for Soup",
    "image": "https://raw.githubusercontent.com/iamtheretronerd/iamtheretronerd.github.io/main/Untitled%20design.png",
    "handler": function (response: { razorpay_payment_id: any; }) {
        localStorage.setItem("paid",dataes)
        localStorage.setItem("uid",newid)
        // alert(response.razorpay_payment_id);
        window.open("/dispense","_self")
        console.log("paid")
    },
    "prefill": {
        "name": "Noobs Code",
        "email": "hello@noobscode.com",
        "contact": "123456789",
        'method': 'upi',
    },
    "notes": {
        "address": "note value"
    },
    "theme": {
        "color": "#F37254",
        'hide_topbar': 'true', //To hide the back button
    }
  };
  console.log(this.options)
  console.log("COST: ",cost,"Type: ",typeof(cost))
  dataes = "CxDDQQrA"; 
  var rzp1 = new Razorpay(this.options);
  rzp1.open();
}
}
