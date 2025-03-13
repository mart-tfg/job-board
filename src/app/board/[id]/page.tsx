// type UserDetail = {
//     id: number;
//     name: string;
//     email: string;
//     age: number;
//     address: string;
//   };
  
//   async function getUserDetail(id: string): Promise<UserDetail | null> {
//     const res = await fetch(`http://localhost:3000/api/user/${id}`);
  
//     if (!res.ok) return null;
  
//     return res.json();
//   }
  
//   export default async function UserDetail({ params }: { params: { id: string } }) {
//     const user = await getUserDetail(params.id);
  
//     if (!user) {
//       return <h1>User not found</h1>;
//     }
  
//     return (
//       <div>
//         <h1>{user.name}</h1>
//         <p>Email: {user.email}</p>
//         <p>Age: {user.age}</p>
//         <p>Address: {user.address}</p>
//       </div>
//     );
//   }
  