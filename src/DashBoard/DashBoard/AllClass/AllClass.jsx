import { useQuery } from "@tanstack/react-query";


const AllClass = () => {
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await fetch('http://localhost:5000/class')
    return res.json();
  })





  const handleApproveButton = (id) => {
    const status = 'approve';
    const update = { status: status }
    fetch(`http://localhost:5000/class/approve/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refetch();
      })
  }
  const handleDenyButton = (id) => {
    const status = 'denied';
    const update = { status: status }
    fetch(`http://localhost:5000/class/denied/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        refetch();
      })
  }
  // const handleFeedbackButton = (id) => {
  //   const form=event.target;

  //   const update = { status: status }
  //   fetch(`http://localhost:5000/class/feedback/${id}`, {
  //     method: "PATCH",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(update)
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       refetch();
  //     })
  // }
  return (
    <div className="grid md:grid-cols-2">
      {
        classes.map(s => <div key={s._id} className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={s.image} alt="Shoes" /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {s.name ? s.name : "Don't find Name"}

            </h2>
            <p>Price : {s.price}</p>
            <div>
              {
                s.status == "approve" ? <button disabled className="btn btn-secondary">Approve</button> : <button onClick={() => handleApproveButton(s._id)} className="btn btn-secondary">Approve</button>
              }

            </div>
            <div>
              {
                s.status == "denied" ? <button disabled className="btn btn-secondary">Deny</button> : <button onClick={() => { handleDenyButton(s._id) }} className="btn btn-secondary">Deny</button>
              }

            </div>
            <div>
              <label htmlFor="my_modal_7" className="btn btn-xs bg-orange-400"> Send feedback</label>

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal">
                <form className="modal-box">
                  <h3 className="text-lg font-bold">Send FeedBack</h3>
                  <textarea name='feedback' placeholder="Write you " className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
                  <input type="submit" className='block px-5 py-3  bg-green-800 text-white rounded-md hover:bg-green-600' />
                </form>
                <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
              </div>

            </div>
            </div>
          </div>)
      }
        </div>
        );
};

      export default AllClass;