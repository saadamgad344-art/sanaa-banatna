import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BranchCard } from './branch-card';

describe('BranchCard', () => {
  let component: BranchCard;
  let fixture: ComponentFixture<BranchCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BranchCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BranchCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
