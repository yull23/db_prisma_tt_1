import { Body, Controller, Get, Ip, Post, Req } from '@nestjs/common'
import { UserService } from './user.service'
import { User } from '@prisma/client'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() data: User) {
    return this.userService.createUser(data)
  }

  @Get()
  async findAll() {
    return await this.userService.findAll()
  }

  @Post('test')
  testData(@Body() data: User) {
    console.log(data)
    return this.userService.createUser(data)
  }

  @Get('myEndpoint')
  myEndpointFunc(@Req() request) {
    const ipAddress =
      request.headers['x-forwarded-for'] || request.connection.remoteAddress
    return ipAddress
  }
}
