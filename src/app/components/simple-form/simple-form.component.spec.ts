import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleFormComponent } from './simple-form.component';
import { AppModule } from '../../app.module';
import { APP_BASE_HREF } from '@angular/common';

describe('SimpleFormComponent', () => {
  let component: SimpleFormComponent;
  let fixture: ComponentFixture<SimpleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [AppModule],
      providers: [{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
