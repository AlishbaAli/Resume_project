import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {
  banner ={
    heading:"Alishba Ali",
    subHeading: "Software Developer",
    url:"../../../assets/images/banner.jpg",
    avatar: "../../../assets/images/avatar.jpg"
  }

}
