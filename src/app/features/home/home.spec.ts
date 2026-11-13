import { Component } from '@angular/core';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { Menu } from './sections/menu/menu';
import { WhyUs } from './sections/why-us/why-us';
import { BranchesPreview } from './sections/branches-preview/branches-preview';
import { Gallery } from './sections/gallery/gallery';
import { ContactCta } from './sections/contact-cta/contact-cta';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Hero, About, Menu, WhyUs, BranchesPreview, Gallery, ContactCta],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {}