import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BranchesService } from '../../../core/services/branches';
import { SOCIAL } from '../../../data/social.data';
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
  social = SOCIAL;

get whatsappNumber() {
  return this.branches[0]?.whatsapp ?? '';
}

get whatsappLink() {
  return 'https://wa.me/' + this.whatsappNumber.replace(/\D/g, '');
}
}