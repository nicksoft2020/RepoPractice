var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = "api/users";
    }
    // Getting the list of users from home controller.
    DataService.prototype.getUsers = function () {
        return this.http.get(this.url);
    };
    // Updating user.
    DataService.prototype.updateUser = function (user) {
        return this.http.put(this.url + '/' + user.id, user);
    };
    // creating user.
    DataService.prototype.createUser = function (user) {
        return this.http.post(this.url, user);
    };
    DataService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
var CustomService = /** @class */ (function () {
    function CustomService() {
        this._sourceUserLoggedIn = new BehaviorSubject(false);
        this.isLoggedIn$ = this._sourceUserLoggedIn.asObservable();
    }
    CustomService.prototype.setLoggedIn = function (value) {
        //this._sourceUserLoggedIn.emit(value);
    };
    return CustomService;
}());
export { CustomService };
//# sourceMappingURL=data.service.js.map