
import { createBrowserRouter } from 'react-router';
import Root from '../layout/Root';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import OfferDetail from '../pages/OfferDetails';
import Offers from '../pages/Offers';
import AppDetails from '../pages/AppDetails';
import Terms from '../pages/Terms';
import NagadFAQ from '../pages/NagadFaq';
import NagadFamily from '../component/NagadFamily';
import NagadSafty from '../component/NagadSafty';
import NagadGalary from '../component/NagadGalary';
import Login from '../component/Login';
import Register from '../component/Register';
import AuthStatus from '../component/AuthStatus';






const Routes = createBrowserRouter (
    [
        {
            path:"/",
            element:<Root></Root>,
            errorElement:<ErrorPage></ErrorPage>,
            children:[
                {
                    path:"/",
                    element:<HomePage></HomePage>
                },
                {
                    path:"/aboutus",
                    element:<AboutUs></AboutUs>
                },
                {
                    path:"/contact",
                    element:<Contact></Contact>
                },
                {
                    path:"/offer/:id",
                    element:<OfferDetail></OfferDetail>
                },
                {
                    path:"/offers",
                    element:<Offers></Offers>
                },
                {
                    path:"/appdetails",
                    element:<AppDetails></AppDetails>
                },
                
                {
                    path:"/terms",
                    element:<Terms></Terms>
                },
                
                {
                    path:"/nagadfaq",
                    element:<NagadFAQ></NagadFAQ>
                },
                {
                    path:"/nagadfamily",
                    element:<NagadFamily></NagadFamily>
                },
                {
                    path:"/nagadsafty",
                    element:<NagadSafty></NagadSafty>
                },
                
                {
                    path:"/nagadgalary",
                    element:<NagadGalary></NagadGalary>
                },
                {
                    path:"/login",
                    element:<Login></Login>
                },
                {
                    path:"/register",
                    element:<Register></Register>
                },
                {
                    path:"/authstatus",
                    element:<AuthStatus></AuthStatus>
                },
             
                
            ]
                
        }
    ]
)

export default Routes;