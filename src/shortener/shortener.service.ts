import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shortener, ShortenerDocument } from './schemas/shortener.schema';
import { Injectable } from '@nestjs/common';
import * as crypto from 'crypto';
import { ShortenerDto } from './dto/shortenerDTO';
import { format } from 'path';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectModel('url')
    private shortenerModel: Model<ShortenerDocument>,
  ) {}

  async generateUrlHash(longUrl: ShortenerDto): Promise<void> {
    const randomNumber = Math.random().toString(36).substring(2, 12);
    const hash = crypto
      .createHash('sha256')
      .update(randomNumber)
      .digest('base64')
      .substring(0, 10)
      .replace(/\//g, '');

    const create = new this.shortenerModel({
      url: longUrl.url,
      hash,
    });
    await create.save();
  }

  async redirectUrl(hash: string): Promise<string> {
    const findHash = await this.shortenerModel.findOne({ hash });
    findHash.clicks++;
    await findHash.save();
    const url = findHash.url;
    return url;
  }

  async listUrls(): Promise<Shortener[]> {
    const allLinks = await this.shortenerModel.find({}, 'hash url clicks');
    return allLinks;
  }
}
