import { Injectable } from "@angular/core";
import { UserProfile } from "../interfaces/user-profile";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  profile: UserProfile = {
    name: "Rion Nunez",
    contact: "nunezrio@gmail.com",
    bio: "I love donuts!"
  };

  constructor() {}

  getUserProfile(): UserProfile {
    return this.profile;
  }
  setUserProfile(newInfo: UserProfile): void {
    this.profile = newInfo;
  }
}
