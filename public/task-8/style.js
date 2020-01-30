(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function myfunc() {
   var p = document.getElementById('demo').value;
   var q = document.getElementById('demo1').value;
   var r = document.getElementById('demo2').value;
   var s = document.getElementById('demo3').value;
   if(p == "" || q == "" || r == "" || s == "" ){
    alert('please fully filled the form')
   }
   else if(r == s){
 var data = { user:p, mail:q, pwd:r, choice:remember};
   var arr = [];
   arr.push(data);   
   localStorage.setItem('prakash', JSON.stringify(arr));
   alert('Updated Successfully')
   }
   else{
    alert('Please correct the Password')
   }
}
function myfun() {
  var x = document.getElementById('res').value;
  var y = document.getElementById('res1').value;
  var z = JSON.parse(localStorage.getItem('prakash'));
  if (x && y) {
  for (var i = 0; i <= z.length; i++) {
     z[i];
     if(x == z[i].user && y == z[i].pwd){
      alert("you like this experience");
      location.replace('https://www.w3schools.com/html/html5_webstorage.asp')
     }
   } 
}
}