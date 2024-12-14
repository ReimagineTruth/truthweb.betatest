import { useState, ChangeEvent } from 'react';

export const useForm = <T extends Record<string, any>>(initialState: T) => {
  const [values, setValues] = useState<T>(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const reset = () => {
    setValues(initialState);
  };

  return {
    values,
    handleChange,
    reset,
    setValues,
  };
};