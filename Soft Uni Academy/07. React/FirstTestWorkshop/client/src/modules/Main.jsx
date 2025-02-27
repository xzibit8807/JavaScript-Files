import SearchModule from "./mainModules/SearchForm";
// import { useNavigate } from "react-router-dom";
import TableModule from "./mainModules/TableModule";
import PaginationModule from "./mainModules/PaginationModule";

export default function MainModule() {
    // const navigate = useNavigate();
    return (
        <main className="main">
            <section className="card users-container">
                <SearchModule />

                <TableModule />

                <button className="btn-add btn">Add new user</button>
                <PaginationModule/>
                {/* <button className="btn-logout btn" onClick={() => navigate("/logout")}>Logout</button> */}
            </section>
        </main>
    );
}