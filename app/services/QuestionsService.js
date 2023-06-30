import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";
import { triviaScienceApi } from "./AxiosService.js";


class QuestionsService {
  async getQuestions() {

    const response = await triviaScienceApi.get()
    console.log('got questions', response.data);

    console.log('my array of questions', response.data)
    AppState.questions = response.data.results.map(triviaPojo => new Question(triviaPojo))
  }
}






export const questionsService = new QuestionsService()