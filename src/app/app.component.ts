import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateTime } from 'ts-luxon';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'ng17-app';

    minDate = DateTime.now().minus({hours: 1});

    form = new FormGroup({
        time: new FormControl('12:43')
    });

    onSubmit(): void {
        console.log(JSON.stringify(this.form.controls.time.value));
    }
}
