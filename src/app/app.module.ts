import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { HomeComponent } from './home/home.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { FormsModule } from '@angular/forms';
import { SupermarketComponent } from './supermarket/supermarket.component';
import { TanagolatComponent } from './tanagolat/tanagolat.component';
import { NoshidniComponent } from './noshidni/noshidni.component';
import { LabaniatComponent } from './labaniat/labaniat.component';
import { CoservComponent } from './coserv/coserv.component';
import { PoshakComponent } from './poshak/poshak.component';
import { PoshakzananComponent } from './poshakzanan/poshakzanan.component';
import { PoshakmardaneComponent } from './poshakmardane/poshakmardane.component';
import { PoshakdojhtaraneComponent } from './poshakdojhtarane/poshakdojhtarane.component';
import { PoshakpesaraneComponent } from './poshakpesarane/poshakpesarane.component';
import { GoshiComponent } from './goshi/goshi.component';
import { LavazemghangiComponent } from './lavazemghangi/lavazemghangi.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import {HttpClientModule} from '@angular/common/http';
import { SamsongComponent } from './samsong/samsong.component';
import { IphoneComponent } from './iphone/iphone.component';
import { HonorComponent } from './honor/honor.component';
import { XiaomiComponent } from './xiaomi/xiaomi.component';
import { YaghchalComponent } from './yaghchal/yaghchal.component';
import { MashinlebasComponent } from './mashinlebas/mashinlebas.component';
import { TvComponent } from './tv/tv.component';
import { JaroComponent } from './jaro/jaro.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    HomeComponent,
    ChangePasswordComponent,
    SupermarketComponent,
    TanagolatComponent,
    NoshidniComponent,
    LabaniatComponent,
    CoservComponent,
    PoshakComponent,
    PoshakzananComponent,
    PoshakmardaneComponent,
    PoshakdojhtaraneComponent,
    PoshakpesaraneComponent,
    GoshiComponent,
    LavazemghangiComponent,
    SamsongComponent,
    IphoneComponent,
    HonorComponent,
    XiaomiComponent,
    YaghchalComponent,
    MashinlebasComponent,
    TvComponent,
    JaroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
