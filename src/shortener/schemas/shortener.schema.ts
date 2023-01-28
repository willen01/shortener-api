import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type ShortenerDocument = HydratedDocument<Shortener>;

@Schema()
export class Shortener {
  @Prop({ required: true })
  url: string;

  @Prop({ required: true })
  hash: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const ShortenerSchema = SchemaFactory.createForClass(Shortener);
