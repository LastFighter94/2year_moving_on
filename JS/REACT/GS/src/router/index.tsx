// pages
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Tests from "../pages/tests/Tests";
// student
import QuizzesOptions from "../pages/student/quizOptions/QuizzesOptions";
import QuizPage from "../pages/student/quizPage/QuizPage";
// tutor
import QuizzesTable from "../pages/tutor/quizzesTable/QuizzesTable";
import CreateQuiz from "../pages/tutor/createQuiz/CreateQuiz";
import EditQuiz from "../pages/tutor/editQuiz/EditQuiz";

// layouts
import RootLayout from "../layouts/rootLayout/RootLayout";

import StudentLayout from "../layouts/studentLayout/StudentLayout";
import TutorLayout from "../layouts/tutorLayout/TutorLayout";

// 404
import NotFound from "../pages/404/404"

// router functions
import {createBrowserRouter, Route, createRoutesFromElements} from "react-router-dom";

// ******************************************************

export const router = createBrowserRouter(

    createRoutesFromElements(
        <Route path='/' element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="tests" element={<Tests/>}/>

            <Route path="student" element={<StudentLayout/>}>
                <Route index element={<QuizzesOptions/>}/>
                <Route path="quiz-page/:id" element={<QuizPage/>}/>
            </Route>

            <Route path="tutor-admin" element={<TutorLayout/>}>
                <Route index element={<QuizzesTable/>}/>
                <Route path="create-quiz" element={<CreateQuiz/>}/>
                <Route path="edit-quiz/:id" element={<EditQuiz/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
        </Route>
    )
)