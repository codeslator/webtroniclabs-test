import { ChangeEvent, SyntheticEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    });
  };

  return {
    form,
    initialState,
    handleChange,
  }
}

export default useForm;