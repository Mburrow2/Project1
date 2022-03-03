const {DateTime} = require("luxon");
const {v4: uuidv4} = require('uuid');
const connections = [
{

    id: '1',
    topic: 'Nike',
    title: 'Nike and Its Brand',
    content: 'I have a love for Nike and would love for others to come out and talk and connect about the shoe brand as whole. Appreciate it!',
    location: 'Commons area in SouthPark',
    author: 'NikeAddict',
    endtime: '5 hours',
    imageurl: 'https://tse3.mm.bing.net/th?id=OIP.U_xKAU-JAshSWAgy5-mmQQHaFL&pid=Api&P=0&w=287&h=201',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: '2',
    topic: 'Adidas',
    title: 'Adidas Winning it All',
    content: 'Adidas is the only great brand anymore in the shoe industry, lets talk about it!',
    location: 'Atkins Library',
    author: 'Adid2Cool',
    endtime: 'Whenever',
    imageurl: 'https://tse1.mm.bing.net/th?id=OIP.bVVDO5F1WIlXWaiwbPcr_gHaFA&pid=Api&P=0&w=244&h=165',
    createdAt: DateTime.local(2020, 1, 11, 17, 0).toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: '3',
    topic: 'Jordans',
    title: 'Air Jordans Branding',
    content: 'Michael Jordan has created a historical brand not only for shoes but life, lets discuss.',
    location: 'Woodward Hall',
    author: 'JordanFanBoy22',
    endtime: '45 minutes',
    imageurl: 'https://tse1.mm.bing.net/th?id=OIP.gI7vFXHVFpkTqO2UtwH0pAHaEK&pid=Api&P=0&w=294&h=165',
    createdAt: DateTime.local(2021, 2, 22, 22, 0).toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: '4',
    topic: 'High Tops',
    title: 'High Tops all the WAY',
    content: 'High Tops are the shoe of the future....they can be worn anywhere at anytime. Am I lying?',
    location: 'Bojangles Colosseum',
    author: 'MattsHighTops',
    endtime: '1 hour',
    imageurl: 'https://tse4.mm.bing.net/th?id=OIP.9MdlnBJq-tAB7_ffb6l23wHaHa&pid=Api&P=0&w=158&h=158',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: '5',
    topic: 'Sneakers',
    title: 'Sneakers and its Convenience',
    content: 'I love sneakers because they can be worn for almost anything....prove me wrong!',
    location: 'Charlotte Ampitheater',
    author: 'SneakerHead99',
    endtime: '20 minutes',
    imageurl: 'https://tse2.mm.bing.net/th?id=OIP.slDe6x3OQ4zgHyqRDYJD5wHaHa&pid=Api&P=0&w=160&h=160',
    createdAt: DateTime.local(2022, 6, 1, 10, 0).toLocaleString(DateTime.DATETIME_SHORT)
},
{
    id: '6',
    topic: 'Dress Shoes',
    title: 'Dress Shoes......with Style',
    content: 'Who doesnt love to dress in style, lets enjoy it more!',
    location: 'Uptown Charlotte',
    author: 'DressForStyle007',
    endtime: '2 hours',
    imageurl: 'https://tse1.mm.bing.net/th?id=OIP.lEp6yMJGxioXOvZRRtdmoAHaHa&pid=Api&P=0&w=158&h=158',
    createdAt: DateTime.now().toLocaleString(DateTime.DATETIME_SHORT)
}
];


//add into the forms for  IMAGEURL




exports.find = ()=> connections;

exports.findById = id => connections.find(connection=>connection.id === id);

exports.save = function (connection){
    connection.id = uuidv4();
    connection.createdAt =  DateTime.now().toLocaleString(DateTime.DATETIME_SHORT);
    connections.push(connection);
}; 

exports.updateById = function(id, newConnection){
    let connection = connections.find(connection=>connection.id === id);
    if(connection){
        connection.author = newConnection.author;
        connection.topic = newConnection.topic;
        connection.title = newConnection.title;
        connection.content = newConnection.content;
        connection.location = newConnection.location;
        connection.endtime = newConnection.endtime;

        return true;
    }else{
        return false;
    }
    
}


exports.deleteById = function(id){
    let index = connections.findIndex(connection => connection.id === id);

    if(index !== -1){
        connections.splice(index, 1);
        return true;
    }else{
        return false;
    }
}
