import { Request, Response } from "express";
import { DuplicatedEntityError, NotFoundError, ValidationError } from "../helpers/apiError";
import { hashPassword } from "../helpers/auth";
import { UserInput } from "../types";
import { userValidator } from "../validators";
import * as nodemailer from "nodemailer";


export async function createUser(req: Request, res: Response) {
  const userInput: UserInput = req.body;

  const { error } = userValidator.validate(userInput);

  if (error) {
    throw new ValidationError(error.message);
  }

  const dbCareer = await req.db.CareerRepository.get(userInput.careerId);
  //const dbRole = await req.db.RoleRepository.get(userInput.roleId);
  //const dbLevel = await req.db.LevelRepository.get(userInput.levelId);
  const dbAcademicDegree = await req.db.AcademicDegreeRepository.get(userInput.academicDegreeId);
  const dbNationality = await req.db.CountryRepository.get(userInput.nationalityId);

  if (!dbCareer || !dbAcademicDegree || !dbNationality) {
    throw new NotFoundError(`Some career, role, level, academicDegree or nationality was wronged informed.`);
  }

  if (!dbCareer || !dbAcademicDegree || !dbNationality) {
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

export async function forgotPassword(req: Request, res: Response) {
  const { email }: { email: string; } = req.body;

  //validar input
  const dbUser = await req.db.UserRepository.findOneBy({ email });

  if (!dbUser) {
    throw new NotFoundError("Não existe usuário com este e-mail.");
  }

  try {

    //configurações do mailtrap
    var transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "bad35a0a7841ba",
        pass: "f1cf471ca14efd"
      }
    });

    transport.sendMail({
      from: "Administrador <06db5c60e8-40b892@inbox.mailtrap.io>",
      to: dbUser.email,
      subject: "Recuperação de senha",
      html: `<p>Olá, ${dbUser.firstName}.</p>
             <br>
             <p>Clique <a href="http://localhost:3000/resetPassword/${dbUser.id}">aqui</a> para realizar a alteração da senha do Procad.</p>`,
    })

  } catch (error) {
    throw new NotFoundError("Não conseguiu enviar o email.");
  }

  return res.status(200).send({
    id: "estamos testando essa bagaça",
  });
}


export async function resetPassword(req: Request, res: Response) {  
  const { userId, password, rpassword }: { userId: string; password: string; rpassword: string } = req.body;
    
  if (!password || !rpassword || rpassword !== password) {
    throw new NotFoundError("Senhas inválidas");
  }

  const dbUser = await req.db.UserRepository.findOneBy({ id: userId });

  if (!dbUser) {
    throw new NotFoundError("Usuário inválido");
  }

  try {

    const dbChangePassword = await req.db.UserRepository.update({ id: dbUser.id, password: hashPassword(password) });

    return res.status(200).send({
      id: dbChangePassword.id,
    });

  } catch (error) {
    throw new NotFoundError("Ocorreu um erro ao alterar a senha.");
  }
  
}

