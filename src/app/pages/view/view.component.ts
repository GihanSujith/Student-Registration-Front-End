import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,SidebarComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  public studentList:any;

  constructor(private http:HttpClient){
    this.loadStudentTable();
  }

  loadStudentTable(){

    this.http.get("http://localhost:8080/student").subscribe(res=>{

      this.studentList=res
      console.log(res);
    })

  }

  deleteStudent(student:any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.http.delete(`http://localhost:8080/student/delete-std/${student.id}`,{responseType:'text'}).subscribe(res=>{
          this.loadStudentTable()
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          console.log(res);
        })
        console.log(student);


      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });

  }
  public selectedStudent: any = {
    "id": null,
    "firstName": null,
    "lastName": null,
    "email": null,
    "departmentId": null,
    "roleId": null
  };

  updateStudent(employe: any) {

    if(employe!=null){
      this.selectedStudent = employe;
    }

    console.log(employe);

  }

  saveUpdateEmployee(){
    this.http.put("http://localhost:8080/student", this.selectedStudent).subscribe(res => {
      console.log("updated!");
    })
  }

}
