import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BranchesService } from '../../../../core/services/branches';

@Component({
  selector: 'app-branches-preview',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './branches-preview.html',
  styleUrl: './branches-preview.scss'
})
export class BranchesPreview {
  branches;

  constructor(private branchesService: BranchesService) {
    this.branches = this.branchesService.getAll();
  }
}