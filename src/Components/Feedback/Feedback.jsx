// import axios from "axios";
// import Swal from "sweetalert2";
// import useAllClasses from "../../hooks/useAllClasses";


// const Feedback = ({s}) => {
//     const {_id}=s;
//     const [classes,refetch]=useAllClasses();
//     classes.map(cla=>console.log(cla._id))





//     // const handleFeedback = (feedID) => {
//     //     axios.put()

//     // }
//     // const handleForm = (event) => {
//     //     event.preventDefault()
//     //     const form = event.target;
//     //     const feedback = form.feedback.value;
//     //     console.log(feedback);
//     //     fetch(`  https://academy-sports-abdullahalmamun2001.vercel.app/class/approve/${}`, {
//     //           method: "PATCH",
//     //           headers: {
//     //             "content-type": "application/json"
//     //           },
//     //           body: JSON.stringify(feedbackUpdate)
//     //         })
//     //           .then(res => res.json())
//     //           .then(data => {
//     //             console.log(data)
                
//     //           })
          
//         // const handleFeedbackUpdate = (id) => {
//         //     const feedbackUpdate={feedback:feedback}
            
            
//         //     fetch(`  https://academy-sports-abdullahalmamun2001.vercel.app/class/approve/${id}`, {
//         //       method: "PATCH",
//         //       headers: {
//         //         "content-type": "application/json"
//         //       },
//         //       body: JSON.stringify(feedbackUpdate)
//         //     })
//         //       .then(res => res.json())
//         //       .then(data => {
//         //         console.log(data)
                
//         //       })
//         //   }
//         Swal.fire({
//             title: 'Do you want to save the changes?',
//             showDenyButton: true,
//             showCancelButton: true,
//             confirmButtonText: 'Save',
//             denyButtonText: `Don't save`,
//         }).then((result) => {
//             /* Read more about isConfirmed, isDenied below */
//             if (result.isConfirmed) {
//                 axios.put(`  https://academy-sports-abdullahalmamun2001.vercel.app/class/${feedID}`,{feedback:feedback})

//                 Swal.fire('Saved!', '', 'success')
//             } else if (result.isDenied) {
//                 Swal.fire('Changes are not saved', '', 'info')
//             }
//         })
//     }

//     return (
//         <div>
//             <form onSubmit={handleForm}>
//                 <input name="feedback" type="text" /> <br />
//                 <button>Add button</button>
//             </form>
//         </div>
//     );
// };

// export default Feedback;