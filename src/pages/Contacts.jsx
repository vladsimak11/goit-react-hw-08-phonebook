import { ContactList } from '../components/ContactList/ContactList';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { Filter } from '../components/Filter/Filter';
import { fetchContacts } from "../redux/contacts/operations";

import {  getIsLoading } from "../redux/contacts/selectors";
import css from './Contacts.module.css';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import {ThreeDots} from '../Loader/Loader';

export default function Contacts() {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);  

  useEffect(() => { 
    dispatch(fetchContacts()); 
  }, [dispatch]);

  return (
    <div       
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
        paddingTop: '80px',
      }}>
      <Helmet>
        <title>Your contacts</title>
      </Helmet>
        <div className={css.mainBlock}>
          <h1>Phonebook</h1>
          <ContactForm />
          <div>{isLoading && <ThreeDots />}</div>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
    </div>
  );
}