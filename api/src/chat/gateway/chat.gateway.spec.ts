import { Test, TestingModule } from '@nestjs/testing';
import { ChatGateway } from './chat.gateway';
import { AuthService } from '../../auth/service/auth.service';
import { UserService } from '../../user/service/user.service';
import { RoomService } from '../services/room-service/room.service';
import { ConnectedUserService } from '../services/connected-user/connected-user.service';
import { JoinedRoomService } from '../services/joined-room/joined-room.service';
import { MessageService } from '../services/message/message.service';

describe('ChatGateway', () => {
  let gateway: ChatGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ChatGateway,
        { provide: AuthService, useValue: {} },
        { provide: UserService, useValue: {} },
        { provide: RoomService, useValue: {} },
        { provide: ConnectedUserService, useValue: {} },
        { provide: JoinedRoomService, useValue: {} },
        { provide: MessageService, useValue: {} },
      ],
    }).compile();

    gateway = module.get<ChatGateway>(ChatGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
