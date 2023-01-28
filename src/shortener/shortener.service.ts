import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shortener, ShortenerDocument } from './schemas/shortener.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ShortenerService {
  constructor(
    @InjectModel('url')
    private shortenerModel: Model<ShortenerDocument>,
  ) {}

  async createUrlShortener(url: string): Promise<Shortener> {
    const create = new this.shortenerModel({
      url,
      hash: 'cadc868',
    });
    return create.save();
  }
}
