const calci = document.createElement("section");
 
calci.innerHTML = `
<div class="container">
  <div id="display"></div>
     <div class="buttons">
     <div class="button" style="color:red">C</div>
     <div class="button ">←</div>
     <div class="button math">.</div>
     <div class="button math">×</div>
     <div class="button">7</div>
     <div class="button">8</div>
     <div class="button">9</div>
     <div class="button math">/</div>
     <div class="button">4</div>
     <div class="button">5</div>
     <div class="button">6</div>
     <div class="button math">–</div>
     <div class="button">1</div>
     <div class="button">2</div>
     <div class="button">3</div>
     <div class="button math">+</div>
     <div class="button">0</div>
     <div class="button">00</div>
     <div id="equal" class="button equal">=</div>
 </div>
</div>`
document.body.appendChild(calci);
