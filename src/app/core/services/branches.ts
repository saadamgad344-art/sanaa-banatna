import { Injectable } from '@angular/core';
import { Branch } from '../models/branch.model';
import { BRANCHES } from '../../data/branches.data';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {
  getAll(): Branch[] {
    return BRANCHES;
  }

  getBySlug(slug: string): Branch | undefined {
    return BRANCHES.find(b => b.slug === slug);
  }
}