import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of } from 'rxjs';

import { ChatService } from './chat.service';
import { CustomSocket } from '../../sockets/custom-socket';

describe('ChatService', () => {
  let service: ChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: CustomSocket, useValue: { emit: () => {}, fromEvent: () => of({}) } },
        { provide: MatSnackBar, useValue: { open: () => {} } }
      ]
    });
    service = TestBed.inject(ChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
