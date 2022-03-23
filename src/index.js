import { modal } from './moduls/modal';
import { timer } from './moduls/timer';
import { scrol } from './moduls/scroll';
import { calc } from './moduls/calc';
import { validation } from './moduls/validation';
import sendForm from './moduls/sendForm';
import { burger } from './moduls/burger';
import { maskPhone } from './moduls/maskPhone';
import slider from './moduls/slider';

modal();
timer('27 march 2022');
scrol();
calc();
slider();

sendForm({
  formId: '.form-horizontal',
  someElem: [{
    type: 'input',
    id: 'calc-total'
  }]
});
sendForm({
  formId: '.header-modal form',
  someElem: [{
    type: 'input',
    id: 'calc-total'
  }]
});

sendForm({
  formId: '.services-modal form',
  someElem: [{
    type: 'input',
    id: 'calc-total'
  }]
});


burger();

validation({ selectorInput: '#calc-input', type: 'calc' });
validation({ selectorInput: 'input[name=fio]', type: 'name' });
validation({ selectorInput: 'input[name=phone]', type: 'phone' });

maskPhone({
  selectorInput: 'input[name=phone]',
  masked: '+7 (___) ___-__-__',
});