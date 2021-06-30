import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { CoservComponent } from './coserv/coserv.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GoshiComponent } from './goshi/goshi.component';
import { HomeComponent } from './home/home.component';
import { HonorComponent } from './honor/honor.component';
import { IphoneComponent } from './iphone/iphone.component';
import { JaroComponent } from './jaro/jaro.component';
import { LabaniatComponent } from './labaniat/labaniat.component';
import { LavazemghangiComponent } from './lavazemghangi/lavazemghangi.component';
import { LoginComponent } from './login/login.component';
import { MashinlebasComponent } from './mashinlebas/mashinlebas.component';
import { NoshidniComponent } from './noshidni/noshidni.component';
import { PoshakComponent } from './poshak/poshak.component';
import { PoshakdojhtaraneComponent } from './poshakdojhtarane/poshakdojhtarane.component';
import { PoshakmardaneComponent } from './poshakmardane/poshakmardane.component';
import { PoshakpesaraneComponent } from './poshakpesarane/poshakpesarane.component';
import { PoshakzananComponent } from './poshakzanan/poshakzanan.component';
import { RegisterComponent } from './register/register.component';
import { SamsongComponent } from './samsong/samsong.component';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { TanagolatComponent } from './tanagolat/tanagolat.component';
import { TvComponent } from './tv/tv.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { YaghchalComponent } from './yaghchal/yaghchal.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'forget-password',
    component:ForgetPasswordComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'change-password',
    component:ChangePasswordComponent
  },
  {
    path:'supermarket',
    component:SupermarketComponent
  },
  {
    path:'tanagolat',
    component:TanagolatComponent
  },
  {
    path:'noshidni',
    component:NoshidniComponent
  },
  {
    path:'labaniat',
    component:LabaniatComponent
  },
  {
    path:'conserv',
    component:CoservComponent
  },
  {
    path:'poshak',
    component:PoshakComponent
  },
  {
    path:'poshakzanan',
    component:PoshakzananComponent
  },
  {
    path:'poshakmardane',
    component:PoshakmardaneComponent
  },
  {
    path:'poshakdojhtarane',
    component:PoshakdojhtaraneComponent
  },
  {
    path:'poshakpesarane',
    component:PoshakpesaraneComponent
  },
  {
    path:'goshi',
    component:GoshiComponent
  },
  {
    path:'lavazemghangi',
    component:LavazemghangiComponent
  },
  {
    path:'samsong',
    component:SamsongComponent
  },
  {
    path:'iphone',
    component:IphoneComponent
  },
  {
    path:'honor',
    component:HonorComponent
  },
  {
    path:'Xiaomi',
    component:XiaomiComponent
  },
  {
    path:'yaghchal',
    component:YaghchalComponent
  },
  {
    path:'mashinlebas',
    component:MashinlebasComponent
  },
  {
    path:'tv',
    component:TvComponent
  },
  {
    path:'jaro',
    component:JaroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
