import { Request, Response } from "express";
import { DuplicatedEntityError, NotFoundError, ValidationError } from "../helpers/apiError";
import { hashPassword } from "../helpers/auth";
import { UserInput } from "../types";
import { userValidator } from "../validators";

export async function createUser(req: Request, res: Response) {
  const userInput: UserInput = req.body;

  const { error } = userValidator.validate(userInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  const dbCareer = await req.db.CareerRepository.get(userInput.careerId);
  const dbRole = await req.db.RoleRepository.get(userInput.roleId);
  const dbLevel = await req.db.LevelRepository.get(userInput.levelId);
  const dbAcademicDegree = await req.db.AcademicDegreeRepository.get(userInput.academicDegreeId);
  const dbNationality = await req.db.CountryRepository.get(userInput.nationalityId);

  if (!dbCareer || !dbRole || !dbLevel || !dbAcademicDegree || !dbNationality) {
    throw new NotFoundError(`Some career, role, level, academicDegree or nationality was wronged informed.`);
  }

  const dbUserExists = await req.db.UserRepository.findOneBy({ email: userInput.email });

  if (dbUserExists) {
    throw new DuplicatedEntityError("There is a registered account with this email.");
  }

  const dbUser = await req.db.UserRepository.insert({ ...userInput, password: hashPassword(userInput.password) });

  return res.status(200).send({
    id: dbUser.id,
  });
}
