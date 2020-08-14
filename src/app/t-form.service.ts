import { Injectable } from '@angular/core';
import { FormType } from './models/form-type.model';
import { Observable } from '../../node_modules/rxjs';
import { Activity } from './models/activity.model';
import { QuestionType } from './models/question-type.model';
import * as formTypesJson from "../assets/formTypes.json";
@Injectable({
  providedIn: 'root'
})
export class TFormService {

  constructor() { }
  loadAllFormTypes(): FormType[] {
    let formTypes: FormType[];
    formTypes=formTypesJson.default;
    return formTypes;
  }
  loadAllQuestionTypes(): QuestionType[]{
    
    let questionType1=new QuestionType("M","Multiple Choice");
    let questionType2=new QuestionType("P","Phone Number");
    let questionType3=new QuestionType("S","Short Answer");
    const questionTypes = [
      {"questionTypeKey":"M","questionTypeName":"Multiple Choice"}
      ,{"questionTypeKey":"P","questionTypeName":"Phone Number"},
      {"questionTypeKey":"S","questionTypeName":"Short Answer"}
    ];
    return questionTypes;

  }
}
