import { Component } from '@angular/core';

@Component({
  selector: 'app-staff-member',
  templateUrl: './staff-member.component.html',
  styleUrls: ['./staff-member.component.css']
})
export class StaffMemberComponent {
  inputText: string = '';
  searchStaffMember(inputText: string) {
    console.log(inputText);
  }
}
