const user={id: 1, name:'gorib Amir', job:'actor'}
//javaScript object notation (JSON)
const stringify=JSON.stringify(user);
console.log(user);
console.log(stringify);


/**
 * !Different>>>>>>
 * { id: 1, name: 'gorib Amir', job: 'actor' }
{"id":1,"name":"gorib Amir","job":"actor"}
 */

const shop={
    owner:'Zidan',
    address:{
        street: 'Kochuket voot er goli',
        city: 'chittaging',
        country:'BD'
    },
    product:['laptop', 'microphone', 'monitor','keyboard'],
    revenue:45000,
    isopen: true,
    isnew: false,
}
console.log(shop);
const shopJson=JSON.stringify(shop);
console.log(shopJson);