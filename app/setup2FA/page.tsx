import { cookies, headers } from "next/headers"
import Link from "next/link";

export const setup2FA = () => {
    const cookieStore = cookies();
    const setupSecretKey = cookieStore.get("setup_secret_key");
    console.log(setupSecretKey?.value);

return(<>

<div style={{margin: 'auto',padding:'10px'}}> 
<h2> Hola, por favor ingresa el siguiente valor en tu Google Authenticator</h2>
<strong> {setupSecretKey?.value}</strong>
<br></br>
<Link href="/validate2FA"> Click aquí para continuar </Link>

</div>

</>

)

}

export default setup2FA