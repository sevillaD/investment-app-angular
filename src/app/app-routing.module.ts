import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRiskAnalysisComponent } from './creation/add-risk-analysis/add-risk-analysis.component';
import { CompanyComponent } from './creation/company/company.component';
import { TransactionComponent } from './creation/transaction/transaction.component';
import { HomeComponent } from './home/home.component';
import { CompaniesComponent } from './reporting/companies/companies.component';
import { HistoricalTransactionsComponent } from './reporting/historical-transactions/historical-transactions.component';
import { UpdateCompanyComponent } from './updateFeature/update-company/update-company.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'companies', component:CompaniesComponent},
  {path:'historical-transactions', component:HistoricalTransactionsComponent},
  {path:'add-transaction', component:TransactionComponent},
  {path: 'add-company', component:CompanyComponent},
  {path:'add-risk-analysis', component: AddRiskAnalysisComponent},
  {path: 'update-company/:companyId', component:UpdateCompanyComponent},
  {path:'add-transaction', component:TransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
