import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosTodosComponent } from './todos-todos.component';

describe('TodosTodosComponent', () => {
  let component: TodosTodosComponent;
  let fixture: ComponentFixture<TodosTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodosTodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
