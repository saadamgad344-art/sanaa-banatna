import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class Seo {
  private titleService = inject(Title);
  private meta = inject(Meta);

  update(seo: { title: string; description: string }) {
    this.titleService.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
  }

  injectJsonLd(data: object) {
    if (typeof document === 'undefined') return;
    const existing = document.getElementById('branch-jsonld');
    if (existing) existing.remove();

    const script = document.createElement('script');
    script.id = 'branch-jsonld';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);
  }
}