import { useDispatch } from 'react-redux';
import css from './Filter.module.css';
import { onFilterAction } from '../../redux/filter.slice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <h3 className={css.searchTitle}>Find contacts by name</h3>
      <input
        className={css.searchField}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={event => {
          dispatch(onFilterAction(event.target.value));
        }}
      />
    </>
  );
};
