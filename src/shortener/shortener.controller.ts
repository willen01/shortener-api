import { Controller, Post } from '@nestjs/common';
import { ShortenerService } from './shortener.service';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  createUrl() {
    return this.shortenerService.createUrlShortener();
  }
}
