import { Link, useNavigate } from "react-router-dom"
import { Layouts } from "../layouts"
import { useEffect } from "react";

export function Welcome() {

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/home');
    }
  }, [navigate]);
  return (
    <Layouts>
      <div className="d-flex align-items-center" style={{ width:'100vh' }}>
      
      <div class="jumbotron" >
        <h1 class="display-4">Hello Musicers!!!</h1>
        <p className="lead">
        Welcome to the Song Data List Application^^ 
        </p>
        <hr class="my-7" />
        <p>
        Please login if you already have an account. If not, please register first.
        </p>

        <Link to="register" class="btn btn-primary btn-lg px-4 py-1 me-2">Register</Link>
        <Link to="login" class="btn btn-primary btn-lg px-4 py-1">Login</Link>
      </div>
      
      </div>
    </Layouts >
  )
} 