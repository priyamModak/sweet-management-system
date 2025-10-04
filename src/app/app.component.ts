import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" *ngIf="isLoggedIn()">
      <span>Sweet Shop</span>
      <span style="flex:1 1 auto"></span>
      <button mat-button routerLink="/home">Home</button>
  <button mat-button routerLink="/add">Add</button>
  <button mat-button routerLink="/master">Master</button>
      <button mat-button routerLink="/report">Reports</button>
      <button mat-button (click)="logout()">Logout</button>
    </mat-toolbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent {
  isLoggedIn() {
    return !!localStorage.getItem('isLoggedIn');
  }
  logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '/login';
  }
}
