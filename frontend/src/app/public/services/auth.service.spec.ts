import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JwtHelperService } from '@auth0/angular-jwt';

import { AuthService } from './auth.service';
import { CustomSocket } from '../../private/sockets/custom-socket';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: MatSnackBar, useValue: { open: () => {} } },
        { provide: JwtHelperService, useValue: { decodeToken: () => ({}) } },
        { provide: CustomSocket, useValue: { reconnect: () => {}, disconnect: () => {} } }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
