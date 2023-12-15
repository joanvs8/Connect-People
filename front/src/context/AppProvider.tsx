import { createContext, useState } from 'react';
import { useForm, UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';

export type handlersType = {
  register: UseFormRegister<FieldValues>,
  errors: FieldErrors<FieldValues>,
}

// export AppContext => create context
const AppContext = createContext({});
const Provider = AppContext.Provider;

function AppProvider ({ children } : any) {
  const { handleSubmit, register, formState: { errors } } = useForm();
  const handlers: handlersType = { register, errors };
  // Oscar--> create state of user and send it via context to all the app
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('user')) || '');

  function userSetter (user: object, token: string) {
    // N: check if user and token exist and then add data to localStorage if not user = null
    const userLS = token && user ? { ...user, token } : null;
    localStorage.setItem('user', JSON.stringify(userLS));
    setUser(userLS);
  }
  function userLogOut () {
    setUser(null);
    localStorage.removeItem('user');
  }

  return (
    <Provider value={{ handlers, handleSubmit, user, userSetter, userLogOut }}>
      { children }
    </Provider>
  );
}

export default AppProvider;
export { AppContext };
