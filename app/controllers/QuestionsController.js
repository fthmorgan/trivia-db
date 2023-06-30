import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js";

function _drawQuestions() {
  let questions = AppState.questions

  let template = ''

  questions.forEach(q => template += q.CardTemplate)
  setHTML('questions', template)
}

export class QuestionsController {
  constructor() {
    console.log('Questions Controller loaded');
    this.getQuestions()
    AppState.on('questions', _drawQuestions)
  }
  async getQuestions() {
    try {
      await questionsService.getQuestions()
      Pop.success('We got the questions!')
    } catch (error) {
      console.error(error)
      Pop.error(error.message)
    }
  }
}


