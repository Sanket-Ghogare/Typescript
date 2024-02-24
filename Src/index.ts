// const dateRangesws: string = "sam";
// let namedsws: number = 11;
// let heysws =<string>"sds";

// type aliases ---------------------------------
// type username= (n:string, m:string)=> string

// const function: username =(n,m) =>{
//     console.log("het");
//     return n + m;
// }

// Array -------------------------
// const arr : number[] = [1,2,3,4];

// const arr1:Array <string> = ["s","1"]
// const arr2:Array<string | number> = ["1",1]


// const arr21= ["1"]




// object -------------------------

// interface obj {
//     height:number;
//     weight:number;

// };
// type funcType = (n: number, m:number)=>void
// interface Newobj extends obj{
//     scolar: string;
//     func:funcType;
// };
// const neww: Newobj ={
//     height:211,
//     weight:221,
//     scolar: "sw",
//     func: (n,m)=>{
//         return console.log(n * m);
//     },
// }
// neww.func(10,20);





// function ----------------------


// type functionType = (n: number, m: number, l?:number)=> number;
// const funct: functionType = (n, m, l)=>{
//     return n * m * l;
// }
// funct(10,2);

// // Default Parameter
// type FuncType = (n: number, m: number, l?: number) => number;
// const func: FuncType = (n, m, l = 20) => {
//   return n * m * l;
// };

// func(25, 23);

// // Rest Operator
// type FuncType = (...m: number[]) => number[];
// const func: FuncType = (...m) => {
//   return m;
// };
// func(25, 23, 34, 6, 67, 8, 9);


// function with obj ---------------------------------

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   photo: string;
//   readonly id: string;
// }

// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   console.log(product);
// };

// const productOne: Product = {
//   name: "Macbook",
//   stock: 46,
//   price: 999999,
//   photo: "samplephotourl",
//   id: "asdnasjdasjkdas",
// };

// getData(productOne);

// Never Type------------------------------------------

// const errorHandler = (): never => {
//   throw new Error();
// };


//Classes -----------------------------------

class Player{
  constructor(
      // public readonly id:string,
      private height:number,
      public weight:number,
      protected power:number
  ){
      //not reciving so,
      // this.id=String(Math.random()*100);
      //we can acess id every where but we can not change it
  }

  // getMyHeight=()=>this.height;

  get getMyHeight():number{
      return this.height;
  }

  set changeMyHeight(val:number){
     this .height=val;
  }
}
const abhi=new Player(100 , 150, 23);
console.log(abhi.getMyHeight)
abhi.changeMyHeight=40;
console.log(abhi.getMyHeight);






// class Plater extends Player{
//     special:boolean;
//     constructor( height:number , weight:number,power:number ,special:boolean){
//         super(height , weight,power);
//         this.special=special;
//     }
//     getMyPower=()=>{
// this.power
// // this.height
//     }
// }

// const abhi1=new Plater(100 ,150,23,true);
// console.log(abhi1.weight);
// // console.log(abhi1.height);

// // console.log(abhi1.power);
// console.log(abhi1.getMyHeight);
// console.log(abhi1.getMyPower);
// console.log(abhi1.id)

interface ProductType{
  name:string;
  price:number;
}

class Product implements ProductType{
  // public name:string;
  // public price:number;

  constructor(
     public name: string,
    public price: number,
    ){}
}


// When to Use Each
// Use interfaces when you need to define the shape of objects and you want the ability to extend or implement the interface in classes.
// Use type aliases when you need to define a type that might not strictly be an object type, or when you need to use unions, intersections, or tuples.


//Type Asseration-------------------------------------

//const btn=document.getElementById("btn") as HTMLElement;
//to known html,eleements

// const btn=<HTMLElement>document.getElementById("btn") ;//2nd method
const btn=document.getElementById("btn")!;//3nd method

btn.onclick;//

// in imag src is there so there will be no src property we use HTMLImageElement

const img=document.querySelector("img")!;//same as button

const form=document.getElementById("myform")!;//HtmlFormELEMENt
const myinput= document.querySelector("form > input") as HTMLInputElement;

form.onsubmit=(e)=>{
    e.preventDefault();//we will just this also
    console.log(myinput.value);
    const value=Number(myinput.value);//wrap by number if we have use number instead of text IN front end
    console.log(typeof myinput.value);

    const h2 = document.createElement("h2");
    const body = document.querySelector("body")!;
    h2.textContent = String(value + 20);
    body.append(h2);
  };
  

  //it is all about dom manuliplicationn------------------------------

interface Person{
    name:string;
    email:string;
    // [key:string]:string;  //dynamic key for what we want we pass
}
  const myobj :Person={
    name:"Abhi",
    email:"abhi@gmail.com",
  };
  const getName=()=>{
    return myobj.name
    // return myobj["name"];
  }  ;        //this are a seprate 2 funcations and we require one for both 
  const getEmail=()=>{
    return myobj.email
    // return myobj["email"];
  };

  const getData=(key :string): string=>{
    // return myobj[key]; //it n"t no what we are sending so we put has key dynamic or use key of operator
    return myobj["email"];
  };


// const getData=(key :"name" |"email"): string=>{
//     return myobj[key];
//   };


// const getData=(key :keyof Person): string=>{ //all
//     return myobj["email"];
//   };

//   const key="name"
//   myobj[key as keyof Person]//it is key form person 1 only
//   myobj[key as keyof typeof myobj];
//   getData("name")
// const getData = (key: keyof Person ): string => {
//      return myobj[key];
//     };

// console.log(myobj.name)

// chatgpt assertion --------------
// TypeScript's type assertion is a way to tell the compiler "trust me, I know what I'm doing" by specifying a more 
// specific type than the one TypeScript inferred. It's like a type cast in other languages but without any runtime checks or 
// reassignment of values. It is purely used by the compiler for type checking.

// There are two syntaxes for type assertions:

// Angle-bracket syntax:
// typescript
// Copy code

// let someValue: any = "this is a string";
// let strLength: number = (<string>someValue).length;
// as-syntax (recommended when using JSX, as the angle-bracket syntax can be confused with JSX):
// typescript
// Copy code

// let someValue: any = "this is a string";
// let strLength: number = (someValue as string).length;

// Type Utility

// Partial<Type>
// Required<Type>
// Readonly<Type>
// Record<Keys, Type>
// Pick<Type, Keys>
// Omit<Type, Keys>
// Exclude<Type, ExcludedUnion>
// Extract<Type, Union>
// NonNullable<Type>
// Parameters<Type>
// ConstructorParameters<Type>
// ReturnType<Type>
// InstanceType<Type>



//partical <type>.................................................................

// type User={
//     name:string,
//     email:string
// }

// type User2=Partial<User>


//Required<Type>:opposite to partical  .....................................................

// type User={
//     name?:string,
//     email:string
// }

// type User2=Required<User>

// const user:Required<User>={
// // both fields are mandotory here
// }


// ReadOnly ....................................................................................................

// type User={
//     name:string,
//     email:string
// }
// const user:Readonly<User>={
//     name:"abc",
//     email:"aass"
// }

// Record<Keys,Type>...........................................................

type User={
  name:string,
  email:string
}
type User2=Record<"name"|"email"|"gender",string>
 


// interface UserInfo {
//   age: number;
// }

// type UserName = "john" | "levi" | "elon" | "jack";

// const users: Record<UserName, UserInfo> = {
//   john: { age: 34 },
//   levi: { age: 34 },
//   elon: { age: 34 },
//   jack: { age: 34 },
// };

// Pick<Type, Keys>  ................................................
// interface OrderInfo {
//   readonly id: string;
//   user: string;
//   city: string;
//   state: string;
//   country: string;
//   status: string;
// }
// type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">; // pick element which we want

// Omit<Type, Keys>.............................................................
// interface ShippingInfo {
//   city: string;
//   state: string;
//   country: string;
// }

// type Random = Omit<ShippingInfo,"country">//remove element which we want


//omit on keys  exclude on type
//Extract type which wants

// Exclude<Type, ExcludedUnion>......................................
// type MyUnion = string | number | boolean
// type Random = Exclude<MyUnion , boolean>

// Extract<Type, Union>.................................................................
// type MyUnion = string | number | boolean
// type Random = Extract<MyUnion , boolean>

// NonNullable<Type> ......................................................................
// type MyUnion = string | number | boolean | null | undefined
// type Random = NonNullable<MyUnion>  //remove null,uudefine
// type Random2 = Exclude<MyUnion,undefined| null>  //same as nonnullable



// Parameters<Type>............................................................................
// const myfunc = (a: number, b: string) => {
//   console.log(a + b);
// };
// type Random = Parameters<typeof myfunc>

// ConstructorParameters<Type>...........................................................................
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = ConstructorParameters<typeof SampleClass>

// ReturnType<Type>...................................................................................
// const myfunc = (a: number, b: string):string => {
//   return a + b;
// };
// type FuncType = ReturnType< typeof myfunc>

// InstanceType<Type>.....................................................................................
// class SampleClass {
//   constructor(public s: string, public t: string) {}
// }
// type Random = InstanceType<typeof SampleClass>

// const user:Random ={
//     s:"44",
//     t:"ssds"
// }


// ..............................................................................................................................
// Generics

// const func = <T>(n: T): T => {

//   return n;
// };

// const ans = func(20);
// const ans2 = func("20");
// const ans3 = func(true);

// type Person = {
//   name: string;
//   age: number;
// };

// const func = <T>(n: T): T => {
//   return n;
// };
// const person1: Person = {
//   name: "Abhi",
//   age: 109,
// };

// const ans = func<Person>(person1);

// const func = <T, U>(n: T, o: U): { n:T, o:U } => {
//   return { n, o };
// };

// const ans = func<number,string>(20,"Lol");


// const user: Person = {
//   name: "abhi",
//   age: 109,
// };

// const user2: Person2 = {
//   name: "abhi",
//   age: 109,
//   email: "asd@gmail.com",
// };

// const func = <T, U extends T>(n: T, o: U): { n: T; o: U } => {
//   return { n, o };
// };

// const ans = func<Person, Person2>(user, user2);
