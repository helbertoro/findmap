import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/TextSearch.sass';

const TextSearch = ({ text, href }) => <p className='texts'><Link to={href}>{text}</Link></p>;

export default TextSearch;
