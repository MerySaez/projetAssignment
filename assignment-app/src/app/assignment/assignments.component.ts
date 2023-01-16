import { Component, OnInit, ViewChild } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';
import {MatSort, Sort} from '@angular/material/sort';
import { AuthService } from 'src/app/shared/auth.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { first } from 'rxjs';
import { TableFilterPipe } from './table-filter-pipe';
import * as _ from 'lodash';
import { registerLocaleData } from '@angular/common';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css'],
})
export class AssignmentsComponent implements OnInit {
  titre = 'Mon application sur les assignments';
  displayedColumns: string[] = ['name','dateDeRendu','auteur','matiere', 'rendu'];
  assignments!: Assignment[];
  assignmentSelectionne!: Assignment;
  //sortedData: Assignment[];
  //sortedData = new MatTableDataSource<Assignment>
  dataSource: MatTableDataSource<Assignment>
  apiResponse:any = [];
  assignmentTransmis!: Assignment | undefined;
  selected: boolean;
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(public assignmentsService: AssignmentsService, public authService:AuthService,) { 
  }
  
  ngOnInit(): void {
    //this.assignmentsService
    ///  .getAssignments()
    //  .subscribe((tableauDesAssignmentsObservable) => {
    ////    this.assignments = tableauDesAssignmentsObservable;
    //    this.sortedData = tableauDesAssignmentsObservable.slice();  
         
    //  });
      this.assignmentsService.getAssignments()
      .pipe(first())
      .subscribe(res => {
        this.apiResponse = res;
        this.dataSource = new MatTableDataSource<Assignment>(res);
        this.maMethode();
        this.onChange(this.selected);
      })
    
  }
 /* ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }*/

  onChange($event:any) {
    //let filteredData = _.filter(this.apiResponse,(item) => {
    //  return item.rendu.toLowerCase() == $event.value.toLowerCase();
   // })
    //this.dataSource = new MatTableDataSource(filteredData);

    if($event.value = 'true') {

    this.assignments = this.assignments.filter(e => e.rendu == true);
    //this.dataSource = new MatTableDataSource(this.assignments);

    }

  }


  maMethode(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

  onAssignmentClicke(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }

  renduSelected() {
    return true
  }

  /*sortData(sort: Sort) {
    const data = this.assignments.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.nom, b.nom, isAsc);
        case 'dateDeRendu':
          return compare(a.dateDeRendu, b.dateDeRendu, isAsc);
        case 'auteur':
          return compare(a.auteur, b.auteur, isAsc);
        case 'matiere':
          return compare(a.matiere, b.matiere, isAsc);
        default:
          return 0;
      }
    });
    
  }*/

  onSubmitAdd1000rows() {
    var type = ['Tp', 'Devoir', 'Td','Projet']; 
    var numero = ['1', '2', '3','4']; 
    var auteur = ['Anaïs Martinez', 'Mery Saez', 'Emilie Dupont','Julien Moreau','Antoine Coq','Mathile Dain','Julie Cordi',"Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler"]; 
    var matiere=[ 'Mathématique','Angular','Java','Management']

    for(var i=0; i<1000 ; i++){
      const newAssignment = new Assignment();
      newAssignment.nom =  type[Math.floor(Math.random() * type.length)]+' '+numero[Math.floor(Math.random() * numero.length)];
      newAssignment.dateDeRendu = randomDate(new Date(2023, 1, 1), new Date(2023, 8, 31));
      newAssignment.rendu = false;
      newAssignment.id = Math.floor(Math.random()*100000000);
      newAssignment.auteur = auteur[Math.floor(Math.random() * auteur.length)];
      newAssignment.matiere = matiere[Math.floor(Math.random() * matiere.length)];


    //this.assignments.push(newAssignment);
    //this.nouvelAssignment.emit(newAssignment);
    this.assignmentsService.addAssignment(newAssignment)
      .subscribe(reponse => {
        console.log(reponse.message);
      });
      
    }


    
  }

  
}
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function compare(a: number | string | Date , b: number | string | Date , isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}






 