const hello =window.localStorage.getItem('hello')
console.log(hello);

const setAge = () =>{
    // console.log('Age' , 23);
    window.localStorage.setItem('Age', 31)
}