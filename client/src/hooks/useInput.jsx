import { useState } from 'react';

export default function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { name, value } = e.currentTarget;
    setForm((form) => ({ ...form, [name]: value }));
  };

  return [form, onChange];
}
