import { ShortScreenshot } from "../entities/ShortScreenshot";
import Tag from "../entities/Tag";
import { ParentPlatform } from "./ParentPlatform";
import Publisher from "./Publisher";
import Developer from "./Developer";

export interface Game {
  id: number;
  name: string;
  slug: string;
  released: string;
  background_image: string;
  background_image_additional: string;
  short_screenshots: ShortScreenshot[];
  parent_platforms: ParentPlatform[];
  rating: number;
  ratings_count: number;
  description_raw: string;
  tags: Tag[];
  developers: Developer[];
  publishers: Publisher[];
}
