// import { useEffect , useState } from "react";

// import userService from "../services/userService";

import SearchModule from "./mainModules/SearchForm";
import TableModule from "./mainModules/TableModule";
import PaginationModule from "./mainModules/PaginationModule";
import { useState } from "react";
import CreateEditUser from "./userModules/CreateEditUserModule";
import userService from "../services/userService";

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

    const saveCreateUser = async (e) =>{
        e.preventDefault();
        const formDate = new FormData(e.target);
        const formValues = Object.values(formDate);

        const newUser = await userService.create(userDate);
        TableModule.setUsers(state => [...state, newUser]);

        showCreate(false);
    }

    return (
        <main className="main">
            <section className="card users-container">
                <SearchModule />
                {showCreate && (
                    <CreateEditUser 
                    onClose={closeAddUser}
                    onSave={saveCreateUser}
                    />)}

                <TableModule />

                <button className="btn-add btn" onClick={addUser}>Add new user</button>
                <PaginationModule />

                {/* <button className="btn-logout btn" onClick={() => navigate("/logout")}>Logout</button> */}
            </section>
        </main>
    );
}