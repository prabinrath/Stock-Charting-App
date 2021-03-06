import { AuthInterceptorService } from './auth-interceptor.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule} from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SignupComponent } from './Components/Common/signup/signup.component';
import { AdminlandingComponent } from './Components/Admin/adminlanding/adminlanding.component';
import { UserlandingComponent } from './Components/User/userlanding/userlanding.component';
import { UploadexcelComponent } from './Components/Admin/uploadexcel/uploadexcel.component';
import { ManageexchangeComponent } from './Components/Admin/manageexchange/manageexchange.component';
import { ManagecompanyComponent } from './Components/Admin/managecompany/managecompany.component';
import { ManageipodetailsComponent } from './Components/Admin/manageipodetails/manageipodetails.component';
import { AdminloginComponent } from './Components/Admin/adminlogin/adminlogin.component';
import { UserloginComponent } from './Components/User/userlogin/userlogin.component';
import { ChartingComponent } from './Components/User/charting/charting.component';
import { ComparepriceComponent } from './Components/User/compareprice/compareprice.component';
import { HomepageComponent } from './Components/Common/homepage/homepage.component';

import { AccountService } from "./Services/AccountService/account.service";
import { CompanyService } from "./Services/CompanyService/company.service";
import { SectorService } from "./Services/SectorService/sector.service";
import { StockExchangeService } from "./Services/StockExchangeService/stock-exchange.service";
import { UploadExcelService } from "./Services/UploadExcelService/upload-excel.service";
import { IpodetailsComponent } from './Components/User/ipodetails/ipodetails.component';
import { ManagesectorComponent } from './Components/Admin/managesector/managesector.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    AdminlandingComponent,
    UserlandingComponent,
    UploadexcelComponent,
    ManageexchangeComponent,
    ManagecompanyComponent,
    ManageipodetailsComponent,
    AdminloginComponent,
    UserloginComponent,
    ChartingComponent,
    ComparepriceComponent,
    HomepageComponent,
    IpodetailsComponent,
    ManagesectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AccountService,CompanyService,SectorService,StockExchangeService,UploadExcelService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
