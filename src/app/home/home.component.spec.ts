import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { HomeComponent } from './home.component';
import { UsersService } from '../services/users/users.service';

class UserServiceStub {
  all() { };
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: UsersService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [UsersService, { provide: UsersService, useClass: UserServiceStub }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.get(UsersService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call all()', () => {
    spyOn(service, 'all').and.returnValue({ subscribe: () => { } });
    component.ngOnInit();
    expect(service.all).toHaveBeenCalled();
  })
});
