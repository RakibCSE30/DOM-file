console.log("This is first event ");
function clickMe(){

            document.body.style.backgroundColor='red';

        }

 document.getElementById('blueButton').addEventListener('click',function(){
            document.body.style.background='#2ff320';
            const text=document.getElementById('textFormet');
            text.innerHTML=`
            <h1>Hello event</h1>
            
            `

            })
