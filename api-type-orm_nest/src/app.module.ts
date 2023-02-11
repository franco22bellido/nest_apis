import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './users/user.entity';
import { Profile } from './users/profile.entity';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host : 'localhost',
      port: 3306,
      username: 'root',
      password: 'Ironman312345aAA',
      database: 'nestdb',
      entities: [User, Profile],
      synchronize: true
    }),
    UsersModule,
    PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
