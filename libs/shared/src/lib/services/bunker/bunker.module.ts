import { BunkerService } from './services/bunker.service';
import { HttpModule } from '@nestjs/axios';
import { Module } from "@nestjs/common";

@Module({
  imports: [HttpModule],
  providers: [BunkerService],
  exports: [BunkerService]
})
export class BunkerModule {

}
