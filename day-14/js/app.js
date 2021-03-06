    // start with strings, numbers and booleans
    // let name1 = 'wes';
    // let name2 = name1;
    // console.log(name1, name2);
    // name1 = 'tawhid';
    // console.log(name1, name2);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    const team = players;
    // console.log(players, team);
    
    // and we want to make a copy of it.
    
    // You might think we can just do something like this:
    team[3] = 'tawhid';
    // console.log(players, team);

    // however what happens when we update that array?

    // now here is the problem!
    
    // oh no - we have edited the original array too!
    
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    
    // So, how do we fix this? We take a copy instead!
    
    // one way
    let team2 = players.slice();

    // or create a new array and concat the old one in
    let team3 = [].concat(players);
    
    // or use the new ES6 Spread
    let team4 = [...players];
    
    // now when we update it, the original one isn't changed
    let team5 = Array.from(players);
    
    // The same thing goes for objects, let's say we have a person object
    
    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };
    
    // and think we make a copy:
    // const captain = new person; //why can't we use this
    const captain = person;
    captain.number = 50;
    
    // how do we take a copy instead?
    const cap2 = Object.assign({}, person, {number: 99}); // now original will not going to change
    
    // We will hopefully soon see the object ...spread
    const cap3 = {...person};
    const cap4 = {...person, number: 100, name : 'tawhid'};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

    // I've some issue in the last part so I might have to watch the last part again.