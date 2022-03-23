import { modal } from './moduls/modal';
import { timer } from './moduls/timer';
import { scrol } from './moduls/scroll';
import { calc } from './moduls/calc';
import { validate } from './moduls/validation';
import { sendForm } from './moduls/sendForm';
import { burger } from './moduls/burger';
import { maskPhone } from './moduls/maskPhone';
import slider from './moduls/slider';

modal();
timer('27 march 2022');
scrol();
calc();
slider();

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


burger();

validate({ selectorInput: '#calc-input', type: 'calc' });
validate({ selectorInput: 'input[name=fio]', type: 'name' });
validate({ selectorInput: 'input[name=phone]', type: 'phone' });

maskPhone({
  selectorInput: 'input[name=phone]',
  masked: '+7 (___) ___-__-__',
});