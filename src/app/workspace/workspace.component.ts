import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalManager } from '../../../node_modules/ngb-modal';
import { FormType } from '../models/form-type.model';
import { Activity } from '../models/activity.model';
import { TFormService } from '../t-form.service';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {
  @ViewChild('myModal',{static: false}) myModal;

    private modalRef;
    constructor(private modalService: ModalManager, private tformService: TFormService,private router: Router){      
      
    }
    openModal(){
        this.modalRef = this.modalService.open(this.myModal, {
            size: "md",
            modalClass: 'mymodal',
            hideCloseButton: false,
            centered: false,
            backdrop: true,
            animation: true,
            keyboard: false,
            closeOnOutsideClick: true,
            backdropClass: "modal-backdrop"
        })
    }
    closeModal(name){
      console.log("here inclose");
      console.log(name);
        this.modalService.close(this.modalRef);
        this.router.navigate(['/create', { formName: name }]);
        //or this.modalRef.close();
    }




  formTypes: FormType[];
  activities: Activity[];
  

  ngOnInit() {
    this.formTypes=this.tformService.loadAllFormTypes();
  }
  //on form Type Selection
  onFormTypeChange(selectedFormTypeValue){
    console.log(selectedFormTypeValue);
    this.formTypes.filter(formType=>{
      if(formType.formTypeKey.includes(selectedFormTypeValue)){
        this.activities=formType.activities;
      }
    })
  }
}
