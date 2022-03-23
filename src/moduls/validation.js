export const validation = ({ selectorInput, type }) => {
  const inputs = document.querySelectorAll(selectorInput);

  const patternNumbers = /\D/g;
  const patternName = /[^a-zA-Zа-яА-Я\s]/g;
  const patternCapitalize = /(^|\s|\-)[a-zA-Zа-яА-Я]/g;
  const patternRepeatingSpaces = /\s{2,}/g;
  const patternStart = /^[\s-]*/g;
  const patternEnd = /[\s-]*$/g;
  const patternPhone = /[^\d\+]/g;

  const setValid = (input) => {
    input.dataset.valid = true;
  };

  const formatInput = (e) => {
    if (!e.target.value) 
    {
      return;  
    }
    

    if (type === 'phone') 
    {
      if (e.target.value.match(/\d/g).join('').length > 16) 
      {
        return;
      }
    }
    if (type === 'name') {
      e.target.value = e.target.value
        .replace(patternRepeatingSpaces, ' ')
        .replace(patternStart, '')
        .replace(patternEnd, '')
        .toLowerCase()
        .replace(patternCapitalize, (char) => char.toUpperCase());
      if (e.target.value.match(/[^]/gi).join('').length < 2) 
      {
        return;
      }
    }
    setValid(e.target);
  };

  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      document.querySelectorAll('.request-status').forEach((item) => {
        item.textContent = '';
      });
      input.dataset.valid = '';
      input.style.border = '';

      if (type === 'calc') 
      {
        e.target.value = e.target.value.replace(patternNumbers, '');
      } 
      else if (type === 'name') 
      {
        e.target.value = e.target.value.replace(patternName, '');
      } 
      else if (type === 'phone') 
      {
        e.target.value = e.target.value.replace(patternPhone, '');
      }
    });
    if (type !== 'calc') {
      input.addEventListener('blur', formatInput);
    }
  });
};