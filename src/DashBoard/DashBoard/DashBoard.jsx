import { Link, Outlet } from 'react-router-dom'
import useAdminSecure from '../../hooks/useAdminSecure';
// import useManageUser from '../../hooks/useManageUser';
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';

// import { Outlet } from "react-router-dom";

const DashBoard = () => {
  const [isAdmin]=useAdminSecure();
  console.log(isAdmin);




  // const [users]=useManageUser();
  // const role=users.map(i=>console.log(i.role));
  // const admin=users.filter(i=>i.role=="admin")
  // const instructor=users.filter(i=>i.role=="instructor")
  // const {user}=useContext(AuthContext)
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side fixed">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li><Link to={'/dashboard/user'}>Manage User</Link></li>
            
            <li><Link to={'/dashboard/addClass'}>Add Class</Link></li>
            <li><Link to={'/dashboard/instructorClass'}>Instructor Class</Link></li>
            <li><Link to={'/dashboard/feedback'}>FeedBack</Link></li>
            <li><Link to={'/dashboard/allClass'}>All Class</Link></li>
            <li><Link to={'/dashboard/payment'}>Payment</Link></li>
            <li><Link to={'/'}>Home</Link></li>
          </ul>

        </div>
      </div>
    </>
  );
};

export default DashBoard;



// const DashBoard = () => {
//   return (
//     <div>
//       <div className="drawer lg:drawer-open">
//         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//         <div className="drawer-content flex flex-col items-center justify-center">
//           {/* Page content here */}
//           <Outlet></Outlet>
//           <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//         </div>
//         <div className="drawer-side">
//           <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
//           <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
//             {/* Sidebar content here */}
//             <li><Link to={'/addClass'}>Add class</Link></li>
//             <li><a>Sidebar Item 2</a></li>
//           </ul>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashBoard;