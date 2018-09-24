import { Component } from "@angular/core";

@Component({
selector: 'app-successAlert-root',
template: `<div class="container">
<div class="row">
    <div class="col-xs-12">
        <h3> SuccessAlert Component created successfully!</h3>
    </div>
</div>
</div>
<app-warning-alert></app-warning-alert>`,
styleUrls: ['./successAlert.component.css']
})
export class SuccessAlertComponent {

}