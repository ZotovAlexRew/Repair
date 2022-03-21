export const sendForm = ({classForm = '', nameForm = '', addInfo = []}) => {
    let forms;
    if (classForm !== '') 
    {
        forms = document.querySelectorAll(classForm);
    } 
    else 
    {
        forms = document.getElementsByName(nameForm);
    }
    
    forms.forEach(form => {
        const inputs = Array.from(form.querySelectorAll('input'));
        inputs.forEach(input => input.required = true);

        const sendData = (data) => {
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json" 
                }}).then(res => res.json());
        };

        const submitForm = () => {
            if (inputs.every(input => input.style.border !== '3px solid red')) {
                const formData = new FormData(form);
                const formBody = {};

                formData.forEach((val, key) => {
                    formBody[key] = val; 
                });
                if(nameForm) 
                {
                   delete formBody.page;
                }
                if (nameForm === 'callback-form') 
                {
                   formBody['reason'] = 'call';;
                } 
                else if (classForm === '.form-horizontal') 
                {
                    formBody['reason'] = 'discount';
                } 
                else if (nameForm === 'application-form') 
                {
                    formBody['reason'] = 'need a master';
                }

                addInfo.forEach(elem => {
                const element = document.getElementById(elem.id);
                if (element) 
                {
                    if (element.value.length >= 1)
                    {
                        formBody[elem.id] = element.value;  
                    }
                }
            });
            
                sendData(formBody)
                    .then(() => {
                        inputs.forEach(input => {
                            input.value = '';
                        });
                        addInfo.forEach(elem => {
                            const element = document.getElementById(elem.id);
                            if (element) {
                                const form = document.getElementById('calc');
                                const inputs = form.querySelectorAll('input');
                                const selects = form.querySelectorAll('select');
                                inputs.forEach(input => input.value = '');
                                selects.forEach(select => select.options[0].selected = true);
                            }
                        });
                    })
                    .catch(error => console.log(error));
            } 
            else 
            {
                return;
            }
        };

        try {
            if (!form) 
            {
                throw new Error('Не найдена форма');
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                submitForm();
                return false;
            });
        } 
        catch (error) {
            console.log(error.message);
        }
    });
};