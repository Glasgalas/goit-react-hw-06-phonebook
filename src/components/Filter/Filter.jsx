import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterContact } from '../../redux/contacts/actions';

import s from './Filter.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  };

  dispatch(filterContact(value));

  return (
    <label>
      <input
        className={s.search}
        placeholder="Введите имя для поиска"
        type="text"
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}
