import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ProfilingModule } from './profiling/profiling.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'cm-nestjs-base'


@Module({
  imports: [UserModule, ProfilingModule, PassportModule.register({ defaultStrategy: 'jwt' })],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
