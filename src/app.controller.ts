import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user.service';
import { User } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly userService: UserService,) {}

  @Get()
  async getHello(): Promise<User[]> {
    return this.userService.users({});
  }
}
