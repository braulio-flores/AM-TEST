import { useEffect, useState } from "react";
import { getCharacters } from '../helpers/getCharacters';
;


export const useFetchCharacters = ( category ) => {
  const [state, setstate] = useState({ data: [], loading: true });

  useEffect(()=>{
    getCharacters(category)
    .then((res)=>{
        setstate({ data: res, loading: false });
    })
  },[ category ]);

  return state;
};
