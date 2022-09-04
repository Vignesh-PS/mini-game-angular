import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalToastrComponent } from './global-toastr.component';

describe('GlobalToastrComponent', () => {
  let component: GlobalToastrComponent;
  let fixture: ComponentFixture<GlobalToastrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalToastrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalToastrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
