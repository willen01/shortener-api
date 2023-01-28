import { Module } from '@nestjs/common';
import { ShortenerController } from './shortener.controller';
// import { ShortenerService } from './shortener.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ShortenerSchema } from './schemas/shortener.schema';
import { ShortenerService } from './shortener.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'url', schema: ShortenerSchema }]),
  ],
  controllers: [ShortenerController],
  providers: [ShortenerService],
})
export class ShortenerModule {}
