import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit {

  verify : any = true;
  verified : any = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem("Status") == "@!!##!!@@@"){
      this.verify = false;
      this.verified = true;
    }
  }
  verifyfn(data:any){
    if(data == "P_gh_zg2%aBP-4WV"){
      localStorage.setItem("Status","@!!##!!@@@@");
      this.verify = false;
      this.verified = true;
    }
    else{
      alert("Wrong Password")
    }
  }
}
