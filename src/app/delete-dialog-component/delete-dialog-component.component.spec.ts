import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogComponentComponent } from './delete-dialog-component.component';

describe('DeleteDialogComponentComponent', () => {
  let component: DeleteDialogComponentComponent;
  let fixture: ComponentFixture<DeleteDialogComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteDialogComponentComponent]
    });
    fixture = TestBed.createComponent(DeleteDialogComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
