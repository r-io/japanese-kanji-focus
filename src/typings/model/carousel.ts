import { Film } from '@typings/model/film';
import { FilmType } from '@typings/subjects';

interface BaseSliderCarousel {
  _id: string;
  filmIds: Film[];
  carouselType: 'SLIDER' | 'CAROUSEL' | 'SPECIAL';
  createdAt: number;
  isActive: boolean;
  isAutomatic: boolean;
  display_name: string;
  link: string;
  priority: number;
}

export interface Slider extends BaseSliderCarousel {
  carouselType: 'SLIDER';
}

export interface SpecialCarousel extends BaseSliderCarousel {
  carouselType: 'SPECIAL';
  _id: 'FAVOURITE' | 'CONTINUE_WATCHING' | 'RECOMMENDED_FOR_YOU';
}

interface NormalCarousel extends BaseSliderCarousel {
  carouselType: 'CAROUSEL';
  filmType: FilmType;
  subjects?: string;
  categories?: string;
}

export type Carousel = NormalCarousel | SpecialCarousel;