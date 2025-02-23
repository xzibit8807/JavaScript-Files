import SearchModule from "./mainModules/SearchForm";
import UserDefaultModule from "./mainModules/UserDefaultModule";

export default function MainModule() {
    return (
        <main class="main">
            <section class="card users-container">
                <SearchModule />

                <TableModule />

                <button class="btn-add btn">Add new user</button>

                <PaginationModule />
            </section>
        </main>
    );
}