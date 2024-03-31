import { useEffect, useState } from "react";
import Member from "./Member";

const Memberships = () => {
    const [members,setMembers] =useState([])

    useEffect(() =>{
        fetch('gym.json')
        .then(res => res.json())
        .then(data => setMembers(data.memberships))
    },[])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                members.map(member=><Member member={member}></Member>)
            }
            </div>
        </div>
    );
};

export default Memberships;