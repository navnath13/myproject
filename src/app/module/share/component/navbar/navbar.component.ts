import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from 'src/app/module/auth/auth.component';
import { userService } from 'src/app/State/User/user.service';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/model/AppState';
import { authService } from 'src/app/State/Auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private userService: userService,
    private authSer: authService
  ) {}

  @Input() selectedSection: any;
  currentSection: any;
  userProfile: any;

  user: any;

  isNavbarContentOpen: any;
  opennavbarcontent(section: any) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }
  closeNavBarContent() {
    this.isNavbarContentOpen = false;
  }
  //  this for the closing window
  @HostListener('document:click', [`$event`])
  onDocumentClick(event: MouseEvent) {
    const modelContainer = document.querySelector('.model-container');
    const openButtons = document.querySelectorAll('.open-button');
    let clickInsideButton = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });
    if (modelContainer && !clickInsideButton && this.isNavbarContentOpen) {
      this.closeNavBarContent();
    }
  }
  handleLoginModel() {
    this.dialog.open(AuthComponent, { width: '400px', disableClose: false });
  }
  //  this for the closing window method is closed
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  navigateToCart(){
    this.router.navigate(['/cart']);
  }

  getuser() {
    this.userService.getUserProfile().subscribe((data: any) => {
      this.user = data;
    });
  }

  handlelogout() {
    this.userService.Logout();
    window.location.reload();
  }
  ngOnInit(): void {
    this.getuser();
  }


}
