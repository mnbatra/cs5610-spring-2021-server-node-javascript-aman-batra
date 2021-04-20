const quizzesService = require("../services/quizzes-service")
module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        // const quizzes = quizzesService.findAllQuizzes()
        // res.send(quizzes)
        quizzesService.findAllQuizzes()
            .then(allQuizzes => {
            res.json(allQuizzes)
        })
    }

    const findQuizById = (req,res) => {
        const quizId = req.params['quizId']
       quizzesService.findQuizById(quizId)
            .then(quiz => res.json(quiz));
    }

    app.get("/api/quizzes",findAllQuizzes)
    app.get("/api/quizzes/:quizId",findQuizById)
}