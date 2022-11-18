import {Routes, Route} from "react-router-dom";
import Header from "../components/Header";
import Cards from "../components/Cards";
import UserDetails from "../components/Cards/UserDetails";
import Error from "../components/shared/error";

const Users = () => {
    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route path="/users" element={<Cards/>}/>
                <Route path="/users/:userId" element={<UserDetails/>}/>

            </Route>
            <Route path="*"   element={<Error/>} />
        </Routes>
    )
}

export default Users;