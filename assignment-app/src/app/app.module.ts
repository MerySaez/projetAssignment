import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AssignmentsComponent } from './assignment/assignments.component';
import { AssignmentsDetailsComponent } from './assignment/assignments-detail/assignments-detail.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { AddAssignmentComponent } from './assignment/add-assignment/add-assignment.component';
import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './assignment/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';

import { MatTableModule } from '@angular/material/table'  ;
import {MatTabsModule, MatTabGroup} from '@angular/material/tabs';

import { LoginComponent } from './login.component/login.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { AgendaComponent } from './sidebar/agenda/agenda.component';
import { AddAgendaComponent } from './sidebar/agenda/add-agenda/add-agenda.component';
import { TableFilterPipe } from './assignment/table-filter-pipe';


const routes:Routes = [
  {path: '', component: AssignmentsComponent},
  {path: 'home', component: AssignmentsComponent},
  {path: 'add', component: AddAssignmentComponent},
  {path: 'assignment/:id', component: AssignmentsDetailsComponent},
  {
    path: 'assignment/:id/edit',
    component: EditAssignmentComponent,
    //a rajouter si prof ou eleve

    //canActivate: [AuthGuard]
  },
  {path: 'agenda', component: AgendaComponent},
  {path: 'addAgenda', component: AddAgendaComponent},

]
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent, AssignmentsDetailsComponent,
    RenduDirective,
    AddAssignmentComponent,
    EditAssignmentComponent,
    LoginComponent,
    AgendaComponent,
    AddAgendaComponent,TableFilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatInputModule, MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule, MatListModule,
    MatCardModule, MatCheckboxModule, MatSlideToggleModule,
    FormsModule, HttpClientModule,MatToolbarModule, MatSidenavModule,
    RouterModule.forRoot(routes),
    MatTableModule,MatTabsModule,
    MatDialogModule,ReactiveFormsModule,
    MatSelectModule, MatSortModule,  MatPaginatorModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }