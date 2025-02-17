import React, { FC, useState, useEffect } from 'react';
import type { ChangeEvent } from 'react';
import { Input } from 'antd';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

import { PATHNAME_LIST_SEARCH_PARAM_KEYWORD } from '@/constant';

interface PropsType {
  placeholder?: string;
}

const { Search } = Input;

const ListSearch: FC<PropsType> = props => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const { placeholder = '请输入关键字' } = props;
  const [value, setValue] = useState('');
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }
  function handleSearch(value: string) {
    nav({
      pathname: pathname,
      search: `?${PATHNAME_LIST_SEARCH_PARAM_KEYWORD}=${value}`,
    });
  }

  useEffect(() => {
    const keyParam = searchParams.get(PATHNAME_LIST_SEARCH_PARAM_KEYWORD) || '';
    setValue(keyParam);
  }, [searchParams]);
  return (
    <Search
      style={{ width: '260px' }}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
    ></Search>
  );
};
export default ListSearch;
