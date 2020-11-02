import { filterByType, sortByType } from '@constants/picker';
import routes from '@constants/routes';

interface SessionAuth {
	parentRoute: string;
}

interface SessionRefresh {
	[key: string]: () => void;
}

interface SessionFilterSort {
	filterBy: string;
	sortBy: string;
}

interface SessionRating {
	lastRatingPopup: Date | undefined;
	isRated: boolean;
}

interface SessionConsent {
	ratingMA15Plus: boolean;
	ratingR: boolean;
	acknowledgementToCountry: boolean;
}

export interface Session {
	auth: SessionAuth;
	refresh: SessionRefresh;
	filterSort: SessionFilterSort;
	rating: SessionRating;
	consent: SessionConsent;
}

export const initialSessionState: Session = {
	auth: {
		parentRoute: routes.Landing,
	},
	refresh: {},
	filterSort: {
		filterBy: filterByType.all,
		sortBy: sortByType.recentlyAdded
	},
	rating: {
		lastRatingPopup: undefined,
		isRated: false
	},
	consent: {
		ratingMA15Plus: false,
		ratingR: false,
		acknowledgementToCountry: false
	}
};