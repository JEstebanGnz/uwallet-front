import DialogPage from '@/app/lib/components/DialogPage';
import InputForm from '@/app/lib/components/InputForm';
import { cookies } from 'next/headers';
import { GeneralLayout } from '../layout/GeneralLayout';

export const validate2FA = () => {
  const cookieStore = cookies();
  const token_2fa = cookieStore.get('token_2fa');
  // String(token_2fa?.value)

  return (
    <>
      <GeneralLayout title="Ingresa el código de 6 dígitos mostrado en tu Google Authenticator">
        <InputForm token_2fa={'fkekfekfgthrtht'}></InputForm>
        
        <DialogPage/>
      </GeneralLayout>
    </>
  );
};

export default validate2FA;
