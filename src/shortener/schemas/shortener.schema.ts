import { HydratedDocument } from 'mongoose';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';

export type ShortenerDocument = HydratedDocument<Shortener>;

@Schema()
export class Shortener {
  @Prop({ required: true })
  url: string;

  @Prop()
  hash: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: 0 })
  clicks: number;
}

export const ShortenerSchema = SchemaFactory.createForClass(Shortener);
