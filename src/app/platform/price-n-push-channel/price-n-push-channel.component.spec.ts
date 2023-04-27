import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceNPushChannelComponent } from './price-n-push-channel.component';

describe('PriceNPushChannelComponent', () => {
  let component: PriceNPushChannelComponent;
  let fixture: ComponentFixture<PriceNPushChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceNPushChannelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceNPushChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
