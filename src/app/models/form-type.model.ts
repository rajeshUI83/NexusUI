import { Activity } from './activity.model';

export class FormType{
    formTypeKey: string;
    formTypeName: string;
    activities: Activity[];
    constructor(formTypeKeyVal,formTypeNameVal,activities){
        this.formTypeKey=formTypeKeyVal;
        this.formTypeName=formTypeNameVal;
        this.activities=activities;
    }
}