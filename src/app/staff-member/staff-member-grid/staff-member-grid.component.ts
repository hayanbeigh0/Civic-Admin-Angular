import { Component, OnInit } from '@angular/core';
import { StaffMembermodel } from './staff-member-model';
import { StaffMemberService } from 'src/app/staff-member.service';

@Component({
  selector: 'app-staff-member-grid',
  templateUrl: './staff-member-grid.component.html',
  styleUrls: ['./staff-member-grid.component.css'],
})
export class StaffMemberGridComponent implements OnInit {
  staffMemberList: StaffMembermodel[];
  constructor(private staffMemberServices: StaffMemberService) {
    this.staffMemberList = staffMemberServices.staffMemberList.slice();
  }
  ngOnInit(): void {
    this.staffMemberServices.staffMemberList$.subscribe((list: StaffMembermodel[]) => {
      console.log(`On init list length: ${list.length}`)
      this.staffMemberList = list;
    });
  }
}
