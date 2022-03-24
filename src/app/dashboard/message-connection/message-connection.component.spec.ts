import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageConnectionComponent } from './message-connection.component';

describe('MessageConnectionComponent', () => {
  let component: MessageConnectionComponent;
  let fixture: ComponentFixture<MessageConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageConnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
