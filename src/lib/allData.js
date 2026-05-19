export const getData =async()=>{
    const res =await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas`);
    const idea =await res.json()
return idea
} 
export const gettendingData =async()=>{
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/tending`);
    const idea =await res.json()
return idea
} 

export const getDetails = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/ideas/${id}`);
  const result = await res.json();
  return result;
}; 


// My ideas (logged-in user)
export const getMyIdeas = async (email) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-ideas/${email}`);
  const data = await res.json();
  return data;
};



