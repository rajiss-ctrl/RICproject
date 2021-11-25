
// send answer to email
const submitAnswer = document.querySelector('.btn');
const groupName = document.querySelector('.group-name');
const groupClass = document.querySelector('.class');
const groupEmail = document.querySelector('.email');
const ans = document.querySelector('.answer');


  
submitAnswer.addEventListener('click', ()=>{
  if(groupName.value.length && groupClass.value.length && groupEmail.value.length && ans.value.length){
      fetch('/mail',{
          method: 'post',
          headers: new Headers({'Content-Type': 'application/json'}),
          body:JSON.stringify({
            groupName:groupName.value,
            groupClass:groupClass.value,
            groupEmail:groupEmail.value,
            ans:ans.value
          })
      })
      .then(res=>res.json())
      .then(data=>{
        alert(data);
      })
  }
})


