let a=[1, 2, 3]
let b=[100, 2, 1, 10]
let bb=a.concat(b)
// console.log(bb)


// _____________________2____________________________________
let arr = [ 0, 1, '', undefined, false, 2, undefined, null, , 3,NaN];
 
let filtered = arr.filter(e => e != null && e!=false && isNaN(e)!=NaN);


console.log(typeof(Number('3')))



// _________________________3________________________________
let func=[]
function array_fill(say,eded){
    for(let i=0;i<say;i++){
        func.push(eded)
      
    }


}
array_fill(5,4)
// console.log(func)

//_______________4_______________________


// ________________5__________________
let range=[]
function array_range(say,eded){
    for(let i=say;i<=eded;i++){
        range.push(i)
       
      
    }


}
array_range(2,4)
// console.log(range)


// _______________6_____________________



function all_array(array){


}

// _____________________7_____________________________

function set_arr(set){
    let new_arr=new Set(set)
    // console.log(Array.from(new_arr))

}
let arr_list=[1,2,2,-4,5,3,-4,7,8,-8,-8]
set_arr(arr_list)

// _______________________8________________________

function list_arr(list_1,list_2){
    let concat_arr=list_1.concat(list_2)
    let concat=new Set(concat_arr)
    console.log(Array.from(concat))

}
let arr_first=[1,2,3]
let arr_second=[100,2,1,10]
list_arr(arr_first,arr_second)


// ______________9___________________________


// _____________________10_____________________
