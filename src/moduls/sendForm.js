export const sendForm = ({classForm, addInfo = []}) => {
    const forms = document.querySelectorAll(classForm);

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
            if (inputs.every(input => input.style.border !== '3px solid red')) 
            {
                const formData = new FormData(form);
                const formBody = {};

                formData.forEach((val, key) => {
                    formBody[key] = val; 
                });

                addInfo.forEach(elem => {
                const element = document.getElementById(elem.id);
                if (element) 
                {
                    if (elem.type === 'block') 
                    {
                        formBody[elem.id] = element.textContent;
                    } 
                    else if (elem.type === 'input')
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
                    })
                    .catch(error => console.log(error));
            } 
            else 
            {
                return;
            }
        };

        try 
        {
            if (!form) 
            {
                throw new Error('Не найдена форма');
            }

            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                submitForm();
            });
        } 
        catch (error) 
        {
            console.log(error.message);
        }
    });
};