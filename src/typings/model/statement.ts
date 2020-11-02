interface StatementContentText {
  type: 'title' | 'subtitle' | 'text';
  text: string;
}

interface StatementContentPoint {
  type: 'point';
  text: string;
}

interface StatementContentSpace {
  type: 'space';
}

interface StatementContentLinkEmail {
  type: 'link_email';
  email: string;
  text: string;
}

interface StatementContentLinkPhone {
  type: 'link_phone';
  phone: string;
  text: string;
}

interface StatementContentGroupText {
  type: 'group_text';
  content: StatementContentText[];
}

export type StatementKey = 'ios_help' | 'android_help' | 'privacy_policy' | 'terms_and_conditions';

export type StatementContent = StatementContentText | StatementContentPoint | StatementContentSpace |
  StatementContentLinkEmail | StatementContentLinkPhone | StatementContentGroupText;

export interface Statement {
  _id: string;
  key: StatementKey;
  content: StatementContent[];
}