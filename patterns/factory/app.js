// factory  - create objects like a user member; there
// may be manny different 'types' of members

function MemberFactory() {
    this.createMember = function(name, type) {
        let member;
    
        if(type === 'simple') {
            member = new SimpleMember(name);
        } else if(type === 'standard') {
            member = new StandardMember(name);
        } else if(type === 'super') {
            member = new SuperMember(name);
        }

        member.type = type;

        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

const SimpleMember = function(name) {
    this.name = name;
    this.cost = '$5'; 
}

const StandardMember = function(name) {
    this.name = name;
    this.cost = '$20'; 
}

const SuperMember = function(name) {
    this.name = name;
    this.cost = '$500'; 
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Stormy','simple'));
members.push(factory.createMember('Forrest','super'));
members.push(factory.createMember('FuzzyToes','standard'));
members.push(factory.createMember('MooseNoes','super'));

// console.log(members); // returns the entire object

// iterate over the array
members.forEach(function(member) {
    member.define();
}); 