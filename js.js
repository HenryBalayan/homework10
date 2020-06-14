//ex1
/*
class Author{
  constructor(name,email,gender){
    name=name;
    email=email;
    gender=gender;
   }
  get name(){
   return  this._name;
  }
   set name(n){
  if(typeof n!=="string"){
    
  alert("error")
  }
  this._name=n;
}
  get email(){
   return this._email;
  }
   set email(e){

  this._email=e;
}
  get gender(){
    return this._gender;
    }
  set gender(g){
    this._gender=g;
  }
  toString(){
   return this._name+'\n'+ this._email+'\n'+this._gender;
  }
  }
let a=new Author();
a.name="henry";
a.email="henrikh777@gmail.com";
a.gender="male";



class Book{
  constructor(title){
    title=title;
  }
  get title(){
    return this._title;
  }
  set title(t){
    if(t instanceof Author){
     return  this._title=t;
    }
    else{
      alert("invalid instnace")
    }
  }
  
  
  getProfit(price,quantity){
    return price*quantity;
  }
  
  
}
let c=new Book();
let d=new Book();

*/
//ex2

/*class Account{
  constructor(id,name,balance){
   this._id=id;
   this.name=name;
   this.balance=balance;
 }
get id(){
  return this._id;
}
get name(){
  return this._name;
}
set name(name){
  this._name=name;
}
get balance(){
  return this._balance;
}
set balance(balance){
  this._balance=balance
}
credit(amount){
  return this.balance=this.balance+amount;
}
debit(amount){
  if(this.balance-amount>=0){
    return this.balance-amount;
  }
  else{
    return "Amount exceeded balance"
  }
}
transferTo(another,amount){
if(this.balance-amount>0){
  another.balance=another.balance+amount;
this.balance=this.balance-amount;
  }
}
static identifyacc(accountfirst,accountsecond){
    for(let key in accountfirst&&accountsecond){
      if(accountfirst[key]===accountsecond[key]){
      return true;
    };
return false;
}
}
tostring(){
  return this.id+"\n"+""+this.name+"\n"+this.balance;
}
}
let a=new Account("id","henry",120);
let b=new Account("id","henry",120);
// a.transferTo(b,50);
//console.log(a.balance);
//console.log(b.balance);
console.log(a.tostring())
*/
//ex3

/*
class Person{
    constructor(firstname,lastname,gender,age){
      this.firstname=firstname;
      this.lastname=lastname;
      this.gender=gender;
      this.age=age;
    }
    get firstname(){
      return this._firstname;
    }
    set firstname(firstname){
      this._firstname=firstname;
    }
    
      get lastname(){
      return this._lastname;
    }
    set lastname(lastname){
      this._lastname=lastname;
    }
      get gender(){
      return this._gender;
    }
    set gender(gender){
      this._gender=gender;
    }
      get age(){
      return this._age;
    }
    set age(age){
      this._age=age;
    }
    
    tostring(){
      
      return this.firstname+this.lastname+this.gender+this.age;;
    };
    
    
    
    
    
  }
    class Student extends Person{
        constructor (firstname,lastname,gender,age,program,year,fee,data){
         super(firstname,lastname,gender,age);
          this.program=program;
         this.year=year;
         this.fee=fee;
         this.data=data;
       
      }
     get program(){
       return this._program;
     }
      set program(program){
        this._program=program;
      }
        get year(){
       return this._year;
     }
      set year(year){
        this._year=year;
      }
        get fee(){
       return this._fee;
     }
      set fee(fee){
        this._fee=fee;
      }
      get data(){
        return this._data;
      }
       set data(data){
         this._data=data;
       }
      
      passexam(subjects,grade){
      
         let total=0;
          subjects=Object.keys(this.data);
          grade=Object.values(this.data);
       for(let i of grade){
         total=total+i;

    }
       if(total/subjects.length<50){

        console.log("you dont pass the exam");
          
        }

        else{
          this.year++;
        }

     }
      tostring(){

          return `${this.firstname} ${this.lastname} ${this.gender} ${this.age} ${this.program} ${this.year} ${this.fee}`;
      }
     
    }
    let d=new Student("henry","balayan","male",28,["math","physics"],2019,"100$",{physics:50,math:50});
 
  class Staff extends Person{
 
    constructor (firstname,lastname,gender,age,program,pay){
         super(firstname,lastname,gender,age);
           this.program=program;
            this.pay=pay;
    }
     get program(){

      return this._program;
     }
   set program(program){
      this._program=program;
   }


   get pay(){

    return this._pay;
   }
 set pay(pay){
    this._pay=pay;
 }

  tostring(){

    return `${this.firstname} ${this.lastname} ${this.gender} ${this.age}  ${this.program} ${this.pay}`;
  }

  }

  let t=new Staff("henry","balayan","male","28","physics","250$")
 
  console.log(t);
  */