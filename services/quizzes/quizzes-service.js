const quizzesModel = require("../../models/quizzes/quizzes-model")

const createQuiz = () => {}
const findAllQuizzes = () => {
    return quizzesModel.find()
    //    return quizzes
}
const findQuizById = (quizId) => {
    return quizzesModel
        .findById(quizId)
        .populate("questions")
        .exec()
}
const deleteQuiz = () => {}
const updateQuiz = () => {}

module.exports = {
    createQuiz,
    findAllQuizzes,
    findQuizById,
    deleteQuiz,
    updateQuiz

}