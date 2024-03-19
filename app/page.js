
import LoginForm from "@/components/LoginForm/page";


const Login = () => {

  return (
    <>
      <div className="container-scroller">
     <div className="container-fluid page-body-wrapper full-page-wrapper">
       <div className="content-wrapper flex align-items-center  auth px-0">
         <div className="row w-100 mx-0">
           <div className="col-lg-4 mx-auto">
             <div className="auth-form-light text-left py-5 px-4 px-sm-5 shadow-md">
               <div className="brand-logo text-3xl text-[#27367f] mr-5 font-semibold">
                 {/* <img src="../../images/logo.svg" alt="logo"/> */}
                 Topic-admin
               </div>
               {/* <h4>Hello! let's get started</h4> */}
               <h6 className="font-weight-light">Log in to continue.</h6>
                <LoginForm/>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
    </>
   )
}

export default Login