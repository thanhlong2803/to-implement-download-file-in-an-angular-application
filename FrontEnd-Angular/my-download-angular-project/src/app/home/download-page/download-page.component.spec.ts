import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownLoadPageComponent } from './download-page.component';

describe('HomeComponent', () => {
  let component: DownLoadPageComponent;
  let fixture: ComponentFixture<DownLoadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownLoadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownLoadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
