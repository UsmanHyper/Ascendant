import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomAvailbilityComponent } from './room-availbility.component';

describe('RoomAvailbilityComponent', () => {
  let component: RoomAvailbilityComponent;
  let fixture: ComponentFixture<RoomAvailbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomAvailbilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomAvailbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
