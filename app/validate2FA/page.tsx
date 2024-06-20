import { cookies } from "next/headers";
import { HttpClient } from "../lib/Http/HttpClient";
import InputForm from "../lib/components/InputForm";

export const validate2FA = () => {

    const cookieStore = cookies();
    const token_2fa = cookieStore.get("token_2fa");

return(<>
    <InputForm token_2fa={String(token_2fa?.value)}></InputForm>
</>
)
}


export default validate2FA  