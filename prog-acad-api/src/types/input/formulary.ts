import { Comission, FormularyAnswer, FormularyType } from "..";

export interface File {
  filename: string;
  content: string;
}
export interface FormularyInput {
  type: FormularyType;
  period: {
    from: Date;
    to: Date;
  };
  comission: Comission[];
}

export interface FormularyAnswerInput {
  id: string | null;
  formularyId: string;
  fieldId: string;
  activityId: string;
  file: File | null;
  answers: FormularyAnswer[];
}
