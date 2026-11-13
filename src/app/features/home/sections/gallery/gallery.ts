import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class Gallery {
  private readonly ext = 'jpeg';
  images = Array.from({ length: 22 }, (_, i) => `/m${i + 1}.${this.ext}`);

  visibleCount = signal(8);
  visibleImages = computed(() => this.images.slice(0, this.visibleCount()));
  hasMore = computed(() => this.visibleCount() < this.images.length);

  showMore() {
    this.visibleCount.set(this.images.length);
  }
}