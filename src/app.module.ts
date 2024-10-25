import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import { TrainingSessionsController } from './training_sessions/training_sessions.controller';
import { TrainingSessionsService } from './training_sessions/training_sessions.service';
import { TrainingSessionsModule } from './training_sessions/training_sessions.module';
import { CheckinController } from './checkin/checkin.controller';
import { CheckinService } from './checkin/checkin.service';
import { CheckinModule } from './checkin/checkin.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, TrainingSessionsModule, CheckinModule, AuthModule],
  controllers: [UsersController, TrainingSessionsController, CheckinController, AuthController],
  providers: [UsersService, TrainingSessionsService, CheckinService, AuthService],
})
export class AppModule {}
