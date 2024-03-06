import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListComponent } from './adminList.component';

describe('ListeComponent', () => {
  let component: AdminListComponent;
  let fixture: ComponentFixture<AdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
