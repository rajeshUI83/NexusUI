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
  questionTypes=[];
  showQuestionTypes: boolean=false;
  questionModels=[];
  showQuestionInputForm: boolean=false;
  imageList={
    'M':''
  }
  constructor(private tFormService: TFormService,private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.formName = this.route.snapshot.paramMap.get('formName');
    console.log(this.formName);
    this.tFormService.loadAllQuestionTypes().forEach((data)=>{
      this.questionTypes.push(data);
    })  
    
  }

  getQuestionTypes(){
    this.showQuestionTypes=true;
  }
  showQuestionInput(event){
    console.log(this.questionTypes);
    event.stopPropagation();
    this.showQuestionInputForm=true;
  }

  selectQuestion(question){
    this.questionModels.push(question);
    this.showQuestionInputForm = true;
    this.hideQuestionType();
  }

  hideQuestionType(){
    this.showQuestionTypes = false;
  }
}
