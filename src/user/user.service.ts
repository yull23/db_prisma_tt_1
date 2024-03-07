import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: User) {
    try {
      return await this.prisma.user.create({ data })
    } catch (error) {
      console.error(error)
      // Manejar el error según sea necesario
      throw new Error('Error al crear un usuario.')
    }
  }

  async findAll(): Promise<User[]> {
    return await this.prisma.user.findMany()
  }

}
