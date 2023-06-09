import { useQuery } from "@tanstack/react-query";


const AllClass = () => {
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/class')
        return res.json();
    })
    return (
        <div className="grid md:grid-cols-2">
            {
                classes.map(s=><div key={s._id} className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={s.image} alt="Shoes" /></figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {s.name?s.name:"Don't find Name"}
                    
                  </h2>
                  <p>Price : {s.price}</p>
                  
                </div>
              </div>)
            }
        </div>
    );
};

export default AllClass;