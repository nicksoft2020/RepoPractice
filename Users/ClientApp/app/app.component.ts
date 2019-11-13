import { Component, OnInit } from '@angular/core';
import { DataService, CustomService } from './data.service';
import { User } from './users';
import { Observable } from 'rxjs';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    providers: [DataService]
})

export class AppComponent implements OnInit {
    users: User[];              // The list of users.
    total: number = 0;          // Total users.
    active: number = 0;         // Active users.
    user: User = new User();    // The value of user.
    tableMode: boolean = true;  // Table

    constructor(private dataService: DataService) { }

    // Initialization data.
    ngOnInit() {
        this.loadUsers();
    }

    // Finding the coutn of total 
    // and active users.
    setUsers() {
        this.total = this.users.length;
        this.getActiveUsers();
    }

    //  Getting active users.
    getActiveUsers() {
        this.active = 0;
        for (let el of this.users) {
            if (el.active) {
                this.active++;
            }
        }
    }

    // Loading users from database.
    loadUsers() {
        this.dataService.getUsers()
            .subscribe((data: User[]) => this.users = data);
    }

    // Saving modified user.
    save() {
        if (this.user.id == null) {

        } else {
            this.dataService.updateUser(this.user)
                .subscribe(data => this.loadUsers());
            //this.user = new User();
        }
        this.cancel();
        
    }

    // To beginner state
    cancel() {
        this.user = new User();
        this.tableMode = true;
    }

    // Opens template for adding new user
    addUser() {
        this.cancel();
        this.tableMode = false;
    }

    // Updating data.
    changeStatus(u: User) {
        this.user = u;
        this.user.active = !this.user.active;
        this.save();
    } 
}

//export class AppComponent {
//    constructor(private customService: CustomService) { }
//    public get isLoggedIn$(): Observable<boolean> {
//        return this.customService.isLoggedIn$();
//    }
//}