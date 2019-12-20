import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

    public practiceTitle = 'Angular Interpolation';

    @Input() public parentData;
    @Input('parentData') public name;

    @Output() public childEvent = new EventEmitter();


    constructor() {
    }

    ngOnInit() {
    }

    fireEvent() {
        this.childEvent.emit('This is message sending from Child ');
    }

    projectUrl() {
        return window.location.href;
    }

}
