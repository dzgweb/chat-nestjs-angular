import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessageComponent } from './chat-message.component';
import { AuthService } from '../../../public/services/auth.service';

describe('ChatMessageComponent', () => {
  let component: ChatMessageComponent;
  let fixture: ComponentFixture<ChatMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatMessageComponent ],
      providers: [
        {
          provide: AuthService,
          useValue: {
            getLoggedInUser: () => ({ id: 1, username: 'testuser', email: 'test@example.com' })
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatMessageComponent);
    component = fixture.componentInstance;
    component.message = { text: 'Test message', user: { id: 1, username: 'testuser', email: 'test@example.com' } };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
