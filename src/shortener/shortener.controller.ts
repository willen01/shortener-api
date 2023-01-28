import { Controller, Post } from '@nestjs/common';
import { ShortenerService } from './shortener.service';
import { Body } from '@nestjs/common';
import { Get, Param, Res } from '@nestjs/common/decorators';
import { ShortenerDto } from './dto/shortenerDTO';

@Controller('/')
export class ShortenerController {
  constructor(private readonly shortenerService: ShortenerService) {}

  @Post()
  generateUrlHash(@Body() url: ShortenerDto) {
    return this.shortenerService.generateUrlHash(url);
  }

  @Get('/links')
  async listUrls() {
    return await this.shortenerService.listUrls();
  }

  @Get('/:hash')
  async redirectUrl(@Res() res, @Param() params) {
    const findHashOfUrl = await this.shortenerService.redirectUrl(params.hash);
    res.redirect(findHashOfUrl);
  }
}
