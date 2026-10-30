import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { JoinedRoomService } from './joined-room.service';
import { JoinedRoomEntity } from '../../model/joined-room/joined-room.entity';

describe('JoinedRoomService', () => {
  let service: JoinedRoomService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        JoinedRoomService,
        {
          provide: getRepositoryToken(JoinedRoomEntity),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<JoinedRoomService>(JoinedRoomService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
