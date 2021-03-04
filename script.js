/*
   const firstName= 'Jonas';
   const job= 'teacher';
   const birthYear = 1993;
   const currentYear = 2037;
   
   const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + " years old " + job;
   
   const jonasNew = `I'm  ${firstName}, a ${currentYear-birthYear} years old ${job}!`;

  

   console.log(jonas);
   console.log(jonasNew);
   
   console.log('I am a  \n\ maltiline \n\ string');
   console.log(`This is new line`);
   */
/*
   const firstName ='RaFiul';
   const lastName = 'Razu';
   const topic = 'Javascript';
   const institute ='NBICT LAB';
   const startYear = 2016;
   const endYear = 2021;
   
   const rafiul = "I'm " + firstName  + ' ' + lastName + '. \n\  I am learning ' + topic + ' at ' + institute +  ' \n\  for ' +(endYear - startYear) + ' years!';

   const razu =`I'm ${firstName} ${lastName}. \n\  I am learning ${topic} at ${institute} \n\  for ${endYear - startYear} years!`;
   console.log(rafiul);
   console.log(razu);
*/

const age = 17;
let year;
if(age >= 18){
   console.log( `Sara is eligible for licence.`);
}
else{
   let year = 18 - age;
   console.log(`Sara is eligible not for licence.`);
}
console.log(`She have to wait another ${year} year`);