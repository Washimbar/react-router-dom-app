import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
  const naigate = useNavigate();
  return (
    <div>
        <h1>Contact</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis ipsam odio fugiat perspiciatis repellat, architecto explicabo doloremque beatae enim optio officia eaque in recusandae id reiciendis aperiam dolores porro impedit esse eum, veniam illo iusto asperiores. Consectetur cupiditate asperiores aliquid, vel, facilis tenetur at voluptatem corrupti porro aut iusto sit!</p>
        <button onClick={()=>{
          naigate('/');
        }}>Go to home page</button>
    </div>
  )
}

export default Contact