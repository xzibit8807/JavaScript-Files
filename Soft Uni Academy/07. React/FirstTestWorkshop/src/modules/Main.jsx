import SearchModule from "./mainModules/SearchForm";
import { useNavigate } from "react-router-dom";

export default function MainModule() {
    const navigate = useNavigate();
    return (
        <main className="main">
            <section className="card users-container">
                <SearchModule />

                <TableModule />

                <button className="btn-add btn">Add new user</button>

                <PaginationModule />
            </section>
        </main>
    );
}