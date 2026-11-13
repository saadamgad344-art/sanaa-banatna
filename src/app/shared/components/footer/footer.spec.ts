import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BranchesService } from '../../../core/services/branches';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  branches;

  constructor(private branchesService: BranchesService) {
    this.branches = this.branchesService.getAll();
  }
}