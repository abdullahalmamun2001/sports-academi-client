import axios from "axios";
import Swal from "sweetalert2";


const Feedback = () => {
    // const handleFeedback = (feedID) => {
    //     axios.put()

    // }
    const handleForm = (event) => {
        event.preventDefault()
        const form = event.target;
        const feedback = form.feedback.value;
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                axios.put(`http://localhost:5000/class/${feedID}`,{feedback:feedback})

                Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes are not saved', '', 'info')
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleForm}>
                <input name="feedback" type="text" /> <br />
                <button>Add button</button>
            </form>
        </div>
    );
};

export default Feedback;