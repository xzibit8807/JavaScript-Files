// import { useEffect , useState } from "react";

// import userService from "../services/userService";

import SearchModule from "./mainModules/SearchForm";
import TableModule from "./mainModules/TableModule";
import PaginationModule from "./mainModules/PaginationModule";
import { useState } from "react";
import CreateEditUser from "./userModules/CreateEditUserModule";

export default function MainModule() {

    const addUser = () =>{
        // userService.addUser();
        // console.log("Add user");
        setShowCreate(true);
    }
    const closeAddUser = () =>{
        setShowCreate(false);
    }

    const [showCreate, setShowCreate] = useState(false); 

    return (
        <main className="main">
            <section className="card users-container">
                <SearchModule />
                {showCreate && <CreateEditUser onClose={closeAddUser}/>}

                <TableModule />

                <button className="btn-add btn" onClick={addUser}>Add new user</button>
                <PaginationModule />

                {/* <button className="btn-logout btn" onClick={() => navigate("/logout")}>Logout</button> */}
            </section>
        </main>
    );
}