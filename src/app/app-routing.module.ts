import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRiskAnalysisComponent } from './creation/add-risk-analysis/add-risk-analysis.component';
import { CompanyComponent } from './creation/company/company.component';
import { RoleComponent } from './creation/role/role.component';
import { TransactionComponent } from './creation/transaction/transaction.component';
import { UserComponent } from './creation/user/user.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './reporting/companies/companies.component';
import { HistoricalTransactionsComponent } from './reporting/historical-transactions/historical-transactions.component';
import { RolesComponent } from './reporting/roles/roles.component';
import { UsersComponent } from './reporting/users/users.component';
import { UpdateCompanyComponent } from './updateFeature/update-company/update-company.component';
import { UpdateTransactionComponent } from './updateFeature/update-transaction/update-transaction.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'companies', component:CompaniesComponent},
  {path:'historical-transactions', component:HistoricalTransactionsComponent},
  {path: 'roles', component:RolesComponent},
  {path: 'users', component:UsersComponent},

  {path:'add-transaction', component:TransactionComponent},
  {path: 'add-company', component:CompanyComponent},
  {path:'add-risk-analysis', component: AddRiskAnalysisComponent},
  {path: 'add-role', component:RoleComponent},
  {path:'add-user', component:UserComponent},

  {path: 'update-company/:companyId', component:UpdateCompanyComponent},
  {path:'update-transaction', component:UpdateTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
