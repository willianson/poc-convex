import { Dispatch, SetStateAction } from 'react';

interface SearchProps {
  onChange: Dispatch<SetStateAction<string>>
}

function Search(props: SearchProps){
  return (
    <section className="search">
      <h2>Search</h2>

      {/* Form */}
      <input
        type="text"
        placeholder='Search for...'
        onChange={e => {
          props.onChange(e.target.value)
        }}
      />
      </section>
  );
}

export default Search;