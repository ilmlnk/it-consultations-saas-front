import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkPageComponent } from './network-page.component';

describe('NetworkPageComponent', () => {
  let component: NetworkPageComponent;
  let fixture: ComponentFixture<NetworkPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NetworkPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
