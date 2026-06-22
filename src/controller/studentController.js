import * as service from '../service/studentService.js';

export const addStudent = async (req, res) => {
    const sucsess = await service.addStudent(req.body);
    if (sucsess) {
        res.status(204).send();
    } else {
        return res.status(409).send();
    }
}

export const findStudent = async (req, res) => {
    const student = await service.findStudent(req.params.id);
    if (student) {
        return res.json(student);
    } else {
        return res.status(404).send(
            {
                "timestamp": new Date().toISOString(),
                "status": 404,
                "error": "Not Found",
                "message": `Student with id ${req.params.id} not found`,
                "path": req.path
            }
        );
    }
}

export const deleteStudent = async (req, res) => {
    const remove = await service.deleteStudent(req.params.id);
    if(remove) {
        return res.json(remove);
    } else {
        return res.status(404).send(
            {
                "timestamp": new Date().toISOString(),
                "status": 404,
                "error": "Not Found",
                "message": `Student with id ${req.params.id} not found`,
                "path": req.path
            }
        );
    }
}

export const updateStudent = async (req, res) => {
    const update = await service.updateStudent(req.params.id, req.body);
    if(update) {
        return res.json(update);
    } else {
        return res.status(404).send(
            {
                "timestamp": new Date().toISOString(),
                "status": 404,
                "error": "Not Found",
                "message": `Student with id ${req.params.id} not found`,
                "path": req.path
            }
        );
    }
}

export const addScore = async (req, res) => {
    const addScores = await service.addScore(req.params.id, req.body.examName, req.body.score);
    if(addScores) {
        return res.status(204).send();
    } else {
        return res.status(404).send(
            {
                "timestamp": new Date().toISOString(),
                "status": 404,
                "error": "Not Found",
                "message": `Student with id ${req.params.id} not found`,
                "path": req.path
            }
        );
    }
}

export const findStudentsByName = async (req, res) => {
    const findStudentsName = await service.findStudentsByName(req.params.name);
    if(findStudentsName) {
        return res.json(findStudentsName);
    } else {
        return res.status(404).send();
    }
}

export const countStudentsByNames = async (req, res) => {
    const countStudentsNames = await service.countStudentsByNames(req.query.names);
    if(countStudentsNames) {
        return res.json(countStudentsNames);
    } else {
        return res.status(404).send();
    }
}

export const findStudentsByMinScore = async (req, res) => {
    const findStudentsMinScore = await service.findStudentsByMinScore(req.params.exam, req.params.nimScore);
    if(findStudentsMinScore) {
        return res.json(findStudentsMinScore);
    } else {
        return res.status(404).send();
    }
}

