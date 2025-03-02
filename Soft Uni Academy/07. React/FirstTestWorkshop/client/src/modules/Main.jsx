// import { useEffect , useState } from "react";

// import userService from "../services/userService";

import SearchModule from "./mainModules/SearchForm";
import TableModule from "./mainModules/TableModule";
import PaginationModule from "./mainModules/PaginationModule";

export default function MainModule() {
    // const [users, setUsers] = useState([]);

    // useEffect(() => { 
    //     userService.getAll().then(result =>{
    //         setUsers(result);
    //     })
    // }, []);

    return (
        <main className="main">
            <section className="card users-container">
                <SearchModule />

                <TableModule />

                <button className="btn-add btn">Add new user</button>
                <PaginationModule />

                {/* <button className="btn-logout btn" onClick={() => navigate("/logout")}>Logout</button> */}
            </section>
        </main>
    );
}