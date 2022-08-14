import { ChangeEvent, useState } from "react";

interface FormField {
  [x: string]: any;
}



const useForm = (initialState: FormField, onSubmit: () => void) => {
  const [formValues, setFormValues] = useState<FormField>(initialState);

  const handleChangle = (event: ChangeEvent) => {
    
  }
  
  return {

  }
};

export default useForm;