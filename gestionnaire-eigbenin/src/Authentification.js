import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";



export default function Authentification(){

        const [user, setUser] = React.useState({
          pseudo: '',
          email: '',
          password: '',
          confirmPassword: '',
          check: '',
          message: ''
        })

        function handleChange(e)
        {
            const {name, type, checked, value} = e.target;

            setUser(prev => {
              return {
                ...prev,
                [name]: type === 'checkbox' ? checked : value
              }
            })
        }


        async function handleSubmit(e)
        {
              e.preventDefault();

              if(user.pseudo != '' && user.email != '' && user.password != '' 
              && user.confirmPassword != '')
              {
                if(user.password === user.confirmPassword)
                {
                  await axios.post('htpp://localhost:8000/api/user/signup',{
                    pseudo: user.pseudo,
                    email: user.email,
                    password: user.password
                  })
                  .then(response => {

                        if(response.data)
                        {
                          console.log(response.data.message)
                          setUser(precedent => {
                            return{
                                ...precedent,
                                [precedent.pseudo]: '',
                                [precedent.email]: '',
                                [precedent.password]: '',
                                [precedent.confirmPassword]: '',
                                [precedent.check]: '',
                                [precedent.message]: 'User account create success!'
                            }
                          });
                        }
                  
                  } )
                }
                else
                {
                  setUser(precedent => {
                    return{
                        ...precedent,
                        [precedent.pseudo]: '',
                        [precedent.email]: '',
                        [precedent.password]: '',
                        [precedent.confirmPassword]: '',
                        [precedent.check]: '',
                        [precedent.message]: 'Veuillez reprendre le procédure SVP!'
                    }
                });
                }
              }
              
        }


        return(
          <section className="">
                  <main className="form-signin w-100 m-auto">
                    <form method="post" onSubmit={handleSubmit}>
                      <img className="mb-4" src="../images/eiglg.jpg" alt="" width="72" height="57"/>
                      <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                      {user.message != '' ? user.message : ''}

                      <div className="">
                        <input 
                            type="text" 
                            className="form-control" 
                            id="pseudoId" 
                            name="pseudo"
                            value={user.pseudo ?? ''}
                            placeholder="Pseudo"
                            onChange={handleChange}
                        />
                        <label htmlFor="pseudoId">Pseudo</label>
                      </div>

                      <div className="">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailId" 
                            name="email"
                            value={user.email ?? ''}
                            placeholder="Email"
                            onChange={handleChange}
                        />
                        <label htmlFor="emailId">Email address</label>
                      </div>
                      <div className="">
                        <input 
                          type="password" 
                          className="form-control" 
                          id="passwordId"
                          name="password"
                          value={user.password ?? ''}
                          placeholder="Password"
                          onChange={handleChange}
                        />
                        <label htmlFor="passwordId">Password</label>
                      </div>

                      <div className="">
                        <input 
                            type="password"
                            className="form-control" 
                            id="confirmPasswordId" 
                            name="confirmPassword"
                            value={user.confirmPassword ?? ''}
                            placeholder="Confirm Password"
                            onChange={handleChange}
                        />
                        <label htmlFor="confirmPasswordId">Confirm Password</label>
                      </div>

                      <div className="checkbox mb-3">
                        <label>
                          <input 
                              type="checkbox" 
                              name="check"
                              value={user.check ?? ''}
                              onChange={handleChange}
                          /> 
                          Remember me
                        </label>
                      </div>
                      <button 
                          className="w-100 btn btn-lg btn-primary" 
                          type="submit"
                      >
                        Sign in
                      </button>
                      <p className="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
                    </form>
                  </main>
          </section>
        );

}



// <section className="">
// <main class="form-signin w-100 m-auto padding">
//   <form>
//     <img class="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"/>
//     <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

//     <div class="form-floating">
//       <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
//       <label for="floatingInput">Email address</label>
//     </div>
//     <div class="form-floating">
//       <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
//       <label for="floatingPassword">Password</label>
//     </div>

//     <div class="checkbox mb-3">
//       <label>
//         <input type="checkbox" value="remember-me"/> Remember me
//       </label>
//     </div>
//     <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
//     <p class="mt-5 mb-3 text-muted">&copy; 2017–2022</p>
//   </form>
// </main>
// </section>