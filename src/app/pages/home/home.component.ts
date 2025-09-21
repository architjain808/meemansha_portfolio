import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProfileBannerComponent } from "../../components/profile-banner/profile-banner.component";
import { MarqueeComponent } from "../../components/marquee/marquee.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, ProfileBannerComponent, MarqueeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
