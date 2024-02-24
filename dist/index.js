"use strict";
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
const errorHandler = () => {
    throw new Error();
};
