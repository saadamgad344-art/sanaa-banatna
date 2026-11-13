import { Component, signal } from '@angular/core';

interface Product {
  name: string;
  category: string;
  description?: string;
  price: string;
  image: string;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss'
})
export class Menu {
  products: Product[] = [
    { name: 'شرقيات أصابع الكاجو', category: 'بوكسات', price: '63.25', image: '/products/a1.jpeg' },
    { name: 'تشيز كيك ميكس فواكه', category: 'حلويات', price: '65.00', image: '/products/a2.jpeg' },
    { name: 'سنع شرائح الشوكولا مع ثلاث أنواع مكسرات مختلفة', category: 'شوكولاتة', price: '62.10', image: '/products/a3.jpeg' },
    { name: 'سنع كلاسيك مكسرات محشي صوص المكسرات مع حبات المكسرات بثلاث حشوات مختلفة', category: 'شوكولاتة', price: '59.00', image: '/products/a4.jpeg' },
    { name: 'كانول بحشوتين مختلفتين', category: 'شوكولاتة', price: '89.00', image: '/products/a5.jpeg' },
    { name: 'مايل ديو ميكس مربعات الكارميل وأصابع الكرانش', category: 'شوكولاتة', price: '69.00', image: '/products/a6.jpeg' },
    { name: 'تشيز كيك أوريو', category: 'حلويات', price: '65.00', image: '/products/a7.jpeg' },
    { name: 'هانكي لوش بحشوات كارميل وفيوتين وبرالين', category: 'شوكولاتة', price: '106.27', image: '/products/a8.jpeg' },
    { name: 'ميونخ كلاسيك بأربع حشوات مختلفة', category: 'شوكولاتة', price: '118.99', image: '/products/a9.jpeg' },
    { name: 'بيتيفور شرقيات المميز بحشوتين الشوكولا والفانيليا فستق', category: 'بوكسات', price: '51.75', image: '/products/a10.jpeg' },
    { name: 'ميونيخ ستيكس كريب دولشي مع أصابع الفيوتين', category: 'شوكولاتة', price: '98.99', image: '/products/a11.jpeg' },
    { name: 'ميونخ سيمفوني البوكس دورين من الشوكولا البلجيكي والحشوات المختلفة', category: 'شوكولاتة', price: '118.99', image: '/products/a12.jpeg' },
    { name: 'معمول التمر بالحليب المحموس من شرقيات', category: 'بوكسات', price: '44.97', image: '/products/a13.jpeg' },
    { name: 'ميونخ كلاسيك بحشواته الأربع', category: 'شوكولاتة', price: '118.99', image: '/products/a14.jpeg' },
    { name: 'كيكة الروشيه من سنع بناتنا', category: 'حلويات', price: '65.00', image: '/products/a15.jpeg' },
    { name: 'كيكة العسل من سنع بناتنا', category: 'حلويات', price: '65.00', image: '/products/a16.jpeg' },
    { name: 'هانكي تويست', category: 'شوكولاتة', price: '106.27', image: '/products/a17.jpeg' },
    { name: 'ميني تشيز كيك مانجو من سنع بناتنا', category: 'حلويات', price: '46.00', image: '/products/a18.jpeg' },
    { name: 'تشيز كيك مانجو من سنع بناتنا', category: 'حلويات', price: '65.00', image: '/products/a19.jpeg' },
    { name: 'مايل إليجانس بحشوة الكيندر', category: 'شوكولاتة', price: '53.06', image: '/products/a20.jpeg' },
    { name: 'بيكانو: طبقة البسكويت مع طبقة التشيز وطبقة الكارميل وقطع البيكان المكرمل', category: 'حلويات', price: '69.00', image: '/products/a21.jpeg' }
  ];

  // الفئات بتتجمع تلقائي من المنتجات، فالفئة الفاضية مش هتظهر
  categories = ['الكل', ...new Set(this.products.map(p => p.category))];
  activeCategory = signal('الكل');

  get filteredProducts() {
    if (this.activeCategory() === 'الكل') return this.products;
    return this.products.filter(p => p.category === this.activeCategory());
  }

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}