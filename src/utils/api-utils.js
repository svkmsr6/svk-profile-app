const options = {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }
};
export async function getUserDetails(){
    const data = await (await fetch('/data/svk-info.json', options)).json();
    console.log(data);
    return data;
}