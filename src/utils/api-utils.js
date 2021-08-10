const options = {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
};
export async function getUserDetails(){
    try{
        const data = await (await fetch('/data/svk-info.json', options)).json();
        return data;
    }catch(e){
        console.error('API call failed!');
    }
}