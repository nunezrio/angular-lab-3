import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";
import { ProfileService } from "../services/profile.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  profile: UserProfile;
  constructor(private service: ProfileService, private router: Router) {}

  ngOnInit() {
    this.profile = this.service.getUserProfile();
  }
  // I'm calling a method from the service called setUserProfile and setting in this.profile as an argument
  submitProfile() {
    this.service.setUserProfile(this.profile);
    this.router.navigate(["/profile"]);
  }
}
