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
      {"questionTypeKey":"M","questionTypeName":"Multiple Choice", "imageIcon": "done", "backgroundColor": "rgb(79, 169, 179)"}
      ,{"questionTypeKey":"P","questionTypeName":"Phone Number", "imageIcon": "phone", "backgroundColor": "rgb(63, 196, 106)"},
      {"questionTypeKey":"S","questionTypeName":"Short Answer", "imageIcon": "short_text", "backgroundColor": "rgb(255, 186, 73)"},
      {"questionTypeKey":"L","questionTypeName":"Long Answer", "imageIcon": "notes", "backgroundColor": "rgb(226, 109, 90)"}
    ];
    return questionTypes;

  }
}
