import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksAddComponent } from './book-add.component';

describe('BooksAddComponent', () => {
  let component: BooksAddComponent;
  let fixture: ComponentFixture<BooksAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
