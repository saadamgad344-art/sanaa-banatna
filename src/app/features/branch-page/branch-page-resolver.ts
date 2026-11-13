import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { Branch } from '../../core/models/branch.model';
import { BranchesService } from '../../core/services/branches';

export const branchPageResolver: ResolveFn<Branch | undefined> = (route) => {
  const slug = route.paramMap.get('slug')!;
  return inject(BranchesService).getBySlug(slug);
};