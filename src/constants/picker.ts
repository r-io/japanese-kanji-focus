import { PickerItemData } from '@components/common/picker/PickerItem';

export const filterByType = {
  all: 'All',
  subscriber: 'subscriber',
  premiumRental: 'premium_rental',
  hd: 'hd',
  closedCaptions: 'closed_captions',
  subtitles: 'subtitles',
  rating: {
    e: 'E',
    g: 'G',
    pg: 'PG',
    m: 'M',
    ma15Plus: 'MA15+',
    r: 'R'
  },
  country: {
    afghanistan: 'Afghanistan',
    argentina: 'Argentina',
    australia: 'Australia',
    brazil: 'Brazil',
    cambodia: 'Cambodia',
    canada: 'Canada',
    china: 'China',
    colombia: 'Colombia',
    czechRepublic: 'Czech Republic',
    denmark: 'Denmark',
    egypt: 'Egypt',
    finland: 'Finland',
    france: 'France',
    germany: 'Germany',
    ghana: 'Ghana',
    hong: 'Hong',
    iceland: 'Iceland',
    india: 'India',
    indonesia: 'Indonesia',
    iran: 'Iran',
    ireland: 'Ireland',
    israel: 'Israel',
    italy: 'Italy',
    japan: 'Japan',
    netherlands: 'Netherlands',
    newZealand: 'New Zealand',
    nigeria: 'Nigeria',
    norway: 'Norway',
    paraguay: 'Paraguay',
    peru: 'Peru',
    romania: 'Romania',
    russia: 'Russia',
    senegal: 'Senegal',
    southAfrica: 'South Africa',
    southKorea: 'South Korea',
    sovietUnion: 'Soviet Union',
    spain: 'Spain',
    sweden: 'Sweden',
    switzerland: 'Switzerland',
    taiwan: 'Taiwan',
    tonga: 'Tonga',
    turkey: 'Turkey',
    unitedKingdom: 'United Kingdom',
    unitedStates: 'United States',
    vanuatu: 'Vanuatu'
  }
};

export const FILTER_BY_DATA: PickerItemData[] = [
  { label: 'All', value: 'All' },
  { label: 'Subscriber Films', value: 'subscriber' },
  { label: 'Premium Rental Films', value: 'premium_rental' },
  { label: 'HD Films', value: 'hd' },
  { label: 'Closed Captions', value: 'closed_captions' },
  { label: 'Subtitles', value: 'subtitles' },
  {
    label: 'Rating', value: [
      { label: 'E', value: 'E' },
      { label: 'G', value: 'G' },
      { label: 'PG', value: 'PG' },
      { label: 'M', value: 'M' },
      { label: 'MA15+', value: 'MA15+' },
      { label: 'R', value: 'R' }
    ]
  },
  {
    label: 'Country', value: [
      { label: 'Afghanistan', value: 'Afghanistan' },
      { label: 'Argentina', value: 'Argentina' },
      { label: 'Australia', value: 'Australia' },
      { label: 'Brazil', value: 'Brazil' },
      { label: 'Cambodia', value: 'Cambodia' },
      { label: 'Canada', value: 'Canada' },
      { label: 'China', value: 'China' },
      { label: 'Colombia', value: 'Colombia' },
      { label: 'Czech Republic', value: 'Czech Republic' },
      { label: 'Denmark', value: 'Denmark' },
      { label: 'Egypt', value: 'Egypt' },
      { label: 'Finland', value: 'Finland' },
      { label: 'France', value: 'France' },
      { label: 'Germany', value: 'Germany' },
      { label: 'Ghana', value: 'Ghana' },
      { label: 'Hong Kong', value: 'Hong Kong' },
      { label: 'Iceland', value: 'Iceland' },
      { label: 'India', value: 'India' },
      { label: 'Indonesia', value: 'Indonesia' },
      { label: 'Iran', value: 'Iran' },
      { label: 'Ireland', value: 'Ireland' },
      { label: 'Israel', value: 'Israel' },
      { label: 'Italy', value: 'Italy' },
      { label: 'Japan', value: 'Japan' },
      { label: 'Netherlands', value: 'Netherlands' },
      { label: 'New Zealand', value: 'New Zealand' },
      { label: 'Nigeria', value: 'Nigeria' },
      { label: 'Norway', value: 'Norway' },
      { label: 'Paraguay', value: 'Paraguay' },
      { label: 'Peru', value: 'Peru' },
      { label: 'Romania', value: 'Romania' },
      { label: 'Russia', value: 'Russia' },
      { label: 'Senegal', value: 'Senegal' },
      { label: 'South Africa', value: 'South Africa' },
      { label: 'South Korea', value: 'South Korea' },
      { label: 'Soviet Union', value: 'Soviet Union' },
      { label: 'Spain', value: 'Spain' },
      { label: 'Sweden', value: 'Sweden' },
      { label: 'Switzerland', value: 'Switzerland' },
      { label: 'Taiwan', value: 'Taiwan' },
      { label: 'Tonga', value: 'Tonga' },
      { label: 'Turkey', value: 'Turkey' },
      { label: 'United Kingdom', value: 'United Kingdom' },
      { label: 'United States', value: 'United States' },
      { label: 'Vanuatu', value: 'Vanuatu' }
    ]
  }
];

export const sortByType = {
  recentlyAdded: 'recently_added',
  popular: 'Popular',
  yearReleased: 'year_released',
  alphabetical: 'a_z'
};

export const SORT_BY_DATA: PickerItemData[] = [
  { label: 'Recently Added', value: 'recently_added' },
  { label: 'Popular', value: 'popular' },
  { label: 'Year Released', value: 'year_released' },
  { label: 'A-Z', value: 'a_z' }
];