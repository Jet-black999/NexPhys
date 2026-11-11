const quiz=document.querySelector('#quiz');
for(const [value,sequence] of [['A','1 · 1 · 2'],['B','1 · 2 · 1'],['C','2 · 1 · 2'],['D','2 · 2 · 1']]){
 const label=document.createElement('label');
 const input=document.createElement('input');
 input.type='radio';input.name='resposta';input.value=value;input.required=true;
 label.append(input, value+') '+sequence);quiz.querySelector('.options').append(label);
}
quiz.addEventListener('change',()=>document.querySelector('#feedback').replaceChildren());
quiz.addEventListener('submit',event=>{
 event.preventDefault();
 const correct=quiz.elements.resposta.value==='D';
 document.querySelector('#feedback').innerHTML='<strong>'+(correct?'Você acertou!':'A alternativa correta é D.')+'</strong><p>Uma partícula alfa é um núcleo de hélio, com dois prótons e dois nêutrons. Na emissão beta, a partícula emitida é um elétron ou um pósitron. Ambas as radiações são corpusculares (2).</p><p>A radiação gama é formada por fótons e pertence à categoria eletromagnética (1). A sequência é <b>2 · 2 · 1</b>.</p><p class="exam-source"><a href="https://fundmed.org.br/website/wp-content/uploads/2024/09/COREMU-HCPA-Gabarito-e-resultado-definitivos-da-prova-objetiva-e-convocacao-para-analise-curricular.pdf#page=2" target="_blank" rel="noopener noreferrer">Ver gabarito definitivo ↗</a></p>';
});
const dialog=document.querySelector('dialog');
document.querySelector('[data-open]').onclick=()=>dialog.showModal();
dialog.querySelector('.close').onclick=()=>dialog.close();
dialog.querySelectorAll('a').forEach(a=>a.onclick=()=>dialog.close());

const signup = document.querySelector('#signup');
const signupStatus = document.querySelector('#signup-status');

signup.addEventListener('submit', event => {
  event.preventDefault();
  signupStatus.textContent = 'Demonstração concluída! Obrigada pelo interesse na NexPhys.';
  signup.reset();
});

signup.addEventListener('input', () => {
  signupStatus.textContent = '';
});
