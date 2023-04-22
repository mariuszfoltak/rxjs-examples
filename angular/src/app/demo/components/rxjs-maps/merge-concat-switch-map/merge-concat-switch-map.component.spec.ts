import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeConcatSwitchMapComponent } from './merge-concat-switch-map.component';

describe('MergeConcatSwitchMapComponent', () => {
  let component: MergeConcatSwitchMapComponent;
  let fixture: ComponentFixture<MergeConcatSwitchMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeConcatSwitchMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeConcatSwitchMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
