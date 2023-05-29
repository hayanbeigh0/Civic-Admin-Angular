import { Subject } from "rxjs";
import { StaffMembermodel } from "./staff-member/staff-member-grid/staff-member-model";

export class StaffMemberService {
    private staffMemberListSubject: Subject<StaffMembermodel[]> = new Subject<StaffMembermodel[]>();
    staffMemberList$ = this.staffMemberListSubject.asObservable();
    staffMemberList: StaffMembermodel[] = [
        new StaffMembermodel(
            { firstName: 'Hayan', lastName: 'Beigh', email: 'hayanbeigh119@gmail.com', municipality: 'Pallthur', role: 'Supervisor', mobileNumber: '7051744660' },
        ),
        new StaffMembermodel(
            { firstName: 'Rayan', lastName: 'Beigh', email: 'rayanbeigh@gmail.com', municipality: 'Pallthur', role: 'Supervisor', mobileNumber: '7051744668' },
        ),
        new StaffMembermodel(
            { firstName: 'Sam', lastName: 'Bhat', email: 'sambhat@gmail.com', municipality: 'Pallthur', role: 'Supervisor', mobileNumber: '7051744669' },
        ),
        new StaffMembermodel(
            { firstName: 'John', lastName: 'doe', email: 'johndoe@gmail.com', municipality: 'Pallthur', role: 'Supervisor', mobileNumber: '7051744667' },
        ),
    ];
    addStaffMember(staffMember: StaffMembermodel) {
        this.staffMemberList.push(staffMember);
        this.staffMemberListSubject.next(this.staffMemberList);
    }
}