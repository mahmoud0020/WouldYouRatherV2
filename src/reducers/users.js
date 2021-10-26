import { RECEIVE_USERS } from '../actions/users';
import {ADD_ANSWER_QUESTIONS,ADD_QUESTIONS} from '../actions/questions'
export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
				...state,
				...action.users
            };
		case ADD_QUESTIONS:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id
					])
				}
			};

		case ADD_ANSWER_QUESTIONS:
			const { qid, answer, authedUser } = action.answerInfo;

			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			};
		default:
			return state;
    }
}
