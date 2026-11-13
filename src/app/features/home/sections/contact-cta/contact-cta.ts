import { Component } from '@angular/core';
import { BranchesService } from '../../../../core/services/branches';
import { SOCIAL } from '../../../../data/social.data';

@Component({
  selector: 'app-contact-cta',
  standalone: true,
  imports: [],
  templateUrl: './contact-cta.html',
  styleUrl: './contact-cta.scss'
})
export class ContactCta {
  mainWhatsapp: string;

  constructor(private branchesService: BranchesService) {
    const branches = this.branchesService.getAll();
    const main = branches.find(b => b.isMain) ?? branches[0];
    this.mainWhatsapp = main.whatsapp;
    
  }
 

social = SOCIAL;
  
}
