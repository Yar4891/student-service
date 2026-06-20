import {Router} from "express";
import {addStudent, deleteStudent, findStudent,addScore,countStudentsByNames,findStudentsByMinScore,
    findStudentsByName,updateStudent} from "../service/studentService.js";

const router = Router();

router.post('/student', addStudent);
router.get('/student/:id', findStudent);
router.delete('/student/:id', deleteStudent);
router.patch('/student/:id', updateStudent);
router.patch('/score/student/:id', addScore);
router.get('/student/name/:name', findStudentsByName);
router.get('/quantity/students', countStudentsByNames);
router.get('/student/exam/:exam/minscore/:minScore', findStudentsByMinScore);

export default router;