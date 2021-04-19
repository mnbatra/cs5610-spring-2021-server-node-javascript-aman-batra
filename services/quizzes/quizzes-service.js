const quizzes = require("./quizzes.json")

const quizzesModel = require("../../db/quizzes/quizzes-model")


const createQuiz = () => {}
const findAllQuizzes = () => {
    return quizzesModel.find()
    //    return quizzes
}
const findQuizById = (quizId) => {
    return quizzes.find((quiz)=> {
        return (quiz._id===quizId)
    })
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