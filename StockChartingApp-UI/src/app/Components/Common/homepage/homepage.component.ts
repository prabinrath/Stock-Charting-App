import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  public AdminSelected()
  {
    this.router.navigateByUrl("adminlogin");
  }

  public UserSelected()
  {
    this.router.navigateByUrl("userlogin");
  }

  public Signup()
  {
    this.router.navigateByUrl("signup");
  }

}
