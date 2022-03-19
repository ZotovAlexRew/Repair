import { modal } from './moduls/modal';
import { timer } from './moduls/timer';
import { scrol } from './moduls/scroll';
import { calc } from './moduls/calc';
import { validation } from './moduls/validation';
import { sendForm } from './moduls/sendForm';

modal();
timer('27 march 2022');
scrol();
calc();
validation();
sendForm({
    classForm: '.form-horizontal',
    addInfo: [{
        type: 'input',
        id: 'calc-total'
    }]
});