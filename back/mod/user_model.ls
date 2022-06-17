const redis = require('redis');
const bcrypt = require('bcrypt');
const bd = redis.createClient();


class User{
    
    constructor(obj){
        for(let key in obj){
            this[key] = obj[key];
        }
    }
    
    save(cb){
        if(this.id){
            this.update(cb);
        }
        else {
            bd.incr('user:ids', (err, id) => {
                if(err) return cb(err);
                this.id = id;
                this.hasPassword((err) => {
                   if(err) return cb(err);
                    this.update(cb);
                });
            });
        }
    }
    
    update(cb){
        const id = this.id;
        bd.set('user:id:${this.name}', id, (err) => {
           if(err) return cb(err);
            bd.hmset('user:${id}', this, (err) => {
               cb(err); 
            });
        });
    }
    
    hashPassword(cb){
        bcrypt.genSalt(12, (err, salt) => {
           if(err) return cb(err);
            this.salt = salt;
            bcrypt.hash(this.pass, salt, (err, hash) => {
               this.pass = hash;
                cb();
            });
        });
    }
}
//module.exports = User;


const Uuser = require('./mod/user_model');
const user = new _user({ name: 'Example', pass: 'test' });
user.save((err) => {
    if (err) console.error(err); 
    console.log('user id %d', user.id);
});
