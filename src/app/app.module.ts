import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { StaffMemberComponent } from './staff-member/staff-member.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffMemberGridComponent } from './staff-member/staff-member-grid/staff-member-grid.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StaffMemberGridItemComponent } from './staff-member/staff-member-grid/staff-member-grid-item/staff-member-grid-item.component';
import { RouterModule, Routes } from '@angular/router';
import { AddStaffMemberComponent } from './add-staff-member/add-staff-member.component';
import { StaffMemberService } from './staff-member.service';


const appRoutes: Routes = [
  { path: '', component: AddStaffMemberComponent },
  { path: 'staffList', component: StaffMemberComponent },
  { path: 'addStaffMember', component: AddStaffMemberComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    StaffMemberComponent,
    StaffMemberGridComponent,
    StaffMemberGridItemComponent,
    AddStaffMemberComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [StaffMemberService],
  bootstrap: [AppComponent]
})
export class AppModule { }
