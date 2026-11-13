import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Branch } from '../../core/models/branch.model';
import { Seo } from '../../core/services/seo';
import { BranchesService } from '../../core/services/branches';

@Component({
  selector: 'app-branch-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './branch-page.html',
  styleUrl: './branch-page.scss'
})
export class BranchPage implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(Seo);
  private branchesService = inject(BranchesService);

  branch!: Branch;
  otherBranches: Branch[] = [];

  ngOnInit() {
    this.branch = this.route.snapshot.data['branch'];
    this.otherBranches = this.branchesService
      .getAll()
      .filter(b => b.slug !== this.branch.slug);

    this.seo.update(this.branch.seo);
    this.seo.injectJsonLd(this.buildJsonLd());
  }

  private buildJsonLd() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Bakery',
      name: `سنع بناتنا - ${this.branch.name}`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: this.branch.address,
        addressLocality: this.branch.city,
        addressCountry: 'SA'
      },
      telephone: this.branch.phone,
      geo: {
        '@type': 'GeoCoordinates',
        latitude: this.branch.coordinates.lat,
        longitude: this.branch.coordinates.lng
      }
    };
  }
}