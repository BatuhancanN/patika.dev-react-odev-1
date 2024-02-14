import axios from 'axios';

export default async (userID) => {

    const {data: user} = await axios("https://jsonplaceholder.typicode.com/users/" + userID);

    const {data: post} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + userID);


    console.log(user);
    console.log(post);
}