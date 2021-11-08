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
  { label: 'Subtitles', value: 'subtitles' }
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