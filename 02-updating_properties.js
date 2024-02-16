var userOne = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',

    login(){
        console.log(this.email, 'has logged in');
    },

    logout(){
        console.log(this.email, 'has logged out');
    }
};

var userTwo = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',

    login(){
        console.log(this.email, 'has logged in');
    },

    logout(){
        console.log(this.email, 'has logged out');
    }
};

var userThree = {
    email: 'ryu@ninjas.com',
    name: 'Ryu',

    login(){
        console.log(this.email, 'has logged in');
    },

    logout(){
        console.log(this.email, 'has logged out');
    }
};

//---- 1 ---- //

userOne.name = 'Yoshi';
console.log(userOne);

userOne.name = "Ryu";
console.log(userOne);

console.log(userOne.email);
console.log(userOne['email']);

userOne['name'] = 'mario';
console.log(userOne);

//----2----//

var prop = 'name';
console.log(prop);

userOne[prop];
console.log(userOne[prop]);

prop = 'email';
console.log(prop);

console.log(userOne[prop]);
console.log(userOne.name);

//----3----//

userOne.age = 25 ;
console.log(userOne.age);

userOne.logInfo = function(){};
console.log(userOne.logInfo);