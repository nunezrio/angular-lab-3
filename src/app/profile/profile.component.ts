import { Component, OnInit } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";
import { ProfileService } from "../services/profile.service";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile: UserProfile;
  constructor(private service: ProfileService) {}

  ngOnInit() {
    this.profile = this.service.getUserProfile();
  }
}
