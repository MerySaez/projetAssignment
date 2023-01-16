import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { AuthService } from 'src/app/shared/auth.service';
import { User } from 'src/app/user/user.model';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
})
export class AssignmentsDetailsComponent implements OnInit {
  assignmentTransmis!: Assignment | undefined;
  userLogin!: User;
  constructor(
    private assignmentService: AssignmentsService,
    public authService:AuthService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.getAssignment();
  }

  getAssignment() {
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe((assignment) => {
      this.assignmentTransmis = assignment;
    });
  }

  onAssignmentRendu() {
    if (!this.assignmentTransmis) return;

    this.assignmentTransmis.rendu = true;
    this.assignmentService.devoirRendu = this.assignmentTransmis.rendu;

    this.assignmentService
      .updateAssignment(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        this.router.navigate(['/home']);
      });
  }


  onDelete() {
    if (!this.assignmentTransmis) return;
    this.assignmentService
      .deleteAssignement(this.assignmentTransmis)
      .subscribe((message) => {
        console.log(message);
        this.assignmentTransmis = undefined;
        this.router.navigate(['/home']);
      });
  }

  isAdmin():boolean {
    return this.authService.loggedIn;
  }
}