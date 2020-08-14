import { Component, OnInit } from '@angular/core';
import { QuestionType } from '../models/question-type.model';
import { TFormService } from '../t-form.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'form-inputs-create',
  templateUrl: './form-inputs-create.component.html',
  styleUrls: ['./form-inputs-create.component.css']
})
export class FormInputsCreateComponent implements OnInit {
  formName: string="";
  questionTypes: QuestionType[];
  showQuestionTypes: boolean=false;
  questionModel=null;
  showQuestionInputForm: boolean=false;
  constructor(private tFormService: TFormService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.formName = this.route.snapshot.paramMap.get('formName');
    console.log(this.formName);
  }
  getQuestionTypes(){
    this.questionTypes=this.tFormService.loadAllQuestionTypes();    
    console.log(this.questionTypes);
    this.showQuestionTypes=true;
  }
  showQuestionInput(questionType){
    console.log(questionType);
    this.showQuestionInputForm=true;
  }
}
