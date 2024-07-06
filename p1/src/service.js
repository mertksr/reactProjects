import axios from 'axios';
const getData = async (dataId) => {

    try{
        const {data:user} = await axios(`https://jsonplaceholder.typicode.com/users/${dataId}`);
        const {data:posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${dataId}`);
        console.log({user,posts});
    } catch(error){
        throw error;
    }

}
export default getData;