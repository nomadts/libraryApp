import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

// Mock BooksComponent
@Component({
  selector: 'app-books',
  template: '',
})
class MockBooksComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, MockBooksComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as "libraryApp"', () => {
    expect(component.title).toEqual('libraryApp');
  });

  it('should render app-books component', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-books')).not.toBeNull();
  });
});
