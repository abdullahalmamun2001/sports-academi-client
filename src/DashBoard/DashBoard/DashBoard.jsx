import { Link, Outlet } from 'react-router-dom'
import useAdminSecure from '../../hooks/useAdminSecure';
import useInstructorSecure from '../../hooks/useInstructorSecure';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
// import useManageUser from '../../hooks/useManageUser';
// import { useContext } from 'react';
// import { AuthContext } from '../../Provider/AuthProvider';

// import { Outlet } from "react-router-dom";

const DashBoard = () => {
  const [isAdmin, isAdminLoading] = useAdminSecure();
  const [isInstructor, isInstructorLoading] = useInstructorSecure();
  const {user}=useContext(AuthContext)

  const student = isAdmin || isInstructor;
  console.log(isAdmin,isInstructor,student);
  if (isAdminLoading) {
    return <span className="loading loading-bars loading-md"></span>
  }
  if (isInstructorLoading) {
    return <span className="loading loading-bars loading-md"></span>
  }

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
            {

              isAdmin && <>
                <p className='text-red-100 text-3xl'>This is Admin dashboard</p>
                <li><Link to={'/dashboard/user'}>Manage User</Link></li>
                <li><Link to={'/dashboard/allClass'}>All Class</Link></li>
              </>

            }
            {
              isInstructor && <>
                <li><Link to={'/dashboard/addClass'}>Add Class</Link></li>
                <li><Link to={'/dashboard/instructorClass'}>Instructor Class</Link></li>
              </>
            }
            {
              student || user &&<>
                
                <li><Link to={'/dashboard/myclasses'}>Selected Class</Link></li>
                <li><Link to={'/dashboard/payhistory'}>Payment Hostory</Link></li>
                <li><Link to={'/'}>Home</Link></li>
              </>
            }
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