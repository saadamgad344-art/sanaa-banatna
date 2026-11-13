import { Component, OnInit, inject, ChangeDetectorRef, signal, HostListener } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  private sanitizer = inject(DomSanitizer);
  private cdr = inject(ChangeDetectorRef);

  branch!: Branch;
  otherBranches: Branch[] = [];
  mapEmbedUrl!: SafeResourceUrl;
  selectedImage = signal<string | null>(null);

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.branch = data['branch'];
      this.setupBranch();
      this.cdr.markForCheck();
    });
  }

  openImage(src: string) {
    this.selectedImage.set(src);
  }

  @HostListener('document:keydown.escape')
  closeImage() {
    this.selectedImage.set(null);
  }

  private setupBranch() {
    this.selectedImage.set(null);

    this.otherBranches = this.branchesService
      .getAll()
      .filter(b => b.slug !== this.branch.slug);

    const { lat, lng } = this.branch.coordinates;
    const rawUrl = `https://www.google.com/maps?q=${lat},${lng}&hl=ar&z=16&output=embed`;
    this.mapEmbedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(rawUrl);

    this.seo.update(this.branch.seo);
    this.seo.injectJsonLd(this.buildJsonLd());

    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0 });
    }
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