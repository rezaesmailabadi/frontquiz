import React from "react";
import { Route, Routes } from "react-router-dom";

import Quiz from "../components/Quiz/Quiz";
import LoginUser from "../components/Auth/Login/LoginUser";
import RegisterAdmin from "../components/Auth/Register/RegiserAdmin";
import LoginAdmin from "../components/Auth/Login/LoginAdmin";
import RegisterUser from "../components/Auth/Register/RegisterUser";
import AdminPage from "../components/AdminPage/Dashboard";
import UserPage from "../components/UserPage/Dashboard";
import ExamCategory from "../components/AdminPage/layouts/ExamCategory";
import ManageExam from "../components/AdminPage/layouts/ManageExam";
import AddQuestions from "../components/AdminPage/layouts/AddQuestions";
import TypeQuestion from "../components/AdminPage/layouts/TypeQuestion";
import DailySchedule from "../components/AdminPage/layouts/DailySchedule";

function Router() {
  return (
    <Routes>
      <Route path="/register" element={<RegisterUser />} />
      <Route path="/login" element={<LoginUser />} />
      <Route path="/register/admin" element={<RegisterAdmin />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/admin/dashboard" element={<AdminPage />} />
      <Route path="/user/dashboard" element={<UserPage/>}/>

      <Route path="/admin/exam_category" element={<ExamCategory />} />
      <Route path="/admin/manage_exam" element={<ManageExam />} />

      <Route path="/admin/type_exam" element={<TypeQuestion />} />

      <Route path="/admin/dailyschedule" element={<DailySchedule />} />

      <Route path="/admin/add_questions/:id" element={<AddQuestions />} />
      {/* /admin/dailyschedule */}

      <Route exact path="/" element={<Quiz />} />
    </Routes>
  );
}
export default Router;
