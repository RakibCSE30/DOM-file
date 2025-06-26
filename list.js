 console.log('list.js');
 
 const placeList = document.getElementById('lists');
  const li =document.createElement('li');
  li.innerText='rangpur';
  placeList.appendChild(li);



  const addSection=document.getElementById('main-container');
  console.log(addSection);
  const section = document.createElement('section');
  const h1=document.createElement('h1');
  h1.innerText='The food list';
  section.appendChild(h1);
  addSection.appendChild(section)


  const ul=document.createElement('ul');
  const li1=document.createElement('li');
  li1.innerText='Rice';
  ul.appendChild(li1);
  const li2=document.createElement('li');
  li2.innerText='Meat';
  ul.appendChild(li2);
  const li3=document.createElement('li');
  li3.innerText='Fish';
  ul.appendChild(li3);
  section.appendChild(ul);
  addSection.appendChild(section);


  const sectionDress=document.createElement('section');
  sectionDress.innerHTML=`
  <h1>My dress section</h1>

  <ul>
  <li>T-Shirt</li>
  <li>Lungi</li>
  
  </ul>
  
  
  `;
  addSection.appendChild(sectionDress);
  
 
 

// const li=createElement('li');
// li.
