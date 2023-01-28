import { Controller, Post } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { Body } from '@nestjs/common';

@Controller('shortener')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  createUrl(@Body() body: any) {
    const { url } = body;
    return this.shortenerService.createUrlShortener(url);
  }
}
