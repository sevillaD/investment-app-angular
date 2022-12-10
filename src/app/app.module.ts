import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TransactionComponent } from './creation/transaction/transaction.component';
import { HistoricalTransactionsComponent } from './reporting/historical-transactions/historical-transactions.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './reporting/companies/companies.component'
import {MatMenuModule} from '@angular/material/menu';
import { CompanyComponent } from './creation/company/company.component';
import { AddRiskAnalysisComponent } from './creation/add-risk-analysis/add-risk-analysis.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCompanyComponent } from './updateFeature/update-company/update-company.component';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateTransactionComponent } from './updateFeature/update-transaction/update-transaction.component';
import { RolesComponent } from './reporting/roles/roles.component';
import { UsersComponent } from './reporting/users/users.component';
import { RoleComponent } from './creation/role/role.component';
import { UserComponent } from './creation/user/user.component';
import { UpdateRoleComponent } from './updateFeature/update-role/update-role.component';
import { UpdateUserComponent } from './updateFeature/update-user/update-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    TransactionComponent,
    HistoricalTransactionsComponent,
    HomeComponent,
    CompaniesComponent,
    CompanyComponent,
    AddRiskAnalysisComponent,
    UpdateCompanyComponent,
    UpdateTransactionComponent,
    RolesComponent,
    UsersComponent,
    RoleComponent,
    UserComponent,
    UpdateRoleComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    FontAwesomeModule,
    MatMenuModule,
    HttpClientModule,
    MatDividerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
