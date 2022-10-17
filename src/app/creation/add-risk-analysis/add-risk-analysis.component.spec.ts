import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRiskAnalysisComponent } from './add-risk-analysis.component';

describe('AddRiskAnalysisComponent', () => {
  let component: AddRiskAnalysisComponent;
  let fixture: ComponentFixture<AddRiskAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRiskAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRiskAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
