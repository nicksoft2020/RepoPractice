import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
    private url = "api/users";

    constructor(private http: HttpClient) {
    }

    // Getting the list of users from home controller.
    getUsers() {
        return this.http.get(this.url);
    }

    // Updating user.
    updateUser(user: User) {
        return this.http.put(this.url + '/' + user.id, user);
    }

    // creating user.
    createUser(user: User) {
        return this.http.post(this.url, user);
    }
}

export class CustomService {
    public isLoggedIn$: Observable<boolean>;
    private _sourceUserLoggedIn = new BehaviorSubject<boolean>(false);

    constructor() {
        this.isLoggedIn$ = this._sourceUserLoggedIn.asObservable();
    }

    setLoggedIn(value: boolean): void {
        //this._sourceUserLoggedIn.emit(value);
    }
}