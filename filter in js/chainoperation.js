const shahan = [1,2,3,4,5,6];
//performing both filter and map in array this process is called chaining..

const hamid = shahan.filter(item => item% 2 == 0).map(item=>item*2);
console.log(hamid);
