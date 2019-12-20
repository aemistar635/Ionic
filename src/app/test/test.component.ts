import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public practiceTitle = 'Angular Interpolation';
    public myId = 'testId';
    public isDisabled = false;
    public me = true;

    public meObj = {
        'text-right': true
    };
    public otherObj = {
        'text-left': true
    }

    constructor() {
    }

    ngOnInit() {
    }

    projectUrl() {
        return window.location.href;
    }

}
