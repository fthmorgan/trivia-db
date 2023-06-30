export class Question {
  constructor(data) {
    this.difficulty = data.difficulty
    this.question = data.question
    this.correctAnswer = data.correct_answer
    this.incorrectAnswers = data.incorrect_answers
  }

  get CardTemplate() {
    return ` 
          <div class="row bg-dark text-light">
      ${this.question}
    </div>
    <div>
      ${this.correctAnswer}, ${this.incorrectAnswers}
    </div>`
  }
}

// {
  // "response_code": 0,
  //   "results": [
  //     {
  //       "category": "Science & Nature",
  //       "type": "multiple",
  //       "difficulty": "medium",
  //       "question": "Along with Oxygen, which element is primarily responsible for the sky appearing blue?",
  //       "correct_answer": "Nitrogen",
  //       "incorrect_answers": [
  //         "Helium",
  //         "Carbon",
  //         "Hydrogen"
  //       ]
  //     },
  //   ]
  //   }