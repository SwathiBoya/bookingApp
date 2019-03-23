import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {

  slideData:any = [];

constructor() {
//   this.slideData = [
// {
//   image:"../../assets/login.jpj"
// },
// {
//   image:"../../assets/login2.jpj"
// },
// {
//   image:"../../assets/login3.jpj"
// }];
  }
 


  ionSlideDidLoad1(mypage){
    mypage.startAutoplay();
  }
}
