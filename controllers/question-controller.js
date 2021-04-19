const questionService = require("../services/questions/questions-service")

module.exports = (app) => {

    app.get('/api/quizzes/:qzid/questions', (req, res) =>
        questionService.findQuestionsForQuiz(req.params['qzid'])
            .then(questions => res.json(questions)))

    app.get('/api/questions', (req, res) =>
        questionService.findAllQuestions()
            .then(questions => res.json(questions)))

    app.get('/api/questions/:quid', (req, res) =>
        questionService.findQuestionById(req.params['quid'])
            .then(question => res.json(question)))

}