import { Component, Input } from '@angular/core';
import { StaffMembermodel } from '../staff-member-model';

@Component({
  selector: 'app-staff-member-grid-item',
  templateUrl: './staff-member-grid-item.component.html',
  styleUrls: ['./staff-member-grid-item.component.css']
})
export class StaffMemberGridItemComponent {
  @Input() staffMember!: StaffMembermodel;
}
