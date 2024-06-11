 export const getUser=async ()=>{
   const data=await  fetch("https://jsonplaceholder.typicode.com/users ",{
    method:"GET",
   })

   return await data.json();
}



//  export const getUser = async () => {
//   try {
//     const imageResponse = await axios.get('https://api.dicebear.com/8.x/avataaars/svg');
//     const infoResponse = await axios.get('https://jsonplaceholder.typicode.com/users');

//     const combinedData = imageResponse.data.map((imageItem, index) => ({
//       ...imageItem,
//       ...infoResponse.data[index],
//     }));
//   } catch (error) {
//     setError(error);
//   }}
