import {Component, Inject} from '@angular/core';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {MediaItemService} from '../../media-item.service';
import {LOOKUP_LISTS} from '../../providers';
import {Router} from '@angular/router';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/components/media-item-form/media-item-form.component.html',
    styleUrls: ['app/components/media-item-form/media-item-form.component.css']
})
export class MediaItemFormComponent {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, 
        private mediaItemService: MediaItemService,
        @Inject(LOOKUP_LISTS) public lookupLists,
        private router: Router) {}
    
    ngOnInit() {
        this.form = this.formBuilder.group({
            'medium': "Series",
            'name': ["", 
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[A-Za-z0-9.\\-/\\s]{1,16}')
                ])
            ],
            'category': "",
            'year': ["", this.yearValidator]
        });
    }

    yearValidator(control){
        if(control.value.trim().length === 0) return null;
        var year = parseInt(control.value);
        var minYear = 1800;
        var maxYear = 2500;
        if (year >= minYear && year <= maxYear) return null;
        return {'year': {'min':minYear, 'max':maxYear}};
    }

    onSubmit(mediaItem){
        this.mediaItemService.add(mediaItem).subscribe(() => {
            this.router.navigate([mediaItem.medium]);
        });
    }
}