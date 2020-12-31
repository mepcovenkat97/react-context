import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';

class BookList extends Component {
   static contextType = ThemeContext
   render() { 

      const { isLightTheme, light, dark } = this.context;
      const theme = isLightTheme ? light : dark;

      return ( 
         <div className='book-list' style={{background:theme.bg, color:theme.syntax }}>
            <ul>
               <li style={{ background:theme.ui }}>Book 1</li>
               <li style={{ background:theme.ui }}>Book 2</li>
               <li style={{ background:theme.ui }}>Book 3</li>
            </ul>
         </div>
       );
   }
}
 
export default BookList;