import { Component, OnInit } from '@angular/core';
import { StaffMembermodel } from '../staff-member/staff-member-grid/staff-member-model';
import { StaffMemberService } from '../staff-member.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-staff-member',
  templateUrl: './add-staff-member.component.html',
  styleUrls: ['./add-staff-member.component.css'],
})
export class AddStaffMemberComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  municipality: string = '';
  role: string = '';
  mobileNumber: string = '';
  myForm: any;
  constructor(private staffMemberService: StaffMemberService, private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      municipality: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],

      // Add more form controls as needed
    });
  }
  addStaffMember() {
    if (this.myForm.valid) {
      const staffMember = {
        firstName: this.myForm.value.firstName,
        lastName: this.myForm.value.lastName,
        mobileNumber: this.myForm.value.mobileNumber,
        email: this.myForm.value.email,
        municipality: this.myForm.value.municipality,
        role: this.myForm.value.role
      };

      // Call the service method to add the staff member
      this.staffMemberService.addStaffMember(new StaffMembermodel({ firstName: staffMember['firstName'], lastName: staffMember['lastName'], email: staffMember['email'], mobileNumber: staffMember['mobileNumber'], municipality: staffMember['municipality'], role: staffMember['role'], }));

      // Clear the form after adding the staff member
      this.myForm.reset();
    } else {
      console.log('Invalid form data');
    }
    // if (this.myForm.invalid) {
    //   return; // Stop form submission if form is invalid
    // }
    // this.staffMemberService.addStaffMember(new StaffMembermodel({ firstName: this.firstName, lastName: this.lastName, email: this.email, municipality: this.municipality, role: this.role, mobileNumber: this.mobileNumber, },),);
    // console.log(this.staffMemberService.staffMemberList.length);
  }
}
