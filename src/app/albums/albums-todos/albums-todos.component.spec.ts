import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsTodosComponent } from './albums-todos.component';

describe('AlbumsTodosComponent', () => {
  let component: AlbumsTodosComponent;
  let fixture: ComponentFixture<AlbumsTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumsTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumsTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
