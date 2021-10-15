import { KanjiProficiency } from './model/kanjiProficiency';

interface SessionProficiency {
	kanji: KanjiProficiency[];
}

export interface Session {
	proficiency: SessionProficiency;
}

export const initialSessionState: Session = {
	proficiency: {
		kanji: []
	}
};