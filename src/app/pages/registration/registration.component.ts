import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  public student = {
    firstName:"",
    lastName:"",
    dateOfBirth:"",
    gender:"",
    address:"",
    city:"",
    religion:"",
    zipCode:"",
    email:"",
    motherAndFatherName:"",
    phoneNumber:""
  }

  constructor(private http:HttpClient){}
  
  saveStudent(){
    this.http.post("http://localhost:8080/student",this.student).subscribe(
    (data) =>{
      Swal.fire({
        title: "Student Added!",
        text: "You clicked the button!",
        icon: "success"
      });
      
    }
  )
  }

}
