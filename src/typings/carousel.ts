import { Carousel, Slider } from './model/carousel';
import { Film } from './model/film';

export interface GetSliderCarouselsParam {
    page: string;
    isMobile: true;
}

export interface GetSliderCarouselsResponse {
    result: {
        slider: Slider;
        carousels: Carousel[];
    };
}

export interface GetRecommendationCarouselResponse {
    result: Film[];
}