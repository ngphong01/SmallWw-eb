document.addEventListener('DOMContentLoaded', () => {
    // Data Attributes
    const dataExample = document.querySelector('#data-example');
    const showDataBtn = document.querySelector('#show-data-btn');
    if (dataExample && showDataBtn) {
      showDataBtn.addEventListener('click', () => {
        console.log('ID:', dataExample.dataset.id);
        console.log('Category:', dataExample.dataset.category);
        console.log('Price:', dataExample.dataset.price);
        alert(`ID: ${dataExample.dataset.id}\nCategory: ${dataExample.dataset.category}\nPrice: ${dataExample.dataset.price}`);
      });
    }
  
    // Change CSS Variables
    const changeColorBtn = document.querySelector('#change-color-btn');
    if (changeColorBtn) {
      changeColorBtn.addEventListener('click', () => {
        document.documentElement.style.setProperty('--primary-color', '#ff0000');
      });
    }
  
    // Form Submission
    const courseForm = document.querySelector('#course-form');
    if (courseForm) {
      courseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(courseForm);
        const data = Object.fromEntries(formData);
        console.log('Form Data:', data);
        alert('Đăng ký thành công! Dữ liệu đã được ghi vào console.');
      });
    }
  });