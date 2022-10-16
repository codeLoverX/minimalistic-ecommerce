import {
  useLocation,
  useNavigate,
  useParams
} from "react-router-dom"

export const withRouterHOC = (Component) => (props) => {
    let location = useLocation()

    let navigate = useNavigate()
    
    let params = useParams()
    
    console.log("lets see")

    return (
      <Component
        {...props}
        router = {{ location, navigate, params }}
      />
    )
  }
