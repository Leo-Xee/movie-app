import { useState } from 'react';

export default function useInput(initialForm) {
  const [form, setForm] = useState(initialForm);

  const onChange = (e) => {
    const { id, value } = e.target;
    setForm((form) => ({ ...form, [id]: value }));
  };
  console.log(form);

  return [form, onChange];
}
