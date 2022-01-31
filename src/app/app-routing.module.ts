import { ErrorComponent } from './components/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DispenseComponent } from './components/dispense/dispense.component';
import { VerifyComponent } from './components/verify/verify.component';

const routes: Routes = [
  { path: 'dispense', component: DispenseComponent},
  { path: 'main', component: MainComponent},
  { path: 'main/:id', component: MainComponent},
  { path: 'verify', component: VerifyComponent},
  { path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
