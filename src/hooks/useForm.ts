import { ChangeEvent, SyntheticEvent, useState } from 'react';

const useForm = <T extends Object>(initialState: T, onSubmit: () => void) => {
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    onSubmit();
  }

  return {
    form,
    initialState,
    handleChange,
    handleSubmit,
  }
}

export default useForm;