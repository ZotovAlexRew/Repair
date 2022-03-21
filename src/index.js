import { modal } from './moduls/modal';
import { timer } from './moduls/timer';
import { scrol } from './moduls/scroll';
import { calc } from './moduls/calc';
import { validation } from './moduls/validation';
import { sendForm } from './moduls/sendForm';
import { sliders } from './moduls/sliders';

modal();
timer('27 march 2022');
scrol();
calc();
validation();
sendForm({
    classForm: '.form-horizontal',
    nameForm: '',
    addInfo: [{
        id: 'calc-total'
    }]
});
sendForm({
    classForm: '',
    nameForm: 'callback-form'
});
sendForm({
    classForm: '',
    nameForm: 'application-form'
});
sliders();