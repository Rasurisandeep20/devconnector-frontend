  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProfile } from 'src/app/profile/models/iprofile';
import { ProfileService } from 'src/app/profile/services/profile.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css'],
})
export class CreateProfileComponent implements OnInit {
  profile: IProfile = {
    professionalStatus: '',
    company: '',
    location: '',
    websiteUrl: '',
    skills: [],
    githubUserName: '',
    bio: '',
    socialNetwork: {
      twitterUrl: '',
      facebookUrl: '',
      youtubeUrl: '',
      linkedinUrl: '',
      instagramUrl: '',
    },
    userId: 0,
  };
  skills: string = '';
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {}

  onCreateProfile() {
    this.profile.skills = this.skills.split(',');

    this.profile.userId = JSON.parse(
      localStorage.getItem('userDetails') || ''
    ).id;

    console.log(this.profile);
    this.profileService.createProfile(this.profile).subscribe(
      (res) => {
        // rest call
        console.log(res);
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
