interface BaseUserData {
  iat: number;
  exp: number;
}

interface UserDataForPositiveUser extends BaseUserData {
  userLogin: true;
  user: {
    userId: string;
    email: string;
    userFirstName: string;
    userLastName: string;
    userLibraries: string[];
    maApproval: {
      isApproved?: boolean;
      approvedAt?: Date;
    };
    rApproval: {
      isApproved?: boolean;
      approvedAt?: Date;
    };
    ackCountry: {
      isApproved?: boolean;
      approvedAt?: Date;
    };
    isSubscribe: boolean;
    isThirdPartyLogin: boolean;
  };
}

interface UserDataForNegativeUser extends BaseUserData {
  userLogin: false;
  user: {};
}

interface UserDataForPositiveLibrary extends BaseUserData {
  libraryLogin: true;
  library: {
    libraryId: string;
    name: string;
    barcode: string;
    librarySubDomain: string;
    isMAExcluded: boolean;
    isAccountNeeded: boolean;
  };
}

interface UserDataForNegativeLibrary extends BaseUserData {
  libraryLogin: false;
  library: {};
}

type UserDataForUserOnly = UserDataForPositiveUser & UserDataForNegativeLibrary;
type UserDataForLibraryOnly = UserDataForNegativeUser & UserDataForPositiveLibrary;
type UserDataForUserAndLibrary = UserDataForPositiveUser & UserDataForPositiveLibrary;

export type UserData = UserDataForUserOnly | UserDataForLibraryOnly | UserDataForUserAndLibrary;

interface BaseUser {
  _id: string;
  consumer: {};
  isEmailConfirm: boolean;
  isWelcomeEmailSent: false;
  firstName: string;
  lastName: string;
  email: string;
  email_lower: string;
  provider: string;
  createdAt: Date;
  libraryUser: [];
  transactions: [];
  playLists: [];
}

export interface GoogleUser extends BaseUser {
  googleProvider: {
    id: string;
    token: string;
  };
  provider: 'google';
}

export interface FacebookUser extends BaseUser {
  provider: 'facebook';
}

export interface EmailUser extends BaseUser {
  provider: '';
}