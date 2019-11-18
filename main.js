var counter = (function(){
    var count = 0;

    return function(num){
        count = num ===undefined ? count :num;

    return count++;
    };
}());
console.log(counter());
console.log(counter());
console.log(counter(20));
console.log(counter());
console.log(counter());
console.log(counter(55));
console.log(counter());
console.log(counter());

var counting = (function(){
    var count = 0;

    return {
        value(num){
            if (num !== undefined) count = num;
            return count;
        },
        decrement(){
            count--;
        },
        increment(){
            count++;
        }
    };
}());
console.log(counting.value());
counting.increment();
counting.increment();
counting.increment();
console.log(counting.value());
counting.decrement();
counting.decrement();
console.log(counting.value(55));
counting.increment();
counting.increment();
console.log(counting.value(150));
counting.decrement();
counting.decrement()
counting.decrement()

var myPrint = (a,b,res) => `${a}^${b}=${res}`;
var myPow = (a,b,callback) => {
    var pow = (x,n) =>{
        if(n !==1) return x*= pow(x,n -1);
return x;
    };
    return callback(a,b,pow(a,b));
};
console.log(myPow(3,4,myPrint));
console.log(myPow(2,3,myPrint));

function fullInfo(){
    return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}
var yearNow = new Date().getFullYear();
var car = {
    engine: 2000,
    model: 'Lacetti',
    name:'Chevrolet',
    year:2010,
    info: fullInfo,
    get used(){
        return this.year !== yearNow ? 'used':'new';
    },
    set used(value){
        if(value ==='new' && this.year < yearNow) this.year = yearNow;
    }
};

var car2 = {
    engine:5000,
    model:'FX50 AWD',
    name: 'Infinite',
    year:2019,
    info: fullInfo,

get used(){
    return yearNow - this.year ?'used':'new';
},
set used(value){
    if(value ==='new' && this.year <yearNow) this.year = yearNow;
}
};
console.log(car.info());
car.used ='new';
console.log(car.info());
car.used = 'used';
console.log(car.info());
console.log(car2.info());
car.used = 'used';
console.log(car2.info());


var list = [15, 48, 39,100, 535, 900];
var myMax = (arg) => Math.max.apply(Math, arg);
console.log(myMax(list));

function myMul (a,b){
    return a*b;
}

var myDouble = myMul.bind(null,2);

console.log(myDouble(3));
console.log(myDouble(8));

var myTriple = myMul.bind(null,3);

console.log(myTriple(5));
console.log(myTriple(8));


var notUniqNums = [1,2,3,4,1,2];
var notUniqNames = [ 
    'Olya',
    'Denis',
    'Sofi',
    'Peter',
    'Olya',
    'Denis',
    'Sofi',
    'Peter'
];
var myUniq = (arr) =>{
     var set = new Set();

    arr.forEach((val) =>{
        set.add(val);
    });
    return set;
};

console.log(myUniq(notUniqNames));
console.log(myUniq(notUniqNums));