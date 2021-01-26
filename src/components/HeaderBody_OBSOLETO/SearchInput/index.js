import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdSearch } from 'react-icons/md';
import { AiOutlineLoading } from 'react-icons/ai';
import * as Yup from 'yup';
// import { Form } from '@unform/web';
import { useField } from '@unform/core';

// import Input from '~/components/Form/Input';

// import { Form, SearchIcon, Input } from './styles';
import { Form, SearchIcon, Error, Input } from './styles';

const schema = Yup.object().shape({
  search: Yup.string().required('Preencha o campo'),
});

function SearchInput({ name, placeholder = '', callback, ...rest }) {
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    console.tron.log('estou aqui');
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const [searching, setSearching] = useState(false);

  async function handleSubmit({ search }) {
    try {
      await schema.validate({ search });

      setSearching(true);

      await callback(search);

      setSearching(false);
    } catch (err) {
      //  ### error snippet ###
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};
        err.inner.forEach(errorSearch => {
          errorMessages[errorSearch.path] = errorSearch.message;
        });
        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    // <Form schema={schema} onSubmit={handleSubmit}>
    <Form onSubmit={handleSubmit} ref={formRef}>
      <SearchIcon searching={searching ? searching.toString() : undefined}>
        {searching ? <AiOutlineLoading /> : <MdSearch />}
      </SearchIcon>
      <Input
        ref={inputRef}
        type="text"
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      {error && <Error>{error}</Error>}
    </Form>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default SearchInput;
