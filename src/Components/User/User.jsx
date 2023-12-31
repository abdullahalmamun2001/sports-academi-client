// import { useQuery } from "@tanstack/react-query";
import useManageUser from "../../hooks/useManageUser";
// import {  useEffect, useState } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";


const User = () => {
  const [users,refetch]=useManageUser()
  // const { data: users = [], refetch } = useQuery(['users'], async () => {
  //   const res = await fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/user')
  //   return res.json();
  // })
  // queryKey: ['user'],
  // queryFn: () =>fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/user')
  //   .then((res) => res.json(),
  //   ),
  // })
  // const { user } = useContext(AuthContext)
  // const [users, setUsers] = useState([])
  // useEffect(() => {
  //   fetch('  https://academy-sports-abdullahalmamun2001.vercel.app/user')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       setUsers(data)
  //     })
  // }, [])
  const handleMakeAdmin = (id) => {
    fetch(`  https://academy-sports-abdullahalmamun2001.vercel.app/user/${id}`, {
      method: "PATCH",
    })
      .then(result => {
        console.log(result)
        refetch();
      })
      .catch(error => { console.log(error); })
  }
  const handleMakeInstructor = (id) => {
    fetch(`  https://academy-sports-abdullahalmamun2001.vercel.app/user/admin/${id}`, {
      method: "PATCH",
    })
      .then(result => {
        console.log(result)
        refetch();
      })
      .catch(error => { console.log(error); })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name & picture</th>
              <th>email</th>
              <th>Role</th>
              <th>Title</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user,index) => <tr key={user._id} className="bg-base-200">
                <td>{index+1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photo} alt='' />
                      </div>
                    </div>
                    <div>
                      <p>{user.name}</p>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  {
                    user.role == "admin" ? <button disabled className="btn btn-primary">Admin</button> : <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-primary">Admin</button>
                  }
                </td>
                <td>
                  {
                    user.role == "instructor" ? <button disabled className="btn btn-primary">Instructor</button> : <button onClick={() => handleMakeInstructor(user._id)} className="btn btn-primary">Instructor</button>
                  }
                </td>
                {/* <td><button className="btn btn-primary">Student</button></td> */}

              </tr>)
            }


          </tbody>
        </table>
      </div>
    </div>
  );
};

export default User;