import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public practiceTitle = 'Angular Interpolation';

    public name = 'Appmakers';
    public message = 'This is public message';
    public colors = {
        'First Name': 'Muhammad',
        'Last Name' : 'Bin Aamir'
    };

    public date = new Date();
    constructor() {
    }

    ngOnInit() {
    }

    projectUrl() {
        return window.location.href;
    }

}
