const featuresDropdown = document.querySelectorAll('.dropdown')[0];
const companyDropdown = document.querySelectorAll('.dropdown')[1];
const features = document.querySelector('li');
const company = document.querySelector('.comp');

console.log(featuresDropdown);

const dropdownHandler = () => {
  const display = featuresDropdown.style.display;

  if (display !== 'flex') {
    featuresDropdown.style.display = 'flex';
  } else {
    featuresDropdown.style.display = 'none';
  }
};

const companyDropdownHandler = () => {
  const display = companyDropdown.style.display;

  if (display !== 'flex') {
    companyDropdown.style.display = 'flex';
  } else {
    companyDropdown.style.display = 'none';
  }
};

features.addEventListener('click', dropdownHandler);
company.addEventListener('click', companyDropdownHandler);
