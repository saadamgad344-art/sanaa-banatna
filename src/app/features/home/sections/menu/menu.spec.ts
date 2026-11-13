import { Component, signal } from '@angular/core';

interface Product {
  name: string;
  category: string;
  description: string;
  price: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  categories = ['الكل', 'حلويات', 'شوكولاتة', 'معجنات', 'بوكسات', 'ضيافة'];
  activeCategory = signal('الكل');

  products: Product[] = [
    { name: 'كنافة بالقشطة', category: 'حلويات', description: 'عجينة كنافة مقرمشة محشوة بالقشطة الطازجة.', price: '45 ر.س' },
    { name: 'ترافل بالتمر السعودي', category: 'شوكولاتة', description: 'شوكولاتة داكنة محشوة بعجينة التمر والمكسرات.', price: '60 ر.س' },
    { name: 'معمول بالفستق', category: 'معجنات', description: 'عجينة هشّة محشوة بالفستق الحلبي.', price: '50 ر.س' },
    { name: 'بوكس الضيافة الملكي', category: 'بوكسات', description: 'تشكيلة مختارة من أفضل الحلويات.', price: '180 ر.س' },
    { name: 'طقم ضيافة القهوة', category: 'ضيافة', description: 'تمر مُحشى وحلويات صغيرة مع القهوة العربية.', price: '75 ر.س' },
    { name: 'أم علي بالمكسرات', category: 'حلويات', description: 'حلى دافئ بالحليب والقشطة ومكسرات محمصة.', price: '38 ر.س' }
  ];

  get filteredProducts() {
    if (this.activeCategory() === 'الكل') return this.products;
    return this.products.filter(p => p.category === this.activeCategory());
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}