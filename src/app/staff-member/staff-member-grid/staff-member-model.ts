export class StaffMembermodel {
    private firstName: string;
    private lastName: string;
    private email: string;
    private municipality: string;
    private role: string;
    private mobileNumber: string;
    constructor({ firstName, lastName, email, municipality, role, mobileNumber }: { firstName: string, lastName: string, email: string, municipality: string, role: string, mobileNumber: string }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.municipality = municipality;
        this.role = role;
        this.mobileNumber = mobileNumber;
    }
}