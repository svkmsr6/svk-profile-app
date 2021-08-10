export async function getUserDetails(){
    const data = await (await fetch('../data/svk-info.json')).json();
    return data;
}