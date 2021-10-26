import { saveQuestion, saveQuestionAnswer } from '../utils/api';
export const RECEIVE_QUESTIONS ='RECEIVE_QUESTIONS';
export const ADD_QUESTIONS ='ADD_QUESTIONS';
export const ADD_ANSWER_QUESTIONS ='ADD_ANSWER_QUESTIONS';

export function showQuestions(Questions){
    return {
        type:RECEIVE_QUESTIONS,
        Questions
    };
}

export function addQuestion(question){
    return {
        type:ADD_QUESTIONS,
        question
    };
}


export function addAnswerQuestion({qid,answer,authedUser}){
    return {
        type:ADD_ANSWER_QUESTIONS,
        answerInfo: {
			qid,
			answer,
			authedUser
		}
    };
}
// function saveQuestionAnswer ({ authedUser, qid, answer}) {
//     return {
//       type: ADD_ANSWER_QUESTIONS,
//       authedUser,
//       qid,
//       answer
//     }
//   }

// action creators 

export function handleAddQuestion (optionOne,optionTwo){
    return (dispatch,getState)=>{
        const {authedUser}= getState();
        
        return saveQuestion({
            author: authedUser,
            optionOneText:optionOne,
            optionTwoText:optionTwo,
        }).then((question)=>
            dispatch(addQuestion(question))
        )  
    }
}

//   export const addQuestion = (optionOne, optionTwo) => {
//     return (dispatch, getState) => {
//       let { authedUser } = getState()
  
//       authedUser = Object.values(authedUser)[0]
  
//       return handleSaveQuestion({
//         optionOneText: optionOne,
//         optionTwoText: optionTwo,
//         author: authedUser
//       })
//         .then((question) => dispatch(saveQuestion(question)))
//     }
//   }
export function handleAddAnswerQuestion(qid, answer) {
	return (dispatch, getState) => {
		const { authedUser } = getState();
		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		})
        .then(() =>dispatch(addAnswerQuestion({
                    qid,
                    answer,
                    authedUser
                })
            )
        )
			
	};
}
