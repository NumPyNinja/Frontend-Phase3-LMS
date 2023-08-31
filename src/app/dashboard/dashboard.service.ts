import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  // public staffData :User[]
  
  // constructor(private userService: UserService) {}

  // public getUniqueStaffList(): User[]{
  //  // var staffData :User[]
  //   this.userService.getAllStaff().subscribe(us => {
  //     this.staffData = us;
  //     var result = []
  //     this.staffData.forEach(item => {
  //       let count = result.filter(x => x.userFirstName == item.userFirstName && x.userLastName == item.userLastName
  //         && x.userPhoneNumber == item.userPhoneNumber).length
  //       if (count == 0) {
  //         result.push(item)
  //       }
  //     })
  //      this.staffData = result;
  //   })
  //         return this.staffData;
  // }

  // public getStaffCount(): number{
  //   return null
  // }

}