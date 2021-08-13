import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { resolve } from 'node:path';
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  constructor(private https: HttpClient,private router:Router) { }

  
  title = 'demo4';
  count=0;
  name:string="";
 password:string="";
 
users:any
age:any;
showAge:any;
data1:any;
email = new FormControl('', [Validators.required, Validators.email]);

getErrorMessage() {
  if (this.email.hasError('required')) {
    return 'You must enter a value';
  }

  return this.email.hasError('email') ? 'Not a valid email' : '';
}
url:string="http://api-amsqc.vitalaxis.com/api/Values/login";
url1:string="http://api-amsqc.vitalaxis.com/api/Values/getPin";

check(){
 
  //this.http.get('',{"Username":this.name,"password":this.password}
  this.https.get(this.url+"?Username=" + this.name +"&password="+this.password      
  ).subscribe((res: any) => {
            this.users = res;
           
           //if(this.users.token=="QpwL5tke4Pnpja7X4")
           if(res!=null)
           {
            
            sessionStorage.setItem('username',this.name);
            
            this.https.get(this.url1+"?name=" + this.name     
            ).subscribe((res: any) => {this.users = res;
            this.data1= JSON.parse(this.users);
            console.log(this.data1);
            sessionStorage.clear();
            sessionStorage.setItem('pin',this.data1[0].pin);
            setTimeout(()=>{
              this.router.navigate(['/Attendance'])
              .then(()=>{
                window.location.reload();
               })
              },100);           
            });
           }  
        });
}
ngOnInit(): void {
  


}
    }




